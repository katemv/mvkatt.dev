"use client";

import { useEffect, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { pageview, GA_TRACKING_ID } from "@/lib/gtag";
import Script from "next/script";

function GoogleAnalyticsInner() {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        if (!GA_TRACKING_ID || process.env.NODE_ENV !== "production") return;

        const url = pathname + searchParams.toString();
        pageview(url);
    }, [pathname, searchParams]);

    if (!GA_TRACKING_ID || process.env.NODE_ENV !== "production") {
        return null;
    }

    return (
        <>
            <Script
                strategy="afterInteractive"
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
            />
            <Script
                id="gtag-init"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${GA_TRACKING_ID}', {
                    page_path: window.location.pathname,
                    });
                `,
                }}
            />
        </>
    );
}

export default function GoogleAnalyticsWrapper() {
    return (
        <Suspense>
            <GoogleAnalyticsInner />
        </Suspense>
    );
}