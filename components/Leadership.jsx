import Image from "next/image";
import React from "react";

const Leadership = () => {
    return (
        <section className="relative w-full bg-[#3E3AA8] text-white overflow-hidden">

            {/* Decorative background geometry */}
            <div className="absolute inset-0 pointer-events-none select-none">
                {/* Large circle top-right */}
                <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full border border-white/[0.06]" />
                <div className="absolute -top-16 -right-16 w-[420px] h-[420px] rounded-full border border-white/[0.05]" />
                {/* Bottom-left accent */}
                <div className="absolute bottom-0 left-0 w-[300px] h-[300px] border-r border-t border-white/[0.06]" />
                {/* Subtle diagonal rule */}
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage:
                            "repeating-linear-gradient(135deg, white 0px, white 1px, transparent 1px, transparent 80px)",
                    }}
                />
            </div>

            {/* ── HEADER LABEL ── */}




            {/* ── MAIN GRID ── */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 pt-12 pb-20 md:pb-28">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_440px] xl:grid-cols-[1fr_520px] gap-16 xl:gap-24 items-start">

                    {/* ── LEFT COLUMN ── */}
                    <div className="flex flex-col">

                        {/* Headline */}
                        <h2 className="text-[42px] sm:text-[58px] md:text-[76px] leading-[1.0] font-semibold tracking-tight">
                            Redefining<br />
                            <span className="text-white/30">an Industry</span>
                        </h2>

                        {/* Divider with dot */}
                        <div className="flex items-center gap-4 my-10">
                            <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                            <div className="flex-1 h-[1px] bg-white/15" />
                        </div>

                        {/* Body paragraphs */}
                        <div className="space-y-6">
                            <p className="text-[17px] md:text-[19px] leading-[1.85] text-white/70 font-light">
                                As the Founder and strategic force behind
                                SingleDebt, Harish Parmar is not just leading a
                                company; he is catalyzing a societal shift.
                            </p>
                            <p className="text-[17px] md:text-[19px] leading-[1.85] text-white/70 font-light">
                                His vision reconceives debt resolution—from a
                                stigmatized, complex legal ordeal into an empowered,
                                tech-enabled journey towards solvency.
                            </p>
                            <p className="text-[17px] md:text-[19px] leading-[1.85] text-white/70 font-light">
                                Under his chairmanship, SingleDebt has become
                                synonymous with trust and innovation in financial
                                recovery, merging legal authority with compassionate
                                design to restore financial dignity to thousands.
                            </p>
                        </div>

                        {/* ── ACHIEVEMENT CARD ── */}

                    </div>

                    {/* ── RIGHT COLUMN — IMAGE ── */}
                    <div className="relative lg:sticky lg:top-10">

                        {/* Corner decoration top-left */}
                        <div className="absolute -top-3 -left-3 w-10 h-10 border-t border-l border-white/25 z-10" />
                        {/* Corner decoration bottom-right */}
                        <div className="absolute -bottom-3 -right-3 w-10 h-10 border-b border-r border-white/25 z-10" />

                        {/* Image frame */}
                        <div className="relative w-full aspect-[3/4] md:h-[780px] md:aspect-auto overflow-hidden border border-white/15">
                            <Image
                                src="/clear.png"
                                alt="Harish Parmar — Founder, SingleDebt"
                                fill
                                className="object-cover object-top"
                            />

                            {/* Bottom gradient overlay */}
                            <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-[#3E3AA8]/80 via-[#3E3AA8]/20 to-transparent" />

                            {/* Name plate */}
                            <div className="absolute bottom-0 left-0 right-0 p-7">
                                <p className="text-[11px] uppercase tracking-[4px] text-white/50 mb-1">
                                    Founder & Chairman
                                </p>
                                <p className="text-[22px] font-semibold text-white">
                                    Harish Parmar
                                </p>
                            </div>
                        </div>

                        {/* Year stamp */}
                        <div className="mt-5 flex justify-end">
                            <p className="text-[11px] uppercase tracking-[5px] text-white/25">
                                Est. SingleDebt
                            </p>
                        </div>
                    </div>

                </div>
                <div className="mt-4 relative">
                    {/* Left accent bar */}

                    <div className="mt-10 md:mt-14 rounded-[28px] border border-white/[0.10] bg-white/[0.04] backdrop-blur-xl px-6 md:px-12 py-10 md:py-14 overflow-hidden relative">

                        {/* Glow effect */}
                        <div className="absolute -top-20 -right-20 w-60 h-60 bg-[#4D4AB8]/20 blur-3xl rounded-full pointer-events-none" />

                        {/* Content */}
                        <div className="relative z-10">

                            {/* Top label */}


                            {/* Heading */}
                            <h3 className="text-[24px] md:text-[32px] leading-[1.25] font-semibold max-w-4xl">
                                ET Brand Equity DigiPlus Awards 2026
                            </h3>

                            {/* Description */}
                            <p className="text-[15px] md:text-[17px] leading-[1.9] text-white/65 mt-5 font-light max-w-4xl">
                                SingleDebt was shortlisted for{" "}
                                <span className="font-medium text-white">
                                    "Category Creation & Innovation"
                                </span>{" "}
                                at the prestigious ET Brand Equity DigiPlus
                                Awards 2026, standing alongside Fortune 500
                                companies — a testament to its disruptive vision.
                            </p>

                            {/* Logo section */}
                            <div className="mt-10">

                                <div className="flex items-center gap-3 mb-5">
                                    <div className="h-px flex-1 bg-white/10" />
                                    <span className="text-[11px] uppercase tracking-[4px] text-white/40 whitespace-nowrap">
                                        Associated Recognition
                                    </span>
                                    <div className="h-px flex-1 bg-white/10" />
                                </div>

                                {/* Logos grid */}
                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6">

                                    {[
                                        "/SOS-Unit.webp",
                                        "/Maan-Talks.webp",
                                        "/IFTA-Unit-White.webp",
                                        "/Unicef-1.webp",
                                    ].map((logo, i) => (
                                        <div
                                            key={i}
                                            className="group rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md h-[90px] md:h-[110px] flex items-center justify-center p-5 transition-all duration-300 hover:bg-white/[0.06] hover:border-white/20 hover:-translate-y-1"
                                        >
                                            <img
                                                src={logo}
                                                alt="Recognition Logo"
                                                className="max-h-full max-w-full object-contain opacity-75 group-hover:opacity-100 transition-opacity duration-300"
                                            />
                                        </div>
                                    ))}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Leadership;