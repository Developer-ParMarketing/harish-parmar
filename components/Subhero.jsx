// "use client";

// import React from "react";
// import { motion } from "framer-motion";

// const Subhero = () => {
//     const history = [
//         {
//             year: "1994",
//             title: "Academic & Early UK Foundation",
//             desc: "Harish Parmar, founder of SingleDebt, graduated from The University of Manchester Institute of Science and Technology (UMIST) and began consulting on the design of financial products for banks in the UK and USA.",
//         },
//         {
//             year: "1999",
//             title: "India Market Entry & Institutional Building",
//             desc: "Founded One Debt, a debt management company catering to UK nationals, at a time when consumer debt in the UK was increasing significantly (peaking at 156.4% of household disposable income in 2008).",
//         },
//         {
//             year: "2007",
//             title: "BPO & Financial Operations Expansion",
//             desc: "Established a Business Process Outsourcing (BPO) center in India to support financial products and banking services for clients in the UK and USA.",
//         },
//         {
//             year: "2020s",
//             title: "Ecosystem Leadership & Mass Impact",
//             desc: "Founded SingleDebt, introducing a structured legal-fintech model for debt resolution in India.",
//             points: [
//                 "Simplify formal insolvency processes",
//                 "Provide structured debt relief pathways",
//                 "Digitize engagement between clients and advisors",
//                 "Promote financial literacy and responsible restructuring",
//             ],
//             extra:
//                 "This marked a shift from service execution to ecosystem innovation.",
//         },
//         {
//             year: "2021",
//             title: "First Debt Management Platform",
//             desc: "Introduced a customer-first Debt Management Platform, providing easy access to representatives and online resources for debt solutions, significantly reducing time and effort for clients.",
//         },
//         {
//             year: "2022",
//             title: "UAE Expansion – Dubai Headquarters",
//             desc: "Expanded operations to the UAE, establishing Dubai as a regional headquarters. Extended services to the GCC (Gulf Cooperation Council) market — marking a strategic international growth milestone and strengthening cross-border financial service capability.",
//         },
//         {
//             year: "2023",
//             title: "Industry Recognition",
//             desc: "Awarded the 'Best Debt Management Company in India & UAE' by SOS Nitelife, recognizing SingleDebt's excellence and commitment to client success.",
//         },
//         {
//             year: "2024",
//             title: "Technology Acceleration & Fintech Recognition",
//             desc: "Launched the SingleDebt customer app and digital portal, strengthening accessibility and digital engagement. Additionally, SingleDebt was shortlisted as a finalist at the India FinTech Awards (IFTA) 2024 in the Fintech of the Year category, from nominations across 20 countries.",
//         },
//         {
//             year: "Present & Future",
//             title: "Cross-Border Financial Leadership",
//             desc: "With four decades of global financial exposure spanning the UK, India, and UAE, Harish Parmar now oversees a diversified portfolio of financial ventures focused on Ethical debt resolution, Structured financial recovery, Legal-fintech innovation and Cross-border financial compliance.",
//         },
//     ];

//     return (
//         <section className="w-full px-5 md:px-10 lg:px-16 py-16 md:py-24 bg-[#fafafa] overflow-hidden relative">

//             {/* Background Glow */}
//             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#4D4AB8]/5 blur-[140px] rounded-full"></div>

//             <div className="max-w-7xl mx-auto relative z-10">

//                 {/* Heading */}
//                 <motion.div
//                     initial={{ opacity: 0, y: 40 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.8 }}
//                     viewport={{ once: true }}
//                     className="text-center max-w-4xl mx-auto mb-16 md:mb-20"
//                 >
//                     <p className="uppercase tracking-[4px] text-[#4D4AB8] text-[12px] md:text-[14px] mb-5 font-medium">
//                         Professional Journey
//                     </p>

//                     <h2 className="text-[34px] sm:text-[48px] md:text-[68px] leading-[1.05] font-semibold text-black">
//                         A Timeline of Global Financial Leadership
//                     </h2>

//                     <p className="mt-6 md:mt-8 text-[16px] md:text-[20px] leading-[1.9] text-[#555] font-light">
//                         Harish Parmar’s journey reflects a rare blend of
//                         international exposure, system-building expertise, and
//                         long-term industry shaping — spanning the UK, India,
//                         and the UAE.
//                     </p>
//                 </motion.div>

//                 {/* Timeline */}
//                 <div className="relative">

//                     {/* Desktop Center Line */}
//                     <div className="hidden lg:block absolute left-1/2 top-0 h-full w-[2px] bg-gradient-to-b from-[#4D4AB8]/10 via-[#4D4AB8]/30 to-transparent -translate-x-1/2"></div>

//                     {/* Mobile Left Line */}
//                     <div className="lg:hidden absolute left-[18px] top-0 h-full w-[2px] bg-[#4D4AB8]/20"></div>

//                     <div className="space-y-8 md:space-y-10">

//                         {history.map((item, i) => (
//                             <motion.div
//                                 key={i}
//                                 initial={{
//                                     opacity: 0,
//                                     y: 40,
//                                 }}
//                                 whileInView={{
//                                     opacity: 1,
//                                     y: 0,
//                                 }}
//                                 transition={{ duration: 0.7 }}
//                                 viewport={{ once: true }}
//                                 className={`relative flex flex-col lg:flex-row gap-6 lg:gap-10 ${i % 2 !== 0 ? "lg:flex-row-reverse" : ""
//                                     }`}
//                             >

//                                 {/* Dot */}
//                                 <div className="absolute left-[7px] lg:left-1/2 top-8 lg:-translate-x-1/2 z-20">
//                                     <div className="w-6 h-6 rounded-full bg-white border-[5px] border-[#4D4AB8] shadow-lg"></div>
//                                 </div>

//                                 {/* Card */}
//                                 <div className="w-full lg:w-1/2 pl-12 lg:pl-0">

//                                     <div className="group relative bg-white border border-gray-200/70 rounded-[32px] p-6 md:p-8 lg:p-10 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden">

//                                         {/* Hover Glow */}
//                                         <div className="absolute inset-0 bg-gradient-to-br from-[#4D4AB8]/0 via-[#4D4AB8]/0 to-[#4D4AB8]/5 opacity-0 group-hover:opacity-100 transition duration-500"></div>

//                                         {/* Year Badge */}
//                                         <div className="inline-flex items-center justify-center bg-[#4D4AB8]/10 text-[#4D4AB8] px-4 py-2 rounded-full text-[13px] md:text-[15px] font-semibold tracking-wide">
//                                             {item.year}
//                                         </div>

//                                         {/* Title */}
//                                         <h3 className="text-[24px] md:text-[32px] leading-[1.3] font-semibold text-black mt-5">
//                                             {item.title}
//                                         </h3>

//                                         {/* Divider */}
//                                         <div className="w-16 h-[2px] bg-[#4D4AB8] mt-6 mb-6 rounded-full"></div>

//                                         {/* Description */}
//                                         <p className="text-[15px] md:text-[18px] leading-[1.9] text-[#555] font-light">
//                                             {item.desc}
//                                         </p>

//                                         {/* Points */}
//                                         {item.points && (
//                                             <ul className="mt-6 space-y-4">
//                                                 {item.points.map((point, idx) => (
//                                                     <li
//                                                         key={idx}
//                                                         className="flex items-start gap-3 text-[15px] md:text-[17px] text-[#444]"
//                                                     >
//                                                         <span className="mt-[9px] w-2 h-2 rounded-full bg-[#4D4AB8] shrink-0"></span>

//                                                         <span className="leading-[1.8]">
//                                                             {point}
//                                                         </span>
//                                                     </li>
//                                                 ))}
//                                             </ul>
//                                         )}

//                                         {/* Extra */}
//                                         {item.extra && (
//                                             <p className="text-[15px] md:text-[17px] leading-[1.9] text-[#666] font-light mt-6 italic border-l-2 border-[#4D4AB8] pl-4">
//                                                 {item.extra}
//                                             </p>
//                                         )}
//                                     </div>
//                                 </div>

//                                 {/* Empty Space Desktop */}
//                                 <div className="hidden lg:block w-1/2"></div>
//                             </motion.div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Subhero;
"use client";

import React, { useRef, useEffect, useCallback, useState } from "react";

/* ─── Icons ──────────────────────────────────────────────────────────────── */
const Icon = ({ name, className = "w-5 h-5" }) => {
    const map = {
        graduation: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" className={className}>
                <path d="M22 10v6M2 10l10-5 10 5-10 5-10-5z" />
                <path d="M6 12v5c0 1.657 2.686 3 6 3s6-1.343 6-3v-5" />
            </svg>
        ),
        building: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" className={className}>
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M9 3v18M15 3v18M3 9h18M3 15h18" />
            </svg>
        ),
        globe: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" className={className}>
                <circle cx="12" cy="12" r="9" />
                <path d="M12 3a14.5 14.5 0 0 1 0 18M12 3a14.5 14.5 0 0 0 0 18M3 12h18" />
            </svg>
        ),
        rocket: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" className={className}>
                <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09zM12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
            </svg>
        ),
        monitor: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" className={className}>
                <rect x="2" y="3" width="20" height="14" rx="2" />
                <path d="M8 21h8M12 17v4" />
            </svg>
        ),
        map: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" className={className}>
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
            </svg>
        ),
        award: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" className={className}>
                <circle cx="12" cy="8" r="6" />
                <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
            </svg>
        ),
        smartphone: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" className={className}>
                <rect x="5" y="2" width="14" height="20" rx="2" />
                <path d="M12 18h.01" />
            </svg>
        ),
        compass: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" className={className}>
                <circle cx="12" cy="12" r="10" />
                <path d="m16.24 7.76-2.12 6.36-6.36 2.12 2.12-6.36 6.36-2.12z" />
            </svg>
        ),
    };
    return map[name] || null;
};

/* ─── Data ───────────────────────────────────────────────────────────────── */
const history = [
    {
        year: "1994", icon: "graduation", color: "#6366f1",
        title: "Academic & Early UK Foundation",
        desc: "Harish Parmar, founder of SingleDebt, graduated from The University of Manchester Institute of Science and Technology (UMIST) and began consulting on the design of financial products for banks in the UK and USA.",
    },
    {
        year: "1999", icon: "building", color: "#0ea5e9",
        title: "India Market Entry & Institutional Building",
        desc: "Founded One Debt, a debt management company catering to UK nationals, at a time when consumer debt in the UK was increasing significantly (peaking at 156.4% of household disposable income in 2008).",
    },
    {
        year: "2007", icon: "globe", color: "#10b981",
        title: "BPO & Financial Operations Expansion",
        desc: "Established a Business Process Outsourcing (BPO) center in India to support financial products and banking services for clients in the UK and USA.",
    },
    {
        year: "2020s", icon: "rocket", color: "#f59e0b",
        title: "Ecosystem Leadership & Mass Impact",
        desc: "Founded SingleDebt, introducing a structured legal-fintech model for debt resolution in India.",
        points: [
            "Simplify formal insolvency processes",
            "Provide structured debt relief pathways",
            "Digitize engagement between clients and advisors",
            "Promote financial literacy and responsible restructuring",
        ],
        extra: "This marked a shift from service execution to ecosystem innovation.",
    },
    {
        year: "2021", icon: "monitor", color: "#8b5cf6",
        title: "First Debt Management Platform",
        desc: "Introduced a customer-first Debt Management Platform, providing easy access to representatives and online resources for debt solutions, significantly reducing time and effort for clients.",
    },
    {
        year: "2022", icon: "map", color: "#ef4444",
        title: "UAE Expansion – Dubai Headquarters",
        desc: "Expanded operations to the UAE, establishing Dubai as a regional headquarters. Extended services to the GCC (Gulf Cooperation Council) market — marking a strategic international growth milestone and strengthening cross-border financial service capability.",
    },
    {
        year: "2023", icon: "award", color: "#f97316",
        title: "Industry Recognition",
        desc: "Awarded the 'Best Debt Management Company in India & UAE' by SOS Nitelife, recognizing SingleDebt's excellence and commitment to client success.",
    },
    {
        year: "2024", icon: "smartphone", color: "#06b6d4",
        title: "Technology Acceleration & Fintech Recognition",
        desc: "Launched the SingleDebt customer app and digital portal, strengthening accessibility and digital engagement. Additionally, SingleDebt was shortlisted as a finalist at the India FinTech Awards (IFTA) 2024 in the Fintech of the Year category, from nominations across 20 countries.",
    },
    {
        year: "Present & Future", icon: "compass", color: "#4D4AB8",
        title: "Cross-Border Financial Leadership",
        desc: "With four decades of global financial exposure spanning the UK, India, and UAE, Harish Parmar now oversees a diversified portfolio of financial ventures focused on Ethical debt resolution, Structured financial recovery, Legal-fintech innovation and Cross-border financial compliance.",
    },
];

const CARD_W = 340;
const CARD_GAP = 16;
const STEP = CARD_W + CARD_GAP;

/* ─── Card ───────────────────────────────────────────────────────────────── */
function TimelineCard({ item, index, total, isActive }) {
    return (
        <div
            className="flex-shrink-0 flex flex-col"
            style={{ width: CARD_W, marginRight: CARD_GAP }}
        >
            {/* Connector row */}
            <div className="flex items-center" style={{ height: 52 }}>
                <div
                    className="flex-1 h-px"
                    style={{ background: `linear-gradient(to right, rgba(0,0,0,0.06), ${item.color}55)` }}
                />
                <div className="relative flex-shrink-0 mx-2">
                    {isActive && (
                        <div
                            className="absolute rounded-full opacity-20 animate-ping"
                            style={{
                                inset: -4,
                                backgroundColor: item.color,
                                animationDuration: `${2 + (index % 4) * 0.5}s`,
                            }}
                        />
                    )}
                    <div
                        className="relative w-10 h-10 rounded-full flex items-center justify-center transition-transform duration-300"
                        style={{
                            backgroundColor: item.color,
                            boxShadow: `0 4px 16px ${item.color}55`,
                            transform: isActive ? "scale(1.1)" : "scale(1)",
                        }}
                    >
                        <span className="text-white">
                            <Icon name={item.icon} />
                        </span>
                    </div>
                </div>
                <div
                    className="flex-1 h-px"
                    style={{ background: `linear-gradient(to right, ${item.color}55, rgba(0,0,0,0.06))` }}
                />
            </div>

            {/* Card body */}
            <div className="pt-3 flex-1 flex flex-col">
                <div
                    className="group relative bg-white rounded-[20px] border overflow-hidden flex flex-col flex-1 transition-all duration-300 hover:shadow-[0_8px_40px_rgba(0,0,0,0.11)]"
                    style={{
                        padding: "20px 22px 22px",
                        boxShadow: isActive
                            ? `0 4px 24px ${item.color}33`
                            : "0 2px 12px rgba(0,0,0,0.06)",
                        borderColor: isActive ? `${item.color}40` : "rgba(0,0,0,0.07)",
                    }}
                >
                    {/* Hover wash */}
                    <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                        style={{ background: `radial-gradient(ellipse at 20% 20%, ${item.color}0d, transparent 60%)` }}
                    />

                    {/* Year + counter */}
                    <div className="flex items-center justify-between mb-3 relative">
                        <div
                            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold tracking-wide"
                            style={{ backgroundColor: `${item.color}15`, color: item.color }}
                        >
                            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: item.color }} />
                            {item.year}
                        </div>
                        <span className="text-[10px] text-black/20 tabular-nums">
                            {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
                        </span>
                    </div>

                    {/* Icon chip */}
                    <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center mb-3 relative"
                        style={{ backgroundColor: `${item.color}12`, color: item.color }}
                    >
                        <Icon name={item.icon} />
                    </div>

                    {/* Title */}
                    <h3 className="text-[15px] font-bold text-gray-900 leading-[1.35] mb-2 relative">
                        {item.title}
                    </h3>

                    {/* Accent bar */}
                    <div
                        className="w-6 h-[2px] rounded-full mb-3 relative"
                        style={{ backgroundColor: item.color }}
                    />

                    {/* Desc */}
                    <p className="text-[13px] leading-[1.85] text-gray-600 flex-1 relative">
                        {item.desc}
                    </p>

                    {/* Points */}
                    {item.points && (
                        <ul className="mt-3 space-y-1.5 relative">
                            {item.points.map((pt, i) => (
                                <li key={i} className="flex items-start gap-2 text-[12.5px] text-gray-600 leading-[1.75]">
                                    <span
                                        className="mt-[6px] w-1.5 h-1.5 rounded-full flex-shrink-0"
                                        style={{ backgroundColor: item.color }}
                                    />
                                    {pt}
                                </li>
                            ))}
                        </ul>
                    )}

                    {/* Extra */}
                    {item.extra && (
                        <p
                            className="text-[12px] leading-[1.8] text-gray-500 italic mt-3 pl-3 border-l-2 relative"
                            style={{ borderColor: item.color }}
                        >
                            {item.extra}
                        </p>
                    )}

                    {/* Bottom bar on hover */}
                    <div
                        className="absolute bottom-0 left-0 right-0 h-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{ background: `linear-gradient(90deg, ${item.color}, ${item.color}44)` }}
                    />
                </div>
            </div>
        </div>
    );
}

/* ─── Main ───────────────────────────────────────────────────────────────── */
export default function Subhero() {
    const trackRef = useRef(null);
    const animRef = useRef(null);
    const pausedRef = useRef(false);
    const posRef = useRef(0);
    const dragRef = useRef({ active: false, startX: 0, startPos: 0 });
    const touchRef = useRef({ startX: 0, startPos: 0 });

    const [mounted, setMounted] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => { setMounted(true); }, []);

    const doubled = [...history, ...history];

    /* Update active dot based on scroll position */
    const updateActiveDot = useCallback(() => {
        const el = trackRef.current;
        if (!el) return;
        const half = el.scrollWidth / 2;
        const safePos = posRef.current % half;
        const idx = Math.round(safePos / STEP) % history.length;
        setActiveIndex(idx);
    }, []);

    /* Auto-scroll */
    useEffect(() => {
        if (!mounted) return;
        const el = trackRef.current;
        if (!el) return;

        let halfWidth = 0;
        const init = requestAnimationFrame(() => {
            halfWidth = el.scrollWidth / 2;
            const tick = () => {
                if (!pausedRef.current) {
                    posRef.current += 0.5;
                    if (posRef.current >= halfWidth) posRef.current = 0;
                    el.scrollLeft = posRef.current;
                    updateActiveDot();
                }
                animRef.current = requestAnimationFrame(tick);
            };
            animRef.current = requestAnimationFrame(tick);
        });

        return () => {
            cancelAnimationFrame(init);
            cancelAnimationFrame(animRef.current);
        };
    }, [mounted, updateActiveDot]);

    const pause = useCallback(() => { pausedRef.current = true; }, []);
    const resume = useCallback(() => { pausedRef.current = false; }, []);

    /* Dot click — jump to card */
    const jumpTo = useCallback((idx) => {
        const el = trackRef.current;
        if (!el) return;
        pause();
        const target = idx * STEP;
        posRef.current = target;
        el.scrollLeft = target;
        setActiveIndex(idx);
        setTimeout(resume, 1200);
    }, [pause, resume]);

    /* Arrow nudge */
    const nudge = useCallback((dir) => {
        const el = trackRef.current;
        if (!el) return;
        pause();
        const half = el.scrollWidth / 2;
        let next = posRef.current + dir * STEP;
        if (next < 0) next = 0;
        if (next >= half) next = 0;
        posRef.current = next;
        el.scrollLeft = next;
        updateActiveDot();
        setTimeout(resume, 700);
    }, [pause, resume, updateActiveDot]);

    /* Mouse drag */
    const onMouseDown = useCallback((e) => {
        const el = trackRef.current;
        if (!el) return;
        pause();
        dragRef.current = { active: true, startX: e.clientX, startPos: posRef.current };
        el.style.cursor = "grabbing";
        e.preventDefault();
    }, [pause]);

    const onMouseMove = useCallback((e) => {
        if (!dragRef.current.active) return;
        const el = trackRef.current;
        if (!el) return;
        const dx = e.clientX - dragRef.current.startX;
        const next = Math.max(0, dragRef.current.startPos - dx);
        posRef.current = next;
        el.scrollLeft = next;
        updateActiveDot();
    }, [updateActiveDot]);

    const onMouseUp = useCallback(() => {
        if (!dragRef.current.active) return;
        dragRef.current.active = false;
        const el = trackRef.current;
        if (el) el.style.cursor = "grab";
        setTimeout(resume, 1000);
    }, [resume]);

    /* Touch drag */
    const onTouchStart = useCallback((e) => {
        pause();
        touchRef.current = { startX: e.touches[0].clientX, startPos: posRef.current };
    }, [pause]);

    const onTouchMove = useCallback((e) => {
        const el = trackRef.current;
        if (!el) return;
        const dx = e.touches[0].clientX - touchRef.current.startX;
        const next = Math.max(0, touchRef.current.startPos - dx);
        posRef.current = next;
        el.scrollLeft = next;
        updateActiveDot();
    }, [updateActiveDot]);

    const onTouchEnd = useCallback(() => {
        setTimeout(resume, 800);
    }, [resume]);

    useEffect(() => {
        window.addEventListener("mousemove", onMouseMove);
        window.addEventListener("mouseup", onMouseUp);
        return () => {
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("mouseup", onMouseUp);
        };
    }, [onMouseMove, onMouseUp]);

    return (
        <section className="w-full py-16 md:py-24 bg-[#fafafa] overflow-hidden relative">

            {/* Bg glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[#4D4AB8]/5 blur-[130px] rounded-full pointer-events-none" />

            {/* Hide scrollbar cross-browser */}
            <style>{`
                .timeline-track::-webkit-scrollbar { display: none; }
                .timeline-track { -ms-overflow-style: none; scrollbar-width: none; }
            `}</style>

            <div className="relative z-10">

                {/* Heading */}
                <div className="text-center max-w-3xl mx-auto mb-10 px-5">
                    <p className="uppercase tracking-[5px] text-[#4D4AB8] text-[10px] md:text-[11px] mb-4 font-semibold">
                        Professional Journey
                    </p>
                    <h2 className="text-[28px] sm:text-[40px] md:text-[54px] leading-[1.05] font-semibold text-black">
                        A Timeline of Global{" "}
                        <span className="text-[#4D4AB8]">Financial Leadership</span>
                    </h2>
                    <p className="mt-5 text-[14px] md:text-[17px] leading-[1.9] text-gray-500 font-light max-w-2xl mx-auto">
                        Harish Parmar's journey reflects a rare blend of international exposure,
                        system-building expertise, and long-term industry shaping — spanning
                        the UK, India, and the UAE.
                    </p>
                </div>

                {/* Controls */}
                <div className="flex items-center justify-between px-5 md:px-10 lg:px-14 mb-5">
                    <p className="text-[11px] uppercase tracking-[3px] text-black/25 hidden sm:block">
                        Drag or use arrows to explore
                    </p>
                    <div className="flex items-center gap-2 ml-auto">
                        <button
                            onClick={() => nudge(-1)}
                            className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center text-[16px] text-black/40 hover:border-[#4D4AB8] hover:text-[#4D4AB8] transition-all duration-300"
                            aria-label="Previous"
                        >←</button>
                        <button
                            onClick={() => nudge(1)}
                            className="w-10 h-10 rounded-full bg-[#4D4AB8] flex items-center justify-center text-[16px] text-white hover:bg-[#3d3aa0] active:scale-95 transition-all duration-300"
                            aria-label="Next"
                        >→</button>
                    </div>
                </div>

                {/* Track */}
                <div className="relative select-none">
                    <div
                        ref={trackRef}
                        onMouseDown={onMouseDown}
                        onMouseEnter={pause}
                        onMouseLeave={() => { if (!dragRef.current.active) resume(); }}
                        onTouchStart={onTouchStart}
                        onTouchMove={onTouchMove}
                        onTouchEnd={onTouchEnd}
                        className="timeline-track flex overflow-x-scroll"
                        style={{
                            cursor: "grab",
                            paddingLeft: 24,
                            paddingRight: 24,
                            paddingBottom: 20,
                            alignItems: "flex-start",
                        }}
                    >
                        {doubled.map((item, i) => (
                            <TimelineCard
                                key={i}
                                item={item}
                                index={i % history.length}
                                total={history.length}
                                isActive={mounted && (i % history.length) === activeIndex}
                            />
                        ))}
                    </div>

                    {/* Fade masks */}
                    <div
                        className="absolute left-0 top-0 bottom-5 pointer-events-none z-10"
                        style={{ width: "clamp(12px, 4vw, 48px)", background: "linear-gradient(to right, #fafafa, transparent)" }}
                    />
                    <div
                        className="absolute right-0 top-0 bottom-5 pointer-events-none z-10"
                        style={{ width: "clamp(12px, 4vw, 48px)", background: "linear-gradient(to left, #fafafa, transparent)" }}
                    />
                </div>

                {/* Progress dots — now clickable + reactive */}
                <div className="flex items-center justify-center gap-2 mt-4">
                    {history.map((item, i) => (
                        <button
                            key={i}
                            onClick={() => jumpTo(i)}
                            aria-label={`Go to ${item.year}`}
                            className="transition-all duration-300 rounded-full"
                            style={{
                                width: i === activeIndex ? 24 : 6,
                                height: 4,
                                backgroundColor: i === activeIndex ? item.color : "rgba(0,0,0,0.1)",
                            }}
                        />
                    ))}
                </div>

                {/* Active card label under dots */}
                {mounted && (
                    <p className="text-center text-[11px] uppercase tracking-[3px] text-black mt-3">
                        {history[activeIndex]?.year} — {history[activeIndex]?.title}
                    </p>
                )}


            </div>
        </section>
    );
}