"use client";

import React, { useState } from "react";
import {
    Mail,
    Phone,
    MapPin,

} from "lucide-react";
import { api } from "@/app/variables";


const FacebookIcon = () => (
    <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-5 h-5"
    >
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
);

const InstagramIcon = () => (
    <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-5 h-5"
    >
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" />
    </svg>
);

const LinkedinIcon = () => (
    <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-5 h-5"
    >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
    </svg>
);

const inquiryTypes = [
    "Speaking Engagement",
    "Media Inquiry",
    "Advisory / Consulting",
    "Partnership",
    "Other",
];

const Contact = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        company: "",
        subject: "",
        type: "Speaking Engagement",
        message: "",
    });

    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setForm((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);

        try {
            const res = await fetch(`${api}/contact`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(form),
            });

            const data = await res.json();

            if (data.success) {
                setSubmitted(true);

                setForm({
                    name: "",
                    email: "",
                    company: "",
                    subject: "",
                    type: "Speaking Engagement",
                    message: "",
                });

                setTimeout(() => {
                    setSubmitted(false);
                }, 5000);
            } else {
                alert(data.message || "Something went wrong.");
            }
        } catch (error) {
            console.error(error);
            alert("Could not reach the server.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="bg-[#ECE7DC] px-5 md:px-10 lg:px-16 ">
            <div className="max-w-7xl mx-auto">

                {/* Heading */}
                <div className="text-center py-12 md:py-20 relative">

                    <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[2px] h-10 bg-[#e48720]" />

                    <p className="uppercase tracking-[3px] text-[#e48720] text-sm">
                        LET'S CONNECT
                    </p>

                    <h2
                        className="
                            font-serif
                            text-[42px]
                            sm:text-[54px]
                            md:text-[68px]
                            leading-[1.05]
                            text-[#161616]
                            mt-4
                            uppercase
                        "
                    >
                        Let's Start a
                        <br />
                        Professional Conversation
                    </h2>

                    <p className="max-w-xl mx-auto mt-6 text-black/60 text-[15px] md:text-[16px] leading-relaxed">
                        For speaking engagements, strategic advisory,
                        consulting opportunities, partnerships,
                        or media conversations.
                    </p>

                    <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[2px] h-10 bg-[#e48720]" />

                </div>

                {/* Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0">

                    {/* Left Side */}
                    <div className="lg:pr-14">

                        <h3 className="font-serif text-[30px] uppercase text-[#161616] text-center md:text-left">
                            Get In Touch
                        </h3>

                        <p className="mt-8 text-black/70 leading-7 md:leading-8 max-w-md text-center md:text-left">
                            Whether you're seeking a keynote speaker,
                            strategic advisor, or a media voice on
                            financial wellness and fintech,
                            Harish Parmar brings decades of global
                            financial leadership experience.
                        </p>

                        <div className="mt-12 space-y-8 text-center md:text-left">

                            <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start gap-3 md:gap-4">
                                <Mail
                                    size={20}
                                    className="text-[#e48720] mt-1 flex-shrink-0"
                                />

                                <div>
                                    <p className="uppercase tracking-[2px] font-medium">
                                        Email
                                    </p>

                                    <a
                                        href="mailto:connect@harishparmar.com"
                                        className="text-black/70 hover:text-black transition"
                                    >
                                        connect@harishparmar.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start gap-3 md:gap-4">
                                <Phone
                                    size={20}
                                    className="text-[#e48720] mt-1 flex-shrink-0"
                                />

                                <div>
                                    <p className="uppercase tracking-[2px] font-medium">
                                        Phone
                                    </p>

                                    <a
                                        href="tel:+919876543210"
                                        className="text-black/70 hover:text-black transition"
                                    >
                                        +91 98765 43210
                                    </a>
                                </div>
                            </div>

                            <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start gap-3 md:gap-4">
                                <MapPin
                                    size={20}
                                    className="text-[#e48720] mt-1 flex-shrink-0"
                                />

                                <div>
                                    <p className="uppercase tracking-[2px] font-medium">
                                        Location
                                    </p>

                                    <p className="text-black/70">
                                        India | UAE | UK
                                    </p>
                                </div>
                            </div>

                        </div>

                        {/* Social Icons */}

                        <div className="flex items-center justify-center md:justify-start gap-6 mt-12">
                            <a
                                href="https://www.facebook.com/profile.php?id=61587471657903"
                                target="_blank"
                                rel="noreferrer"
                                className="text-[#e48720] hover:scale-110 transition duration-300"
                            >
                                <FacebookIcon size={20} />
                            </a>

                            <a
                                href="https://www.instagram.com/harishparmarr_?igsh=MTI5aG1sMjQ0a21ucg=="
                                target="_blank"
                                rel="noreferrer"
                                className="text-[#e48720] hover:scale-110 transition duration-300"
                            >
                                <InstagramIcon size={20} />
                            </a>

                            <a
                                href="https://www.linkedin.com/in/harishparmar1/"
                                target="_blank"
                                rel="noreferrer"
                                className="text-[#e48720] hover:scale-110 transition duration-300"
                            >
                                <LinkedinIcon size={20} />
                            </a>

                            <a
                                href="https://x.com/HarishParmarr_"
                                target="_blank"
                                rel="noreferrer"
                                className="text-[#e48720] hover:scale-110 transition duration-300 text-lg font-medium"
                            >
                                X
                            </a>
                        </div>

                    </div>

                    {/* Right Side */}
                    <div className="lg:border-l-2 border-[#e48720] lg:pl-14">

                        <h3 className="font-serif text-[30px] uppercase text-[#161616] mb-8 text-center md:text-left">
                            Send A Message
                        </h3>

                        <form
                            onSubmit={handleSubmit}
                            className="space-y-4"
                        >

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                                <input
                                    type="text"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    placeholder="Full Name"
                                    required
                                    className="w-full border border-black/10 bg-transparent px-4 py-4 focus:outline-none focus:border-[#e48720]"
                                />

                                <input
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder="Email"
                                    required
                                    className="w-full border border-black/10 bg-transparent px-4 py-4 focus:outline-none focus:border-[#e48720]"
                                />

                            </div>

                            <input
                                type="text"
                                name="company"
                                value={form.company}
                                onChange={handleChange}
                                placeholder="Company / Organization"
                                className="w-full border border-black/10 bg-transparent px-4 py-4 focus:outline-none focus:border-[#e48720]"
                            />

                            <input
                                type="text"
                                name="subject"
                                value={form.subject}
                                onChange={handleChange}
                                placeholder="Subject"
                                required
                                className="w-full border border-black/10 bg-transparent px-4 py-4 focus:outline-none focus:border-[#e48720]"
                            />

                            <select
                                name="type"
                                value={form.type}
                                onChange={handleChange}
                                className="w-full border border-black/10 bg-transparent px-4 py-4 focus:outline-none focus:border-[#e48720]"
                            >
                                {inquiryTypes.map((type) => (
                                    <option key={type} value={type}>
                                        {type}
                                    </option>
                                ))}
                            </select>

                            <textarea
                                rows={6}
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                placeholder="Your Message"
                                required
                                className="w-full border border-black/10 bg-transparent px-4 py-4 resize-none focus:outline-none focus:border-[#e48720]"
                            />

                            {submitted && (
                                <div className="text-green-700 text-sm">
                                    Thank you. Your message has been sent successfully.
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={loading}
                                className="
                                    w-full
                                    bg-[#c8c2b7]
                                    hover:bg-[#b9b2a6]
                                    py-4
                                    uppercase
                                    tracking-[2px]
                                    transition
                                    disabled:opacity-50
                                "
                            >
                                {loading ? "Sending..." : "Send Message"}
                            </button>

                        </form>

                    </div>

                </div>

                <div className=" md:border-t-2 border-[#e48720] mt-16" />

            </div>
        </section>
    );
};

export default Contact;