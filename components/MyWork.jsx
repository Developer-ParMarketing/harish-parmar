"use client";

import React, { useEffect, useState, useRef, useCallback } from "react";
import { ShieldCheck, Landmark, Globe2, ChevronLeft, ChevronRight } from "lucide-react";

/* ─── Data ───────────────────────────────────────────────────────────────── */
const expertise = [
    {
        icon: <ShieldCheck size={28} />,
        title: "Debt Resolution & Financial Recovery",
        desc: "Building structured, compliance-driven recovery and credit management systems across regulated markets.",
        points: [
            "Creditor recovery efficiency",
            "Regulatory adherence",
            "Ethical engagement standards",
            "Structured legal escalation frameworks",
        ],
        impact: "Developed operational models serving financial institutions, NBFCs, and lending ecosystems across multiple jurisdictions.",
    },
    {
        icon: <Landmark size={28} />,
        title: "Fintech for Social Impact",
        desc: "Building India's leading legal-fintech platform to democratize access to debt resolution. Makes formal insolvency processes accessible and understandable for the common citizen, fueling the #DebtFreeIndia movement.",
        points: [
            "Formal insolvency accessibility",
            "Debt-free financial guidance",
            "Digital engagement systems",
            "Responsible restructuring pathways",
        ],
        impact: "Platform guiding thousands of individuals toward structured debt-free living. Recognized for Category Creation & Innovation at the ET Brand Equity DigiPlus Awards 2026.",
    },
    {
        icon: <Globe2 size={28} />,
        title: "Strategic Financial Advisory & Mentorship",
        desc: "Providing C-suite and founder-level mentorship across the group's international portfolio. Focuses on building sustainable, scalable financial services models that serve growing economies.",
        points: [
            "Cross-border financial strategy",
            "Leadership mentorship",
            "Operational scalability",
            "Sustainable business systems",
        ],
        impact: "Direct leadership and strategic oversight across 150+ employees in group companies operating in India, UAE, and the United Kingdom.",
    },
];

/* ─── Point card ─────────────────────────────────────────────────────────── */
function PointCard({ point, idx }) {
    return (
        <div className="group relative rounded-[20px] border border-white/[0.10] bg-white/[0.04] p-5 transition-all duration-300 hover:bg-white/[0.08] hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.25)]">
            <div className="flex items-center justify-between mb-4">
                <div className="w-8 h-8 rounded-xl bg-white/[0.08] border border-white/[0.10] flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-white/80" />
                </div>
                <span className="text-[11px] tabular-nums text-white/20 font-medium">
                    {String(idx + 1).padStart(2, "0")}
                </span>
            </div>
            <p className="text-[13px] md:text-[14px] leading-[1.8] text-white/80">{point}</p>
            <div className="absolute bottom-0 left-5 right-5 h-px bg-white/0 group-hover:bg-white/10 transition-colors duration-300" />
        </div>
    );
}

/* ─── Single slide ───────────────────────────────────────────────────────── */
function Slide({ item, index }) {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start w-full">

            {/* LEFT: text */}
            <div className="relative">
                {/*
                  Wrapper with padding-top creates room for the ghost number
                  so overflow:hidden on the carousel doesn't clip it.
                */}
                <div className="relative ">

                    {/* Ghost number — sits inside the padded space */}
                    <span
                        className="absolute top-0 left-0 font-bold text-white/[0.04] leading-none pointer-events-none select-none"
                        style={{ fontSize: "clamp(72px, 13vw, 128px)" }}
                    >
                        0{index + 1}
                    </span>

                    {/* Icon */}
                    <div className="relative z-10 w-14 h-14 rounded-2xl border border-white/[0.12] bg-white/[0.06] flex items-center justify-center text-white">
                        {item.icon}
                    </div>

                    {/* Title */}
                    <h3 className="relative z-10 mt-7 text-[24px] sm:text-[30px] md:text-[38px] leading-[1.15] font-semibold text-white">
                        {item.title}
                    </h3>

                    {/* Desc */}
                    <p className="relative z-10 mt-5 text-[14px] md:text-[16px] leading-[1.95] text-white/65">
                        {item.desc}
                    </p>

                    {/* Divider */}
                    <div className="mt-4 h-px w-24 bg-white/15" />

                    {/* Impact */}
                    <p className="mt-7 text-[13px] md:text-[14px] leading-[1.9] text-white/45 italic border-l-2 border-white/15 pl-4">
                        {item.impact}
                    </p>
                </div>
            </div>

            {/* RIGHT: point cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {item.points.map((point, idx) => (
                    <PointCard key={idx} point={point} idx={idx} />
                ))}
            </div>
        </div>
    );
}

/* ─── Main ───────────────────────────────────────────────────────────────── */
export default function MyWork() {
    const [current, setCurrent] = useState(0);
    const [animating, setAnimating] = useState(false);
    const [direction, setDirection] = useState(1);
    const autoRef = useRef(null);

    /* Touch / drag refs */
    const touchStartX = useRef(null);
    const touchStartY = useRef(null);
    const isHorizontalDrag = useRef(false);
    const mouseStartX = useRef(null);

    const total = expertise.length;

    /* ── Navigation ── */
    const goTo = useCallback((idx, dir = 1) => {
        if (animating) return;
        setDirection(dir);
        setAnimating(true);
        setTimeout(() => {
            setCurrent(((idx % total) + total) % total);
            setAnimating(false);
        }, 320);
    }, [animating, total]);

    const prev = useCallback(() => goTo(current - 1, -1), [current, goTo]);
    const next = useCallback(() => goTo(current + 1, 1), [current, goTo]);

    /* ── Auto-advance ── */
    const startAuto = useCallback(() => {
        clearInterval(autoRef.current);
        autoRef.current = setInterval(() => setCurrent((c) => (c + 1) % total), 5000);
    }, [total]);

    useEffect(() => { startAuto(); return () => clearInterval(autoRef.current); }, [startAuto]);

    /* ── Touch swipe ── */
    const onTouchStart = useCallback((e) => {
        touchStartX.current = e.touches[0].clientX;
        touchStartY.current = e.touches[0].clientY;
        isHorizontalDrag.current = false;
    }, []);

    const onTouchMove = useCallback((e) => {
        if (touchStartX.current === null) return;
        const dx = Math.abs(e.touches[0].clientX - touchStartX.current);
        const dy = Math.abs(e.touches[0].clientY - touchStartY.current);
        if (dx > dy && dx > 8) {
            isHorizontalDrag.current = true;
            e.preventDefault(); // block page scroll during horizontal swipe
        }
    }, []);

    const onTouchEnd = useCallback((e) => {
        if (touchStartX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchStartX.current;
        if (isHorizontalDrag.current && Math.abs(dx) > 40) {
            dx < 0 ? next() : prev();
            startAuto();
        }
        touchStartX.current = null;
        touchStartY.current = null;
        isHorizontalDrag.current = false;
    }, [next, prev, startAuto]);

    /* ── Mouse drag (desktop) ── */
    const onMouseDown = useCallback((e) => { mouseStartX.current = e.clientX; }, []);
    const onMouseUp = useCallback((e) => {
        if (mouseStartX.current === null) return;
        const dx = e.clientX - mouseStartX.current;
        if (Math.abs(dx) > 60) { dx < 0 ? next() : prev(); startAuto(); }
        mouseStartX.current = null;
    }, [next, prev, startAuto]);

    return (
        <section className="relative overflow-hidden bg-[#3E3AA8] text-white py-8 md:py-16 px-5 md:px-10 lg:px-16">

            {/* Background glows */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-150px] left-[-100px] w-[350px] h-[350px] bg-white/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-180px] right-[-120px] w-[400px] h-[400px] bg-[#6F6BFF]/20 rounded-full blur-[140px]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/[0.02] rounded-full blur-[100px]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto">

                {/* ── Heading ── */}
                <div className="max-w-4xl mx-auto text-center mb-10 md:mb-14">
                    <h2 className="text-[32px] sm:text-[48px] md:text-[64px] leading-[1.05] font-semibold">
                        Expertise &amp; Core Focus Areas
                    </h2>
                    <p className="text-[15px] md:text-[19px] leading-[1.9] font-light mt-6 text-white/65 max-w-xl mx-auto">
                        Building Financial Ecosystems
                    </p>
                </div>

                {/* ── Carousel ── */}
                <div className="relative">

                    {/* Swipeable / draggable viewport */}
                    <div
                        className="overflow-hidden cursor-grab active:cursor-grabbing select-none"
                        onTouchStart={onTouchStart}
                        onTouchMove={onTouchMove}
                        onTouchEnd={onTouchEnd}
                        onMouseDown={onMouseDown}
                        onMouseUp={onMouseUp}
                    >
                        <div
                            key={current}
                            style={{
                                animation: animating
                                    ? `slideOut${direction > 0 ? "Left" : "Right"} 320ms ease forwards`
                                    : `slideIn${direction > 0 ? "Right" : "Left"} 320ms ease forwards`,
                            }}
                        >
                            <Slide item={expertise[current]} index={current} />
                        </div>
                    </div>

                    {/* ── Controls ── */}
                    <div className="mt-10 md:mt-14 flex items-center justify-between">

                        {/* Dots */}
                        <div className="flex items-center gap-2">
                            {expertise.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => { goTo(i, i > current ? 1 : -1); startAuto(); }}
                                    aria-label={`Go to slide ${i + 1}`}
                                    className="transition-all duration-300 rounded-full"
                                    style={{
                                        width: i === current ? 28 : 6,
                                        height: 5,
                                        backgroundColor: i === current ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.2)",
                                    }}
                                />
                            ))}
                        </div>

                        {/* Counter */}
                        <span className="text-[12px] tabular-nums text-white/30 tracking-widest">
                            {String(current + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
                        </span>

                        {/* Arrows */}
                        <div className="flex items-center gap-3">
                            <button
                                onClick={() => { prev(); startAuto(); }}
                                className="w-11 h-11 rounded-full border border-white/15 bg-white/[0.05] flex items-center justify-center text-white/60 hover:text-white hover:bg-white/[0.12] hover:border-white/30 transition-all duration-300 active:scale-95"
                                aria-label="Previous"
                            >
                                <ChevronLeft size={18} />
                            </button>
                            <button
                                onClick={() => { next(); startAuto(); }}
                                className="w-11 h-11 rounded-full bg-white/[0.12] border border-white/20 flex items-center justify-center text-white hover:bg-white/[0.20] transition-all duration-300 active:scale-95"
                                aria-label="Next"
                            >
                                <ChevronRight size={18} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes slideInRight  { from { opacity: 0; transform: translateX(40px);  } to { opacity: 1; transform: translateX(0); } }
                @keyframes slideInLeft   { from { opacity: 0; transform: translateX(-40px); } to { opacity: 1; transform: translateX(0); } }
                @keyframes slideOutLeft  { from { opacity: 1; transform: translateX(0); } to { opacity: 0; transform: translateX(-40px); } }
                @keyframes slideOutRight { from { opacity: 1; transform: translateX(0); } to { opacity: 0; transform: translateX(40px);  } }
            `}</style>
        </section>
    );
}