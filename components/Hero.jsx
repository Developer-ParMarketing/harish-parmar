// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import React from "react";
// import { motion } from "framer-motion";

// const Hero = () => {
//     return (
//         <section className="w-full px-6 md:px-12 lg:px-16 pt-16 pb-20 md:pt-24 md:pb-28 bg-white">
//             <div className="max-w-7xl mx-auto">
//                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

//                     {/* Left - Image */}
//                     <motion.div
//                         initial={{ opacity: 0, y: 40 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.9 }}
//                         className="flex justify-center lg:justify-end"
//                     >
//                         <div className="w-full flex flex-col items-center">
//                             <Image
//                                 src="/harish.png"
//                                 width={650}
//                                 height={750}
//                                 alt="Harish Parmar"
//                                 className="object-cover w-full md:max-w-[570px] max-w-[320px]"
//                             />

//                             <p className="text-[14px] text-gray-500 mt-4">
//                                 Founder & Financial Strategist
//                             </p>
//                         </div>
//                     </motion.div>

//                     {/* Right - Content */}
//                     <motion.div
//                         initial={{ opacity: 0, y: 40 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.9, delay: 0.2 }}
//                         className="space-y-8 lg:pt-8"
//                     >
//                         <div>
//                             <p className="uppercase tracking-[4px] text-[#4D4AB8] text-sm font-medium mb-2">
//                                 THE FINANCIAL VISIONARY
//                             </p>
//                             <h1 className="text-5xl md:text-6xl lg:text-[68px] leading-[1.05] font-semibold text-black">
//                                 Harish <span className="text-[#4D4AB8]">Parmar</span>
//                             </h1>
//                         </div>

//                         {/* Headline */}
//                         <h2 className="text-2xl md:text-3xl lg:text-[34px] leading-tight font-light text-gray-800">
//                             Architecting Financial Solutions Across Borders
//                         </h2>

//                         {/* Subheadline */}
//                         <h3 className="text-[19px] md:text-[21px] leading-relaxed text-gray-600">
//                             Founder - Leading Financial Groups in India, UAE, UK |
//                             Fintech Pioneer & Debt Freedom Advocate
//                         </h3>

//                         {/* Divider */}
//                         <div className="w-20 h-px bg-gradient-to-r from-[#4D4AB8] to-transparent" />

//                         {/* Short Intro */}
//                         <p className="text-[17.5px] md:text-[18.5px] leading-relaxed text-gray-600 max-w-lg">
//                             For over four decades, Harish Parmar has been a transformative
//                             force in global finance. From foundational advisory roles to
//                             pioneering fintech ventures across three continents, his
//                             career is dedicated to building systems that empower
//                             individuals, businesses, and the broader economy towards
//                             sustainable financial freedom.
//                         </p>

//                         {/* CTA Buttons */}
//                         <div className="flex flex-wrap gap-4 pt-6">
//                             <Link
//                                 href="https://linkedin.com"
//                                 target="_blank"
//                                 className="group bg-[#4D4AB8] hover:bg-[#3c3a9e] text-white px-5 sm:px-7 md:px-9 py-3 md:py-4 rounded-2xl text-[14px] sm:text-[15px] md:text-[17px] font-medium flex items-center gap-2 md:gap-3 transition-all duration-300 hover:shadow-xl hover:shadow-[#4D4AB8]/30 w-full sm:w-auto justify-center"
//                             >
//                                 <span className="text-center">
//                                     Connect on LinkedIn
//                                 </span>

//                                 <span className="group-hover:rotate-45 transition-transform text-[16px] md:text-[18px]">
//                                     ↗
//                                 </span>
//                             </Link>

//                             <Link
//                                 href="/about"
//                                 className="group border-2 border-[#4D4AB8] text-[#4D4AB8] hover:bg-[#4D4AB8] hover:text-white px-5 sm:px-7 md:px-9 py-3 md:py-4 rounded-2xl text-[14px] sm:text-[15px] md:text-[17px] font-medium transition-all duration-300 w-full sm:w-auto text-center"
//                             >
//                                 Explore His Journey
//                             </Link>
//                         </div>
//                     </motion.div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Hero;

"use client"

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Hero = () => {
    // ── Hydration fix: animations only run after client mount ──
    const [mounted, setMounted] = useState(false);
    useEffect(() => { setMounted(true); }, []);

    // Shared animation props — on server these are no-ops (no initial/animate)
    const fadeUp = (delay = 0) => mounted ? {
        initial: { opacity: 0, y: 16 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6, delay },
    } : {};

    const fadeIn = (delay = 0) => mounted ? {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.6, delay },
    } : {};

    const float = (dy, duration, delay = 0) => mounted ? {
        animate: { y: [0, dy, 0] },
        transition: { duration, repeat: Infinity, ease: "easeInOut", delay },
    } : {};

    return (
        <section className="relative bg-white overflow-hidden">

            {/* ── BACKGROUND ──────────────────────────────────────────── */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#4D4AB8]/6 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/4" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#4D4AB8]/4 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/4" />
                <div
                    className="absolute inset-0 opacity-[0.02]"
                    style={{
                        backgroundImage: "linear-gradient(to right, #4D4AB8 1px, transparent 1px), linear-gradient(to bottom, #4D4AB8 1px, transparent 1px)",
                        backgroundSize: "60px 60px",
                    }}
                />
            </div>

            {/* ── CONTENT ─────────────────────────────────────────────── */}
            <div className="relative z-10 max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-16">
                <div className="flex flex-col lg:flex-row lg:items-end lg:gap-12 xl:gap-16 min-h-screen lg:min-h-0">

                    {/* ════ LEFT ════════════════════════════════════════ */}
                    <div className="flex-1 flex flex-col justify-center pt-10 pb-8 lg:pt-24 lg:pb-20 order-2 lg:order-1">

                        {/* Top label */}
                        <motion.div
                            {...fadeUp(0)}
                            className="flex items-center justify-center lg:justify-start gap-3 mb-6"
                        >
                            <div className="w-8 h-px bg-[#4D4AB8] shrink-0" />

                            <span className="text-[10px] uppercase tracking-[5px] text-[#4D4AB8] font-semibold text-center">
                                Global Financial Leadership
                            </span>

                            <div className="w-8 h-px bg-[#4D4AB8] shrink-0 lg:hidden" />
                        </motion.div>

                        {/* Name */}
                        <motion.div {...(mounted ? { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.1 } } : {})}>
                            <h1 className="text-center lg:text-left font-bold text-black leading-[0.9] tracking-[-2px] sm:tracking-[-3px] text-[52px] sm:text-[72px] md:text-[84px] lg:text-[76px] xl:text-[92px] 2xl:text-[108px]">
                                Harish
                                <br />
                                <span className="text-[#4D4AB8]">Parmar</span>
                            </h1>
                        </motion.div>

                        {/* Availability */}
                        <motion.div
                            {...fadeIn(0.7)}
                            className="flex items-center gap-2 mt-4 justify-center lg:justify-start"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                            </span>
                            <span className="text-[11px] text-black/35 tracking-wide">
                                Available for advisory &amp; consulting
                            </span>
                        </motion.div>

                        {/* Divider */}
                        <motion.div
                            {...(mounted ? { initial: { scaleX: 0 }, animate: { scaleX: 1 }, transition: { delay: 0.5, duration: 0.6 } } : {})}
                            className="w-full h-px bg-black/6 my-7 lg:my-8 origin-left"
                        />

                        {/* Role / subtitle */}
                        <motion.div
                            {...fadeUp(0.3)}
                            className="text-center lg:text-left"
                        >
                            <div className="flex items-center gap-3 mb-3 justify-center lg:justify-start">
                                <div className="w-6 h-px bg-[#4D4AB8]" />
                                <span className="text-[9px] uppercase tracking-[4px] text-[#4D4AB8] font-semibold">
                                    Financial Visionary
                                </span>
                            </div>

                            <h2 className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[22px] xl:text-[26px] font-semibold text-black leading-[1.2] max-w-[520px] mx-auto lg:mx-0">
                                Architecting Financial Solutions Across Borders
                            </h2>

                            <p className="mt-3 text-[13px] sm:text-[14px] md:text-[15px] text-black/80 leading-[1.7] max-w-[480px] mx-auto lg:mx-0">
                                Founder · Leading Financial Groups in India, UAE, UK |
                                Fintech Pioneer &amp; Debt Freedom Advocate
                            </p>
                        </motion.div>

                        {/* Description */}
                        <motion.p
                            {...fadeUp(0.4)}
                            className="mt-5 text-center lg:text-left text-[13px] sm:text-[14px] leading-[1.9] text-black/80 max-w-[500px] mx-auto lg:mx-0"
                        >
                            For over four decades, Harish Parmar has been a transformative
                            force in global finance. From foundational advisory roles to
                            pioneering fintech ventures across three continents, his
                            career is dedicated to building systems that empower
                            individuals, businesses, and the broader economy towards
                            sustainable financial freedom.
                        </motion.p>

                        {/* Stats row */}
                        <motion.div
                            {...fadeUp(0.5)}
                            className="flex items-center gap-5 mt-7 justify-center lg:justify-start"
                        >
                            {[
                                { value: "40+", label: "Years" },
                                { value: "3", label: "Continents" },
                                { value: "15+", label: "Ventures" },
                            ].map((s, i) => (
                                <React.Fragment key={s.label}>
                                    <div className="text-center lg:text-left">
                                        <p className="text-[22px] sm:text-[26px] font-bold text-black leading-none">{s.value}</p>
                                        <p className="text-[9px] uppercase tracking-[2.5px] text-black mt-1">{s.label}</p>
                                    </div>
                                    {i < 2 && <div className="w-px h-8 bg-black/10" />}
                                </React.Fragment>
                            ))}
                        </motion.div>

                        {/* CTAs */}
                        <motion.div
                            {...fadeUp(0.6)}
                            className="flex flex-col sm:flex-row gap-3 mt-8 justify-center lg:justify-start"
                        >
                            <Link
                                href="https://linkedin.com"
                                target="_blank"
                                className="group bg-[#4D4AB8] text-white px-6 py-3.5 rounded-full text-[13px] font-semibold transition-all duration-300 hover:bg-[#3d3aa0] hover:shadow-[0_8px_30px_rgba(77,74,184,0.35)] text-center flex items-center justify-center gap-2"
                            >
                                Connect on LinkedIn
                                <span className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300 inline-block">↗</span>
                            </Link>
                            <Link
                                href="/about"
                                className="border border-black/12 hover:border-[#4D4AB8]/50 text-black/60 hover:text-[#4D4AB8] px-6 py-3.5 rounded-full text-[13px] font-semibold transition-all duration-300 text-center"
                            >
                                Explore His Journey
                            </Link>
                        </motion.div>

                        {/* Credential tags */}
                        <motion.div
                            {...fadeIn(0.9)}
                            className="flex flex-wrap gap-2 mt-6 justify-center lg:justify-start"
                        >
                            {["India", "UAE", "United Kingdom", "Fintech", "Wealth Management"].map((tag) => (
                                <span
                                    key={tag}
                                    className="text-[9px] uppercase tracking-[2px] text-black border border-black/8 rounded-full px-3 py-1"
                                >
                                    {tag}
                                </span>
                            ))}
                        </motion.div>
                    </div>

                    {/* ════ RIGHT IMAGE ══════════════════════════════════ */}
                    <div
                        className="relative order-1 lg:order-2 w-full lg:w-[400px] xl:w-[460px] 2xl:w-[520px] flex-shrink-0 flex items-end justify-center pt-8 lg:pt-0"
                    >
                        {/* Glow */}
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[280px] h-[280px] bg-[#4D4AB8]/10 rounded-full blur-[80px] pointer-events-none" />

                        {/* Experience badge */}
                        <motion.div
                            {...float(-8, 4, 0)}
                            className="absolute top-4 left-2 sm:left-6 lg:left-0 z-20 bg-white rounded-2xl px-4 py-3 shadow-[0_4px_24px_rgba(0,0,0,0.10)] border border-black/5"
                        >
                            <p className="text-[10px] uppercase tracking-[3px] text-black">Experience</p>
                            <p className="text-[24px] font-bold text-black leading-none mt-0.5">40+</p>
                            <p className="text-[8px] uppercase tracking-[2px] text-[#4D4AB8] font-semibold mt-0.5">Years</p>
                        </motion.div>

                        {/* Markets badge */}
                        <motion.div
                            {...float(-6, 3.5, 0.5)}
                            className="absolute top-4 right-2 sm:right-6 lg:right-0 z-20 bg-white rounded-2xl px-4 py-3 shadow-[0_4px_24px_rgba(0,0,0,0.10)] border border-black/5"
                        >
                            <p className="text-[10px] uppercase tracking-[3px] text-black">Markets</p>
                            <p className="text-[12px] font-bold text-black leading-none mt-0.5">India · UAE · UK</p>
                        </motion.div>

                        {/* Image */}
                        <div className="relative w-full flex justify-center">
                            <Image
                                src="/clear.png"
                                width={600}
                                height={800}
                                alt="Harish Parmar"
                                priority
                                className="relative z-10 select-none w-full h-auto object-contain object-bottom max-w-[260px] sm:max-w-[320px] md:max-w-[380px] lg:max-w-full lg:w-full max-h-[55vh] sm:max-h-[60vh] lg:max-h-[90vh]"
                            />

                            {/* Caption */}
                            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 bg-white/90 backdrop-blur-xl border border-black/5 rounded-xl px-4 py-2.5 shadow-[0_4px_20px_rgba(0,0,0,0.08)] whitespace-nowrap">
                                <p className="text-[12px] font-semibold text-black">Harish Parmar</p>
                                <p className="text-[10px] text-black mt-0.5">Founder &amp; Financial Strategist</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* ── MARQUEE ─────────────────────────────────────────────── */}
            <div className="relative z-10 w-full border-t border-black/[0.05] bg-white/80 overflow-hidden py-3.5">
                {mounted && (
                    <motion.div
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                        className="flex gap-8 whitespace-nowrap w-max"
                    >
                        {[
                            "Global Financial Leadership",
                            "Fintech Pioneer",
                            "Debt Freedom Advocate",
                            "India · UAE · United Kingdom",
                            "40+ Years of Excellence",
                            "Wealth Architect",
                            "Three Continents · One Vision",
                            "Sustainable Financial Freedom",
                            "Global Financial Leadership",
                            "Fintech Pioneer",
                            "Debt Freedom Advocate",
                            "India · UAE · United Kingdom",
                            "40+ Years of Excellence",
                            "Wealth Architect",
                            "Three Continents · One Vision",
                            "Sustainable Financial Freedom",
                        ].map((text, i) => (
                            <span
                                key={i}
                                className="text-[9px] uppercase tracking-[4px] text-black font-medium flex items-center gap-8"
                            >
                                {text}
                                <span className="w-1 h-1 rounded-full bg-[#4D4AB8]/25 inline-block flex-shrink-0" />
                            </span>
                        ))}
                    </motion.div>
                )}
            </div>

        </section>
    );
};

export default Hero;