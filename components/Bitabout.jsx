"use client";

import Image from "next/image";

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

export default function Bitabout() {
    return (
        <section className="bg-[#ECE7DC] px-6 md:px-10 lg:px-16  overflow-hidden">
            <div className="max-w-7xl mx-auto">

                {/* Top Line */}


                <div className="relative">

                    {/* Center Divider */}


                    <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center pb-12 md:pb-16">

                        {/* Image */}
                        <div className="lg:col-span-5 flex justify-center lg:justify-end order-1 lg:order-2">
                            <div
                                className="
                                    relative
                                    w-full
                                    max-w-[420px]
                                    aspect-[4/5]
                                    overflow-hidden
                                "
                            >
                                <Image
                                    src="/HP Image 1.jpg"
                                    alt="Harish Parmar"
                                    fill
                                    priority
                                    className="
                                        object-cover
                                        grayscale
                                        transition-transform
                                        duration-700
                                        hover:scale-105
                                    "
                                />
                            </div>
                        </div>

                        {/* Content */}
                        <div className="lg:col-span-7 order-2 lg:order-1 lg:pr-20">

                            <h2
                                className="
                                    font-[family-name:var(--font-serif)]
                                    text-[38px]
                                    sm:text-[46px]
                                    md:text-[56px]
                                    lg:text-[64px]
                                    leading-[1.05]
                                    uppercase
                                    text-[#161616]
                                    text-center
                                    md:text-left
                                "
                            >
                                Media Presence
                                <br />
                                & Industry Voice
                            </h2>

                            <p className="mt-4 max-w-[560px] text-[15px] md:text-[16px] leading-[1.8] text-black/70">
                                A Trusted Voice in Finance: Harish Parmar&apos;s
                                insights shape industry conversations. He is
                                regularly featured in business media and invited
                                to spearhead discussions on fintech, ethical debt
                                resolution, and financial inclusion at premier
                                industry forums.
                            </p>

                            <div className="mt-6">
                                <h3 className="font-serif font-extrabold text-[24px] md:text-[28px] text-[#161616] text-center md:text-left">
                                    Featured Media Platforms
                                </h3>

                                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 md:gap-10 mt-4">
                                    {media.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group flex items-center justify-center"
                                        >
                                            <Image
                                                src={item.image}
                                                alt={item.name}
                                                width={140}
                                                height={60}
                                                className="
                    h-auto
                    w-[80px]
                    sm:w-[100px]
                    md:w-[120px]
                    lg:w-[140px]
                    object-contain
                    grayscale
                    opacity-60
                    transition-all
                    duration-300
                    group-hover:opacity-100
                    group-hover:grayscale-0
                "
                                            />
                                        </a>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Bottom Line */}
                <div className="border-t-2 border-[#e48720]" />
            </div>
        </section>
    );
}