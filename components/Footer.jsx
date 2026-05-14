import Link from "next/link";
import React from "react";
import {
    Mail,
    Linkedin,
    Github,
    Twitter,
} from "lucide-react";

const Footer = () => {

    const currentYear = new Date().getFullYear();

    const links = [

        { name: "About", path: "/about" },
        { name: "Contact", path: "/contact" },
    ];

    const icons = [

        {
            icon: <Mail size={18} />,
            path: "mailto:hello@example.com",
        },
    ];

    return (
        <footer className="w-full px-6 md:px-16 py-16 md:py-24 bg-[#3E3AA8] text-white">
            <div className="max-w-7xl mx-auto">

                {/* Top */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-10 border-b border-white/20 pb-10">

                    {/* Navigation */}
                    <ul className="flex flex-wrap items-center justify-center md:justify-start gap-8 text-[18px] font-light">
                        {links.map((link, i) => (
                            <li key={i} className="relative group">
                                <Link
                                    href={link.path}
                                    className="transition-all duration-300"
                                >
                                    {link.name}
                                </Link>

                                {/* Hover Underline */}
                                <span className="absolute left-0 -bottom-2 h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
                            </li>
                        ))}
                    </ul>

                    {/* Social Icons */}
                    <div className="flex items-center gap-4">
                        {icons.map((item, i) => (
                            <Link
                                key={i}
                                href={item.path}
                                target="_blank"
                                className="w-11 h-11 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-[#3E3AA8] transition-all duration-300"
                            >
                                {item.icon}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Bottom */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8">

                    <p className="text-[15px] text-white/70 text-center md:text-left">
                        © Copyright {currentYear}
                    </p>
                    <p className="text-[15px] text-white/70 text-center md:text-left">
                        Harish Parmar. All rights reserved.
                    </p>

                </div>
            </div>
        </footer>
    );
};

export default Footer;