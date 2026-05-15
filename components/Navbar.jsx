"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const links = [

        { name: "About", path: "/about" },
        { name: "Financial Literacy", path: "/financialliteracy" },
        { name: "Contact", path: "/contact" },
    ];

    return (
        <header className="w-full px-6 md:px-16 py-6 sticky top-0 z-50 bg-white/80 backdrop-blur-md">
            <nav className="flex items-center justify-between ">

                {/* Logo */}
                <Link href="/">
                    <div className="relative w-[180px] md:w-[280px] h-[50px] cursor-pointer">
                        <Image
                            src="/signature.png"
                            alt="Harish Parmar Signature"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
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