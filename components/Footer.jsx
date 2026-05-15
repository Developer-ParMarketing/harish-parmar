import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Mail } from "lucide-react";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const links = [
        { name: "About", path: "/about" },
        { name: "Financial Literacy", path: "/financialliteracy" },
        { name: "Contact", path: "/contact" },
    ];

    const socialIcons = [
        {
            label: "Instagram",
            path: "https://www.instagram.com/harishparmarr_?igsh=MTI5aG1sMjQ0a21ucg==",
            icon: (
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-[18px] h-[18px]"
                >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
            ),
        },
        {
            label: "Facebook",
            path: "https://www.facebook.com/profile.php?id=61587471657903&sk=about",
            icon: (
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-[18px] h-[18px]"
                >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
            ),
        },
        {
            label: "X",
            path: "https://x.com/HarishParmarr_",
            icon: (
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-[18px] h-[18px]"
                >
                    <path d="M4 4L20 20" />
                    <path d="M20 4L4 20" />
                </svg>
            ),
        },
        {
            label: "LinkedIn",
            path: "https://www.linkedin.com/in/harishparmar1/",
            icon: (
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-[18px] h-[18px]"
                >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                </svg>
            ),
        },
        {
            label: "Email",
            path: "mailto:hello@example.com",
            icon: <Mail size={18} />,
        },
    ];

    return (
        <footer className="w-full bg-[#3E3AA8] text-white overflow-hidden relative">

            {/* Background Glow */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full border border-white/5" />
                <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full border border-white/5" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 py-16 md:py-24">

                {/* Top Section */}
                <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-14 border-b border-white/15 pb-14">

                    {/* Left */}
                    <div className="max-w-xl text-center lg:text-left">

                        <p className="text-[11px] uppercase tracking-[4px] text-white/40 mb-5">
                            Harish Parmar
                        </p>

                        <h2 className="text-[34px] sm:text-[42px] md:text-[56px] leading-[1.02] font-semibold tracking-tight">
                            Trusted Financial
                            <br />
                            <span className="text-white/45">
                                Leadership
                            </span>
                        </h2>

                        <p className="mt-6 text-[15px] md:text-[16px] leading-[1.9] text-white/65 font-light">
                            Driving conversations around financial wellness,
                            ethical debt resolution, and fintech innovation
                            across global markets.
                        </p>

                        {/* Countries */}
                        <div className="mt-8 flex flex-col sm:flex-row items-center gap-5">

                            <div className="flex items-center gap-4 -space-x-3">

                                <Image
                                    src="/ind.png"
                                    alt="India"
                                    width={38}
                                    height={38}
                                    className="rounded-full object-cover border-2 border-[#3E3AA8]"
                                />

                                <Image
                                    src="/uae.png"
                                    alt="UAE"
                                    width={38}
                                    height={38}
                                    className="rounded-full object-cover border-2 border-[#3E3AA8]"
                                />

                                <Image
                                    src="/uk.png"
                                    alt="UK"
                                    width={38}
                                    height={38}
                                    className="rounded-full object-cover border-2 border-[#3E3AA8]"
                                />
                            </div>

                            <div className="text-center sm:text-left">
                                <p className="text-[12px] uppercase tracking-[3px] text-white/40">
                                    Global Presence
                                </p>

                                <p className="text-[14px] text-white/75 mt-1">
                                    India · UAE · United Kingdom
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right */}
                    <div className="flex flex-col items-center lg:items-end gap-10">

                        {/* Navigation */}
                        <ul className="flex flex-wrap items-center justify-center gap-8 text-[15px] md:text-[16px] font-light">
                            {links.map((link, i) => (
                                <li key={i} className="relative group">
                                    <Link
                                        href={link.path}
                                        className="text-white/75 hover:text-white transition-all duration-300"
                                    >
                                        {link.name}
                                    </Link>

                                    <span className="absolute left-0 -bottom-2 h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full" />
                                </li>
                            ))}
                        </ul>

                        {/* Social Icons */}
                        <div className="flex flex-wrap items-center justify-center lg:justify-end gap-3">
                            {socialIcons.map((item, i) => (
                                <Link
                                    key={i}
                                    href={item.path}
                                    target="_blank"
                                    aria-label={item.label}
                                    className="group w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white/65 hover:bg-white hover:text-[#3E3AA8] hover:border-white transition-all duration-300"
                                >
                                    <span className="group-hover:scale-110 transition-transform duration-300">
                                        {item.icon}
                                    </span>
                                </Link>
                            ))}
                        </div>

                        {/* Small Card */}
                        <div className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl px-6 py-5 max-w-sm text-center lg:text-right">
                            <p className="text-[11px] uppercase tracking-[3px] text-white/35 mb-2">
                                Open For
                            </p>

                            <p className="text-[15px] leading-[1.8] text-white/80">
                                Speaking Engagements · Advisory · Media
                                Collaborations · Strategic Partnerships
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">

                    <p className="text-[14px] text-white/55 text-center md:text-left">
                        © Copyright {currentYear}
                    </p>

                    <p className="text-[14px] text-white/55 text-center md:text-right">
                        Harish Parmar. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;