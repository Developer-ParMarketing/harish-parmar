"use client"

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Hero = () => {
    const [mounted, setMounted] = useState(false);
    useEffect(() => { setMounted(true); }, []);

    const fadeUp = (delay = 0) => mounted ? {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6, delay },
    } : {};

    const fadeIn = (delay = 0) => mounted ? {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.6, delay },
    } : {};

    return (
        <section className="relative bg-white min-h-screen flex items-center overflow-hidden">
            {/* Background Grid + Glows */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-[#4D4AB8]/5 rounded-full blur-[120px] -translate-y-1/3 translate-x-1/4" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#4D4AB8]/5 rounded-full blur-[100px] translate-y-1/4 -translate-x-1/4" />
            </div>

            <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 xl:px-20 py-12 lg:py-0">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center min-h-[90vh] lg:min-h-screen">

                    {/* LEFT CONTENT */}
                    <div className="flex flex-col justify-center pt-8 lg:pt-0">
                        {/* Top Label */}
                        <motion.div {...fadeUp(0)} className="flex items-center gap-3 mb-6">
                            <div className="h-px w-8 bg-[#4D4AB8]" />
                            <span className="uppercase text-xs tracking-[4px] text-[#4D4AB8] font-semibold">
                                GLOBAL FINANCIAL LEADERSHIP
                            </span>
                        </motion.div>

                        {/* Name */}
                        <motion.h1
                            {...fadeUp(0.1)}
                            className="
        text-[42px]
        sm:text-[54px]
        md:text-[68px]
        lg:text-[82px]
        xl:text-[100px]
        leading-[1]
        sm:leading-[0.95]
        font-bold
        tracking-[-1px]
        sm:tracking-[-2px]
        lg:tracking-[-3px]
        text-black
        text-center
        lg:text-left
    "
                        >
                            Harish <span className="text-[#4D4AB8]">Parmar</span>
                        </motion.h1>

                        {/* Availability */}
                        <motion.div {...fadeIn(0.4)} className="flex items-center gap-2 mt-3">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                                <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500" />
                            </span>
                            <span className="text-sm text-black/70">Available for advisory &amp; consulting</span>
                        </motion.div>

                        {/* Subtitle */}
                        <motion.div {...fadeUp(0.5)} className="mt-10">
                            <div className="uppercase text-xs tracking-[3px] text-[#4D4AB8] font-semibold mb-2">
                                FINANCIAL VISIONARY
                            </div>
                            <h2 className="text-3xl md:text-4xl font-semibold leading-tight text-black">
                                Architecting Financial Solutions Across Borders
                            </h2>
                        </motion.div>

                        {/* Description */}
                        <motion.p
                            {...fadeUp(0.6)}
                            className="mt-6 text-[15px] leading-relaxed text-black/90 max-w-lg"
                        >
                            Founder - Leading Financial Groups in India, UAE, UK | Fintech Pioneer & Debt Freedom Advocate
                        </motion.p>
                        <motion.p
                            {...fadeUp(0.6)}
                            className="mt-6 text-[15px] leading-relaxed text-black/70 max-w-lg"
                        >
                            For over four decades, Harish Parmar has been a transformative force in global finance. From foundational advisory roles to pioneering fintech ventures across three continents, his career is dedicated to building systems that empower individuals, businesses, and the broader economy towards sustainable financial freedom.
                        </motion.p>

                        {/* Stats */}
                        <motion.div {...fadeUp(0.7)} className="flex gap-8 md:gap-12 mt-10">
                            {[
                                { num: "40+", label: "YEARS" },
                                { num: "3", label: "CONTINENTS" },
                                { num: "15+", label: "VENTURES" },
                            ].map((stat, i) => (
                                <div key={i}>
                                    <div className="text-4xl font-bold text-black">{stat.num}</div>
                                    <div className="text-xs uppercase tracking-widest text-black/60 mt-1">{stat.label}</div>
                                </div>
                            ))}
                        </motion.div>

                        {/* CTAs */}
                        <motion.div {...fadeUp(0.8)} className="flex flex-wrap gap-4 mt-10">
                            <Link
                                href="https://linkedin.com"
                                target="_blank"
                                className="bg-[#4D4AB8] hover:bg-[#3d3aa0] text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 transition-all duration-300"
                            >
                                Connect on LinkedIn
                                <span>↗</span>
                            </Link>

                            <Link
                                href="/about"
                                className="border border-black/20 hover:border-black text-black px-8 py-4 rounded-full font-semibold transition-all duration-300"
                            >
                                Explore His Journey
                            </Link>
                        </motion.div>

                        {/* Tags */}
                        <motion.div {...fadeUp(0.9)} className="flex flex-wrap gap-2 mt-10">
                            {["INDIA", "UAE", "UNITED KINGDOM", "FINTECH", "WEALTH MANAGEMENT"].map((tag) => (
                                <span
                                    key={tag}
                                    className="text-xs border border-black/10 px-4 py-2 rounded-full tracking-wider text-black/70"
                                >
                                    {tag}
                                </span>
                            ))}
                        </motion.div>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="relative flex justify-center lg:justify-end pt-8 lg:pt-0">
                        {/* Yellow Background Shape */}

                        {/* Main Image */}
                        <div className="relative z-10 w-full max-w-[380px] md:max-w-[420px] lg:max-w-[480px]">
                            <Image
                                src="/clear.png"
                                width={600}
                                height={720}
                                alt="Harish Parmar"
                                priority
                                className="object-cover w-full h-auto"
                            />

                            {/* Floating Experience Badge */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8 }}
                                className="absolute -top-4 -left-4 bg-white rounded-2xl shadow-xl px-6 py-4 text-center border border-black/5"
                            >
                                <p className="text-xs uppercase tracking-widest text-black/60">EXPERIENCE</p>
                                <p className="text-4xl font-bold text-black mt-1">40+</p>
                                <p className="text-xs text-black/70">YEARS</p>
                            </motion.div>

                            {/* Floating Markets Badge */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1 }}
                                className="absolute -top-4 right-4 bg-white rounded-2xl shadow-xl px-5 py-4 text-center border border-black/5"
                            >
                                <p className="text-xs uppercase tracking-widest text-black/60">MARKETS</p>
                                <p className="text-sm font-semibold text-black mt-1">India • UAE • UK</p>
                            </motion.div>

                            {/* Name Caption */}
                            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-lg px-6 py-3 text-center border border-black/5">
                                <p className="font-semibold text-black">Harish Parmar</p>
                                <p className="text-xs text-black/60">Founder &amp; Financial Strategist</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;