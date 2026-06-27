"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay, ease: "easeOut" },
});

const GOLD = "#e48720";

const Hero = () => {
    return (
        <section className="relative min-h-screen w-full overflow-hidden bg-[#0B0B0B] pt-10 md:pt-0">
            {/* Background image + overlay — DESKTOP ONLY */}
            <Image
                src="/HP-Banner.jpg"
                alt="Harish Parmar"
                fill
                priority
                sizes="100vw"
                className="hidden lg:block object-cover object-left grayscale "
            />
            <div className="absolute inset-0 hidden lg:block bg-gradient-to-r from-black/20 via-black/45 to-[#0B0B0B] " />

            <div className="relative z-10 mx-auto flex min-h-screen max-w-[1500px] items-start lg:items-center px-6 sm:px-10 lg:px-16  lg:py-0">
                {/* text-left on mobile (was text-center) → everything aligns consistently */}
                <div className="ml-auto flex w-full flex-col text-left lg:max-w-xl lg:items-end lg:text-right my-10">

                    {/* ================= MOBILE ================= */}
                    <div className="lg:hidden relative -mx-6">
                        <div className="relative w-full h-[70vh]">
                            <Image
                                src="/HP-Banner.jpg"
                                alt="Harish Parmar"
                                fill
                                priority
                                sizes="100vw"
                                className="object-cover object-[35%_top] grayscale "
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-transparent" />
                        </div>

                        <div className="absolute top-1/2 right-[-100px] -translate-y-1/2 -rotate-90">
                            <div className="w-[340px]">
                                <motion.h1
                                    initial={{ width: 0 }}
                                    animate={{ width: "100%" }}
                                    transition={{
                                        duration: 2,
                                        ease: "easeInOut",
                                    }}
                                    style={{
                                        fontFamily: "var(--font-script)",
                                        color: GOLD,
                                        overflow: "hidden",
                                        letterSpacing: "0.06em",
                                    }}
                                    className="text-[46px] leading-none whitespace-nowrap"
                                >
                                    Harish Parmar
                                </motion.h1>

                                <p className="mt-3 w-full text-[11px] uppercase tracking-[0.25em] text-[#CFCABF] text-left">
                                    Founder · Leading Financial Groups
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* ================= DESKTOP ================= */}
                    <div className="hidden lg:block">
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "fit-content" }}
                            transition={{
                                duration: 2,
                                ease: "easeInOut",
                                delay: 0.2,
                            }}
                            className="overflow-hidden pt-25"
                        >
                            <h1
                                style={{
                                    fontFamily: "var(--font-script)",
                                    color: GOLD,
                                }}
                                className="leading-none text-[90px] xl:text-[100px] whitespace-nowrap"
                            >
                                Harish Parmar
                            </h1>
                        </motion.div>

                        <motion.p
                            {...fadeUp(0.3)}
                            className="mt-3 text-[17px] font-light leading-relaxed tracking-wide text-[#CFCABF]"
                        >
                            Founder · Leading Financial Groups in India, UAE, UK
                            <br />
                            Fintech Pioneer &amp; Debt Freedom Advocate
                        </motion.p>
                    </div>

                    {/* Serif heading */}
                    <motion.h2
                        {...fadeUp(0.45)}
                        style={{ fontFamily: "var(--font-serif)" }}
                        className="mt-8 lg:mt-10 font-medium leading-[1.15] lg:leading-[1.1] text-white text-[30px] sm:text-[44px] lg:text-[48px] xl:text-[45px]"
                    >
                        Architecting Financial Solutions Across Borders
                    </motion.h2>

                    {/* Paragraph — lighter + roomier on mobile, unchanged on desktop */}
                    <motion.p
                        {...fadeUp(0.6)}
                        className="
                            mt-5 lg:mt-6
                            max-w-[760px]
                            ml-auto
                            text-justify
                            text-[#B5B0A6]
                          
                           sm:text-[17px]
                            font-normal 
                        "
                    >
                        For over four decades, Harish Parmar has been a transformative force
                        in global finance. From foundational advisory roles to pioneering
                        fintech ventures across three continents, his career is dedicated to
                        building systems that empower individuals, businesses, and the
                        broader economy towards sustainable financial freedom.
                    </motion.p>

                    {/* Gold divider */}
                    <motion.div
                        {...fadeUp(0.75)}
                        style={{ backgroundColor: GOLD }}
                        className="mt-8 lg:mt-10 h-px w-full opacity-70"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;