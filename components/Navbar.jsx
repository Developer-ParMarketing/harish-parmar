"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Pen } from "lucide-react";
import Image from "next/image";

const links = [
    { name: "About", path: "/about" },
    { name: "Financial Literacy", path: "/financialliteracy" },
    { name: "Blogs", path: "/blogs" },
    { name: "Contact", path: "/contact" },
];

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        onScroll();
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
                ? "bg-[#141414]/90 backdrop-blur-md border-b border-[#C19A5B]/20 shadow-sm"
                : "bg-transparent"
                }`}
        >
            <nav className="flex items-center justify-between px-6 md:px-16 py-5">
                {/* Logo */}
                <Link href="/" aria-label="Home">
                    <div className="relative w-[150px] md:w-[200px] md:h-[68px] h-[50px] cursor-pointer">
                        <Image
                            src="/HP-logo.png"
                            alt="Harish Parmar Signature"
                            fill
                            className="object-contain object-left"
                            priority
                        />
                    </div>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-10 lg:gap-12">
                    <ul className="flex items-center gap-10 lg:gap-12 uppercase text-[15px] tracking-[0.12em] font-normal text-[#E5E1D6]">
                        {links.map((link, i) => (
                            <li key={i} className="relative group">
                                <Link
                                    href={link.path}
                                    className="transition-colors duration-300 group-hover:text-[#C19A5B]"
                                >
                                    {link.name}
                                </Link>
                                <span className="absolute left-0 -bottom-2 h-[1.5px] w-0 bg-[#C19A5B] transition-all duration-300 group-hover:w-full" />
                            </li>
                        ))}
                    </ul>

                    {/* Gold pen icon (far right) */}
                    <Link
                        href="/contact"
                        aria-label="Get in touch"
                        className="hover:opacity-80 transition-opacity"
                    >
                        <Image
                            src="/Menu-Icon.png"
                            alt="Menu Icon"
                            width={40}
                            height={40}
                            className=""
                        />
                    </Link>
                </div>

                {/* Mobile Toggle (light, sits over dark bar) */}
                <button
                    onClick={() => setOpen(!open)}
                    aria-label="Toggle menu"
                    aria-expanded={open}
                    className="md:hidden text-[#E5E1D6]"
                >
                    {open ? <X size={26} /> : <Menu size={26} />}
                </button>
            </nav>

            {/* Mobile Menu */}
            <div
                className={`md:hidden overflow-hidden bg-[#141414]/95 backdrop-blur-md transition-all duration-300 ease-in-out ${open ? "max-h-72" : "max-h-0"
                    }`}
            >
                <ul className="flex flex-col px-6 py-1 uppercase text-[14px] tracking-[0.12em] text-[#E5E1D6]">
                    {links.map((link, i) => (
                        <li key={i}>
                            <Link
                                href={link.path}
                                onClick={() => setOpen(false)}
                                className="block border-b border-[#C19A5B]/15 py-4 transition-colors hover:text-[#C19A5B]"
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