"use client";
import React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

import { useRef } from "react";

const history = [
    {
        year: "1994",
        imageClass: "h-[200px]",
        title: "Academic & Early UK Foundation",
        img: "/billu.png",
        desc: "Harish Parmar, founder of SingleDebt, graduated from The University of Manchester Institute of Science and Technology (UMIST) and began consulting on the design of financial products for banks in the UK and USA.",
        links: { SingleDebt: "https://singledebt.in/" },
    },
    {
        year: "1999",
        imageClass: "h-[320px]",
        title: "India Market Entry & Institutional Building",
        img: "/billu.png",
        desc: "Founded One Debt, a debt management company catering to UK nationals, at a time when consumer debt in the UK was increasing significantly.",
        links: {},
    },
    {
        year: "2007",
        imageClass: "h-[200px]",
        title: "BPO & Financial Operations Expansion",
        img: "/billu.png",
        desc: "Established a Business Process Outsourcing (BPO) center in India to support financial products and banking services for clients in the UK and USA.",
        links: {},
    },
    {
        year: "2020",
        imageClass: "h-[200px]",
        title: "Ecosystem Leadership & Mass Impact",
        img: "/billu.png",
        desc: "Founded SingleDebt, introducing a structured legal-fintech model for debt resolution in India.",
        points: [
            "Simplify formal insolvency processes",
            "Provide structured debt relief pathways",
            "Digitize engagement between clients and advisors",
            "Promote financial literacy and responsible restructuring",
        ],
        extra: "This marked a shift from service execution to ecosystem innovation.",
        links: { SingleDebt: "https://singledebt.in/" },
    },
    {
        year: "2021",
        imageClass: "h-[300px]",
        title: "First Debt Management Platform",
        img: "/billu.png",
        desc: "Introduced a customer-first Debt Management Platform, providing easy access to representatives and online resources for debt solutions.",
        links: {},
    },
    {
        year: "2022",
        imageClass: "h-[200px]",
        title: "UAE Expansion – Dubai Headquarters",
        img: "/billu.png",
        desc: "Expanded operations to the UAE, establishing Dubai as a regional headquarters. Extended services to the GCC market.",
        links: {},
    },
];

const renderTextWithLinks = (text, links = {}) => {
    if (!links || Object.keys(links).length === 0) return text;
    const regex = new RegExp(`(${Object.keys(links).join("|")})`, "gi");
    return text.split(regex).map((part, i) => {
        const key = Object.keys(links).find((k) => k.toLowerCase() === part.toLowerCase());
        if (key) {
            return (
                <a key={i} href={links[key]} target="_blank" rel="noopener noreferrer"
                    className="font-semibold text-[#C19A5B] underline underline-offset-2 hover:opacity-70 transition-opacity">
                    {part}
                </a>
            );
        }
        return part;
    });
};

const TimelineCard = ({ item }) => {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start 85%", "end 15%"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -20]);

    const opacity = useTransform(
        scrollYProgress,
        [0, 0.25, 1],
        [0, 1, 1]
    );

    const scale = useTransform(
        scrollYProgress,
        [0, 1],
        [1.25, 1]
    );

    return (
        <motion.div
            ref={ref}
            style={{ y, opacity }}
            className="relative"
        >
            {/* Gold connector line */}
            <div className="hidden md:block absolute -top-16 left-0 w-[2px] h-28 bg-[#e48720]" />

            {/* Image */}
            <div
                className={`
                    relative
                    mb-6
                    w-full
                    overflow-hidden
                    bg-[#5c5c5c]
                    ${item.imageClass || "h-[220px]"}
                `}
            >
                <motion.div
                    style={{ scale }}
                    className="absolute inset-0"
                >
                    <Image
                        src={item.img}
                        alt={item.title}
                        fill
                        sizes="(max-width:1024px) 100vw, 320px"
                        className="object-cover"
                    />
                </motion.div>
            </div>

            {/* Year */}
            <h3
                className="
                    font-[family-name:var(--font-serif)]
                    text-[58px]
                    leading-none
                    text-[#161616]
                "
            >
                {item.year}
            </h3>

            {/* Title */}
            <h4
                className="
                    mt-2
                    text-[18px]
                    font-semibold
                    text-[#161616]
                    leading-tight
                "
            >
                {item.title}
            </h4>

            {/* Description */}
            <p
                className="
                    mt-4
                    text-[14px]
                    leading-[1.7]
                    text-[#6E695E]
                "
            >
                {renderTextWithLinks(item.desc, item.links)}
            </p>

            {/* Bullet Points */}
            {item.points && (
                <ul className="mt-4 space-y-2">
                    {item.points.map((p, idx) => (
                        <li
                            key={idx}
                            className="flex items-start gap-3 text-[13px] leading-relaxed text-[#6E695E]"
                        >
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#C19A5B]" />
                            <span>{p}</span>
                        </li>
                    ))}
                </ul>
            )}

            {/* Extra text */}
            {item.extra && (
                <p className="mt-4 text-[13px] text-[#6E695E]">
                    {item.extra}
                </p>
            )}
        </motion.div>
    );
};

export default function TimelineSection() {
    const columns = [[], [], []];
    history.forEach((item, i) => columns[i % 3].push(item));

    return (
        <section className="relative bg-[#ECE7DC] py-10 lg:py-12 overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 lg:px-10 relative">
                {/* Header - Desktop Version (Large Screens) */}
                <div className="relative mb-72 hidden lg:block">

                    {/* Top horizontal line */}
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#e48720]" />

                    {/* Center vertical line */}
                    <div className="absolute left-1/2 top-0 h-[720px] w-[2px] bg-[#e48720]" />

                    <div className="grid grid-cols-2 min-h-[520px]">

                        {/* Left Side */}
                        <div className="flex items-center justify-center relative">
                            <h2
                                className="
                                font-[family-name:var(--font-serif)]
                                text-[78px]
                                leading-[0.95]
                                uppercase
                                text-[#161616]
                                absolute
                                top-30
                                lg:left-[200px]
                                md:left-[100px]
                                bg-[#ece7dc]
                                whitespace-pre-line
                                w-[500px]
                            "
                            >
                                A TIMELINE
                                <br />
                                OF GLOBAL
                            </h2>
                        </div>

                        {/* Right Side */}
                        <div className="flex flex-col justify-center pl-20 relative">
                            <h2
                                className="
                            font-[family-name:var(--font-serif)]
                            text-[78px]
                            leading-[0.95]
                            uppercase
                            text-[#161616]
                            absolute
                            top-90
                            lg:right-[200px]
                            md:right-[100px]
                            bg-[#ece7dc]
                            whitespace-pre-line
                                
                            "
                            >
                                FINANCIAL
                                <br />
                                LEADERSHIP
                            </h2>

                            <p
                                className="
                                mt-5
                                max-w-[420px]
                                text-[17px]
                                
                                text-black/80
                                absolute
                                top-[550px]
                                lg:right-[150px]
                                md:left-[18px]
                                "
                            >
                                Harish Parmar's journey reflects a rare blend of
                                international exposure, system-building expertise,
                                and long-term industry shaping spanning the UK,
                                India, and the UAE.
                            </p>
                        </div>

                    </div>

                    {/* Bottom horizontal line */}
                    <div className="absolute left-0 right-0 top-[720px] h-[2px] bg-[#e48720]" />

                </div>

                {/* Mobile & Tablet Version */}
                <div className="lg:hidden py-10 px-6">
                    <div className="max-w-3xl mx-auto text-center space-y-8">
                        <h2 className="font-[family-name:var(--font-serif)] text-[42px] sm:text-[52px] leading-[0.95] uppercase text-[#161616]">
                            A TIMELINE

                            OF GLOBAL
                        </h2>

                        <h2 className="font-[family-name:var(--font-serif)] text-[42px] sm:text-[52px] leading-[0.95] uppercase text-[#161616]">
                            FINANCIAL

                            LEADERSHIP
                        </h2>

                        <p className="text-[15px] leading-[1.8] text-[#6E695E] max-w-md mx-auto">
                            Harish Parmar's journey reflects a rare blend of international exposure,
                            system-building expertise, and long-term industry shaping spanning the UK,
                            India, and the UAE.
                        </p>
                    </div>
                </div>

                {/* Desktop Layout */}
                <div className="hidden lg:grid grid-cols-3 gap-x-16 xl:gap-x-20">

                    {columns.map((col, colIndex) => (
                        <div
                            key={colIndex}
                            className={`
                ${colIndex === 0 ? "pt-0" : ""}
                ${colIndex === 1 ? "pt-32" : ""}
                ${colIndex === 2 ? "pt-16" : ""}
                space-y-44
            `}
                        >
                            {col.map((item, i) => (
                                <TimelineCard key={i} item={item} />
                            ))}
                        </div>
                    ))}

                </div>

                {/* Mobile Layout */}
                <div className="lg:hidden space-y-16 relative pl-10">
                    <div className="absolute left-4 top-6 bottom-8 w-px bg-[#C19A5B]/50" />
                    {history.map((item, i) => (
                        <div key={i} className="relative">
                            <div className="absolute -left-6 top-7 h-3 w-3 rounded-full border-[2.5px] border-[#C19A5B] bg-[#ECE7DC]" />
                            <TimelineCard item={item} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}