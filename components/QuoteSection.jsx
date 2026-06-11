"use client";

import Image from "next/image";

export default function QuoteSection() {
    return (
        <section className="bg-[#ECE7DC] px-5 md:px-10 lg:px-16 ">
            <div className="max-w-7xl mx-auto">

                {/* Top Line */}


                <div className="pb-12 md:pb-20">

                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                        {/* Image */}
                        <div className="flex justify-center lg:justify-start">
                            <div className="relative w-full max-w-[420px] aspect-[4/3] overflow-hidden">

                                <Image
                                    src="/HP Image 2.jpg"
                                    alt="Harish Parmar"
                                    fill
                                    className="object-cover grayscale"
                                />

                            </div>
                        </div>

                        {/* Quote */}
                        <div className="relative">

                            {/* Quote Mark */}
                            <div className="text-[#e48720] text-7xl md:text-8xl leading-none font-serif">
                                “
                            </div>

                            <blockquote
                                className="
                                    -mt-4
                                    font-serif
                                    text-[28px]
                                    md:text-[42px]
                                    lg:text-[48px]
                                    leading-[1.3]
                                    text-[#161616]
                                "
                            >
                                The best outcomes come from
                                conversations that begin with
                                curiosity and a shared purpose.
                            </blockquote>

                            {/* Signature */}
                            <div
                                className="
                                    mt-10
                                    text-[#e48720]
                                    text-[40px]
                                    md:text-[56px]
                                    leading-none
                                    font-light
                                "
                                style={{
                                    fontFamily: "var(--font-script)",
                                }}
                            >
                                Harish Parmar
                            </div>

                        </div>

                    </div>

                </div>

                {/* Bottom Line */}


            </div>
        </section>
    );
}