"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay, ease: "easeOut" },
});

const GOLD = "#e48720";

const Hero = () => {
    return (
        <section className="relative min-h-screen w-full overflow-hidden bg-[#0B0B0B]">
            <Image
                src="/HP-Banner.jpg"
                alt="Harish Parmar"
                fill
                priority
                sizes="100vw"
                className="object-cover object-left grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-black/45 to-[#0B0B0B]" />
            <div className="absolute inset-0 bg-black/40 lg:hidden" />

            <div className="relative z-10 mx-auto flex min-h-screen max-w-[1500px] items-center px-6 sm:px-10 lg:px-16">
                <div className="ml-auto flex w-full flex-col text-center lg:max-w-xl lg:items-end lg:text-right">
                    {/* Script name — inline fontFamily + richer gold */}
                    <motion.h1
                        {...fadeUp(0.1)}
                        style={{ fontFamily: "var(--font-script)", color: GOLD }}
                        className="leading-none text-[52px] sm:text-[80px] lg:text-[96px] xl:text-[104px] lg:pt-25"
                    >
                        Harish Parmar
                    </motion.h1>

                    {/* Subtitle (Jost, inherited) */}
                    <motion.p
                        {...fadeUp(0.3)}
                        className=" text-[16px] font-light leading-relaxed tracking-wide text-[#CFCABF] sm:text-[17px]"
                    >
                        Founder · Leading Financial Groups in India, UAE, UK
                        <br />
                        Fintech Pioneer &amp; Debt Freedom Advocate
                    </motion.p>

                    {/* Serif heading — inline fontFamily guarantees Cormorant */}
                    <motion.h2
                        {...fadeUp(0.45)}
                        style={{ fontFamily: "var(--font-serif)" }}
                        className="mt-10 font-medium leading-[1.1] text-white text-[30px] sm:text-[44px] lg:text-[48px] xl:text-[45px]"
                    >
                        Architecting Financial Solutions Across Borders
                    </motion.h2>

                    {/* Paragraph (Jost, inherited) */}
                    <motion.p
                        {...fadeUp(0.6)}
                        className="
                        mt-6
                        max-w-[760px]
                        ml-auto
                        text-justify
                        text-[#B5B0A6]
                       
                        leading-[1.2]
                        text-[18px]
                        xl:text-[20px]
                        font-bold
                    "
                    >
                        For over four decades, Harish Parmar has been a transformative force
                        in global finance. From foundational advisory roles to pioneering
                        fintech ventures across three continents, his career is dedicated to
                        building systems that empower individuals, businesses, and the
                        broader economy towards sustainable financial freedom.
                    </motion.p>

                    <motion.div
                        {...fadeUp(0.75)}
                        style={{ backgroundColor: GOLD }}
                        className="mt-10 h-px w-full opacity-70"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;