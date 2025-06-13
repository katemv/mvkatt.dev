"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { cn } from "@/utils/tailwind";

import { AnchorHeading } from "@/components/common/AnchorHeading";
import { Input } from "@/components/sections/contact/Input";
import { ExternalLink } from "@/components/common/ExternalLink";
import { Github, Linkedin, Send } from "lucide-react";

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleTextareaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus("idle");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSubmitStatus("success");
                setFormData({ name: "", email: "", message: "" });
            } else {
                setSubmitStatus("error");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            setSubmitStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className={"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full gap-10 py-26"}>
            <AnchorHeading id="contact" className={"text-right"} />

            <div className={"grid grid-cols-2"}>
                <div className={"flex justify-end flex-col"}>
                    <p className={"font-semibold text-2xl"}>Kateryna Khremuchkova</p>
                    <p className={"text-lg mb-4"}>Full-stack Developer</p>
                    <p>{"Not a fan of forms?"}</p>
                    <p>
                        {"Reach out at "}
                        <span className={cn("font-semibold cursor-pointer relative after:content-['']",
                            "after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-white",
                            "after:opacity-0 after:transition-opacity after:duration-300 hover:after:opacity-100")}>
                            kateryna.khremuchkova@gmail.com
                        </span>
                    </p>
                    {/* todo: copy + toast*/}

                    <div className={"flex mt-11"}>
                        <ExternalLink href={""} icon={Github} />
                        <ExternalLink href={""} icon={Linkedin} />
                        <ExternalLink href={""} icon={Send} />
                    </div>
                </div>
                <form onSubmit={handleSubmit} className={"flex flex-col gap-6"}>
                    {submitStatus === "success" && (
                        <div className={"p-4 bg-green-50 border border-green-200 rounded-lg"}>
                            <p className={"text-green-800 text-sm"}>
                                {"✅ Message sent successfully! I'll get back to you soon."}
                            </p>
                        </div>
                    )}

                    {submitStatus === "error" && (
                        <div className={"p-4 bg-red-50 border border-red-200 rounded-lg"}>
                            <p className={"text-red-800 text-sm"}>
                                {"❌ Failed to send message. Please try again."}
                            </p>
                        </div>
                    )}

                    <Input
                        label={"Name"}
                        type={"text"}
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                    />

                    <Input
                        label={"Email"}
                        type={"email"}
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                    />

                    <div className={"flex flex-col gap-2"}>
                        <label htmlFor="message" className={"text-base font-mono font-medium text-white"}>
                            {"Message"}
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleTextareaChange}
                            required
                            rows={5}
                            className={cn(
                                "px-4 py-3 border-b border-white resize-vertical",
                                "focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                                "transition-colors duration-200"
                            )}
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className={cn(
                            "bg-white text-black/80 hover:text-black font-medium py-3 px-6 rounded-md",
                            "focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 font-bold",
                            "transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed",
                            "cursor-pointer mt-6 h-14"
                        )}
                    >
                        {isSubmitting ? "Sending..." : "Send Message"}
                    </button>
                </form>
            </div>
        </section>
    );
};