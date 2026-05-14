"use client";

import React, { useState, useEffect, useRef } from "react";

/* ─── Data ──────────────────────────────────────────────────────────────── */
const milestones = [
    {
        year: "1994",
        geo: "UK · USA",
        label: "Academic & Early UK Foundation",
        desc: "Graduated from UMIST and began consulting on the design of financial products for banks in the UK and USA.",
    },
    {
        year: "1999",
        geo: "India",
        label: "India Market Entry",
        desc: "Founded One Debt — a debt management company catering to UK nationals as consumer debt peaked at 156.4% of household disposable income.",
    },
    {
        year: "2007",
        geo: "India · UK · USA",
        label: "BPO & Operations Expansion",
        desc: "Established a Business Process Outsourcing center in India to support financial products and banking services for clients across UK and USA.",
    },
    {
        year: "2020s",
        geo: "India",
        label: "Ecosystem Leadership",
        desc: "Founded SingleDebt — a structured legal-fintech model for debt resolution. Simplified insolvency, digitized client engagement, and promoted responsible restructuring.",
    },
    {
        year: "2021",
        geo: "India",
        label: "First Debt Management Platform",
        desc: "Launched a customer-first Debt Management Platform providing easy access to representatives and online resources, significantly reducing client effort.",
    },
    {
        year: "2022",
        geo: "UAE · GCC",
        label: "UAE Expansion",
        desc: "Established Dubai as regional headquarters and extended services to the GCC market — a strategic cross-border financial milestone.",
    },
    {
        year: "2023",
        geo: "India · UAE",
        label: "Industry Recognition",
        desc: "Awarded 'Best Debt Management Company in India & UAE' by SOS Nitelife, recognizing SingleDebt's excellence and client commitment.",
    },
    {
        year: "2024",
        geo: "Global",
        label: "Technology Acceleration",
        desc: "Launched the SingleDebt app and digital portal. Shortlisted finalist at India FinTech Awards (IFTA) 2024 from nominations across 20 countries.",
    },
    {
        year: "Present",
        geo: "UK · India · UAE",
        label: "Cross-Border Financial Leadership",
        desc: "Four decades of global exposure. Harish Parmar now oversees ethical debt resolution, structured financial recovery, legal-fintech innovation, and cross-border compliance.",
    },
];

const stats = [
    { value: "40+", label: "Years" },
    { value: "3", label: "Countries" },
    { value: "9", label: "Milestones" },
    { value: "20+", label: "Nations" },
];

/* ─── Reveal hook ───────────────────────────────────────────────────────── */
function useInView(threshold = 0.1) {
    const ref = useRef(null);
    const [inView, setInView] = useState(false);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            ([e]) => { if (e.isIntersecting) setInView(true); },
            { threshold }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, [threshold]);
    return [ref, inView];
}

/* ─── Chess cell ────────────────────────────────────────────────────────── */
function Cell({ item, index }) {
    const isDark = index % 2 === 0;
    const [ref, inView] = useInView(0.08);

    return (
        <div
            ref={ref}
            className="relative flex flex-col justify-between p-7 sm:p-8 md:p-10 overflow-hidden"
            style={{
                backgroundColor: isDark ? "#3E3AA8" : "#ffffff",
                color: isDark ? "#ffffff" : "#000000",
                minHeight: "280px",
                opacity: inView ? 1 : 0,
                transform: inView ? "none" : "translateY(16px)",
                transition: `opacity 0.55s ease ${(index % 4) * 0.07}s, transform 0.55s ease ${(index % 4) * 0.07}s`,
            }}
        >
            {/* BG decoration for dark cells */}
            {isDark && (
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute -bottom-8 -right-8 w-36 h-36 rounded-full border border-white/[0.07]" />
                    <div className="absolute -bottom-2 -right-2 w-20 h-20 rounded-full border border-white/[0.05]" />
                </div>
            )}

            {/* Top row: index + geo */}
            <div className="flex items-start justify-between relative z-10">
                <span
                    className="text-[10px] font-bold tabular-nums"
                    style={{ color: isDark ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0.2)" }}
                >
                    {String(index + 1).padStart(2, "0")}
                </span>
                <span
                    className="text-[9px] uppercase tracking-[3px] text-right"
                    style={{ color: isDark ? "rgba(255,255,255,0.35)" : "rgba(0,0,0,0.3)" }}
                >
                    {item.geo}
                </span>
            </div>

            {/* Bottom block */}
            <div className="relative z-10 mt-auto">
                {/* Year */}
                <p
                    className="text-[11px] uppercase tracking-[4px] font-semibold mb-3"
                    style={{ color: isDark ? "rgba(255,255,255,0.45)" : "#4D4AB8" }}
                >
                    {item.year}
                </p>

                {/* Title */}
                <h3
                    className="text-[16px] sm:text-[17px] md:text-[18px] font-bold leading-[1.3] mb-3"
                    style={{ color: isDark ? "#ffffff" : "#000000" }}
                >
                    {item.label}
                </h3>

                {/* Divider */}
                <div
                    className="w-6 h-[2px] mb-4"
                    style={{ backgroundColor: isDark ? "rgba(255,255,255,0.25)" : "#4D4AB8" }}
                />

                {/* Desc */}
                <p
                    className="text-[12.5px] sm:text-[13px] leading-[1.85]"
                    style={{ color: isDark ? "rgba(255,255,255,0.6)" : "#555555" }}
                >
                    {item.desc}
                </p>
            </div>

            {/* Bottom-left corner bracket */}
            <div
                className="absolute bottom-5 left-5 w-5 h-5"
                style={{
                    borderBottom: `1px solid ${isDark ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.08)"}`,
                    borderLeft: `1px solid ${isDark ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.08)"}`,
                }}
            />
        </div>
    );
}

/* ─── Page ──────────────────────────────────────────────────────────────── */
export default function Page() {
    const [mounted, setMounted] = useState(false);
    useEffect(() => { setMounted(true); }, []);

    return (
        <div className="bg-[#f7f6f3] overflow-hidden">

            {/* ══════════════════════════════════════
                HERO HEADER
            ══════════════════════════════════════ */}
            <div className="relative bg-[#3E3AA8] text-white overflow-hidden">

                {/* BG geometry */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute -top-24 -right-24 w-[500px] h-[500px] rounded-full border border-white/[0.06]" />
                    <div className="absolute -top-10 -right-10 w-[330px] h-[330px] rounded-full border border-white/[0.04]" />
                    <div className="absolute bottom-0 left-0 w-[200px] h-[200px] border-t border-r border-white/[0.06]" />
                    <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: "repeating-linear-gradient(135deg,white 0,white 1px,transparent 1px,transparent 80px)" }} />
                    <div className="absolute top-8 left-8 md:top-12 md:left-14 w-7 h-7 border-t border-l border-white/20" />
                    <div className="absolute top-8 right-8 md:top-12 md:right-14 w-7 h-7 border-t border-r border-white/20" />
                    <div className="absolute bottom-8 left-8 md:bottom-12 md:left-14 w-7 h-7 border-b border-l border-white/20" />
                    <div className="absolute bottom-8 right-8 md:bottom-12 md:right-14 w-7 h-7 border-b border-r border-white/20" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 md:px-16 pt-20 md:pt-28 pb-16 md:pb-20">

                    {/* Label */}
                    <div
                        className="flex items-center gap-3 mb-10"
                        style={{ opacity: mounted ? 1 : 0, transform: mounted ? "none" : "translateY(12px)", transition: "opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s" }}
                    >
                        <span className="block w-6 h-[1px] bg-white/40" />
                        <p className="uppercase tracking-[5px] text-[10px] font-semibold text-white/50">Professional Journey</p>
                        <span className="block w-6 h-[1px] bg-white/40" />
                    </div>

                    {/* Headline + subtext */}
                    <div
                        className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-10 lg:gap-20 items-end"
                        style={{ opacity: mounted ? 1 : 0, transform: mounted ? "none" : "translateY(20px)", transition: "opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s" }}
                    >
                        <h1 className="text-[40px] sm:text-[56px] md:text-[72px] xl:text-[84px] leading-[1.0] font-semibold tracking-tight">
                            A Timeline of Global
                            <br />
                            <span className="text-white/25">Financial Leadership</span>
                        </h1>

                        <p className="text-[15px] md:text-[24px] leading-[1.9] text-white/55 font-light lg:pb-1">
                            Harish Parmar's journey reflects a rare blend of international exposure,
                            system-building expertise, and long-term industry shaping — spanning
                            the UK, India, and the UAE.
                        </p>
                    </div>

                    {/* Divider */}
                    <div className="w-full h-[1px] bg-white/10 mt-12 mb-10"
                        style={{ opacity: mounted ? 1 : 0, transition: "opacity 0.6s ease 0.4s" }}
                    />

                    {/* Stats */}
                    <div
                        className="grid grid-cols-2 sm:grid-cols-4 gap-8"
                        style={{ opacity: mounted ? 1 : 0, transform: mounted ? "none" : "translateY(10px)", transition: "opacity 0.6s ease 0.45s, transform 0.6s ease 0.45s" }}
                    >
                        {stats.map((s, i) => (
                            <div key={i}>
                                <p className="text-[40px] md:text-[48px] font-semibold leading-none">{s.value}</p>
                                <p className="text-[10px] uppercase tracking-[3px] text-white/35 mt-2">{s.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ══════════════════════════════════════
                CHESS GRID
            ══════════════════════════════════════ */}
            <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-16 py-16 md:py-24">

                {/* Section label */}
                <div className="flex items-center gap-3 mb-10">
                    <span className="block w-7 h-[1px] bg-[#4D4AB8]/50" />
                    <p className="uppercase tracking-[5px] text-[10px] font-semibold text-[#4D4AB8]/70">Key Milestones</p>
                </div>

                {/*
                    Chess grid:
                    - mobile: 1 col, alternates dark/light per row
                    - sm: 2 col, true checkerboard
                    - lg: 3 col, checkerboard
                    All cells uniform height via grid rows
                */}
                <div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border border-black/10"
                    style={{ gap: "1px", backgroundColor: "rgba(0,0,0,0.08)" }}
                >
                    {milestones.map((item, i) => (
                        <Cell key={i} item={item} index={i} />
                    ))}

                    {/* If 9 items in 3-col grid = 3 rows perfect. On 2-col = 1 orphan. Fill it with a dark closer cell */}
                    <div
                        className="hidden sm:flex lg:hidden flex-col items-center justify-center p-10 bg-[#3E3AA8] relative overflow-hidden"
                        style={{ minHeight: "280px" }}
                    >
                        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "repeating-linear-gradient(135deg,white 0,white 1px,transparent 1px,transparent 60px)" }} />
                        <div className="relative z-10 text-center">
                            <p className="text-[11px] uppercase tracking-[5px] text-white/30 mb-4">Est.</p>
                            <p className="text-[52px] font-semibold text-white/10 leading-none">SD</p>
                            <p className="text-[10px] uppercase tracking-[4px] text-white/25 mt-3">SingleDebt</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* ══════════════════════════════════════
                CLOSING CTA
            ══════════════════════════════════════ */}
            <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-16 pb-24 md:pb-32">
                <div className="relative bg-[#3E3AA8] text-white overflow-hidden">
                    <div className="absolute top-6 left-6 w-7 h-7 border-t border-l border-white/20" />
                    <div className="absolute top-6 right-6 w-7 h-7 border-t border-r border-white/20" />
                    <div className="absolute bottom-6 left-6 w-7 h-7 border-b border-l border-white/20" />
                    <div className="absolute bottom-6 right-6 w-7 h-7 border-b border-r border-white/20" />
                    <div className="relative z-10 p-10 sm:p-14 md:p-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                        <div>
                            <p className="text-[10px] uppercase tracking-[5px] text-white/35 mb-4">Start a Conversation</p>
                            <h2 className="text-[26px] sm:text-[34px] md:text-[40px] font-semibold leading-[1.15]">
                                Let's Start a<br />Professional Dialogue
                            </h2>
                            <p className="text-[14px] md:text-[15px] text-white/50 mt-4 font-light max-w-sm">
                                For speaking engagements, media inquiries, or advisory opportunities.
                            </p>
                        </div>
                        <a
                            href="/contact"
                            className="flex-shrink-0 flex items-center gap-3 border border-white/30 px-7 py-4 text-[11px] uppercase tracking-[3px] font-semibold hover:bg-white hover:text-[#3E3AA8] transition-all duration-300 whitespace-nowrap"
                        >
                            Get in Touch <span>↗</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}