"use client"

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {


    const fadeUp = (delay = 0) => ({
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6, delay },
    });

    const fadeIn = (delay = 0) => ({
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        viewport: { once: true },
        transition: { duration: 0.6, delay },
    });

    return (
        <section className="relative bg-white min-h-screen flex items-center overflow-hidden py-5">
            {/* Background Glows */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-[#4D4AB8]/5 rounded-full blur-[120px] -translate-y-1/3 translate-x-1/4" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#4D4AB8]/5 rounded-full blur-[100px] translate-y-1/4 -translate-x-1/4" />
            </div>

            <div className="relative z-10 max-w-[1420px] mx-auto px-6 md:px-12 lg:px-16 xl:px-20 py-12 lg:py-0">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center min-h-[90vh] lg:min-h-screen">

                    {/* ==================== LEFT CONTENT ==================== */}
                    <div className="order-2 lg:order-1 flex flex-col justify-center pt-8 lg:pt-0">

                        {/* Top Label */}
                        <motion.div
                            {...fadeUp(0)}
                            className="flex items-center justify-center lg:justify-start gap-3 mb-6"
                        >
                            <div className="h-px w-8 bg-[#4D4AB8] shrink-0" />

                            <span className="uppercase text-[10px] sm:text-xs tracking-[3px] sm:tracking-[4px] text-[#4D4AB8] font-semibold text-center">
                                GLOBAL FINANCIAL LEADERSHIP
                            </span>

                            {/* Right dash only on mobile */}
                            <div className="h-px w-8 bg-[#4D4AB8] shrink-0 lg:hidden" />
                        </motion.div>

                        {/* Name - Fixed Hydration Issue */}
                        <motion.h1
                            {...fadeUp(0.1)}
                            className="text-[46px] sm:text-[58px] md:text-[72px] lg:text-[82px] xl:text-[96px] 2xl:text-[108px] leading-[0.92] font-bold tracking-[-2px] sm:tracking-[-3px] text-black text-center lg:text-left"
                        >
                            Harish <span className="text-[#4D4AB8]">Parmar</span>
                        </motion.h1>

                        {/* Availability */}
                        <motion.div {...fadeIn(0.4)} className="flex items-center gap-2 mt-4 justify-center lg:justify-start">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                                <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500" />
                            </span>
                            <span className="text-sm text-black/70">Available for advisory &amp; consulting</span>
                        </motion.div>

                        {/* Financial Visionary */}
                        <motion.div {...fadeUp(0.5)} className="mt-12">
                            <div className="uppercase text-xs tracking-[3px] text-[#4D4AB8] font-semibold mb-3">
                                FINANCIAL VISIONARY
                            </div>
                            <h2 className="text-[28px] md:text-[34px] lg:text-[38px] xl:text-[42px] leading-tight font-semibold text-black text-center lg:text-left">
                                Architecting Financial Solutions Across Borders
                            </h2>
                        </motion.div>

                        {/* Short Description */}
                        <motion.p
                            {...fadeUp(0.6)}
                            className="mt-6 text-[15px] md:text-[16px] text-black/80 text-center lg:text-left max-w-lg mx-auto lg:mx-0"
                        >
                            Founder · Leading Financial Groups in India, UAE, UK | Fintech Pioneer &amp; Debt Freedom Advocate
                        </motion.p>

                        {/* Long Description */}
                        <motion.p
                            {...fadeUp(0.65)}
                            className="mt-5 text-[15px] leading-relaxed text-black/70 text-center lg:text-left max-w-lg mx-auto lg:mx-0"
                        >
                            For over four decades, Harish Parmar has been a transformative force in global finance.
                            From foundational advisory roles to pioneering fintech ventures across three continents,
                            his career is dedicated to building systems that empower individuals, businesses, and
                            the broader economy towards sustainable financial freedom.
                        </motion.p>

                        {/* Stats */}
                        <motion.div {...fadeUp(0.8)} className="flex justify-center lg:justify-start gap-12 md:gap-16 mt-12">
                            {[
                                { num: "40+", label: "YEARS" },
                                { num: "3", label: "CONTINENTS" },
                                { num: "15+", label: "VENTURES" },
                            ].map((stat, i) => (
                                <div key={i} className="text-center lg:text-left">
                                    <div className="text-[42px] md:text-[52px] lg:text-[58px] font-bold text-black leading-none">
                                        {stat.num}
                                    </div>
                                    <div className="text-[10px] md:text-xs uppercase tracking-[2px] text-black/60 mt-1 font-medium">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </motion.div>

                        {/* CTAs */}
                        <motion.div {...fadeUp(0.9)} className="flex flex-col sm:flex-row gap-4 mt-10 justify-center lg:justify-start">
                            <Link
                                href="https://linkedin.com"
                                target="_blank"
                                className="bg-[#4D4AB8] hover:bg-[#3d3aa0] text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 transition-all duration-300 text-base shadow-lg shadow-[#4D4AB8]/30 text-center"
                            >
                                Connect on LinkedIn
                                <span className="text-lg">↗</span>
                            </Link>

                            <Link
                                href="/about"
                                className="border-2 border-black/20 hover:border-black text-black px-8 py-4 rounded-full font-semibold transition-all duration-300 text-center text-base"
                            >
                                Explore His Journey
                            </Link>
                        </motion.div>

                        {/* Tags */}
                        <motion.div {...fadeUp(1)} className="flex flex-wrap gap-3 mt-8 justify-center lg:justify-start">
                            {["INDIA", "UAE", "UNITED KINGDOM", "FINTECH", "WEALTH MANAGEMENT"].map((tag) => (
                                <span
                                    key={tag}
                                    className="text-xs border border-black/10 px-5 py-2.5 rounded-full tracking-wider text-black/70 bg-white whitespace-nowrap"
                                >
                                    {tag}
                                </span>
                            ))}
                        </motion.div>

                    </div>

                    {/* ==================== RIGHT IMAGE ==================== */}
                    <div className="order-1 lg:order-2 relative flex justify-center lg:justify-end pt-8 lg:pt-0">

                        {/* Main Image Container */}
                        <div className="relative z-10 w-full max-w-[360px] md:max-w-[400px] lg:max-w-[460px] xl:max-w-[500px]">
                            <Image
                                src="/clear.png"
                                width={600}
                                height={720}
                                alt="Harish Parmar"
                                priority
                                className=" w-full h-auto object-cover"
                            />

                            {/* Experience Badge */}
                            <motion.div
                                initial={false}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.7 }}
                                className="absolute -top-2 sm:-top-5 left-2 sm:-left-4 bg-white rounded-2xl shadow-xl px-4 sm:px-6 py-3 sm:py-4 text-center border border-black/5 z-20"
                            >
                                <p className="text-[10px] sm:text-xs uppercase tracking-widest text-black/60">
                                    EXPERIENCE
                                </p>

                                <p className="text-2xl sm:text-4xl font-bold text-black mt-1">
                                    40+
                                </p>

                                <p className="text-[10px] sm:text-xs text-black/70">
                                    YEARS
                                </p>
                            </motion.div>

                            {/* Markets Badge */}
                            <motion.div
                                initial={false}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.9 }}
                                className="absolute -top-2 sm:-top-5 right-2 sm:right-4 bg-white rounded-2xl shadow-xl px-4 sm:px-6 py-3 sm:py-4 text-center border border-black/5 z-20"
                            >
                                <p className="text-[10px] sm:text-xs uppercase tracking-widest text-black/60">
                                    MARKETS
                                </p>

                                <p className="text-xs sm:text-sm font-semibold text-black mt-1 whitespace-nowrap">
                                    India • UAE • UK
                                </p>
                            </motion.div>
                            {/* Bottom Caption */}
                            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-lg px-6 py-3 text-center border border-black/5 z-20">
                                <p className="font-semibold text-black">Harish Parmar</p>
                                <p className="text-xs text-black/60">Founder &amp; Financial Strategist</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Extra bottom spacing */}
            <div className="h-16 lg:h-24"></div>
        </section>
    );
};

export default Hero;