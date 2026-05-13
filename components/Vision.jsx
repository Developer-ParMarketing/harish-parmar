import React from "react";

const Vision = () => {
    return (
        <section className="relative w-full bg-[#3E3AA8] text-white overflow-hidden">

            {/* ── Background geometry ── */}
            <div className="absolute inset-0 pointer-events-none select-none">
                {/* Large faint circle - center */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-white/[0.05]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] rounded-full border border-white/[0.04]" />
                {/* Corner brackets */}
                <div className="absolute top-8 left-8 md:top-14 md:left-14 w-10 h-10 border-t border-l border-white/20" />
                <div className="absolute top-8 right-8 md:top-14 md:right-14 w-10 h-10 border-t border-r border-white/20" />
                <div className="absolute bottom-8 left-8 md:bottom-14 md:left-14 w-10 h-10 border-b border-l border-white/20" />
                <div className="absolute bottom-8 right-8 md:bottom-14 md:right-14 w-10 h-10 border-b border-r border-white/20" />
                {/* Diagonal grid */}
                <div
                    className="absolute inset-0 opacity-[0.025]"
                    style={{
                        backgroundImage:
                            "repeating-linear-gradient(135deg, white 0px, white 1px, transparent 1px, transparent 80px)",
                    }}
                />
            </div>

            {/* ── Content ── */}
            <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 md:px-16 py-12 md:py-18 flex flex-col items-center text-center">

                {/* Label */}


                <div className="flex items-center justify-center gap-3  mb-6 md:mb-8">
                    <div className="w-8 h-px bg-white/30" />
                    <p className="uppercase tracking-[5px] text-white/50 text-[10px] md:text-[11px] font-semibold">
                        Vision & Philosophy
                    </p>
                    <div className="w-8 h-px bg-white/30" />
                </div>

                {/* Opening mark */}
                <div
                    className="text-[100px] md:text-[140px] leading-none font-serif text-white/10 select-none -mb-6 md:-mb-10"
                    aria-hidden="true"
                >
                    "
                </div>

                {/* Quote */}
                <h2 className="text-[28px] sm:text-[38px] md:text-[54px] xl:text-[62px] leading-[1.3] font-semibold tracking-tight">
                    True financial innovation is measured not only in revenue
                    but in restored stability and created opportunity.
                </h2>

                {/* Divider */}
                <div className="flex items-center gap-5 my-10 md:my-14 w-full max-w-xs">
                    <div className="flex-1 h-[1px] bg-white/20" />
                    <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                    <div className="flex-1 h-[1px] bg-white/20" />
                </div>

                {/* Supporting text */}
                <p className="text-[17px] md:text-[21px] leading-[1.9] font-light text-white/65 max-w-3xl">
                    The goal is to build architectures of finance that are
                    inclusive, intelligent, and instrumental in shaping
                    stronger economies and more secure lives.
                </p>

                {/* Attribution */}
                <div className="mt-6 md:mt-8 flex items-center gap-4">
                    <div className="w-8 h-[1px] bg-white/30" />
                    <p className="text-[11px] uppercase tracking-[4px] text-white/40 font-medium">
                        Harish Parmar, Founder — SingleDebt
                    </p>
                    <div className="w-8 h-[1px] bg-white/30" />
                </div>
            </div>
        </section>
    );
};

export default Vision;