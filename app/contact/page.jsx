"use client"
import React, { useState, useEffect } from "react";

/* ─── Data ──────────────────────────────────────────────────────────────── */
const contactMethods = [
    {
        label: "Email",
        value: "hello@harishparmar.com",
        sub: "Response within 24 hours",
        href: "mailto:hello@harishparmar.com",
        dark: true,
    },
    {
        label: "LinkedIn",
        value: "Harish Parmar",
        sub: "Connect professionally",
        href: "https://linkedin.com",
        dark: false,
    },
    {
        label: "Location",
        value: "India · UAE · UK",
        sub: "Operating across three countries",
        href: null,
        dark: true,
    },
    {
        label: "Availability",
        value: "Open to Engagements",
        sub: "Speaking · Advisory · Media",
        href: null,
        dark: false,
        pulse: true,
    },
];

const inquiryTypes = [
    "Speaking Engagement",
    "Media Inquiry",
    "Advisory / Consulting",
    "Partnership",
    "Other",
];

/* ─── Chess Cell ────────────────────────────────────────────────────────── */
const ContactCell = ({ m }) => (
    <div
        className="relative flex flex-col justify-between p-7 sm:p-8 overflow-hidden"
        style={{
            backgroundColor: m.dark ? "#3E3AA8" : "#ffffff",
            minHeight: "160px",
        }}
    >
        {m.dark && (
            <div className="absolute -bottom-6 -right-6 w-28 h-28 rounded-full border border-white/[0.08] pointer-events-none" />
        )}

        {/* Top */}
        <div className="flex items-center justify-between">
            <p
                className="text-[16px] uppercase tracking-[4px] font-semibold"
                style={{ color: m.dark ? "rgba(255,255,255,0.55)" : "rgba(0,0,0,0.45)" }}
            >
                {m.label}
            </p>
            {m.pulse && (
                <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
            )}
            {m.href && (
                <span style={{ color: m.dark ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.3)" }}>↗</span>
            )}
        </div>

        {/* Bottom */}
        <div>
            {m.href ? (
                <a
                    href={m.href}
                    target={m.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="block text-[15px] sm:text-[16px] font-bold leading-[1.3] mb-1.5 hover:opacity-75 transition-opacity duration-200 break-all"
                    style={{ color: m.dark ? "#ffffff" : "#000000" }}
                >
                    {m.value}
                </a>
            ) : (
                <p
                    className="text-[15px] sm:text-[16px] font-bold leading-[1.3] mb-1.5"
                    style={{ color: m.dark ? "#ffffff" : "#000000" }}
                >
                    {m.value}
                </p>
            )}
            <p
                className="text-[11px] uppercase tracking-[2px]"
                style={{ color: m.dark ? "rgba(255,255,255,0.45)" : "rgba(0,0,0,0.4)" }}
            >
                {m.sub}
            </p>
        </div>

        {/* Corner bracket */}
        <div
            className="absolute bottom-5 left-5 w-4 h-4"
            style={{
                borderBottom: `1px solid ${m.dark ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.1)"}`,
                borderLeft: `1px solid ${m.dark ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.1)"}`,
            }}
        />
    </div>
);

/* ─── Main Component ────────────────────────────────────────────────────── */
const ContactPage = () => {
    const [mounted, setMounted] = useState(false);
    const [form, setForm] = useState({ name: "", email: "", company: "", type: "", message: "" });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [focused, setFocused] = useState("");

    useEffect(() => { setMounted(true); }, []);

    const handleChange = (e) =>
        setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

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
        <div className="bg-[#f7f6f3] overflow-hidden">

            {/* ══ HERO ══ */}
            <div className="relative bg-[#3E3AA8] text-white overflow-hidden">

                {/* BG geometry */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute -top-24 -right-24 w-[500px] h-[500px] rounded-full border border-white/[0.06]" />
                    <div className="absolute -top-10 -right-10 w-[330px] h-[330px] rounded-full border border-white/[0.04]" />
                    <div className="absolute bottom-0 left-0 w-[200px] h-[200px] border-t border-r border-white/[0.06]" />
                    <div
                        className="absolute inset-0 opacity-[0.025]"
                        style={{ backgroundImage: "repeating-linear-gradient(135deg,white 0,white 1px,transparent 1px,transparent 80px)" }}
                    />
                    <div className="absolute top-8 left-8 md:top-12 md:left-14 w-7 h-7 border-t border-l border-white/20" />
                    <div className="absolute top-8 right-8 md:top-12 md:right-14 w-7 h-7 border-t border-r border-white/20" />
                    <div className="absolute bottom-8 left-8 md:bottom-12 md:left-14 w-7 h-7 border-b border-l border-white/20" />
                    <div className="absolute bottom-8 right-8 md:bottom-12 md:right-14 w-7 h-7 border-b border-r border-white/20" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 md:px-16 pt-20 md:pt-28 pb-16 md:pb-20">

                    {/* Label */}
                    <div
                        className="flex items-center gap-3 mb-10"
                        style={{
                            opacity: mounted ? 1 : 0,
                            transform: mounted ? "none" : "translateY(12px)",
                            transition: "opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s",
                        }}
                    >
                        <span className="block w-6 h-[1px] bg-white/40" />
                        <p className="uppercase tracking-[5px] text-[16px] font-semibold text-white/60">
                            Connect / Contact
                        </p>
                        <span className="block w-6 h-[1px] bg-white/40" />
                    </div>

                    {/* Headline + subtext */}
                    <div
                        className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-10 lg:gap-20 items-end"
                        style={{
                            opacity: mounted ? 1 : 0,
                            transform: mounted ? "none" : "translateY(20px)",
                            transition: "opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s",
                        }}
                    >
                        <h1 className="text-[40px] sm:text-[56px] md:text-[72px] xl:text-[82px] leading-[1.0] font-semibold tracking-tight text-white">
                            Let's Start a<br />
                            <span className="text-white/30">Professional Dialogue</span>
                        </h1>
                        <p className="text-[15px] md:text-[24px] leading-[1.9] text-white/65 font-light lg:pb-1">
                            For speaking engagements, media inquiries, advisory
                            opportunities, or any professional dialogue — reach out directly.
                        </p>
                    </div>
                </div>
            </div>

            {/* ══ CONTACT METHOD CELLS ══ */}
            <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-16 pt-16 md:pt-20">
                <div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-black/10"
                    style={{ gap: "1px", backgroundColor: "rgba(0,0,0,0.08)" }}
                >
                    {contactMethods.map((m, i) => (
                        <ContactCell key={i} m={m} />
                    ))}
                </div>
            </div>

            {/* ══ FORM SECTION ══ */}
            <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-16 py-16 md:py-24">
                <div
                    className="grid grid-cols-1 lg:grid-cols-[1fr_520px] xl:grid-cols-[1fr_580px]"
                    style={{ gap: "1px", backgroundColor: "rgba(0,0,0,0.08)", border: "1px solid rgba(0,0,0,0.1)" }}
                >

                    {/* ── LEFT: context panel ── */}
                    <div className="relative bg-[#3E3AA8] text-white p-8 sm:p-10 md:p-14 flex flex-col justify-between overflow-hidden">
                        <div className="absolute inset-0 pointer-events-none">
                            <div className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full border border-white/[0.06]" />
                            <div className="absolute -bottom-4 -right-4 w-40 h-40 rounded-full border border-white/[0.04]" />
                            <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "repeating-linear-gradient(135deg,white 0,white 1px,transparent 1px,transparent 70px)" }} />
                        </div>

                        <div className="relative z-10">
                            <p className="text-[16px] uppercase tracking-[5px] text-white/50 mb-8">
                                Why Reach Out
                            </p>
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
                                {[
                                    "Speaking Engagements & Keynotes",
                                    "Media & Press Inquiries",
                                    "Advisory & Consulting",
                                    "Strategic Partnerships",
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-white/50 flex-shrink-0" />
                                        <p className="text-[12px] text-white/60 uppercase tracking-[2px]">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Identity */}
                        <div className="relative z-10 mt-12 pt-8 border-t border-white/10">
                            <p className="text-[16px] uppercase tracking-[4px] text-white/35 mb-1">From the desk of</p>
                            <p className="text-[18px] font-semibold text-white">Harish Parmar</p>
                            <p className="text-[12px] text-white/45 mt-0.5">Founder & Chairman, SingleDebt</p>
                        </div>

                        <div className="absolute top-6 left-6 w-5 h-5 border-t border-l border-white/15" />
                        <div className="absolute bottom-6 right-6 w-5 h-5 border-b border-r border-white/15" />
                    </div>

                    {/* ── RIGHT: form ── */}
                    <div className="bg-white p-8 sm:p-10 md:p-14">

                        {submitted ? (
                            /* Success */
                            <div className="h-full flex flex-col items-center justify-center text-center py-16">
                                <div className="w-14 h-14 rounded-full bg-[#3E3AA8]/10 flex items-center justify-center mb-6">
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#3E3AA8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="20 6 9 17 4 12" />
                                    </svg>
                                </div>
                                <p className="text-[16px] uppercase tracking-[5px] text-[#4D4AB8] mb-4">Message Sent</p>
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
                                    <p className="text-[16px] uppercase tracking-[5px] text-black mb-6">Your Details</p>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                                        <div>
                                            <label className="block text-[16px] uppercase tracking-[3px] text-black mb-3">
                                                Full Name *
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                required
                                                placeholder="John Smith"
                                                value={form.name}
                                                onChange={handleChange}
                                                onFocus={() => setFocused("name")}
                                                onBlur={() => setFocused("")}
                                                className="w-full bg-transparent pb-3 text-[14px] text-black placeholder-black/30"
                                                style={underline("name")}
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-[16px] uppercase tracking-[3px] text-black mb-3">
                                                Email Address *
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                required
                                                placeholder="you@company.com"
                                                value={form.email}
                                                onChange={handleChange}
                                                onFocus={() => setFocused("email")}
                                                onBlur={() => setFocused("")}
                                                className="w-full bg-transparent pb-3 text-[14px] text-black placeholder-black/30"
                                                style={underline("email")}
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-[16px] uppercase tracking-[3px] text-black mb-3">
                                            Company / Organisation
                                        </label>
                                        <input
                                            type="text"
                                            name="company"
                                            placeholder="Your company name"
                                            value={form.company}
                                            onChange={handleChange}
                                            onFocus={() => setFocused("company")}
                                            onBlur={() => setFocused("")}
                                            className="w-full bg-transparent pb-3 text-[14px] text-black placeholder-black/30"
                                            style={underline("company")}
                                        />
                                    </div>
                                </div>

                                {/* Inquiry type */}
                                <div>
                                    <p className="text-[16px] uppercase tracking-[5px] text-black mb-5">
                                        Nature of Inquiry *
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {inquiryTypes.map((t) => (
                                            <button
                                                key={t}
                                                type="button"
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
                                    <label className="block text-[16px] uppercase tracking-[3px] text-black mb-3">
                                        Your Message *
                                    </label>
                                    <textarea
                                        name="message"
                                        required
                                        rows={5}
                                        placeholder="Describe your inquiry, event details, or how you'd like to collaborate..."
                                        value={form.message}
                                        onChange={handleChange}
                                        onFocus={() => setFocused("message")}
                                        onBlur={() => setFocused("")}
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
                                    <p className="text-[16px] text-black/30 uppercase tracking-[2px]">
                                        * Required fields
                                    </p>
                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="flex items-center gap-3 bg-[#3E3AA8] text-white px-8 py-4 text-[12px] uppercase tracking-[3px] font-semibold hover:bg-[#2f2c8f] active:scale-95 transition-all duration-300 disabled:opacity-60"
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
            </div>

            {/* ══ FOOTER STRIP ══ */}
            <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-16 pb-20 md:pb-28">
                <div
                    className="grid grid-cols-1 sm:grid-cols-3 border border-black/10"
                    style={{ gap: "1px", backgroundColor: "rgba(0,0,0,0.08)" }}
                >
                    {[
                        { dark: false, label: "Based In", value: "Mumbai, India" },
                        { dark: true, label: "Response Time", value: "Within 24 Hours" },
                        { dark: false, label: "Languages", value: "English · Hindi · Gujarati" },
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="relative flex flex-col justify-between p-7 sm:p-8 overflow-hidden"
                            style={{ backgroundColor: item.dark ? "#3E3AA8" : "#ffffff", minHeight: "120px" }}
                        >
                            {item.dark && (
                                <div className="absolute -bottom-4 -right-4 w-20 h-20 rounded-full border border-white/[0.07] pointer-events-none" />
                            )}
                            <p
                                className="text-[16px] uppercase tracking-[4px] font-semibold"
                                style={{ color: item.dark ? "rgba(255,255,255,0.5)" : "rgba(0,0,0,0.4)" }}
                            >
                                {item.label}
                            </p>
                            <p
                                className="text-[16px] font-bold mt-4"
                                style={{ color: item.dark ? "#ffffff" : "#000000" }}
                            >
                                {item.value}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ContactPage;