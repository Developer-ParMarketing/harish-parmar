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


            <div className="flex items-center justify-center gap-3 pt-10 md:pt-14 pb-0">
                <div className="w-8 h-px bg-white/30" />
                <p className="uppercase tracking-[5px] text-white/50 text-[10px] md:text-[11px] font-semibold">
                    Leadership at SingleDebt
                </p>
                <div className="w-8 h-px bg-white/30" />
            </div>

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
                    <div className="absolute left-0 top-0 bottom-0  bg-white/25" />

                    <div className="mt-10 md:mt-14 rounded-[28px] border border-white/[0.10] bg-white/[0.04] backdrop-blur-xl px-6 md:px-12 py-10 md:py-14">

                        <p className="uppercase tracking-[5px] text-[10px] font-semibold text-white/40 mb-5">
                            Key Achievement
                        </p>

                        <h3 className="text-[24px] md:text-[32px] leading-[1.3] font-semibold">
                            ET Brand Equity DigiPlus Awards 2026
                        </h3>

                        <p className="text-[16px] md:text-[17px] leading-[1.85] text-white/65 mt-5 font-light">
                            SingleDebt was shortlisted for{" "}
                            <span className="font-medium text-white">
                                "Category Creation & Innovation"
                            </span>{" "}
                            at the prestigious ET Brand Equity DigiPlus
                            Awards 2026, standing alongside Fortune 500
                            companies—a testament to its disruptive vision.
                        </p>

                        {/* Fortune 500 badge */}
                        <div className="mt-7 inline-flex items-center gap-2 border border-white/15 px-4 py-2">
                            <span className="block w-1.5 h-1.5 rounded-full bg-white/50" />
                            <span className="text-[12px] uppercase tracking-[3px] text-white/50 font-medium">
                                Alongside Fortune 500 Companies
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Leadership;