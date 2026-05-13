// "use client";

// import React, { useEffect, useState } from "react";
// import {
//     ShieldCheck,
//     Landmark,
//     Globe2,
// } from "lucide-react";
// import { motion } from "framer-motion";

// const Counter = ({ end, suffix = "+" }) => {
//     const [count, setCount] = useState(0);

//     useEffect(() => {
//         let start = 0;

//         const duration = 2000;
//         const increment = end / (duration / 16);

//         const timer = setInterval(() => {
//             start += increment;

//             if (start >= end) {
//                 setCount(end);
//                 clearInterval(timer);
//             } else {
//                 setCount(Math.floor(start));
//             }
//         }, 16);

//         return () => clearInterval(timer);
//     }, [end]);

//     return (
//         <span>
//             {count}
//             {suffix}
//         </span>
//     );
// };

// const MyWork = () => {
//     const expertise = [
//         {
//             icon: <ShieldCheck size={38} />,
//             title: "Debt Resolution & Financial Recovery",
//             desc: "Building structured, compliance-driven recovery and credit management systems across regulated markets.",
//             points: [
//                 "Creditor recovery efficiency",
//                 "Regulatory adherence",
//                 "Ethical engagement standards",
//                 "Structured legal escalation frameworks",
//             ],
//             impact:
//                 "Developed operational models serving financial institutions, NBFCs, and lending ecosystems across multiple jurisdictions.",
//         },
//         {
//             icon: <Landmark size={38} />,
//             title: "Fintech for Social Impact",
//             desc: "Building India's leading legal-fintech platform to democratize access to debt resolution. Makes formal insolvency processes accessible and understandable for the common citizen, fueling the #DebtFreeIndia movement.",
//             points: [
//                 "Formal insolvency accessibility",
//                 "Debt-free financial guidance",
//                 "Digital engagement systems",
//                 "Responsible restructuring pathways",
//             ],
//             impact:
//                 "Platform guiding thousands of individuals toward structured debt-free living. Recognized for Category Creation & Innovation at the ET Brand Equity DigiPlus Awards 2026.",
//         },
//         {
//             icon: <Globe2 size={38} />,
//             title: "Strategic Financial Advisory & Mentorship",
//             desc: "Providing C-suite and founder-level mentorship across the group's international portfolio. Focuses on building sustainable, scalable financial services models that serve growing economies.",
//             points: [
//                 "Cross-border financial strategy",
//                 "Leadership mentorship",
//                 "Operational scalability",
//                 "Sustainable business systems",
//             ],
//             impact:
//                 "Direct leadership and strategic oversight across 150+ employees in group companies operating in India, UAE, and the United Kingdom.",
//         },
//     ];

//     return (
//         <section className="relative overflow-hidden bg-[#3E3AA8] text-white py-16 md:py-24 px-5 md:px-10 lg:px-16">

//             {/* Background Glow */}
//             <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
//                 <div className="absolute top-[-150px] left-[-100px] w-[350px] h-[350px] bg-white/5 rounded-full blur-[120px]" />
//                 <div className="absolute bottom-[-180px] right-[-120px] w-[400px] h-[400px] bg-[#6F6BFF]/20 rounded-full blur-[140px]" />
//             </div>

//             <div className="relative z-10 max-w-7xl mx-auto">

//                 {/* Heading */}
//                 <div className="max-w-4xl mx-auto text-center">

//                     <p className="uppercase tracking-[4px] text-white/60 text-[12px] md:text-[14px] mb-5">
//                         Expertise & Leadership
//                     </p>

//                     <h2 className="text-[34px] sm:text-[50px] md:text-[72px] leading-[1.05] font-semibold">
//                         Expertise & Core Focus Areas
//                     </h2>

//                     <p className="text-[16px] md:text-[22px] leading-[1.9] font-light mt-6 md:mt-8 text-white/80">
//                         Building Financial Ecosystems
//                     </p>
//                 </div>

//                 {/* Cards */}
//                 {/* PREMIUM PORTFOLIO EXPERTISE SECTION */}
//                 <div className="space-y-24 md:space-y-32">

//                     {expertise.map((item, i) => (
//                         <motion.div
//                             key={i}
//                             initial={{ opacity: 0, y: 80 }}
//                             whileInView={{ opacity: 1, y: 0 }}
//                             viewport={{ once: true, amount: 0.2 }}
//                             transition={{
//                                 duration: 0.9,
//                                 delay: i * 0.15,
//                                 ease: [0.22, 1, 0.36, 1],
//                             }}
//                             className={`relative grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center ${i % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""
//                                 }`}
//                         >

//                             {/* LEFT CONTENT */}
//                             <motion.div
//                                 initial={{ opacity: 0, x: -40 }}
//                                 whileInView={{ opacity: 1, x: 0 }}
//                                 transition={{ duration: 0.8 }}
//                                 className="relative"
//                             >

//                                 {/* Floating Number */}
//                                 <motion.span
//                                     animate={{
//                                         y: [0, -10, 0],
//                                     }}
//                                     transition={{
//                                         duration: 6,
//                                         repeat: Infinity,
//                                         ease: "easeInOut",
//                                     }}
//                                     className="absolute -top-10 left-0 text-[90px] md:text-[140px] font-semibold text-white/[0.05] leading-none pointer-events-none"
//                                 >
//                                     0{i + 1}
//                                 </motion.span>

//                                 {/* Icon */}
//                                 <motion.div
//                                     whileHover={{
//                                         scale: 1.08,
//                                         rotate: 4,
//                                     }}
//                                     transition={{
//                                         type: "spring",
//                                         stiffness: 200,
//                                     }}
//                                     className="relative z-10 w-16 h-16 rounded-3xl border border-white/10 bg-white/[0.06] backdrop-blur-xl flex items-center justify-center text-white shadow-[0_0_40px_rgba(255,255,255,0.05)]"
//                                 >
//                                     {item.icon}
//                                 </motion.div>

//                                 {/* Title */}
//                                 <motion.h3
//                                     initial={{ opacity: 0, y: 20 }}
//                                     whileInView={{ opacity: 1, y: 0 }}
//                                     transition={{ duration: 0.7, delay: 0.1 }}
//                                     className="relative z-10 mt-8 text-[34px] md:text-[54px] leading-[1.1] font-semibold max-w-2xl"
//                                 >
//                                     {item.title}
//                                 </motion.h3>

//                                 {/* Description */}
//                                 <motion.p
//                                     initial={{ opacity: 0, y: 20 }}
//                                     whileInView={{ opacity: 1, y: 0 }}
//                                     transition={{ duration: 0.7, delay: 0.2 }}
//                                     className="relative z-10 mt-8 text-[16px] md:text-[19px] leading-[2] text-white/70 max-w-2xl"
//                                 >
//                                     {item.desc}
//                                 </motion.p>

//                                 {/* Divider */}
//                                 <motion.div
//                                     initial={{ width: 0 }}
//                                     whileInView={{ width: 96 }}
//                                     transition={{ duration: 1, delay: 0.3 }}
//                                     className="mt-10 h-[1px] bg-white/15"
//                                 />

//                                 {/* Impact */}
//                                 <motion.p
//                                     initial={{ opacity: 0 }}
//                                     whileInView={{ opacity: 1 }}
//                                     transition={{ duration: 1, delay: 0.4 }}
//                                     className="mt-8 text-[15px] md:text-[17px] leading-[2] text-white/55 italic max-w-2xl"
//                                 >
//                                     {item.impact}
//                                 </motion.p>
//                             </motion.div>

//                             {/* RIGHT VISUAL GRID */}
//                             <motion.div
//                                 initial={{ opacity: 0, x: 40 }}
//                                 whileInView={{ opacity: 1, x: 0 }}
//                                 transition={{ duration: 0.9 }}
//                                 className="relative"
//                             >

//                                 {/* Animated Glow */}
//                                 <motion.div
//                                     animate={{
//                                         scale: [1, 1.08, 1],
//                                         opacity: [0.2, 0.35, 0.2],
//                                     }}
//                                     transition={{
//                                         duration: 8,
//                                         repeat: Infinity,
//                                         ease: "easeInOut",
//                                     }}
//                                     className="absolute inset-0 bg-white/[0.02] rounded-[40px] blur-3xl"
//                                 />

//                                 <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-5">

//                                     {item.points.map((point, idx) => (
//                                         <motion.div
//                                             key={idx}
//                                             initial={{ opacity: 0, y: 30 }}
//                                             whileInView={{ opacity: 1, y: 0 }}
//                                             transition={{
//                                                 duration: 0.7,
//                                                 delay: idx * 0.1,
//                                             }}
//                                             whileHover={{
//                                                 y: -8,
//                                                 scale: 1.02,
//                                             }}
//                                             className="group rounded-[28px] border border-white/10 bg-white/[0.04] backdrop-blur-xl p-6 md:p-7 hover:bg-white/[0.07] transition-all duration-500"
//                                         >
//                                             <div className="flex items-center justify-between">

//                                                 <motion.div
//                                                     whileHover={{
//                                                         rotate: 180,
//                                                     }}
//                                                     transition={{ duration: 0.5 }}
//                                                     className="w-10 h-10 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center"
//                                                 >
//                                                     <div className="w-2 h-2 rounded-full bg-white"></div>
//                                                 </motion.div>

//                                                 <span className="text-white/20 text-[14px]">
//                                                     0{idx + 1}
//                                                 </span>
//                                             </div>

//                                             <p className="mt-8 text-[15px] md:text-[16px] leading-[1.9] text-white/85">
//                                                 {point}
//                                             </p>
//                                         </motion.div>
//                                     ))}
//                                 </div>
//                             </motion.div>

//                             {/* Center Dot */}
//                             <motion.div
//                                 initial={{ scale: 0 }}
//                                 whileInView={{ scale: 1 }}
//                                 transition={{
//                                     type: "spring",
//                                     stiffness: 180,
//                                     delay: 0.2,
//                                 }}
//                                 className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full border border-white/20 bg-[#3E3AA8] items-center justify-center"
//                             >
//                                 <motion.div
//                                     animate={{
//                                         scale: [1, 1.6, 1],
//                                         opacity: [1, 0.5, 1],
//                                     }}
//                                     transition={{
//                                         duration: 2,
//                                         repeat: Infinity,
//                                     }}
//                                     className="w-2 h-2 rounded-full bg-white"
//                                 />
//                             </motion.div>
//                         </motion.div>
//                     ))}
//                 </div>
//                 {/* Scale & Impact */}
//                 <div className="mt-16 md:mt-24 rounded-[35px] border border-white/10 bg-white/[0.05] backdrop-blur-xl px-6 md:px-12 py-10 md:py-14">

//                     <div className="text-center">
//                         <p className="uppercase tracking-[4px] text-white/50 text-[12px] md:text-[14px] mb-5">
//                             Scale & Impact
//                         </p>

//                         <h3 className="text-[24px] md:text-[42px] leading-[1.4] font-semibold max-w-5xl mx-auto">
//                             Leading financial transformation across India, UAE,
//                             and the United Kingdom through ethical innovation
//                             and structured recovery ecosystems.
//                         </h3>
//                     </div>

//                     {/* Stats */}
//                     <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-14">

//                         <motion.div
//                             whileHover={{
//                                 y: -8,
//                                 scale: 1.03,
//                             }}
//                             transition={{
//                                 type: "spring",
//                                 stiffness: 200,
//                             }} className="group text-center rounded-[28px] border border-white/10 bg-white/[0.03] py-10 px-6 hover:bg-white/[0.06] transition-all duration-500">
//                             <h4 className="text-[48px] md:text-[72px] font-semibold leading-none">
//                                 <Counter end={40} />
//                             </h4>

//                             <p className="text-white/70 text-[14px] md:text-[17px] mt-4 leading-[1.7]">
//                                 Years of Global Financial Experience
//                             </p>
//                         </motion.div>

//                         <motion.div
//                             whileHover={{
//                                 y: -8,
//                                 scale: 1.03,
//                             }}
//                             transition={{
//                                 type: "spring",
//                                 stiffness: 200,
//                             }} className="group text-center rounded-[28px] border border-white/10 bg-white/[0.03] py-10 px-6 hover:bg-white/[0.06] transition-all duration-500">
//                             <h4 className="text-[48px] md:text-[72px] font-semibold leading-none">
//                                 <Counter end={150} />
//                             </h4>

//                             <p className="text-white/70 text-[14px] md:text-[17px] mt-4 leading-[1.7]">
//                                 Employees Across International Ventures
//                             </p>
//                         </motion.div>

//                         <motion.div
//                             whileHover={{
//                                 y: -8,
//                                 scale: 1.03,
//                             }}
//                             transition={{
//                                 type: "spring",
//                                 stiffness: 200,
//                             }} className="group text-center rounded-[28px] border border-white/10 bg-white/[0.03] py-10 px-6 hover:bg-white/[0.06] transition-all duration-500">
//                             <h4 className="text-[48px] md:text-[72px] font-semibold leading-none">
//                                 <Counter end={3} suffix="" />
//                             </h4>

//                             <p className="text-white/70 text-[14px] md:text-[17px] mt-4 leading-[1.7]">
//                                 Active International Financial Markets
//                             </p>
//                         </motion.div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default MyWork;


"use client";

import React, { useEffect, useState } from "react";
import { ShieldCheck, Landmark, Globe2 } from "lucide-react";

/* ─── Animated counter — only runs on client ────────────────────────────── */
const Counter = ({ end, suffix = "+" }) => {
    const [count, setCount] = useState(0);
    const [started, setStarted] = useState(false);

    useEffect(() => {
        if (!started) return;
        let current = 0;
        const increment = end / (2000 / 16);
        const timer = setInterval(() => {
            current += increment;
            if (current >= end) {
                setCount(end);
                clearInterval(timer);
            } else {
                setCount(Math.floor(current));
            }
        }, 16);
        return () => clearInterval(timer);
    }, [started, end]);

    // Start counting when element enters viewport
    useEffect(() => {
        const el = document.getElementById(`counter-${end}-${suffix}`);
        if (!el) return;
        const obs = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) { setStarted(true); obs.disconnect(); } },
            { threshold: 0.4 }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, [end, suffix]);

    return (
        <span id={`counter-${end}-${suffix}`}>
            {count}{suffix}
        </span>
    );
};

/* ─── Data — all content unchanged ──────────────────────────────────────── */
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
        <div className="group relative rounded-[24px] border border-white/[0.10] bg-white/[0.04] p-6 transition-all duration-400 hover:bg-white/[0.08] hover:-translate-y-1.5 hover:shadow-[0_12px_40px_rgba(0,0,0,0.25)]">
            {/* Top row */}
            <div className="flex items-center justify-between mb-5">
                <div className="w-9 h-9 rounded-xl bg-white/[0.08] border border-white/[0.10] flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-white/80" />
                </div>
                <span className="text-[11px] tabular-nums text-white/20 font-medium">
                    {String(idx + 1).padStart(2, "0")}
                </span>
            </div>
            <p className="text-[14px] md:text-[15px] leading-[1.85] text-white/80">
                {point}
            </p>
            {/* Bottom accent */}
            <div className="absolute bottom-0 left-6 right-6 h-px bg-white/0 group-hover:bg-white/10 transition-colors duration-400" />
        </div>
    );
}

/* ─── Expertise row ──────────────────────────────────────────────────────── */
function ExpertiseRow({ item, index }) {
    const isEven = index % 2 === 0;

    return (
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start ${!isEven ? "lg:[&>*:first-child]:order-2" : ""}`}>

            {/* LEFT: text */}
            <div className="relative">
                {/* Ghost number */}
                <span className="absolute -top-8 left-0 text-[100px] md:text-[130px] font-bold text-white/[0.04] leading-none pointer-events-none select-none">
                    0{index + 1}
                </span>

                {/* Icon */}
                <div className="relative z-10 w-14 h-14 rounded-2xl border border-white/[0.12] bg-white/[0.06] flex items-center justify-center text-white">
                    {item.icon}
                </div>

                {/* Title */}
                <h3 className="relative z-10 mt-7 text-[26px] sm:text-[34px] md:text-[42px] leading-[1.15] font-semibold text-white">
                    {item.title}
                </h3>

                {/* Desc */}
                <p className="relative z-10 mt-5 text-[14px] md:text-[17px] leading-[1.95] text-white/65">
                    {item.desc}
                </p>

                {/* Divider */}
                <div className="mt-8 h-px w-24 bg-white/15" />

                {/* Impact */}
                <p className="mt-7 text-[13px] md:text-[15px] leading-[1.9] text-white/45 italic border-l-2 border-white/15 pl-4">
                    {item.impact}
                </p>
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
    return (
        <section className="relative overflow-hidden bg-[#3E3AA8] text-white py-16 md:py-24 px-5 md:px-10 lg:px-16">

            {/* Background glows */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-150px] left-[-100px] w-[350px] h-[350px] bg-white/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-180px] right-[-120px] w-[400px] h-[400px] bg-[#6F6BFF]/20 rounded-full blur-[140px]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/[0.02] rounded-full blur-[100px]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto">

                {/* ── Heading ───────────────────────────────────────── */}
                <div className="max-w-4xl mx-auto text-center mb-20 md:mb-28">
                    <div className="flex items-center justify-center gap-3 mb-5">
                        <div className="w-8 h-px bg-white/30" />
                        <p className="uppercase tracking-[5px] text-white/50 text-[10px] md:text-[11px] font-semibold">
                            Expertise &amp; Leadership
                        </p>
                        <div className="w-8 h-px bg-white/30" />
                    </div>

                    <h2 className="text-[32px] sm:text-[48px] md:text-[64px] leading-[1.05] font-semibold">
                        Expertise &amp; Core Focus Areas
                    </h2>

                    <p className="text-[15px] md:text-[19px] leading-[1.9] font-light mt-6 text-white/65 max-w-xl mx-auto">
                        Building Financial Ecosystems
                    </p>
                </div>

                {/* ── Expertise rows ─────────────────────────────────── */}
                <div className="space-y-20 md:space-y-28">
                    {expertise.map((item, i) => (
                        <div key={i}>
                            <ExpertiseRow item={item} index={i} />
                            {i < expertise.length - 1 && (
                                <div className="mt-20 md:mt-28 h-px w-full bg-white/[0.07]" />
                            )}
                        </div>
                    ))}
                </div>

                {/* ── Scale & Impact ──────────────────────────────────── */}
                <div className="mt-20 md:mt-28 rounded-[28px] border border-white/[0.10] bg-white/[0.04] backdrop-blur-xl px-6 md:px-12 py-10 md:py-14">

                    <div className="text-center mb-12">
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <div className="w-6 h-px bg-white/25" />
                            <p className="uppercase tracking-[5px] text-white/40 text-[10px] font-semibold">
                                Scale &amp; Impact
                            </p>
                            <div className="w-6 h-px bg-white/25" />
                        </div>

                        <h3 className="text-[20px] md:text-[36px] leading-[1.4] font-semibold max-w-4xl mx-auto text-white/90">
                            Leading financial transformation across India, UAE,
                            and the United Kingdom through ethical innovation
                            and structured recovery ecosystems.
                        </h3>
                    </div>

                    {/* Stats */}
                    {/* <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                        {[
                            { end: 40, suffix: "+", label: "Years of Global Financial Experience" },
                            { end: 150, suffix: "+", label: "Employees Across International Ventures" },
                            { end: 3, suffix: "", label: "Active International Financial Markets" },
                        ].map((s, i) => (
                            <div
                                key={i}
                                className="group text-center rounded-[22px] border border-white/[0.10] bg-white/[0.03] py-9 px-6 transition-all duration-400 hover:bg-white/[0.07] hover:-translate-y-1.5 hover:shadow-[0_12px_48px_rgba(0,0,0,0.3)]"
                            >
                              
                                <div className="w-1.5 h-1.5 rounded-full bg-white/30 mx-auto mb-6" />

                                <h4 className="text-[44px] md:text-[64px] font-bold leading-none tracking-[-2px]">
                                    <Counter end={s.end} suffix={s.suffix} />
                                </h4>

                                <div className="w-8 h-px bg-white/20 mx-auto mt-5 mb-4" />

                                <p className="text-white/55 text-[12px] md:text-[14px] leading-[1.7] max-w-[180px] mx-auto">
                                    {s.label}
                                </p>
                            </div>
                        ))}
                    </div> */}
                </div>

            </div>
        </section>
    );
}