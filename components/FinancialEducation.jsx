import Image from "next/image";
import React from "react";
import { GraduationCap, Presentation, BookOpen } from "lucide-react";

const programs = [
    {
        icon: <GraduationCap size={22} />,
        number: "01",
        title: "The Financial Awareness Program",
        desc: "A structured curriculum delivered to corporates and communities, covering practical debt management and financial planning.",
    },
    {
        icon: <BookOpen size={22} />,
        number: "02",
        title: 'Course "Path to Solvency"',
        desc: "A comprehensive digital course breaking down the journey through formal insolvency processes.",
    },
    {
        icon: <Presentation size={22} />,
        number: "03",
        title: "Public Speaking & Workshops",
        desc: "A sought-after speaker at forums like MannTalks on financial wellness, internal Taurus Group leadership events, and major industry conferences like IFTA and DLAI.",
    },
];

const FinancialEducation = () => {
    return (
        <section className="relative w-full bg-[#f7f6f3] overflow-hidden">

            {/* ── Subtle background texture ── */}
            <div className="absolute inset-0 pointer-events-none select-none">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full border border-[#4D4AB8]/[0.07]" style={{ transform: "translate(30%, -30%)" }} />
                <div className="absolute top-0 right-0 w-[340px] h-[340px] rounded-full border border-[#4D4AB8]/[0.05]" style={{ transform: "translate(20%, -20%)" }} />
                <div className="absolute bottom-0 left-0 w-[280px] h-[280px] border-t border-r border-[#4D4AB8]/[0.06]" />
            </div>

            {/* ══════════════════════════════════
                SECTION HEADER
            ══════════════════════════════════ */}
            <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 md:px-16 pt-20 md:pt-28">

                {/* Label */}
                <div className="flex items-center gap-3 mb-10">
                    <span className="block w-7 h-[1px] bg-[#4D4AB8]/50" />
                    <p className="uppercase tracking-[5px] text-[10px] font-semibold text-[#4D4AB8]/70">
                        Financial Education & Public Advocacy
                    </p>
                </div>

                {/* Headline + body — two column on lg */}
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] xl:grid-cols-[1fr_480px] gap-10 lg:gap-20 items-end">

                    <h2 className="text-[38px] sm:text-[52px] md:text-[68px] xl:text-[76px] leading-[1.0] font-semibold text-black tracking-tight">
                        Empowering Through<br />
                        <span className="text-[#4D4AB8]/25">Financial Literacy</span>
                    </h2>

                    <p className="text-[16px] md:text-[18px] leading-[1.9] text-[#555] font-light lg:pb-2">
                        Driving change requires empowering minds. Beyond
                        boardroom strategy, Harish Parmar champions mass
                        financial literacy. He architects educational programs
                        and takes the stage to demystify finance, believing that
                        an informed public is the foundation of a resilient
                        economy.
                    </p>
                </div>

                {/* Full-width rule */}
                <div className="w-full h-[1px] bg-black/10 mt-14" />
            </div>

            {/* ══════════════════════════════════
                PROGRAM CARDS
            ══════════════════════════════════ */}
            <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 md:px-16 mt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-black/10">
                    {programs.map((item, i) => (
                        <div
                            key={i}
                            className="group relative px-0 sm:px-8 md:px-10 py-12 md:py-16 flex flex-col gap-6 transition-all duration-300"
                        >
                            {/* Top row: number + icon */}
                            <div className="flex items-center justify-between">
                                <span className="text-[11px] uppercase tracking-[4px] text-[#4D4AB8]/40 font-semibold">
                                    {item.number}
                                </span>
                                <div className="w-10 h-10 rounded-full border border-[#4D4AB8]/20 bg-white flex items-center justify-center text-[#4D4AB8] group-hover:bg-[#4D4AB8] group-hover:text-white group-hover:border-transparent transition-all duration-300">
                                    {item.icon}
                                </div>
                            </div>

                            {/* Title */}
                            <h3 className="text-[20px] md:text-[23px] leading-[1.35] font-semibold text-black">
                                {item.title}
                            </h3>

                            {/* Divider */}
                            <div className="w-8 h-[1px] bg-[#4D4AB8]/30 group-hover:w-16 transition-all duration-500" />

                            {/* Description */}
                            <p className="text-[15px] md:text-[16px] leading-[1.85] text-[#666] font-light">
                                {item.desc}
                            </p>

                            {/* Bottom accent line on hover */}
                            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#4D4AB8] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 hidden sm:block" />
                        </div>
                    ))}
                </div>
            </div>

            {/* ══════════════════════════════════
                PUBLIC ENGAGEMENT — IMAGE + TEXT
            ══════════════════════════════════ */}
            <div className="relative z-10 max-full    mt-16 md:mt-20">

                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-0 border border-black/10 overflow-hidden bg-white">

                    {/* Left — text panel */}
                    <div className="p-8 sm:p-10 md:p-14 flex flex-col justify-center">


                        <div className="flex items-center gap-3 mb-10">
                            <span className="block w-7 h-[1px] bg-[#4D4AB8]/50" />
                            <p className="uppercase tracking-[5px] text-[10px] font-semibold text-[#4D4AB8]/70">
                                Public Engagement
                            </p>
                        </div>

                        <h3 className="text-[28px] sm:text-[36px] md:text-[44px] leading-[1.15] font-semibold text-black">
                            Educating Communities Through Real Conversations
                        </h3>

                        <div className="w-10 h-[2px] bg-[#4D4AB8]/40 my-8" />

                        <p className="text-[15px] md:text-[17px] leading-[1.9] text-[#555] font-light">
                            A short, impactful video montage blending clips
                            from YouTube explainers, keynote speeches,
                            workshop interactions, and audience engagements
                            across financial wellness forums, leadership
                            events, and industry conferences.
                        </p>

                        {/* Stats row */}
                        <div className="grid grid-cols-3 gap-4 mt-10 pt-10 border-t border-black/10">
                            {[
                                { val: "10K+", label: "People reached" },
                                { val: "30+", label: "Events" },
                                { val: "5+", label: "Platforms" },
                            ].map((s, i) => (
                                <div key={i}>
                                    <p className="text-[26px] md:text-[32px] font-semibold text-[#4D4AB8] leading-none">
                                        {s.val}
                                    </p>
                                    <p className="text-[12px] text-[#888] mt-1 uppercase tracking-[2px]">
                                        {s.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right — image with play */}
                    <div className="relative min-h-[300px] sm:min-h-[380px] md:min-h-[460px] lg:min-h-0">
                        <Image
                            src="/billu.png"
                            alt="Financial Education & Workshops"
                            fill
                            className="object-cover"
                        />

                        {/* Dark overlay */}
                        <div className="absolute inset-0 bg-black/35" />


                        {/* Bottom label */}

                    </div>
                </div>
            </div>
        </section>
    );
};

export default FinancialEducation;