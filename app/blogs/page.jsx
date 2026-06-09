"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { api } from "../variables";

const BlogsPage = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");
    const [activeCategory, setActiveCategory] = useState("");
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchBlogs = async () => {
            setLoading(true);
            try {
                const params = new URLSearchParams();
                if (search) params.set("search", search);
                if (activeCategory) params.set("category", activeCategory);
                params.set("limit", "50");

                const res = await fetch(`${api}/blog?${params}`);
                const data = await res.json();

                if (data.success) {
                    setBlogs(data.data);
                    // Extract unique categories from all blogs
                    const cats = [...new Set(data.data.flatMap((b) => b.categories || []))];
                    setCategories(cats);
                }
            } catch (err) {
                console.error("Failed to fetch blogs:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchBlogs();
    }, [search, activeCategory]);

    const featuredBlog = blogs[0];
    const restBlogs = blogs.slice(1);

    return (
        <div className="min-h-screen bg-[#f7f6f3]">

            {/* Hero */}
            <div className="relative bg-[#3E3AA8] text-white overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute -top-24 -right-24 w-[400px] h-[400px] rounded-full border border-white/[0.06]" />
                    <div className="absolute bottom-0 left-0 w-[200px] h-[200px] border-t border-r border-white/[0.04]" />
                    <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "repeating-linear-gradient(135deg,white 0,white 1px,transparent 1px,transparent 80px)" }} />
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 md:px-16 pt-20 pb-16">
                    <div className="flex items-center gap-3 mb-8">
                        <span className="block w-6 h-[1px] bg-white/40" />
                        <p className="uppercase tracking-[5px] text-[11px] font-semibold text-white/60">Insights & Articles</p>
                        <span className="block w-6 h-[1px] bg-white/40" />
                    </div>
                    <h1 className="text-[40px] sm:text-[60px] md:text-[72px] font-semibold leading-[1.0] tracking-tight text-white mb-6">
                        Financial<br />
                        <span className="text-white/30">Perspectives</span>
                    </h1>
                    <p className="text-[15px] md:text-[18px] leading-[1.9] text-white/60 max-w-xl">
                        Insights on debt resolution, financial wellness, and the future of fintech — from four decades of global experience.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-16 py-14">

                {/* Search + Category filters */}
                <div className="flex flex-col sm:flex-row gap-4 mb-10">
                    <input
                        type="text"
                        placeholder="Search articles..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="bg-white border border-black/10 px-4 py-3 text-[14px] text-black outline-none focus:border-[#3E3AA8] transition-colors min-w-[240px]"
                    />
                    {categories.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                            <button
                                onClick={() => setActiveCategory("")}
                                className={`px-4 py-2 text-[11px] uppercase tracking-[2px] border transition-all duration-200 ${!activeCategory
                                    ? "bg-[#3E3AA8] border-[#3E3AA8] text-white"
                                    : "bg-white border-black/15 text-black/55 hover:border-black/30"
                                    }`}
                            >
                                All
                            </button>
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat === activeCategory ? "" : cat)}
                                    className={`px-4 py-2 text-[11px] uppercase tracking-[2px] border transition-all duration-200 ${activeCategory === cat
                                        ? "bg-[#3E3AA8] border-[#3E3AA8] text-white"
                                        : "bg-white border-black/15 text-black/55 hover:border-black/30"
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                {loading ? (
                    <div className="flex items-center justify-center py-32">
                        <p className="text-[12px] uppercase tracking-[4px] text-black/30">Loading articles...</p>
                    </div>
                ) : blogs.length === 0 ? (
                    <div className="flex items-center justify-center py-32">
                        <p className="text-[12px] uppercase tracking-[4px] text-black/30">No articles found</p>
                    </div>
                ) : (
                    <>
                        {/* Featured blog — first one, larger */}
                        {featuredBlog && !search && !activeCategory && (
                            <Link href={`/blogs/${featuredBlog.slug}`} className="group block mb-12">
                                <div className="grid grid-cols-1 lg:grid-cols-2 border border-black/10 bg-white overflow-hidden hover:border-[#3E3AA8]/30 transition-colors duration-300">
                                    {/* Image */}
                                    <div className="relative h-[260px] lg:h-auto bg-black/5 overflow-hidden">
                                        {featuredBlog.images?.find((i) => i.isFeatured) ? (
                                            <img
                                                src={featuredBlog.images.find((i) => i.isFeatured).url}
                                                alt={featuredBlog.title}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                        ) : (
                                            <div className="w-full h-full bg-[#3E3AA8]/10 flex items-center justify-center">
                                                <span className="text-[#3E3AA8]/30 text-[40px] font-bold">{featuredBlog.title?.[0]}</span>
                                            </div>
                                        )}
                                        <div className="absolute top-4 left-4">
                                            <span className="bg-[#3E3AA8] text-white text-[10px] uppercase tracking-[3px] px-3 py-1">Featured</span>
                                        </div>
                                    </div>
                                    {/* Content */}
                                    <div className="p-8 md:p-12 flex flex-col justify-between">
                                        <div>
                                            <div className="flex flex-wrap gap-2 mb-5">
                                                {featuredBlog.categories?.map((cat) => (
                                                    <span key={cat} className="text-[10px] uppercase tracking-[3px] text-[#3E3AA8] bg-[#3E3AA8]/10 px-2.5 py-1">{cat}</span>
                                                ))}
                                            </div>
                                            <h2 className="text-[26px] sm:text-[32px] font-semibold text-black leading-[1.2] mb-4 group-hover:text-[#3E3AA8] transition-colors duration-200">
                                                {featuredBlog.title}
                                            </h2>
                                            {featuredBlog.excerpt && (
                                                <p className="text-[15px] text-black/55 leading-[1.8] mb-6">{featuredBlog.excerpt}</p>
                                            )}
                                        </div>
                                        <div className="flex items-center justify-between pt-6 border-t border-black/8">
                                            <div className="flex items-center gap-3">
                                                <div className="w-7 h-7 rounded-full bg-[#3E3AA8] flex items-center justify-center text-white text-[11px] font-semibold">H</div>
                                                <div>
                                                    <p className="text-[12px] font-semibold text-black">{featuredBlog.author}</p>
                                                    <p className="text-[11px] text-black/40">
                                                        {new Date(featuredBlog.datePublished || featuredBlog.createdAt).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-3 text-[11px] text-black/35">
                                                <span>{featuredBlog.views ?? 0} views</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        )}

                        {/* Rest of blogs grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {(search || activeCategory ? blogs : restBlogs).map((blog) => (
                                <Link key={blog._id} href={`/blogs/${blog.slug}`} className="group block">
                                    <div className="bg-white border border-black/10 overflow-hidden h-full flex flex-col hover:border-[#3E3AA8]/30 transition-colors duration-300">
                                        {/* Image */}
                                        <div className="relative h-[200px] bg-black/5 overflow-hidden flex-shrink-0">
                                            {blog.images?.find((i) => i.isFeatured) ? (
                                                <img
                                                    src={blog.images.find((i) => i.isFeatured).url}
                                                    alt={blog.title}
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                                />
                                            ) : (
                                                <div className="w-full h-full bg-[#3E3AA8]/10 flex items-center justify-center">
                                                    <span className="text-[#3E3AA8]/30 text-[32px] font-bold">{blog.title?.[0]}</span>
                                                </div>
                                            )}
                                        </div>
                                        {/* Content */}
                                        <div className="p-6 flex flex-col flex-1">
                                            <div className="flex flex-wrap gap-1.5 mb-3">
                                                {blog.categories?.slice(0, 2).map((cat) => (
                                                    <span key={cat} className="text-[10px] uppercase tracking-[2px] text-[#3E3AA8] bg-[#3E3AA8]/8 px-2 py-0.5">{cat}</span>
                                                ))}
                                            </div>
                                            <h3 className="text-[17px] font-semibold text-black leading-[1.3] mb-3 group-hover:text-[#3E3AA8] transition-colors duration-200 flex-1">
                                                {blog.title}
                                            </h3>
                                            {blog.excerpt && (
                                                <p className="text-[13px] text-black/50 leading-[1.7] mb-4 line-clamp-2">{blog.excerpt}</p>
                                            )}
                                            <div className="flex items-center justify-between pt-4 border-t border-black/8 mt-auto">
                                                <p className="text-[11px] text-black/40">
                                                    {new Date(blog.datePublished || blog.createdAt).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
                                                </p>
                                                <span className="text-[11px] uppercase tracking-[2px] text-[#3E3AA8] group-hover:translate-x-0.5 transition-transform duration-200">Read →</span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default BlogsPage;