"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { api } from "@/app/variables";

const AdminLogin = () => {
    const router = useRouter();
    const [form, setForm] = useState({ email: "", password: "" });
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [focused, setFocused] = useState("");

    const handleChange = (e) =>
        setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        if (!form.email || !form.password) {
            setError("Both fields are required.");
            return;
        }

        setLoading(true);

        try {
            const res = await fetch(`${api}/auth/login`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: "include", // send/receive cookies
                body: JSON.stringify(form),
            });

            const data = await res.json();

            if (data.success) {
                router.push("/admin/dashboard");
            } else {
                setError(data.message || "Login failed.");
            }
        } catch {
            setError("Could not reach the server. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const underline = (field) => ({
        outline: "none",
        borderBottom: `1px solid ${focused === field ? "#3E3AA8" : "rgba(0,0,0,0.15)"}`,
        transition: "border-color 0.3s ease",
    });

    return (
        <div className="min-h-screen bg-[#f7f6f3] flex items-center justify-center px-5">
            <div className="w-full max-w-md">

                {/* Card */}
                <div className="bg-white border border-black/10 shadow-[0_10px_60px_rgba(0,0,0,0.04)]">

                    {/* Top bar */}
                    <div className="bg-[#3E3AA8] px-10 py-8">
                        <p className="text-[11px] uppercase tracking-[5px] text-white/50 mb-2">
                            Restricted Area
                        </p>
                        <h1 className="text-[28px] font-semibold text-white leading-tight">
                            Admin Login
                        </h1>
                        <p className="text-[13px] text-white/55 mt-1">
                            Harish Parmar — Dashboard
                        </p>
                    </div>

                    {/* Form */}
                    <div className="px-10 py-10">
                        <form onSubmit={handleSubmit} className="flex flex-col gap-8">

                            {/* Error */}
                            {error && (
                                <div className="bg-red-50 border border-red-200 px-4 py-3">
                                    <p className="text-[13px] text-red-600">{error}</p>
                                </div>
                            )}

                            {/* Email */}
                            <div>
                                <label className="block text-[11px] uppercase tracking-[3px] text-black/55 mb-3">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    placeholder="admin@harishparmar.com"
                                    value={form.email}
                                    onChange={handleChange}
                                    onFocus={() => setFocused("email")}
                                    onBlur={() => setFocused("")}
                                    className="w-full bg-transparent pb-3 text-[15px] text-black placeholder-black/25"
                                    style={underline("email")}
                                />
                            </div>

                            {/* Password */}
                            <div>
                                <label className="block text-[11px] uppercase tracking-[3px] text-black/55 mb-3">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    required
                                    placeholder="••••••••"
                                    value={form.password}
                                    onChange={handleChange}
                                    onFocus={() => setFocused("password")}
                                    onBlur={() => setFocused("")}
                                    className="w-full bg-transparent pb-3 text-[15px] text-black placeholder-black/25"
                                    style={underline("password")}
                                />
                            </div>

                            {/* Submit */}
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-[#3E3AA8] hover:bg-[#2f2c8f] text-white py-4 text-[11px] uppercase tracking-[3px] font-semibold transition-all duration-300 active:scale-95 disabled:opacity-60"
                            >
                                {loading ? "Verifying..." : "Login to Dashboard"}
                            </button>
                        </form>
                    </div>
                </div>

                <p className="text-center text-[11px] text-black/30 uppercase tracking-[2px] mt-6">
                    Authorised personnel only
                </p>
            </div>
        </div>
    );
};

export default AdminLogin;