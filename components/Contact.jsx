import Link from "next/link";
import React from "react";
import { Mail, ArrowUpRight, FileText } from "lucide-react";

const LinkedinIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
    </svg>
);

const contacts = [
    {
        href: "https://linkedin.com",
        target: "_blank",
        icon: <LinkedinIcon size={20} />,
        label: "LinkedIn",
        number: "01",
        desc: "Connect for insights on global finance, fintech, and leadership.",
    },
    {
        href: "mailto:hello@example.com",
        target: "_self",
        icon: <Mail size={20} />,
        label: "Email",
        number: "02",
        desc: "hello@example.com",
    },
    {
        href: "/contact",
        target: "_self",
        icon: <FileText size={20} />,
        label: "Contact Form",
        number: "03",
        desc: "Reach out through a secure professional contact form.",
    },
];

const Contact = () => {
    return (
        <section className="relative w-full bg-[#f7f6f3] overflow-hidden">

            {/* ── Background geometry ── */}
            <div className="absolute inset-0 pointer-events-none select-none">
                <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full border border-black/[0.05]" />
                <div className="absolute -bottom-16 -right-16 w-[320px] h-[320px] rounded-full border border-black/[0.04]" />
                <div className="absolute top-0 left-0 w-[260px] h-[260px] border-b border-r border-black/[0.05]" />
            </div>

            {/* ── Header ── */}
            <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 md:px-16 pt-10 md:pt-14">

                <div className="flex items-center gap-3 mb-10">
                    <span className="block w-7 h-[1px] bg-black/30" />
                    <p className="uppercase tracking-[5px] text-[10px] font-semibold text-[#4D4AB8]">
                        Connect / Contact
                    </p>
                </div>

                {/* Headline + subtext two-column */}
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] xl:grid-cols-[1fr_440px] gap-10 lg:gap-20 items-end">

                    <h2 className="text-[38px] sm:text-[52px] md:text-[68px] xl:text-[76px] leading-[1.0] font-semibold text-black tracking-tight">
                        Let's Start a<br />
                        <span className="text-black/20">Professional Dialogue</span>
                    </h2>

                    <p className="text-[16px] md:text-[34px] leading-[1.9] text-[#555] font-light lg:pb-2">
                        For speaking engagements, media inquiries, or professional
                        dialogue.
                    </p>
                </div>

                <div className="w-full h-[1px] bg-black/10 mt-14" />
            </div>

            {/* ── Contact Cards ── */}
            <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 md:px-16 mt-0">
                <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-black/10">
                    {contacts.map((item, i) => (
                        <Link
                            key={i}
                            href={item.href}
                            target={item.target}
                            className="group relative px-0 sm:px-8 md:px-10 py-12 md:py-16 flex flex-col gap-6 transition-all duration-300"
                        >
                            {/* Top row: number + icon */}
                            <div className="flex items-center justify-between">
                                <span className="text-[11px] uppercase tracking-[4px] text-black/25 font-semibold">
                                    {item.number}
                                </span>
                                <div className="w-10 h-10 rounded-full border border-black/15 bg-white flex items-center justify-center text-black/60 group-hover:bg-[#3E3AA8] group-hover:text-white group-hover:border-transparent transition-all duration-300">
                                    {item.icon}
                                </div>
                            </div>

                            {/* Title + arrow */}
                            <div className="flex items-start justify-between gap-4">
                                <h3 className="text-[22px] md:text-[26px] leading-[1.25] font-semibold text-black">
                                    {item.label}
                                </h3>
                                <ArrowUpRight
                                    size={18}
                                    className="text-black/30 mt-1 shrink-0 group-hover:text-[#3E3AA8] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
                                />
                            </div>

                            {/* Divider */}
                            <div className="w-8 h-[1px] bg-[#3E3AA8]/30 group-hover:w-16 transition-all duration-500" />

                            {/* Description */}
                            <p className="text-[15px] md:text-[16px] leading-[1.85] text-[#666] font-light break-all">
                                {item.desc}
                            </p>

                            {/* Bottom hover accent */}
                            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#3E3AA8] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 hidden sm:block" />
                        </Link>
                    ))}
                </div>
            </div>

            {/* ── Footer strip ── */}
            <div className="relative z-10    ">
                <div className="border border-black/10 bg-white p-8 sm:p-10 md:p-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">

                    <div>
                        <p className="text-[11px] uppercase tracking-[4px] text-black/80 mb-2">
                            Based in India
                        </p>
                        <p className="text-[18px] md:text-[22px] font-semibold text-black">
                            Harish Parmar
                        </p>
                        <p className="text-[14px] text-[#777] mt-1">
                            Founder & Chairman, SingleDebt
                        </p>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-[13px] text-[#666] uppercase tracking-[3px]">
                            Open to Engagements
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;