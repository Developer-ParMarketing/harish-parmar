"use client";
import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { api } from "@/app/variables";



const STATUS_STYLES = {
    draft: { bg: "bg-yellow-50", text: "text-yellow-700", border: "border-yellow-200" },
    published: { bg: "bg-green-50", text: "text-green-700", border: "border-green-200" },
};

const AdminBlogs = () => {
    const router = useRouter();
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filterStatus, setFilterStatus] = useState("");
    const [search, setSearch] = useState("");
    const [stats, setStats] = useState({ total: 0, published: 0, draft: 0 });

    const fetchBlogs = useCallback(async () => {
        setLoading(true);
        try {
            const params = new URLSearchParams();
            if (filterStatus) params.set("status", filterStatus);
            if (search) params.set("search", search);

            const res = await fetch(`${api}/blog/admin/all?${params}`, { credentials: "include" });
            const data = await res.json();

            if (data.success) {
                setBlogs(data.data);
                setStats({
                    total: data.total,
                    published: data.data.filter((b) => b.status === "published").length,
                    draft: data.data.filter((b) => b.status === "draft").length,
                });
            }
        } catch (err) {
            console.error("Failed to fetch blogs:", err);
        } finally {
            setLoading(false);
        }
    }, [filterStatus, search]);

    useEffect(() => { fetchBlogs(); }, [fetchBlogs]);

    const deleteBlog = async (id, title) => {
        if (!confirm(`Delete "${title}"? This cannot be undone.`)) return;
        try {
            const res = await fetch(`${api}/blog/admin/${id}`, {
                method: "DELETE",
                credentials: "include",
            });
            const data = await res.json();
            if (data.success) setBlogs((prev) => prev.filter((b) => b._id !== id));
        } catch (err) {
            console.error("Delete failed:", err);
        }
    };

    const logout = async () => {
        await fetch(`${API}/api/auth/logout`, { method: "POST", credentials: "include" });
        router.replace("/admin/login");
    };

    return (
        <div className="min-h-screen bg-[#f7f6f3]">

            {/* Header */}
            <div className="bg-[#3E3AA8] text-white px-6 md:px-12 py-5 flex items-center justify-between">
                <div className="flex items-center gap-6">
                    <div>
                        <p className="text-[11px] uppercase tracking-[5px] text-white/50">Admin Panel</p>
                        <h1 className="text-[20px] font-semibold">Blog Management</h1>
                    </div>
                    <div className="hidden md:flex items-center gap-4 ml-8">
                        <Link href="/admin/dashboard" className="text-[11px] uppercase tracking-[3px] text-white/60 hover:text-white transition-colors">Contacts</Link>
                        <span className="text-white/20">|</span>
                        <span className="text-[11px] uppercase tracking-[3px] text-white">Blogs</span>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <Link
                        href="/admin/blogs/create"
                        className="text-[11px] uppercase tracking-[3px] bg-white text-[#3E3AA8] px-4 py-2.5 font-semibold hover:bg-white/90 transition-all duration-200"
                    >
                        + New Blog
                    </Link>
                    <button
                        onClick={logout}
                        className="text-[11px] uppercase tracking-[3px] border border-white/30 px-4 py-2.5 text-white/70 hover:bg-white hover:text-[#3E3AA8] transition-all duration-300"
                    >
                        Logout
                    </button>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 py-10">

                {/* Stats — 3 cards, no archive */}
                <div className="grid grid-cols-3 gap-[1px] bg-black/10 border border-black/10 mb-10">
                    {[
                        { label: "Total Blogs", value: stats.total, dark: false },
                        { label: "Published", value: stats.published, dark: true },
                        { label: "Drafts", value: stats.draft, dark: false },
                    ].map((s) => (
                        <div key={s.label} className="p-6" style={{ backgroundColor: s.dark ? "#3E3AA8" : "#ffffff" }}>
                            <p className="text-[11px] uppercase tracking-[4px] mb-3" style={{ color: s.dark ? "rgba(255,255,255,0.5)" : "rgba(0,0,0,0.4)" }}>{s.label}</p>
                            <p className="text-[36px] font-semibold" style={{ color: s.dark ? "#ffffff" : "#000000" }}>{s.value}</p>
                        </div>
                    ))}
                </div>

                {/* Filters */}
                <div className="flex flex-wrap gap-3 mb-6">
                    <input
                        type="text"
                        placeholder="Search blogs..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="bg-white border border-black/10 px-4 py-2.5 text-[13px] text-black outline-none min-w-[200px]"
                    />
                    <select
                        value={filterStatus}
                        onChange={(e) => setFilterStatus(e.target.value)}
                        className="bg-white border border-black/10 px-4 py-2.5 text-[12px] uppercase tracking-[2px] text-black/60 outline-none"
                    >
                        <option value="">All</option>
                        <option value="draft">Draft</option>
                        <option value="published">Published</option>
                    </select>
                    <button
                        onClick={() => { setSearch(""); setFilterStatus(""); }}
                        className="border border-black/10 bg-white px-4 py-2.5 text-[12px] uppercase tracking-[2px] text-black/40 hover:text-black transition-colors"
                    >
                        Clear
                    </button>
                </div>

                {/* Table */}
                <div className="bg-white border border-black/10 overflow-hidden">
                    {loading ? (
                        <div className="flex items-center justify-center py-20">
                            <p className="text-[12px] uppercase tracking-[3px] text-black/40">Loading...</p>
                        </div>
                    ) : blogs.length === 0 ? (
                        <div className="flex flex-col items-center justify-center py-20 gap-4">
                            <p className="text-[12px] uppercase tracking-[3px] text-black/40">No blogs found</p>
                            <Link href="/admin/blogs/create" className="bg-[#3E3AA8] text-white px-5 py-2.5 text-[11px] uppercase tracking-[3px] hover:bg-[#2f2c8f] transition-colors">
                                Create First Blog
                            </Link>
                        </div>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b border-black/8">
                                        {["Title", "Status", "Views", "Likes", "Comments", "Date", "Actions"].map((h) => (
                                            <th key={h} className="px-5 py-4 text-left text-[10px] uppercase tracking-[3px] text-black/40 font-semibold whitespace-nowrap">{h}</th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {blogs.map((b) => {
                                        const s = STATUS_STYLES[b.status] || STATUS_STYLES.draft;
                                        const featuredImg = b.images?.find((i) => i.isFeatured) || b.images?.[0];
                                        return (
                                            <tr key={b._id} className="border-b border-black/5 hover:bg-[#f7f6f3] transition-colors">
                                                <td className="px-5 py-4">
                                                    <div className="flex items-center gap-3">
                                                        {featuredImg ? (
                                                            <img src={featuredImg.url} alt={featuredImg.alt} className="w-10 h-10 object-cover flex-shrink-0" />
                                                        ) : (
                                                            <div className="w-10 h-10 bg-black/5 flex-shrink-0" />
                                                        )}
                                                        <div>
                                                            <p className="text-[14px] font-semibold text-black max-w-[280px] truncate">{b.title}</p>
                                                            <p className="text-[11px] text-black/40">{b.slug}</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-5 py-4">
                                                    <span className={`inline-block px-2.5 py-1 text-[10px] uppercase tracking-[2px] border ${s.bg} ${s.text} ${s.border}`}>
                                                        {b.status}
                                                    </span>
                                                </td>
                                                <td className="px-5 py-4 text-[13px] text-black/60">{b.views ?? 0}</td>
                                                <td className="px-5 py-4 text-[13px] text-black/60">{b.likes ?? 0}</td>
                                                <td className="px-5 py-4 text-[13px] text-black/60">{b.comments?.length ?? 0}</td>
                                                <td className="px-5 py-4 text-[12px] text-black/40 whitespace-nowrap">
                                                    {new Date(b.createdAt).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
                                                </td>
                                                <td className="px-5 py-4">
                                                    <div className="flex items-center gap-3">
                                                        <Link href={`/admin/blogs/${b._id}`} className="text-[11px] uppercase tracking-[2px] text-[#3E3AA8] hover:underline">Edit</Link>
                                                        <span className="text-black/20">|</span>
                                                        <button onClick={() => deleteBlog(b._id, b.title)} className="text-[11px] uppercase tracking-[2px] text-red-400 hover:text-red-600 transition-colors">Delete</button>
                                                    </div>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AdminBlogs;