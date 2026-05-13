"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const links = [
        { name: "My work", path: "/work" },
        { name: "About", path: "/about" },
        { name: "Contact", path: "/contact" },
    ];

    return (
        <header className="w-full px-6 md:px-16 py-6 md:py-10">
            <nav className="flex items-center justify-between">

                {/* Logo */}
                <Link href="/">
                    <span className="text-[22px] md:text-[26px] font-bold text-black cursor-pointer">
                        Harish Parmar
                    </span>
                </Link>

                {/* Desktop Menu */}
                <ul className="hidden md:flex items-center gap-8 text-[#5A56C8] text-[18px] font-light">
                    {links.map((link, i) => (
                        <li key={i} className="relative group">
                            <Link
                                href={link.path}
                                className="transition-all duration-300"
                            >
                                {link.name}
                            </Link>

                            {/* Hover underline */}
                            <span className="absolute left-0 -bottom-2 h-[1px] w-0 bg-[#5A56C8] transition-all duration-300 group-hover:w-full"></span>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden text-black"
                >
                    {open ? <X size={28} /> : <Menu size={28} />}
                </button>
            </nav>

            {/* Mobile Menu */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${open ? "max-h-60 mt-6" : "max-h-0"
                    }`}
            >
                <ul className="flex flex-col gap-5 text-[#5A56C8] text-[18px] font-light">
                    {links.map((link, i) => (
                        <li key={i}>
                            <Link
                                href={link.path}
                                onClick={() => setOpen(false)}
                                className="block border-b border-gray-200 pb-2"
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
};

export default Navbar;