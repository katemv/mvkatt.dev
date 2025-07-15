import { NextResponse } from "next/server";
import { google } from "googleapis";

const SCOPES = ["https://www.googleapis.com/auth/drive.readonly"];

function decodePrivateKey(privateKey: string): string {
    let key = privateKey.trim().replace(/^["']|["']$/g, "");
    
    try {
        key = Buffer.from(key, "base64").toString("utf8");
    } catch (error) {
        console.error("Failed to decode base64 private key:", error);
        throw new Error("Invalid base64 private key");
    }
    
    key = key.replace(/\\n/g, "\n");
    
    if (!key.includes("-----BEGIN PRIVATE KEY-----")) {
        throw new Error("Private key missing BEGIN marker");
    }
    if (!key.includes("-----END PRIVATE KEY-----")) {
        throw new Error("Private key missing END marker");
    }
    
    return key;
}

export async function GET() {
    try {
        const fileId = process.env.GOOGLE_DRIVE_CV_FILE_ID;
        const projectId = process.env.GOOGLE_PROJECT_ID;
        const privateKeyId = process.env.GOOGLE_PRIVATE_KEY_ID;
        const privateKey = process.env.GOOGLE_PRIVATE_KEY_BASE_64;
        const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;
        const clientId = process.env.GOOGLE_CLIENT_ID;
    
        if (!fileId) {
            return NextResponse.json(
                { error: "CV file ID not configured" },
                { status: 500 }
            );
        }

        if (!projectId || !privateKeyId || !privateKey || !clientEmail || !clientId) {
            return NextResponse.json(
                { error: "Google credentials not properly configured" },
                { status: 500 }
            );
        }

        const auth = new google.auth.GoogleAuth({
            credentials: {
                type: "service_account",
                project_id: projectId,
                private_key_id: privateKeyId,
                private_key: decodePrivateKey(privateKey),
                client_email: clientEmail,
                client_id: clientId
            },
            scopes: SCOPES,
        });

        const drive = google.drive({ version: "v3", auth });

        const pdfBuffer = await drive.files.export(
            {
                fileId,
                mimeType: "application/pdf"
            },
            { responseType: "arraybuffer" }
        );

        return new NextResponse(pdfBuffer.data as ArrayBuffer, {
            headers: {
                "Content-Type": "application/pdf",
                "Content-Disposition": "attachment; filename=\"KaterynaKhremuchkova.pdf\"",
            },
        });
    } catch (error) {
        console.error("Error downloading CV:", error);
        return NextResponse.json(
            { error: "Failed to download CV" },
            { status: 500 }
        );
    }
} 