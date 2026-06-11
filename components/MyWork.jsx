"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const expertise = [
    {
        title: "DEBT RESOLUTION & FINANCIAL RECOVERY",
        desc: "Building structured, compliance-driven recovery and credit management systems across regulated markets.",
        points: [
            "Creditor recovery efficiency",
            "Regulatory adherence",
            "Ethical engagement standards",
            "Structured legal escalation frameworks",
        ],
        impact:
            "Developed operational models serving financial institutions, NBFCs, and lending ecosystems across multiple jurisdictions.",
    },
    {
        title: "FINTECH FOR SOCIAL IMPACT",
        desc: "Building India's leading legal-fintech platform to democratize access to debt resolution. Makes formal insolvency processes accessible and understandable for the common citizen, fueling the #DebtFreeIndia movement.",
        points: [
            "Formal insolvency accessibility",
            "Debt-free financial guidance",
            "Digital engagement systems",
            "Responsible restructuring pathways",
        ],
        impact:
            "Platform guiding thousands of individuals toward structured debt-free living. Recognized for Category Creation & Innovation at the ET Brand Equity DigiPlus Awards 2026.",
    },
    {
        title: "STRATEGIC FINANCIAL ADVISORY & MENTORSHIP",
        desc: "Providing C-suite and founder-level mentorship across the group's international portfolio. Focuses on building sustainable, scalable financial services models that serve growing economies.",
        points: [
            "Cross-border financial strategy",
            "Leadership mentorship",
            "Operational scalability",
            "Sustainable business systems",
        ],
        impact:
            "Direct leadership and strategic oversight across 150+ employees in group companies operating in India, UAE, and the United Kingdom.",
    },
];

export default function MyWork() {
    // First section open by default, matching the screenshot (up-chevron on section 1).
    const [open, setOpen] = useState(0);

    return (
        <section className="relative overflow-hidden bg-[#ECE7DC] text-[#1c1a17] py-12 md:py-20 px-5 md:px-10 lg:px-16">
            <div className="relative z-10 max-w-7xl mx-auto">
                {/* ── Heading (desktop) ── */}
                <div className="hidden lg:block relative h-[520px] border-t-[2px] border-b-[1px] border-[#e48720]">

                    {/* center vertical line */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-[#e48720]" />

                    {/* upper segment */}
                    <div className="absolute left-1/2 top-0 h-[85px] w-[2px] bg-[#e48720]" />

                    {/* lower segment */}
                    <div className="absolute left-1/2 bottom-0 h-[95px] w-[2px] bg-[#e48720]" />

                    {/* Heading Block */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center">

                        <h2
                            className="
                font-[family-name:var(--font-serif)]
                text-[78px]
                leading-none
                uppercase
                text-[#161616]
                mr-[260px]
                bg-[#ECE7DC]
            "
                        >
                            Expertise & Core
                        </h2>

                        <h2
                            className="
                font-[family-name:var(--font-serif)]
                text-[78px]
                leading-none
                uppercase
                text-[#161616]
                ml-[260px]
                -mt-2
                bg-[#ECE7DC]
            "
                        >
                            Focus Areas
                        </h2>

                    </div>

                    {/* Description */}
                    <div className="absolute bottom-0 left-1/2 border-l-[2px] border-[#e48720] pl-8 pb-20">
                        <p className="max-w-[420px] text-[16px] leading-[1.7] text-black/70">
                            Showcase leadership impact through specific companies and
                            large-scale outcomes.
                        </p>
                    </div>

                </div>

                {/* ── Heading (mobile) ── */}
                <div className="lg:hidden text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-serif leading-[1.1] uppercase">
                        Expertise &amp; Core Focus Areas
                    </h2>
                    <p className="mt-5 text-black/55 max-w-md mx-auto text-[15px] leading-[1.7]">
                        Showcase leadership impact through specific companies and
                        large-scale outcomes.
                    </p>
                </div>

                {/* ── Sections (accordion) ── */}
                <div>
                    {expertise.map((item, index) => {
                        const isOpen = open === index;
                        return (
                            <div
                                key={index}
                                className="border-t-2 border-[#e48720] py-10 lg:py-12"
                            >
                                <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-12 items-start">
                                    {/* Title */}
                                    <div className="lg:col-span-5">
                                        <h3 className="font-serif text-[26px] md:text-[30px] leading-snug uppercase font-extrabold">
                                            {item.title}
                                        </h3>
                                    </div>

                                    {/* Body */}
                                    <div className="lg:col-span-7 relative pr-8 pb-6">
                                        <p className="text-[15px] md:text-[16px] leading-relaxed text-black/75">
                                            {item.desc}
                                        </p>

                                        {isOpen && (
                                            <>
                                                <ul className="mt-5 space-y-1.5 text-[15px] text-black/75">
                                                    {item.points.map((point, i) => (
                                                        <li
                                                            key={i}
                                                            className="flex items-start gap-3"
                                                        >
                                                            <span className="text-[#e48720] leading-6">
                                                                ·
                                                            </span>
                                                            <span>{point}</span>
                                                        </li>
                                                    ))}
                                                </ul>

                                                {item.impact && (
                                                    <p className="mt-3 text-[15px] leading-relaxed text-black/75">
                                                        {item.impact}
                                                    </p>
                                                )}
                                            </>
                                        )}

                                        {/* Chevron toggle (bottom-right) */}
                                        <button
                                            type="button"
                                            onClick={() => setOpen(isOpen ? -1 : index)}
                                            aria-expanded={isOpen}
                                            aria-label={isOpen ? "Collapse" : "Expand"}
                                            className="absolute right-0 bottom-0 text-[#e48720]"
                                        >
                                            <ChevronDown
                                                size={22}
                                                className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                                                    }`}
                                            />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                    {/* closing orange line under last section */}
                    <div className="border-t-2  border-[#e48720]" />
                </div>
            </div>
        </section>
    );
}