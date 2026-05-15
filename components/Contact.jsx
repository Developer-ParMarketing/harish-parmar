"use client";

import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import { Mail, ArrowUpRight, FileText, X, ChevronDown } from "lucide-react";

/* ─── Icons ── */
const LinkedinIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
    </svg>
);

/* ─── Data ── */
const inquiryTypes = [
    "Speaking Engagement",
    "Media Inquiry",
    "Advisory / Consulting",
    "Partnership",
    "Other",
];

const contacts = [
    {
        href: "https://linkedin.com",
        target: "_blank",
        isForm: false,
        icon: <LinkedinIcon />,
        label: "LinkedIn",
        number: "01",
        desc: "Connect for insights on global finance, fintech, and leadership.",
    },
    {
        href: "mailto:hello@example.com",
        target: "_self",
        isForm: false,
        icon: <Mail size={20} />,
        label: "Email",
        number: "02",
        desc: "hello@example.com",
    },
    {
        href: null,
        target: "_self",
        isForm: true,
        icon: <FileText size={20} />,
        label: "Contact Form",
        number: "03",
        desc: "Reach out through a secure professional contact form.",
    },
];

/* ─── Inline Form ── */
function InlineForm({ onClose }) {
    const [form, setForm] = useState({ name: "", email: "", company: "", type: "", message: "" });
    const [focused, setFocused] = useState("");
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const formRef = useRef(null);

    // Scroll form into view when it opens
    useEffect(() => {
        setTimeout(() => {
            formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 80);
    }, []);

    const handleChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => { setLoading(false); setSubmitted(true); }, 1400);
    };

    const underline = (field) => ({
        outline: "none",
        borderBottom: `1px solid ${focused === field ? "#3E3AA8" : "rgba(0,0,0,0.15)"}`,
        transition: "border-color 0.3s ease",
    });

    return (
        <div
            ref={formRef}
            className="border-t border-black/10 overflow-hidden"
            style={{
                animation: "formSlideDown 0.4s cubic-bezier(0.16,1,0.3,1) forwards",
            }}
        >
            <div
                className="grid grid-cols-1 lg:grid-cols-[1fr_520px] xl:grid-cols-[1fr_580px]"
                style={{ gap: "1px", backgroundColor: "rgba(0,0,0,0.08)" }}
            >
                {/* ── LEFT: context panel ── */}
                <div className="relative bg-[#3E3AA8] text-white p-8 sm:p-10 md:p-14 flex flex-col justify-between overflow-hidden">
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full border border-white/[0.06]" />
                        <div className="absolute -bottom-4 -right-4 w-40 h-40 rounded-full border border-white/[0.04]" />
                        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "repeating-linear-gradient(135deg,white 0,white 1px,transparent 1px,transparent 70px)" }} />
                    </div>

                    <div className="relative z-10">
                        <p className="text-[11px] uppercase tracking-[5px] text-white/50 mb-8">Why Reach Out</p>
                        <h2 className="text-[26px] sm:text-[32px] md:text-[36px] font-semibold leading-[1.15] text-white mb-6">
                            Start the Right Conversation
                        </h2>
                        <div className="w-8 h-[1px] bg-white/25 mb-8" />
                        <p className="text-[14px] md:text-[15px] leading-[1.9] text-white/65 font-light mb-10">
                            Whether you're looking for a keynote speaker on financial wellness,
                            a strategic advisor for your organization, or a media voice on
                            fintech and debt resolution — Harish Parmar brings four decades
                            of global financial experience to every engagement.
                        </p>
                        <div className="space-y-3">
                            {["Speaking Engagements & Keynotes", "Media & Press Inquiries", "Advisory & Consulting", "Strategic Partnerships"].map((item, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-white/50 flex-shrink-0" />
                                    <p className="text-[11px] text-white/60 uppercase tracking-[2px]">{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative z-10 mt-12 pt-8 border-t border-white/10">
                        <p className="text-[11px] uppercase tracking-[4px] text-white/35 mb-1">From the desk of</p>
                        <p className="text-[18px] font-semibold text-white">Harish Parmar</p>
                        <p className="text-[12px] text-white/45 mt-0.5">Founder & Chairman, SingleDebt</p>
                    </div>

                    <div className="absolute top-6 left-6 w-5 h-5 border-t border-l border-white/15" />
                    <div className="absolute bottom-6 right-6 w-5 h-5 border-b border-r border-white/15" />
                </div>

                {/* ── RIGHT: form ── */}
                <div className="bg-white p-8 sm:p-10 md:p-14 relative">

                    {/* Close button */}
                    <button
                        onClick={onClose}
                        className="absolute top-6 right-6 w-9 h-9 rounded-full border border-black/10 flex items-center justify-center text-black/40 hover:text-black hover:border-black/30 transition-all duration-200"
                        aria-label="Close form"
                    >
                        <X size={15} />
                    </button>

                    {submitted ? (
                        <div className="h-full flex flex-col items-center justify-center text-center py-16">
                            <div className="w-14 h-14 rounded-full bg-[#3E3AA8]/10 flex items-center justify-center mb-6">
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#3E3AA8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="20 6 9 17 4 12" />
                                </svg>
                            </div>
                            <p className="text-[11px] uppercase tracking-[5px] text-[#4D4AB8] mb-4">Message Sent</p>
                            <h3 className="text-[24px] font-semibold text-black mb-3">Thank You</h3>
                            <p className="text-[14px] text-[#555] leading-[1.85] max-w-xs">
                                Your message has been received. Harish's team will respond within 24 hours.
                            </p>
                            <button
                                onClick={() => { setSubmitted(false); setForm({ name: "", email: "", company: "", type: "", message: "" }); }}
                                className="mt-8 text-[11px] uppercase tracking-[3px] text-[#3E3AA8] border border-[#3E3AA8]/30 px-5 py-2.5 hover:bg-[#3E3AA8] hover:text-white transition-all duration-300"
                            >
                                Send Another
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="flex flex-col gap-8">

                            {/* Your details */}
                            <div>
                                <p className="text-[11px] uppercase tracking-[5px] text-black mb-6">Your Details</p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <label className="block text-[11px] uppercase tracking-[3px] text-black/60 mb-3">Full Name *</label>
                                        <input
                                            type="text" name="name" required placeholder="John Smith"
                                            value={form.name} onChange={handleChange}
                                            onFocus={() => setFocused("name")} onBlur={() => setFocused("")}
                                            className="w-full bg-transparent pb-3 text-[14px] text-black placeholder-black/30"
                                            style={underline("name")}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-[11px] uppercase tracking-[3px] text-black/60 mb-3">Email Address *</label>
                                        <input
                                            type="email" name="email" required placeholder="you@company.com"
                                            value={form.email} onChange={handleChange}
                                            onFocus={() => setFocused("email")} onBlur={() => setFocused("")}
                                            className="w-full bg-transparent pb-3 text-[14px] text-black placeholder-black/30"
                                            style={underline("email")}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-[11px] uppercase tracking-[3px] text-black/60 mb-3">Company / Organisation</label>
                                    <input
                                        type="text" name="company" placeholder="Your company name"
                                        value={form.company} onChange={handleChange}
                                        onFocus={() => setFocused("company")} onBlur={() => setFocused("")}
                                        className="w-full bg-transparent pb-3 text-[14px] text-black placeholder-black/30"
                                        style={underline("company")}
                                    />
                                </div>
                            </div>

                            {/* Inquiry type */}
                            <div>
                                <p className="text-[11px] uppercase tracking-[5px] text-black mb-5">Nature of Inquiry *</p>
                                <div className="flex flex-wrap gap-2">
                                    {inquiryTypes.map((t) => (
                                        <button
                                            key={t} type="button"
                                            onClick={() => setForm((p) => ({ ...p, type: t }))}
                                            className="text-[11px] uppercase tracking-[2px] px-4 py-2 border transition-all duration-200"
                                            style={{
                                                backgroundColor: form.type === t ? "#3E3AA8" : "transparent",
                                                borderColor: form.type === t ? "#3E3AA8" : "rgba(0,0,0,0.15)",
                                                color: form.type === t ? "#ffffff" : "rgba(0,0,0,0.55)",
                                            }}
                                        >
                                            {t}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Message */}
                            <div>
                                <label className="block text-[11px] uppercase tracking-[3px] text-black/60 mb-3">Your Message *</label>
                                <textarea
                                    name="message" required rows={5}
                                    placeholder="Describe your inquiry, event details, or how you'd like to collaborate..."
                                    value={form.message} onChange={handleChange}
                                    onFocus={() => setFocused("message")} onBlur={() => setFocused("")}
                                    className="w-full bg-transparent pb-3 text-[14px] text-black placeholder-black/30 resize-none"
                                    style={{
                                        outline: "none",
                                        borderBottom: `1px solid ${focused === "message" ? "#3E3AA8" : "rgba(0,0,0,0.15)"}`,
                                        transition: "border-color 0.3s ease",
                                    }}
                                />
                            </div>

                            {/* Submit */}
                            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
                                <p className="text-[11px] text-black/30 uppercase tracking-[2px]">* Required fields</p>
                                <button
                                    type="submit" disabled={loading}
                                    className="flex items-center gap-3 bg-[#3E3AA8] text-white px-8 py-4 text-[11px] uppercase tracking-[3px] font-semibold hover:bg-[#2f2c8f] active:scale-95 transition-all duration-300 disabled:opacity-60"
                                >
                                    {loading ? (
                                        <>
                                            <svg className="animate-spin" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                                <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                                            </svg>
                                            Sending...
                                        </>
                                    ) : (
                                        <>Send Message <span>↗</span></>
                                    )}
                                </button>
                            </div>
                        </form>
                    )}
                </div>
            </div>

            <style>{`
                @keyframes formSlideDown {
                    from { opacity: 0; transform: translateY(-16px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </div>
    );
}

/* ─── Main ── */
const Contact = () => {
    const [showForm, setShowForm] = useState(false);
    const formSectionRef = useRef(null);

    return (
        <section className="relative w-full bg-[#f7f6f3]">

            {/* Background geometry */}
            <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
                <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full border border-black/[0.05]" />
                <div className="absolute -bottom-16 -right-16 w-[320px] h-[320px] rounded-full border border-black/[0.04]" />
                <div className="absolute top-0 left-0 w-[260px] h-[260px] border-b border-r border-black/[0.05]" />
            </div>

            {/* Header */}
            <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 md:px-16 pt-10 md:pt-14">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] xl:grid-cols-[1fr_440px] gap-10 lg:gap-20 items-end">
                    <h2 className="text-[38px] sm:text-[52px] md:text-[68px] xl:text-[76px] leading-[1.0] font-semibold text-black tracking-tight">
                        Let’s Start a<br />
                        <span className="text-black/20">Professional Chat</span>
                    </h2>
                    <p className="text-[16px] md:text-[24px] leading-[1.9] text-[#555] font-light lg:pb-2">
                        For speaking engagements, media inquiries, or professional dialogue.
                    </p>
                </div>
                <div className="w-full h-[1px] bg-black/10 mt-14" />
            </div>

            {/* Contact Cards */}
            <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 md:px-16 mt-0">
                <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-black/10">
                    {contacts.map((item, i) => {
                        const isFormCard = item.isForm;
                        const isActive = isFormCard && showForm;

                        const inner = (
                            <>
                                {/* Top row */}
                                <div className="flex items-center justify-between">
                                    <span className="text-[11px] uppercase tracking-[4px] text-black/25 font-semibold">
                                        {item.number}
                                    </span>
                                    <div
                                        className="w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300"
                                        style={{
                                            backgroundColor: isActive ? "#3E3AA8" : "white",
                                            borderColor: isActive ? "#3E3AA8" : "rgba(0,0,0,0.15)",
                                            color: isActive ? "white" : "rgba(0,0,0,0.6)",
                                        }}
                                    >
                                        {isFormCard
                                            ? isActive
                                                ? <ChevronDown size={18} />
                                                : <FileText size={20} />
                                            : item.icon}
                                    </div>
                                </div>

                                {/* Title + arrow */}
                                <div className="flex items-start justify-between gap-4">
                                    <h3 className="text-[22px] md:text-[26px] leading-[1.25] font-semibold text-black">
                                        {item.label}
                                    </h3>
                                    <ArrowUpRight
                                        size={18}
                                        className="text-black/30 mt-1 shrink-0 transition-all duration-300"
                                        style={{
                                            color: isActive ? "#3E3AA8" : undefined,
                                            transform: isActive ? "rotate(90deg)" : undefined,
                                        }}
                                    />
                                </div>

                                {/* Accent line */}
                                <div
                                    className="h-[1px] bg-[#3E3AA8]/30 transition-all duration-500"
                                    style={{ width: isActive ? "4rem" : "2rem" }}
                                />

                                {/* Desc */}
                                <p className="text-[15px] md:text-[16px] leading-[1.85] text-[#666] font-light break-all">
                                    {isActive ? "Click to collapse form" : item.desc}
                                </p>

                                {/* Bottom hover accent */}
                                <div
                                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#3E3AA8] origin-left transition-transform duration-500 hidden sm:block"
                                    style={{ transform: isActive ? "scaleX(1)" : "scaleX(0)" }}
                                />
                            </>
                        );

                        const sharedClass = "group relative px-0 sm:px-8 md:px-10 py-12 md:py-16 flex flex-col gap-6 transition-all duration-300";

                        if (isFormCard) {
                            return (
                                <button
                                    key={i}
                                    onClick={() => setShowForm((v) => !v)}
                                    className={sharedClass + " text-left w-full"}
                                >
                                    {inner}
                                </button>
                            );
                        }

                        return (
                            <Link key={i} href={item.href} target={item.target} className={sharedClass}>
                                {inner}
                            </Link>
                        );
                    })}
                </div>
            </div>

            {/* Inline form — renders below cards when open */}
            <div
                ref={formSectionRef}
                className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 md:px-16"
            >
                {showForm && (
                    <InlineForm onClose={() => setShowForm(false)} />
                )}
            </div>

            {/* Footer strip */}
            <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 md:px-16 pb-20 md:pb-28 mt-0">
                <div className="border border-black/10 bg-white p-8 sm:p-10 md:p-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                    <div>
                        <p className="text-[11px] uppercase tracking-[4px] text-black/80 mb-2">Based in India</p>
                        <p className="text-[18px] md:text-[22px] font-semibold text-black">Harish Parmar</p>
                        <p className="text-[14px] text-[#777] mt-1">Founder & Chairman, SingleDebt</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-[13px] text-[#666] uppercase tracking-[3px]">Open to Engagements</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;