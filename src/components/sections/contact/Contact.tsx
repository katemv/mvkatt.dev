"use client";

import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { trackFormSubmit, trackEmailClick } from "@/lib/gtag";
import { Github, Linkedin, Send } from "lucide-react";
import { cn } from "@/utils/tailwind";
import { z } from "zod";
import { toast } from "sonner";

import { AnchorHeading } from "@/components/common/AnchorHeading";
import { Input } from "@/components/sections/contact/Input";
import { ExternalLink } from "@/components/common/ExternalLink";
import { SOCIAL_LINKS } from "@/lib/constants";

export const contactFormSchema = z.object({
    name: z
        .string()
        .min(1, "Please enter your name"),
    email: z
        .string()
        .min(1, "Please enter your email")
        .email("Please enter a valid email address"),
    message: z
        .string()
        .min(1, "Please enter your message"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>

export const Contact = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const form = useForm<ContactFormData>({
        resolver: zodResolver(contactFormSchema),
        defaultValues: {
            name: "",
            email: "",
            message: ""
        },
        mode: "onSubmit",
        reValidateMode: "onChange"
    });

    const copyEmailToClipboard = async () => {
        try {
            await navigator.clipboard.writeText("kateryna.khremuchkova@gmail.com");
            toast.success("Email copied to clipboard!");
            trackEmailClick();
        } catch (error) {
            console.error("Failed to copy email:", error);
            toast.error("Failed to copy email. Please try again.");
        }
    };

    const onSubmit = async (data: ContactFormData) => {
        setIsSubmitting(true);

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                trackFormSubmit("contact");
                toast.success("Message sent successfully! I'll get back to you soon.");
                form.reset();
            } else {
                toast.error("Failed to send message. Please try again later.");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            toast.error("Failed to send message. Please try again later.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className={"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full gap-10 py-26"}>
            <AnchorHeading id="contact" className={"text-right"} />

            <div className={"grid grid-cols-2"}>
                <div className={"flex justify-end flex-col col-span-2 md:col-span-1 order-2 md:order-1"}>
                    <p className={"font-semibold text-2xl"}>Kateryna Khremuchkova</p>
                    <p className={"text-lg mb-4"}>Full-stack Developer</p>
                    <p>{"Not a fan of forms?"}</p>
                    <p>
                        {"Reach out at "}
                        <span 
                            onClick={copyEmailToClipboard}
                            className={cn("font-semibold cursor-pointer relative text-gradient-purple-blue",)}>
                            kateryna.khremuchkova@gmail.com
                        </span>
                    </p>

                    <div className={"flex mt-11"}>
                        <ExternalLink href={SOCIAL_LINKS.GITHUB} icon={Github} />
                        <ExternalLink href={SOCIAL_LINKS.LINKEDIN} icon={Linkedin} />
                        <ExternalLink href={SOCIAL_LINKS.TELEGRAM} icon={Send} />
                    </div>
                </div>
                
                <FormProvider {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className={"order-1 md:order-2 col-span-2 md:col-span-1 flex flex-col gap-6 mb-12 md:mb-0"}>

                        <Input
                            label={"Name"}
                            type={"text"}
                            id="name"
                            {...form.register("name")}
                        />

                        <Input
                            label={"Email"}
                            type={"email"}
                            id="email"
                            {...form.register("email")}
                        />

                        <div className={"flex flex-col gap-2"}>
                            <label htmlFor="message" className={"text-base font-mono font-medium text-white"}>
                                {"Message"}
                            </label>
                            <textarea
                                id="message"
                                rows={5}
                                {...form.register("message")}
                                className={cn(
                                    "px-4 py-3 border border-white/50 rounded-lg resize-vertical",
                                    "focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                                    "transition-colors duration-200",
                                    form.formState.errors.message?.message && "border-red-500 focus:ring-red-500"
                                )}
                            />
                            {form.formState.errors.message && (
                                <p className={"text-red-400 text-sm font-mono"}>
                                    {form.formState.errors.message?.message}
                                </p>
                            )}
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={cn(
                                "bg-gradient-purple-blue text-white hover:opacity-90 font-medium py-3 px-6 rounded-md",
                                "focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 font-bold",
                                "transition-opacity duration-200 disabled:opacity-50 disabled:cursor-not-allowed",
                                "cursor-pointer mt-6 h-14"
                            )}
                        >
                            {isSubmitting ? "Sending..." : "Send Message"}
                        </button>
                    </form>
                </FormProvider>
            </div>
        </section>
    );
};