import { NextResponse } from "next/server";
import { google } from "googleapis";
import path from "path";
import fs from "fs";

const SCOPES = ["https://www.googleapis.com/auth/drive.readonly"];

export async function GET() {
    try {
        // Your Google Drive file ID for the CV
        const fileId = process.env.GOOGLE_DRIVE_CV_FILE_ID;
    
        if (!fileId) {
            return NextResponse.json(
                { error: "CV file ID not configured" },
                { status: 500 }
            );
        }

        const credentialsPath = path.join(process.cwd(), "credentials.json");
        if (!fs.existsSync(credentialsPath)) {
            return NextResponse.json(
                { error: "Google credentials file not found" },
                { status: 500 }
            );
        }

        const auth = new google.auth.GoogleAuth({
            keyFile: path.join(process.cwd(), "credentials.json"),
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