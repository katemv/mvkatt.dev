export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || "";

export const pageview = (url: string) => {
    if (typeof window !== "undefined" && window.gtag && process.env.NODE_ENV === "production") {
        window.gtag("config", GA_TRACKING_ID, {
            page_path: url,
        });
    }
};

export const event = (
    action: string,
    {
        event_category,
        event_label,
        value,
        ...otherParams
    }: {
    event_category?: string
    event_label?: string
    value?: number
  } = {}
) => {
    if (typeof window !== "undefined" && window.gtag && process.env.NODE_ENV === "production") {
        window.gtag("event", action, {
            event_category,
            event_label,
            value,
            ...otherParams,
        });
    }
};

export const trackDownloadCV = () => {
    event("download_cv", {
        event_category: "engagement",
        event_label: "CV Download",
    });
};

export const trackSocialClick = (platform: string) => {
    event("social_click", {
        event_category: "social",
        event_label: platform,
    });
};

export const trackFormSubmit = (formType: string) => {
    event("form_submit", {
        event_category: "form",
        event_label: formType,
    });
};

export const trackWorkExperienceExpand = (company: string) => {
    event("work_experience_expand", {
        event_category: "engagement",
        event_label: company,
    });
};

export const trackEmailClick = () => {
    event("email_click", {
        event_category: "engagement",
        event_label: "Email Address",
    });
};

declare global {
  interface Window {
    gtag: (
      command: "config" | "event",
      targetId: string,
      // eslint-disable-next-line
      config?: Record<string, any>
    ) => void
  }
} 