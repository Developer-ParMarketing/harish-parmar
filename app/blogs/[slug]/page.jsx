"use client";
import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";

const API = "http://localhost:5000";

const BlogDetailPage = () => {
    const { slug } = useParams();
    const router = useRouter();
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    const [notFound, setNotFound] = useState(false);
    const [liked, setLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(0);
    const [comment, setComment] = useState({ name: "", email: "", website: "", comment: "" });
    const [commentLoading, setCommentLoading] = useState(false);
    const [commentSuccess, setCommentSuccess] = useState(false);
    const [activeImage, setActiveImage] = useState(null);

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const res = await fetch(`${API}/api/blog/${slug}`);
                const data = await res.json();
                if (data.success) {
                    setBlog(data.data);
                    setLikeCount(data.data.likes ?? 0);
                    const featured = data.data.images?.find((i) => i.isFeatured) || data.data.images?.[0];
                    setActiveImage(featured || null);
                } else {
                    setNotFound(true);
                }
            } catch {
                setNotFound(true);
            } finally {
                setLoading(false);
            }
        };
        fetchBlog();
    }, [slug]);

    const handleLike = async () => {
        if (liked) return;
        try {
            const res = await fetch(`${API}/api/blog/${slug}/like`, { method: "POST" });
            const data = await res.json();
            if (data.success) {
                setLikeCount(data.likes);
                setLiked(true);
            }
        } catch (err) {
            console.error("Like failed:", err);
        }
    };

    const handleComment = async (e) => {
        e.preventDefault();
        if (!comment.name || !comment.email || !comment.comment) return;
        setCommentLoading(true);
        try {
            const res = await fetch(`${API}/api/blog/${slug}/comment`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(comment),
            });
            const data = await res.json();
            if (data.success) {
                setCommentSuccess(true);
                setComment({ name: "", email: "", website: "", comment: "" });
                setBlog((p) => ({ ...p, comments: data.comments }));
            }
        } catch (err) {
            console.error("Comment failed:", err);
        } finally {
            setCommentLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-[#f7f6f3] flex items-center justify-center">
                <p className="text-[12px] uppercase tracking-[4px] text-black/30">Loading...</p>
            </div>
        );
    }

    if (notFound) {
        return (
            <div className="min-h-screen bg-[#f7f6f3] flex flex-col items-center justify-center gap-5">
                <p className="text-[12px] uppercase tracking-[4px] text-black/30">Article not found</p>
                <Link href="/blogs" className="text-[11px] uppercase tracking-[3px] text-[#3E3AA8] hover:underline">← Back to Articles</Link>
            </div>
        );
    }

    const otherImages = blog.images?.filter((i) => !i.isFeatured) || [];
    const inputClass = "w-full bg-[#f7f6f3] border border-black/10 px-4 py-3 text-[14px] text-black outline-none focus:border-[#3E3AA8] transition-colors";

    return (
        <div className="min-h-screen bg-[#f7f6f3]">

            {/* Featured image hero */}
            {activeImage && (
                <div className="relative w-full h-[320px] md:h-[460px] bg-black overflow-hidden">
                    <img src={activeImage.url} alt={activeImage.alt || blog.title} className="w-full h-full object-cover opacity-80" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 max-w-4xl mx-auto px-5 sm:px-8 pb-10">
                        <div className="flex flex-wrap gap-2 mb-4">
                            {blog.categories?.map((cat) => (
                                <span key={cat} className="text-[10px] uppercase tracking-[3px] text-white bg-white/20 backdrop-blur px-2.5 py-1">{cat}</span>
                            ))}
                        </div>
                        <h1 className="text-[28px] sm:text-[40px] md:text-[50px] font-semibold text-white leading-[1.1]">{blog.title}</h1>
                    </div>
                </div>
            )}

            <div className="max-w-4xl mx-auto px-5 sm:px-8 py-12">

                {/* Breadcrumb */}
                <div className="flex items-center gap-2 mb-8 text-[11px] uppercase tracking-[3px] text-black/35">
                    <Link href="/blogs" className="hover:text-[#3E3AA8] transition-colors">Articles</Link>
                    <span>/</span>
                    <span className="text-black/60 truncate max-w-[200px]">{blog.title}</span>
                </div>

                {/* Title — if no featured image */}
                {!activeImage && (
                    <>
                        <div className="flex flex-wrap gap-2 mb-5">
                            {blog.categories?.map((cat) => (
                                <span key={cat} className="text-[10px] uppercase tracking-[3px] text-[#3E3AA8] bg-[#3E3AA8]/10 px-2.5 py-1">{cat}</span>
                            ))}
                        </div>
                        <h1 className="text-[32px] sm:text-[48px] font-semibold text-black leading-[1.1] mb-6">{blog.title}</h1>
                    </>
                )}

                {/* Author + date + stats */}
                <div className="flex items-center justify-between py-6 border-y border-black/10 mb-10">
                    <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-[#3E3AA8] flex items-center justify-center text-white text-[12px] font-semibold">H</div>
                        <div>
                            <p className="text-[13px] font-semibold text-black">{blog.author}</p>
                            <p className="text-[11px] text-black/40">
                                {new Date(blog.datePublished || blog.createdAt).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 text-[12px] text-black/35">
                        <span>{blog.views ?? 0} views</span>
                        <button
                            onClick={handleLike}
                            className={`flex items-center gap-1.5 transition-colors ${liked ? "text-red-500" : "hover:text-red-400"}`}
                        >
                            <span>{liked ? "♥" : "♡"}</span>
                            <span>{likeCount}</span>
                        </button>
                    </div>
                </div>

                {/* Excerpt */}
                {blog.excerpt && (
                    <p className="text-[17px] text-black/60 leading-[1.9] mb-10 border-l-2 border-[#3E3AA8] pl-5 italic">{blog.excerpt}</p>
                )}

                {/* Content */}
                <div
                    className="prose prose-lg max-w-none text-[16px] leading-[1.9] text-black/75 mb-12
                        prose-headings:text-black prose-headings:font-semibold
                        prose-a:text-[#3E3AA8] prose-a:no-underline hover:prose-a:underline
                        prose-img:rounded-none"
                    dangerouslySetInnerHTML={{ __html: blog.content }}
                />

                {/* Additional images gallery */}
                {otherImages.length > 0 && (
                    <div className="mb-12">
                        <p className="text-[11px] uppercase tracking-[4px] text-black/35 mb-5">Gallery</p>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                            {otherImages.map((img, i) => (
                                <div key={i} className="group cursor-pointer" onClick={() => setActiveImage(img)}>
                                    <div className="h-[160px] overflow-hidden bg-black/5">
                                        <img src={img.url} alt={img.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                                    </div>
                                    {img.caption && <p className="text-[11px] text-black/40 mt-1 text-center italic">{img.caption}</p>}
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Tags */}
                {blog.tags?.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-12 pb-10 border-b border-black/10">
                        {blog.tags.map((tag) => (
                            <span key={tag} className="text-[11px] uppercase tracking-[2px] text-black/45 border border-black/15 px-3 py-1">#{tag}</span>
                        ))}
                    </div>
                )}

                {/* FAQs */}
                {blog.faqs?.length > 0 && (
                    <div className="mb-12">
                        <h2 className="text-[24px] font-semibold text-black mb-6">Frequently Asked Questions</h2>
                        <div className="flex flex-col gap-3">
                            {blog.faqs.map((faq, i) => (
                                <details key={i} className="group border border-black/10 bg-white">
                                    <summary className="px-6 py-4 text-[14px] font-semibold text-black cursor-pointer list-none flex items-center justify-between">
                                        {faq.question}
                                        <span className="text-black/30 group-open:rotate-180 transition-transform duration-200 flex-shrink-0 ml-4">↓</span>
                                    </summary>
                                    <div className="px-6 pb-5 text-[14px] text-black/60 leading-[1.8] border-t border-black/5 pt-4">
                                        {faq.answer}
                                    </div>
                                </details>
                            ))}
                        </div>
                    </div>
                )}

                {/* Comments */}
                {blog.comments?.length > 0 && (
                    <div className="mb-12">
                        <h2 className="text-[22px] font-semibold text-black mb-6">{blog.comments.length} Comment{blog.comments.length !== 1 ? "s" : ""}</h2>
                        <div className="flex flex-col gap-4">
                            {blog.comments.map((c, i) => (
                                <div key={i} className="bg-white border border-black/10 p-6">
                                    <div className="flex items-center justify-between mb-3">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-[#3E3AA8]/15 flex items-center justify-center text-[#3E3AA8] text-[12px] font-semibold">
                                                {c.name?.[0]?.toUpperCase()}
                                            </div>
                                            <div>
                                                <p className="text-[13px] font-semibold text-black">{c.name}</p>
                                                <p className="text-[11px] text-black/35">{new Date(c.createdAt).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-[14px] text-black/65 leading-[1.8]">{c.comment}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Comment form */}
                <div className="bg-white border border-black/10 p-8">
                    <h2 className="text-[20px] font-semibold text-black mb-6">Leave a Comment</h2>

                    {commentSuccess ? (
                        <div className="bg-green-50 border border-green-200 px-4 py-3">
                            <p className="text-[13px] text-green-700">Comment submitted successfully.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleComment} className="flex flex-col gap-5">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div>
                                    <label className="block text-[11px] uppercase tracking-[3px] text-black/45 mb-2">Name *</label>
                                    <input
                                        required value={comment.name}
                                        onChange={(e) => setComment((p) => ({ ...p, name: e.target.value }))}
                                        placeholder="Your name" className={inputClass}
                                    />
                                </div>
                                <div>
                                    <label className="block text-[11px] uppercase tracking-[3px] text-black/45 mb-2">Email *</label>
                                    <input
                                        type="email" required value={comment.email}
                                        onChange={(e) => setComment((p) => ({ ...p, email: e.target.value }))}
                                        placeholder="your@email.com" className={inputClass}
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-[11px] uppercase tracking-[3px] text-black/45 mb-2">Website</label>
                                <input
                                    value={comment.website}
                                    onChange={(e) => setComment((p) => ({ ...p, website: e.target.value }))}
                                    placeholder="https://yourwebsite.com (optional)" className={inputClass}
                                />
                            </div>
                            <div>
                                <label className="block text-[11px] uppercase tracking-[3px] text-black/45 mb-2">Comment *</label>
                                <textarea
                                    required rows={5} value={comment.comment}
                                    onChange={(e) => setComment((p) => ({ ...p, comment: e.target.value }))}
                                    placeholder="Share your thoughts..." className={inputClass + " resize-none"}
                                />
                            </div>
                            <button
                                type="submit" disabled={commentLoading}
                                className="self-start bg-[#3E3AA8] text-white px-8 py-3.5 text-[11px] uppercase tracking-[3px] font-semibold hover:bg-[#2f2c8f] transition-colors disabled:opacity-50"
                            >
                                {commentLoading ? "Submitting..." : "Post Comment"}
                            </button>
                        </form>
                    )}
                </div>

                {/* Back link */}
                <div className="mt-10 text-center">
                    <Link href="/blogs" className="text-[11px] uppercase tracking-[3px] text-black/40 hover:text-[#3E3AA8] transition-colors">
                        ← Back to All Articles
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BlogDetailPage;