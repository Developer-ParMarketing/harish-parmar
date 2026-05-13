// import Image from "next/image";
// import React from "react";

// const Bitabout = () => {

//     const media = [
//         {
//             name: "ET Now",
//             image: "/etnow.png",
//         },
//         {
//             name: "Business Standard",
//             image: "/businessstandard.png",
//         },
//         {
//             name: "Financial Chronicles",
//             image: "/financial.png",
//         },
//     ];

//     return (
//         <section className="w-full px-6 md:px-16 py-20 md:py-32 overflow-hidden bg-[#f8f8f8]">
//             <div className="max-w-7xl mx-auto">

//                 {/* Top Section */}
//                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

//                     {/* Left Image */}
//                     <div className="flex justify-center lg:justify-start">
//                         <div className="relative w-full max-w-[520px] h-[620px] md:h-[900px] overflow-hidden">
//                             <Image
//                                 src="/harish.png"
//                                 alt="Harish Parmar"
//                                 fill
//                                 className="object-cover"
//                             />

//                             <div className="absolute inset-0 bg-black/20"></div>
//                         </div>
//                     </div>

//                     {/* Right Content */}
//                     <div>

//                         <p className="text-[22px] md:text-[30px] font-semibold text-[#4D4AB8] mb-4">
//                             Media Presence & Industry Voice
//                         </p>

//                         <h2 className="text-[28px] sm:text-[38px] md:text-[56px] leading-[1.1] font-semibold text-black">
//                             A Trusted Voice in Finance
//                         </h2>

//                         <div className="w-full h-[1px] bg-gray-300 my-6"></div>

//                         <p className="text-[18px] md:text-[21px] leading-[2] text-[#333] font-light">
//                             Harish Parmar&apos;s insights shape industry conversations.
//                             He is regularly featured in business media and invited
//                             to spearhead discussions on fintech, ethical debt
//                             resolution, and financial inclusion at premier industry
//                             forums.
//                         </p>



//                         {/* Industry Leadership */}
//                         <div className="mt-10">
//                             <h3 className="text-[24px] md:text-[30px] font-semibold text-black mb-4">
//                                 Industry Leadership
//                             </h3>

//                             <p className="text-[18px] md:text-[20px] text-[#444] leading-[1.8]">
//                                 Keynote speaker and panelist at IFTA
//                                 (International Financial Technologists Association)
//                                 Conclaves and Taurus Group Annual Meets.
//                             </p>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Media Wall */}
//                 <div className="mt-28 md:mt-36">

//                     <div className="text-center mb-16">
//                         <p className="uppercase tracking-[4px] text-[#4D4AB8] text-[14px] mb-5">
//                             Media Wall
//                         </p>

//                         <h3 className="text-[34px] md:text-[58px] leading-[1.2] font-semibold text-black">
//                             Featured Media Platforms
//                         </h3>

//                         <p className="text-[18px] md:text-[20px] text-[#555] mt-6 max-w-4xl mx-auto leading-[1.9]">
//                             A dynamic grid showcasing logos of featured media
//                             outlets, video clips from talks, and photos from
//                             speaking engagements.
//                         </p>
//                     </div>

//                     {/* Logo Grid */}
//                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

//                         {media.map((item, i) => (
//                             <div
//                                 key={i}
//                                 className="bg-white border border-gray-200 h-[220px] flex items-center justify-center p-10 hover:shadow-xl transition-all duration-300"
//                             >
//                                 <Image
//                                     src={item.image}
//                                     alt={item.name}
//                                     width={220}
//                                     height={100}
//                                     className="object-contain"
//                                 />
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Bitabout;

"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";

const media = [
    {
        name: "ET Now",
        image: "/etnow.webp",
        link: "https://www.etnownews.com/personal-finance/what-is-peer-to-peer-lending-and-how-it-works-all-you-need-to-know-article-102284527",
    },
    {
        name: "PTI",
        image: "/pti.png",
        link: "https://www.ptinews.com/press-release/the-invisible-burden-of-debt-how-unpaid-loans-and-emis-disrupt-sleep-peace-and-mental-health/2996919",
    },
    {
        name: "The Times of India",
        image: "/toi.png",
        link: "https://timesofindia.indiatimes.com/blogs/voices/how-to-settle-your-debt-without-any-legal-hassles/",
    },
];

const Bitabout = () => {
    const [mounted, setMounted] = useState(false);
    useEffect(() => { setMounted(true); }, []);

    return (
        <section className="w-full bg-white overflow-hidden">

            {/* ── HERO SPLIT ──────────────────────────────────────────── */}
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[85vh]">

                {/* LEFT — Image with overlays */}
                <div className="relative overflow-hidden order-2 lg:order-1" style={{ minHeight: "480px" }}>

                    {/* Tinted bg before image loads */}
                    <div className="absolute inset-0 bg-[#eeedf8]" />

                    <Image
                        src="/billu.png"
                        alt="Harish Parmar"
                        fill
                        className="object-cover object-top"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                    />

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />

                    {/* Corner accent */}
                    <div className="absolute top-6 left-6 w-12 h-12 border-t-2 border-l-2 border-white/30 rounded-tl-xl" />
                    <div className="absolute bottom-6 right-6 w-12 h-12 border-b-2 border-r-2 border-[#4D4AB8]/60 rounded-br-xl" />

                    {/* Bottom label over image */}
                    <div className="absolute bottom-8 left-8 right-8">
                        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-5 py-4">
                            <p className="text-[10px] uppercase tracking-[4px] text-white/60 mb-1">Founder</p>
                            <p className="text-[18px] font-bold text-white leading-tight">Harish Parmar</p>
                            <p className="text-[12px] text-white/60 mt-0.5">Financial Strategist · 40+ Years</p>
                        </div>
                    </div>

                    {/* Floating stat pill */}
                    <div className="absolute top-8 right-8 bg-white rounded-2xl px-4 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.15)]">
                        <p className="text-[8px] uppercase tracking-[3px] text-black/35">Media features</p>
                        <p className="text-[22px] font-bold text-black leading-none mt-0.5">15+</p>
                        <p className="text-[8px] uppercase tracking-[2px] text-[#4D4AB8] font-semibold mt-0.5">Outlets</p>
                    </div>
                </div>

                {/* RIGHT — Content */}
                <div className="flex flex-col justify-center px-8 md:px-12 lg:px-14 xl:px-16 py-16 lg:py-20 order-1 lg:order-2 bg-white">

                    {/* Label */}
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-8 h-px bg-[#4D4AB8]" />
                        <span className="text-[10px] uppercase tracking-[5px] text-[#4D4AB8] font-semibold">
                            Media Presence &amp; Industry Voice
                        </span>
                    </div>

                    {/* Heading */}
                    <h2 className="text-[32px] sm:text-[44px] md:text-[52px] lg:text-[44px] xl:text-[52px] leading-[1.05] font-semibold text-black">
                        A Trusted Voice<br />
                        <span className="text-[#4D4AB8]">in Finance</span>
                    </h2>

                    {/* Divider */}
                    <div className="w-full h-px bg-black/8 my-7" />

                    {/* Body */}
                    <p className="text-[15px] md:text-[17px] leading-[1.95] text-gray-600 font-light">
                        Harish Parmar&apos;s insights shape industry conversations.
                        He is regularly featured in business media and invited
                        to spearhead discussions on fintech, ethical debt
                        resolution, and financial inclusion at premier industry
                        forums.
                    </p>

                    {/* Industry Leadership block */}
                    <div className="mt-8 rounded-[20px] border border-black/[0.07] bg-[#fafafa] p-6 md:p-7">
                        {/* Mini label */}
                        <div className="flex items-center gap-2.5 mb-4">
                            <div
                                className="w-8 h-8 rounded-xl flex items-center justify-center"
                                style={{ backgroundColor: "#4D4AB815" }}
                            >
                                <svg viewBox="0 0 24 24" fill="none" stroke="#4D4AB8" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                </svg>
                            </div>
                            <h3 className="text-[13px] font-bold text-black uppercase tracking-[2px]">
                                Industry Leadership
                            </h3>
                        </div>

                        <p className="text-[14px] md:text-[15px] text-gray-600 leading-[1.85]">
                            Keynote speaker and panelist at IFTA
                            (International Financial Technologists Association)
                            Conclaves and Taurus Group Annual Meets.
                        </p>
                    </div>

                    {/* Stat pills row */}
                    {/* <div className="flex items-center justify-between w-full mt-8">
                        {[
                            { value: "40+", label: "Years" },
                            { value: "3", label: "Countries" },
                            { value: "15+", label: "Media Outlets" },
                        ].map((s, i) => (
                            <React.Fragment key={s.label}>
                                <div className="flex-1 text-center">
                                    <p className="text-[20px] sm:text-[24px] font-bold text-black leading-none">
                                        {s.value}
                                    </p>
                                    <p className="text-[9px] uppercase tracking-[2px] text-black/35 mt-1">
                                        {s.label}
                                    </p>
                                </div>

                                {i < 2 && <div className="w-px h-7 bg-black/10" />}
                            </React.Fragment>
                        ))}
                    </div> */}
                </div>
            </div>

            {/* ── MEDIA WALL ──────────────────────────────────────────── */}
            <div className="bg-[#fafafa] border-t border-black/[0.05] px-6 md:px-12 lg:px-16 py-20 md:py-28">
                <div className="max-w-6xl mx-auto">

                    {/* Heading */}
                    <div className="text-center mb-14">


                        <div className="flex items-center gap-3 mb-10">
                            <span className="block w-7 h-[1px] bg-black/30" />
                            <p className="uppercase tracking-[5px] text-[10px] font-semibold text-[#4D4AB8]">
                                Media Wall
                            </p>
                        </div>


                        <h3 className="text-[28px] sm:text-[40px] md:text-[52px] leading-[1.1] font-semibold text-black">
                            Featured Media Platforms
                        </h3>

                        <p className="text-[14px] md:text-[16px] text-gray-500 mt-5 max-w-2xl mx-auto leading-[1.9] font-light">
                            A dynamic grid showcasing logos of featured media
                            outlets, video clips from talks, and photos from
                            speaking engagements.
                        </p>
                    </div>

                    {/* Logo grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {media.map((item, i) => (
                            <a
                                key={i}
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative bg-white border border-black/[0.07] rounded-[20px] h-[180px] flex flex-col items-center justify-center p-8 transition-all duration-400 hover:shadow-[0_12px_48px_rgba(0,0,0,0.09)] hover:border-[#4D4AB8]/20 overflow-hidden cursor-pointer"
                            >
                                {/* Hover glow */}
                                <div className="absolute inset-0 bg-gradient-to-br from-[#4D4AB8]/0 to-[#4D4AB8]/0 group-hover:from-[#4D4AB8]/3 group-hover:to-[#4D4AB8]/5 transition-all duration-500 rounded-[20px]" />

                                {/* Step number */}
                                <span className="absolute top-4 right-4 text-[10px] tabular-nums text-black/15 font-medium">
                                    {String(i + 1).padStart(2, "0")}
                                </span>

                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    width={200}
                                    height={80}
                                    className="object-contain relative z-10 transition-all duration-300 group-hover:scale-105"
                                />

                                {/* Name below logo */}
                                <p className="mt-4 text-[11px] uppercase tracking-[2.5px] text-black/30 font-medium relative z-10 text-center">
                                    {item.name}
                                </p>

                                {/* Bottom accent bar on hover */}
                                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#4D4AB8] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-[20px]" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Bitabout;