"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { api } from "@/app/variables";

const AdminSignup = () => {
    const router = useRouter();
    const [form, setForm] = useState({ email: "", password: "", confirmPassword: "" });
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [focused, setFocused] = useState("");

    const handleChange = (e) =>
        setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        if (!form.email || !form.password || !form.confirmPassword) {
            setError("All fields are required.");
            return;
        }
        if (form.password.length < 6) {
            setError("Password must be at least 6 characters.");
            return;
        }
        if (form.password !== form.confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        setLoading(true);

        try {
            const res = await fetch(`${api}/auth/signup`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify(form),
            });

            const data = await res.json();

            if (data.success) {
                router.push("/admin/dashboard");
            } else {
                setError(data.message || "Signup failed.");
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
                <div className="bg-white border border-black/10 shadow-[0_10px_60px_rgba(0,0,0,0.04)]">

                    <div className="bg-[#3E3AA8] px-10 py-8">
                        <p className="text-[11px] uppercase tracking-[5px] text-white/50 mb-2">Admin Setup</p>
                        <h1 className="text-[28px] font-semibold text-white leading-tight">Create Account</h1>
                        <p className="text-[13px] text-white/55 mt-1">Harish Parmar — Dashboard</p>
                    </div>

                    <div className="px-10 py-10">
                        <form onSubmit={handleSubmit} className="flex flex-col gap-8">

                            {error && (
                                <div className="bg-red-50 border border-red-200 px-4 py-3">
                                    <p className="text-[13px] text-red-600">{error}</p>
                                </div>
                            )}

                            <div>
                                <label className="block text-[11px] uppercase tracking-[3px] text-black/55 mb-3">Email Address</label>
                                <input
                                    type="email" name="email" required placeholder="admin@harishparmar.com"
                                    value={form.email} onChange={handleChange}
                                    onFocus={() => setFocused("email")} onBlur={() => setFocused("")}
                                    className="w-full bg-transparent pb-3 text-[15px] text-black placeholder-black/25"
                                    style={underline("email")}
                                />
                            </div>

                            <div>
                                <label className="block text-[11px] uppercase tracking-[3px] text-black/55 mb-3">Password</label>
                                <input
                                    type="password" name="password" required placeholder="Min. 6 characters"
                                    value={form.password} onChange={handleChange}
                                    onFocus={() => setFocused("password")} onBlur={() => setFocused("")}
                                    className="w-full bg-transparent pb-3 text-[15px] text-black placeholder-black/25"
                                    style={underline("password")}
                                />
                            </div>

                            <div>
                                <label className="block text-[11px] uppercase tracking-[3px] text-black/55 mb-3">Confirm Password</label>
                                <input
                                    type="password" name="confirmPassword" required placeholder="Re-enter password"
                                    value={form.confirmPassword} onChange={handleChange}
                                    onFocus={() => setFocused("confirmPassword")} onBlur={() => setFocused("")}
                                    className="w-full bg-transparent pb-3 text-[15px] text-black placeholder-black/25"
                                    style={underline("confirmPassword")}
                                />
                            </div>

                            <button
                                type="submit" disabled={loading}
                                className="w-full bg-[#3E3AA8] hover:bg-[#2f2c8f] text-white py-4 text-[11px] uppercase tracking-[3px] font-semibold transition-all duration-300 active:scale-95 disabled:opacity-60"
                            >
                                {loading ? "Creating Account..." : "Create Admin Account"}
                            </button>

                            <p className="text-center text-[12px] text-black/40">
                                Already have an account?{" "}
                                <Link href="/admin/login" className="text-[#3E3AA8] hover:underline">Login</Link>
                            </p>
                        </form>
                    </div>
                </div>
                <p className="text-center text-[11px] text-black/30 uppercase tracking-[2px] mt-6">Authorised personnel only</p>
            </div>
        </div>
    );
};

export default AdminSignup;