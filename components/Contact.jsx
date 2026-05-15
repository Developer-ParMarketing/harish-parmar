"use client";

import React, { useState } from "react";
import {
    Mail,
    ArrowUpRight,
    Send,
} from "lucide-react";

/* ─────────────────────────────────────────────
   LinkedIn Icon
───────────────────────────────────────────── */
const LinkedinIcon = () => (
    <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
    </svg>
);

/* ─────────────────────────────────────────────
   Inquiry Types
───────────────────────────────────────────── */
const inquiryTypes = [
    "Speaking Engagement",
    "Media Inquiry",
    "Advisory / Consulting",
    "Partnership",
    "Other",
];

/* ─────────────────────────────────────────────
   Main Component
───────────────────────────────────────────── */
const Contact = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        company: "",
        type: "",
        message: "",
    });

    const [focused, setFocused] = useState("");
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setForm((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        setLoading(true);

        setTimeout(() => {
            setLoading(false);
            setSubmitted(true);
        }, 1500);
    };

    const underline = (field) => ({
        outline: "none",
        borderBottom: `1px solid ${focused === field ? "#3E3AA8" : "rgba(0,0,0,0.15)"
            }`,
        transition: "all 0.3s ease",
    });

    return (
        <section className="relative w-full overflow-hidden bg-[#f7f6f3]">
            {/* Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full border border-black/[0.04]" />
                <div className="absolute bottom-[-120px] left-[-120px] w-[350px] h-[350px] rounded-full border border-black/[0.04]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 md:px-12 lg:px-16 py-16 md:py-24">
                {/* ───── Header ───── */}
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-10 lg:gap-20 mb-14 md:mb-20">
                    <div>
                        <p className="text-[11px] uppercase tracking-[5px] text-[#4D4AB8] font-semibold mb-6">
                            Professional Contact
                        </p>

                        <h2 className="text-[40px] sm:text-[54px] md:text-[68px] xl:text-[80px] leading-[0.95] font-semibold tracking-tight text-black">
                            Let’s Start a
                            <br />
                            <span className="text-black/20">
                                Professional Conversation
                            </span>
                        </h2>
                    </div>

                    <div className="flex items-end">
                        <p className="text-[15px] sm:text-[17px] md:text-[20px] leading-[2] text-[#666] font-light">
                            For speaking engagements, strategic advisory,
                            consulting opportunities, partnerships, or media
                            conversations.
                        </p>
                    </div>
                </div>

                {/* ───── Main Card ───── */}
                <div className="border border-black/10 bg-white overflow-hidden rounded-[28px] shadow-[0_10px_60px_rgba(0,0,0,0.04)]">
                    <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr]">
                        {/* ───────────────── LEFT PANEL ───────────────── */}
                        <div className="relative bg-[#3E3AA8] text-white p-8 sm:p-10 md:p-14 lg:p-16 overflow-hidden">
                            {/* Decorative */}
                            <div className="absolute inset-0 pointer-events-none">
                                <div className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full border border-white/[0.05]" />
                                <div className="absolute -bottom-8 -right-8 w-44 h-44 rounded-full border border-white/[0.05]" />

                                <div
                                    className="absolute inset-0 opacity-[0.03]"
                                    style={{
                                        backgroundImage:
                                            "repeating-linear-gradient(135deg, white 0, white 1px, transparent 1px, transparent 70px)",
                                    }}
                                />
                            </div>

                            <div className="relative z-10 h-full flex flex-col justify-between">
                                <div>
                                    <p className="text-[11px] uppercase tracking-[5px] text-white/50 mb-8">
                                        Why Reach Out
                                    </p>

                                    <h3 className="text-[28px] sm:text-[36px] leading-[1.15] font-semibold mb-7">
                                        Start the Right Conversation
                                    </h3>

                                    <div className="w-10 h-[1px] bg-white/20 mb-8" />

                                    <p className="text-[14px] md:text-[15px] leading-[2] text-white/70 font-light mb-10">
                                        Whether you’re seeking a keynote
                                        speaker, a strategic advisor, or a media
                                        voice on financial wellness and fintech,
                                        Harish Parmar brings decades of global
                                        financial leadership experience.
                                    </p>

                                    {/* Points */}
                                    <div className="space-y-4 mb-12">
                                        {[
                                            "Speaking Engagements & Keynotes",
                                            "Media & Press Inquiries",
                                            "Advisory & Consulting",
                                            "Strategic Partnerships",
                                        ].map((item, i) => (
                                            <div
                                                key={i}
                                                className="flex items-center gap-3"
                                            >
                                                <div className="w-1.5 h-1.5 rounded-full bg-white/50 flex-shrink-0" />

                                                <p className="text-[11px] uppercase tracking-[3px] text-white/65">
                                                    {item}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Contact Links */}
                                <div className="border-t border-white/10 pt-8 space-y-5">
                                    <p className="text-[11px] uppercase tracking-[4px] text-white/35">
                                        Direct Contact
                                    </p>

                                    {/* LinkedIn */}
                                    <a
                                        href="https://linkedin.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group flex items-center gap-4"
                                    >
                                        <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 group-hover:border-white/50 group-hover:text-white transition-all duration-300 flex-shrink-0">
                                            <LinkedinIcon />
                                        </div>

                                        <div>
                                            <p className="text-[11px] uppercase tracking-[3px] text-white/40 mb-1">
                                                LinkedIn
                                            </p>

                                            <p className="text-[14px] text-white/80 group-hover:text-white transition-colors duration-200 font-light">
                                                Connect Professionally
                                            </p>
                                        </div>

                                        <ArrowUpRight
                                            size={15}
                                            className="ml-auto text-white/30 group-hover:text-white/70 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                        />
                                    </a>

                                    {/* Email */}
                                    <a
                                        href="mailto:hello@example.com"
                                        className="group flex items-center gap-4"
                                    >
                                        <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 group-hover:border-white/50 group-hover:text-white transition-all duration-300 flex-shrink-0">
                                            <Mail size={18} />
                                        </div>

                                        <div>
                                            <p className="text-[11px] uppercase tracking-[3px] text-white/40 mb-1">
                                                Email
                                            </p>

                                            <p className="text-[14px] text-white/80 group-hover:text-white transition-colors duration-200 font-light break-all">
                                                hello@example.com
                                            </p>
                                        </div>

                                        <ArrowUpRight
                                            size={15}
                                            className="ml-auto text-white/30 group-hover:text-white/70 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* ───────────────── RIGHT PANEL ───────────────── */}
                        <div className="p-8 sm:p-10 md:p-14 lg:p-16">
                            {submitted ? (
                                <div className="h-full min-h-[500px] flex flex-col items-center justify-center text-center">
                                    <div className="w-16 h-16 rounded-full bg-[#3E3AA8]/10 flex items-center justify-center mb-7">
                                        <svg
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="#3E3AA8"
                                            strokeWidth="2.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <polyline points="20 6 9 17 4 12" />
                                        </svg>
                                    </div>

                                    <p className="text-[11px] uppercase tracking-[5px] text-[#4D4AB8] mb-5">
                                        Message Sent
                                    </p>

                                    <h3 className="text-[32px] font-semibold text-black mb-4">
                                        Thank You
                                    </h3>

                                    <p className="text-[15px] leading-[1.9] text-[#666] max-w-md">
                                        Your inquiry has been received. Harish
                                        Parmar’s team will respond within 24
                                        hours.
                                    </p>

                                    <button
                                        onClick={() => {
                                            setSubmitted(false);

                                            setForm({
                                                name: "",
                                                email: "",
                                                company: "",
                                                type: "",
                                                message: "",
                                            });
                                        }}
                                        className="mt-10 border border-[#3E3AA8]/30 px-6 py-3 text-[11px] uppercase tracking-[3px] text-[#3E3AA8] hover:bg-[#3E3AA8] hover:text-white transition-all duration-300"
                                    >
                                        Send Another Message
                                    </button>
                                </div>
                            ) : (
                                <form
                                    onSubmit={handleSubmit}
                                    className="flex flex-col gap-10"
                                >
                                    {/* Heading */}
                                    <div>
                                        <p className="text-[11px] uppercase tracking-[5px] text-[#4D4AB8] font-semibold mb-5">
                                            Contact Form
                                        </p>

                                        <h3 className="text-[30px] md:text-[40px] leading-[1.1] font-semibold text-black">
                                            Let’s Connect
                                        </h3>
                                    </div>

                                    {/* Inputs */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
                                        <div>
                                            <label className="block text-[11px] uppercase tracking-[3px] text-black/55 mb-3">
                                                Full Name *
                                            </label>

                                            <input
                                                type="text"
                                                name="name"
                                                required
                                                placeholder="John Smith"
                                                value={form.name}
                                                onChange={handleChange}
                                                onFocus={() =>
                                                    setFocused("name")
                                                }
                                                onBlur={() => setFocused("")}
                                                className="w-full bg-transparent pb-3 text-[15px] text-black placeholder-black/25"
                                                style={underline("name")}
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-[11px] uppercase tracking-[3px] text-black/55 mb-3">
                                                Email Address *
                                            </label>

                                            <input
                                                type="email"
                                                name="email"
                                                required
                                                placeholder="you@company.com"
                                                value={form.email}
                                                onChange={handleChange}
                                                onFocus={() =>
                                                    setFocused("email")
                                                }
                                                onBlur={() => setFocused("")}
                                                className="w-full bg-transparent pb-3 text-[15px] text-black placeholder-black/25"
                                                style={underline("email")}
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-[11px] uppercase tracking-[3px] text-black/55 mb-3">
                                            Company / Organisation
                                        </label>

                                        <input
                                            type="text"
                                            name="company"
                                            placeholder="Your company name"
                                            value={form.company}
                                            onChange={handleChange}
                                            onFocus={() =>
                                                setFocused("company")
                                            }
                                            onBlur={() => setFocused("")}
                                            className="w-full bg-transparent pb-3 text-[15px] text-black placeholder-black/25"
                                            style={underline("company")}
                                        />
                                    </div>

                                    {/* Inquiry Types */}
                                    <div>
                                        <p className="text-[11px] uppercase tracking-[4px] text-black/55 mb-5">
                                            Nature of Inquiry *
                                        </p>

                                        <div className="flex flex-wrap gap-3">
                                            {inquiryTypes.map((type) => (
                                                <button
                                                    key={type}
                                                    type="button"
                                                    onClick={() =>
                                                        setForm((prev) => ({
                                                            ...prev,
                                                            type,
                                                        }))
                                                    }
                                                    className="px-4 py-2.5 border text-[11px] uppercase tracking-[2px] transition-all duration-300"
                                                    style={{
                                                        backgroundColor:
                                                            form.type === type
                                                                ? "#3E3AA8"
                                                                : "transparent",

                                                        borderColor:
                                                            form.type === type
                                                                ? "#3E3AA8"
                                                                : "rgba(0,0,0,0.15)",

                                                        color:
                                                            form.type === type
                                                                ? "#fff"
                                                                : "rgba(0,0,0,0.6)",
                                                    }}
                                                >
                                                    {type}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Message */}
                                    <div>
                                        <label className="block text-[11px] uppercase tracking-[3px] text-black/55 mb-3">
                                            Your Message *
                                        </label>

                                        <textarea
                                            name="message"
                                            required
                                            rows={6}
                                            placeholder="Describe your inquiry, event details, or how you'd like to collaborate..."
                                            value={form.message}
                                            onChange={handleChange}
                                            onFocus={() =>
                                                setFocused("message")
                                            }
                                            onBlur={() => setFocused("")}
                                            className="w-full bg-transparent pb-3 text-[15px] text-black placeholder-black/25 resize-none"
                                            style={{
                                                outline: "none",
                                                borderBottom: `1px solid ${focused === "message"
                                                        ? "#3E3AA8"
                                                        : "rgba(0,0,0,0.15)"
                                                    }`,
                                                transition:
                                                    "border-color 0.3s ease",
                                            }}
                                        />
                                    </div>

                                    {/* Footer */}
                                    <div className="flex flex-col sm:flex-row gap-5 sm:items-center sm:justify-between pt-2">
                                        <p className="text-[11px] uppercase tracking-[2px] text-black/30">
                                            * Required fields
                                        </p>

                                        <button
                                            type="submit"
                                            disabled={loading}
                                            className="group inline-flex items-center justify-center gap-3 bg-[#3E3AA8] hover:bg-[#2f2c8f] text-white px-8 py-4 text-[11px] uppercase tracking-[3px] font-semibold transition-all duration-300 active:scale-95 disabled:opacity-60"
                                        >
                                            {loading ? (
                                                <>
                                                    <svg
                                                        className="animate-spin"
                                                        width="15"
                                                        height="15"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                    >
                                                        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                                                    </svg>

                                                    Sending...
                                                </>
                                            ) : (
                                                <>
                                                    Send Message
                                                    <Send
                                                        size={14}
                                                        className="group-hover:translate-x-0.5 transition-transform duration-300"
                                                    />
                                                </>
                                            )}
                                        </button>
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>
                </div>

                {/* ───── Bottom Strip ───── */}
                <div className="mt-10 border border-black/10 bg-white rounded-[24px] p-7 sm:p-9 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                    <div>
                        <p className="text-[11px] uppercase tracking-[4px] text-black/50 mb-2">
                            Based in India
                        </p>

                        <h4 className="text-[22px] font-semibold text-black">
                            Harish Parmar
                        </h4>

                        <p className="text-[14px] text-[#777] mt-1">
                            Founder & Chairman, SingleDebt
                        </p>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />

                        <span className="text-[12px] uppercase tracking-[3px] text-[#666]">
                            Open to Engagements
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;