"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { api } from "@/app/variables";



const EMPTY_FORM = {
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    author: "Harish Parmar",
    categories: "",
    tags: "",
    status: "draft",
    images: [],
    faqs: [],
    metaTitle: "",
    metaDescription: "",
    metaKeywords: "",
    ogTitle: "",
    ogDescription: "",
    ogImage: "",
    canonicalUrl: "",
};

const toSlug = (title) =>
    title.toLowerCase().replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-").trim();

const BlogForm = ({ initialData = null, blogId = null }) => {
    const router = useRouter();
    const isEdit = !!blogId;

    const [form, setForm] = useState(() => {
        if (!initialData) return EMPTY_FORM;
        return {
            title: initialData.title || "",
            slug: initialData.slug || "",
            excerpt: initialData.excerpt || "",
            content: initialData.content || "",
            author: initialData.author || "Harish Parmar",
            categories: initialData.categories?.join(", ") || "",
            tags: initialData.tags?.join(", ") || "",
            status: initialData.status || "draft",
            images: initialData.images || [],
            faqs: initialData.faqs || [],
            metaTitle: initialData.metaTitle || "",
            metaDescription: initialData.metaDescription || "",
            metaKeywords: initialData.metaKeywords?.join(", ") || "",
            ogTitle: initialData.ogTitle || "",
            ogDescription: initialData.ogDescription || "",
            ogImage: initialData.ogImage || "",
            canonicalUrl: initialData.canonicalUrl || "",
        };
    });

    const [newImage, setNewImage] = useState({ url: "", alt: "", caption: "" });
    const [newFaq, setNewFaq] = useState({ question: "", answer: "" });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [activeTab, setActiveTab] = useState("content");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((p) => {
            const updated = { ...p, [name]: value };
            if (name === "title" && !isEdit) updated.slug = toSlug(value);
            return updated;
        });
    };

    const addImage = () => {
        if (!newImage.url) return;
        setForm((p) => ({
            ...p,
            images: [...p.images, { ...newImage, isFeatured: p.images.length === 0 }],
        }));
        setNewImage({ url: "", alt: "", caption: "" });
    };

    const removeImage = (index) => {
        setForm((p) => {
            const imgs = p.images.filter((_, i) => i !== index);
            if (imgs.length > 0 && !imgs.some((img) => img.isFeatured)) imgs[0].isFeatured = true;
            return { ...p, images: imgs };
        });
    };

    const setFeatured = (index) => {
        setForm((p) => ({
            ...p,
            images: p.images.map((img, i) => ({ ...img, isFeatured: i === index })),
        }));
    };

    const addFaq = () => {
        if (!newFaq.question || !newFaq.answer) return;
        setForm((p) => ({ ...p, faqs: [...p.faqs, { ...newFaq }] }));
        setNewFaq({ question: "", answer: "" });
    };

    const removeFaq = (index) => {
        setForm((p) => ({ ...p, faqs: p.faqs.filter((_, i) => i !== index) }));
    };

    // Single submit — status comes from the button clicked
    const handleSubmit = async (submitStatus) => {
        setError("");
        setSuccess("");

        if (!form.title.trim() || !form.content.trim()) {
            setError("Title and content are required.");
            return;
        }

        setLoading(submitStatus); // "draft" or "published" — used to show spinner on right button

        const payload = {
            title: form.title.trim(),
            slug: form.slug.trim(),
            excerpt: form.excerpt.trim(),
            content: form.content.trim(),
            author: form.author.trim(),
            status: submitStatus,
            categories: form.categories.split(",").map((s) => s.trim()).filter(Boolean),
            tags: form.tags.split(",").map((s) => s.trim()).filter(Boolean),
            images: form.images,
            faqs: form.faqs,
            metaTitle: form.metaTitle.trim(),
            metaDescription: form.metaDescription.trim(),
            metaKeywords: form.metaKeywords.split(",").map((s) => s.trim()).filter(Boolean),
            ogTitle: form.ogTitle.trim(),
            ogDescription: form.ogDescription.trim(),
            ogImage: form.ogImage.trim(),
            canonicalUrl: form.canonicalUrl.trim(),
        };

        try {
            const url = isEdit ? `${api}/blog/admin/${blogId}` : `${api}/blog/admin`;
            const method = isEdit ? "PUT" : "POST";

            const res = await fetch(url, {
                method,
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify(payload),
            });

            const data = await res.json();

            if (data.success) {
                setForm((p) => ({ ...p, status: data.data.status }));
                setSuccess(
                    submitStatus === "published"
                        ? "Blog published successfully."
                        : "Draft saved successfully."
                );
                if (!isEdit) router.push(`/admin/blogs/${data.data._id}`);
            } else {
                setError(data.message || "Something went wrong.");
            }
        } catch {
            setError("Could not reach the server.");
        } finally {
            setLoading(false);
        }
    };

    const inputClass = "w-full bg-[#f7f6f3] border border-black/10 px-4 py-3 text-[14px] text-black outline-none focus:border-[#3E3AA8] transition-colors";
    const labelClass = "block text-[11px] uppercase tracking-[3px] text-black/50 mb-2";
    const tabs = ["content", "images", "faqs", "seo", "preview"];

    const isPublished = form.status === "published";

    return (
        <div className="min-h-screen bg-[#f7f6f3]">

            {/* ── Header ── */}
            <div className="bg-[#3E3AA8] text-white px-6 md:px-12 py-5 flex items-center justify-between">
                <div className="flex items-center gap-5">
                    <button
                        onClick={() => router.push("/blogs")}
                        className="text-white/50 hover:text-white transition-colors text-[13px]"
                    >
                        ← Back
                    </button>
                    <div className="w-px h-5 bg-white/20" />
                    <div>
                        <p className="text-[11px] uppercase tracking-[5px] text-white/50">
                            {isEdit ? "Editing Blog" : "New Blog"}
                        </p>
                        <h1 className="text-[18px] font-semibold leading-tight truncate max-w-[300px]">
                            {form.title || "Untitled"}
                        </h1>
                    </div>
                </div>

                {/* ONE action area — no duplication */}
                <div className="flex items-center gap-3">
                    <span className={`text-[10px] uppercase tracking-[3px] px-3 py-1 border rounded-full ${isPublished
                        ? "bg-green-500/20 border-green-400/40 text-green-200"
                        : "bg-yellow-500/20 border-yellow-400/40 text-yellow-200"
                        }`}>
                        {isPublished ? "Live" : "Draft"}
                    </span>

                    {/* Save Draft — only show if not already published */}
                    {!isPublished && (
                        <button
                            onClick={() => handleSubmit("draft")}
                            disabled={!!loading}
                            className="text-[11px] uppercase tracking-[3px] border border-white/25 px-4 py-2.5 text-white/65 hover:text-white hover:border-white/50 transition-all duration-200 disabled:opacity-40"
                        >
                            {loading === "draft" ? "Saving..." : "Save Draft"}
                        </button>
                    )}

                    {/* Primary action changes based on current status */}
                    {isPublished ? (
                        <button
                            onClick={() => handleSubmit("draft")}
                            disabled={!!loading}
                            className="text-[11px] uppercase tracking-[3px] bg-white/15 border border-white/30 text-white px-5 py-2.5 hover:bg-white/25 transition-all duration-200 disabled:opacity-40"
                        >
                            {loading === "draft" ? "Unpublishing..." : "Unpublish"}
                        </button>
                    ) : null}

                    <button
                        onClick={() => handleSubmit("published")}
                        disabled={!!loading}
                        className="text-[11px] uppercase tracking-[3px] bg-white text-[#3E3AA8] px-5 py-2.5 font-semibold hover:bg-white/90 transition-all duration-200 disabled:opacity-40"
                    >
                        {loading === "published" ? "Publishing..." : isPublished ? "Update" : "Publish"}
                    </button>
                </div>
            </div>

            <div className="max-w-5xl mx-auto px-5 sm:px-8 py-8">

                {/* Alerts */}
                {error && (
                    <div className="bg-red-50 border border-red-200 px-4 py-3 mb-6 flex items-center justify-between">
                        <p className="text-[13px] text-red-600">{error}</p>
                        <button onClick={() => setError("")} className="text-red-400 hover:text-red-600 text-lg leading-none">×</button>
                    </div>
                )}
                {success && (
                    <div className="bg-green-50 border border-green-200 px-4 py-3 mb-6 flex items-center justify-between">
                        <p className="text-[13px] text-green-700">{success}</p>
                        <button onClick={() => setSuccess("")} className="text-green-500 hover:text-green-700 text-lg leading-none">×</button>
                    </div>
                )}

                {/* Tabs */}
                <div className="flex border-b border-black/10 mb-8">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-5 py-3 text-[11px] uppercase tracking-[3px] transition-all duration-200 ${activeTab === tab
                                ? "border-b-2 border-[#3E3AA8] text-[#3E3AA8] font-semibold -mb-px"
                                : "text-black/35 hover:text-black/70"
                                }`}
                        >
                            {tab}
                            {tab === "images" && form.images.length > 0 && (
                                <span className="ml-1.5 text-[10px] bg-[#3E3AA8] text-white rounded-full px-1.5 py-0.5">{form.images.length}</span>
                            )}
                            {tab === "faqs" && form.faqs.length > 0 && (
                                <span className="ml-1.5 text-[10px] bg-[#3E3AA8] text-white rounded-full px-1.5 py-0.5">{form.faqs.length}</span>
                            )}
                        </button>
                    ))}
                </div>

                {/* ── CONTENT TAB ── */}
                {activeTab === "content" && (
                    <div className="flex flex-col gap-6">
                        <div className="bg-white border border-black/10 p-8 flex flex-col gap-6">
                            <div>
                                <label className={labelClass}>Title *</label>
                                <input name="title" value={form.title} onChange={handleChange} placeholder="Blog title..." className={inputClass} />
                            </div>
                            <div>
                                <label className={labelClass}>Slug</label>
                                <input name="slug" value={form.slug} onChange={handleChange} placeholder="auto-generated-from-title" className={inputClass} />
                                <p className="text-[11px] text-black/30 mt-1.5">/blog/<span className="text-[#3E3AA8]">{form.slug || "your-slug-here"}</span></p>
                            </div>
                            <div>
                                <label className={labelClass}>Excerpt</label>
                                <textarea name="excerpt" value={form.excerpt} onChange={handleChange} rows={3} placeholder="Short summary shown in blog listings..." className={inputClass + " resize-none"} />
                            </div>
                            <div>
                                <label className={labelClass}>Content *</label>
                                <textarea name="content" value={form.content} onChange={handleChange} rows={18} placeholder="Write your blog content here (HTML supported)..." className={inputClass + " resize-y font-mono text-[13px]"} />
                            </div>
                        </div>

                        <div className="bg-white border border-black/10 p-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div>
                                <label className={labelClass}>Author</label>
                                <input name="author" value={form.author} onChange={handleChange} className={inputClass} />
                            </div>
                            <div>
                                <label className={labelClass}>Categories <span className="normal-case tracking-normal text-black/30">(comma separated)</span></label>
                                <input name="categories" value={form.categories} onChange={handleChange} placeholder="Finance, Fintech, Debt" className={inputClass} />
                            </div>
                            <div className="sm:col-span-2">
                                <label className={labelClass}>Tags <span className="normal-case tracking-normal text-black/30">(comma separated)</span></label>
                                <input name="tags" value={form.tags} onChange={handleChange} placeholder="personal-finance, debt-management" className={inputClass} />
                            </div>
                        </div>
                    </div>
                )}

                {/* ── IMAGES TAB ── */}
                {activeTab === "images" && (
                    <div className="flex flex-col gap-6">
                        <div className="bg-white border border-black/10 p-8">
                            <p className="text-[11px] uppercase tracking-[5px] text-black/40 mb-6">Add Image</p>
                            <div className="flex flex-col gap-4">
                                <div>
                                    <label className={labelClass}>Image URL *</label>
                                    <input value={newImage.url} onChange={(e) => setNewImage((p) => ({ ...p, url: e.target.value }))} placeholder="https://example.com/image.jpg" className={inputClass} />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className={labelClass}>Alt Text</label>
                                        <input value={newImage.alt} onChange={(e) => setNewImage((p) => ({ ...p, alt: e.target.value }))} placeholder="Describe the image" className={inputClass} />
                                    </div>
                                    <div>
                                        <label className={labelClass}>Caption</label>
                                        <input value={newImage.caption} onChange={(e) => setNewImage((p) => ({ ...p, caption: e.target.value }))} placeholder="Image caption" className={inputClass} />
                                    </div>
                                </div>
                                <button onClick={addImage} className="self-start bg-[#3E3AA8] text-white px-6 py-3 text-[11px] uppercase tracking-[3px] hover:bg-[#2f2c8f] transition-colors">
                                    Add Image
                                </button>
                            </div>
                        </div>

                        {form.images.length > 0 && (
                            <div className="bg-white border border-black/10 p-8">
                                <p className="text-[11px] uppercase tracking-[5px] text-black/40 mb-6">Images ({form.images.length}) — first image is featured by default</p>
                                <div className="flex flex-col gap-3">
                                    {form.images.map((img, i) => (
                                        <div key={i} className={`flex items-center gap-4 p-4 border transition-colors ${img.isFeatured ? "border-[#3E3AA8] bg-[#3E3AA8]/5" : "border-black/10"}`}>
                                            <img src={img.url} alt={img.alt} className="w-16 h-14 object-cover flex-shrink-0" onError={(e) => { e.target.style.display = "none"; }} />
                                            <div className="flex-1 min-w-0">
                                                <p className="text-[13px] text-black truncate">{img.url}</p>
                                                <div className="flex items-center gap-3 mt-1">
                                                    {img.alt && <p className="text-[11px] text-black/40">{img.alt}</p>}
                                                    {img.isFeatured && <span className="text-[10px] uppercase tracking-[2px] text-[#3E3AA8] font-semibold">★ Featured</span>}
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-3 flex-shrink-0">
                                                {!img.isFeatured && (
                                                    <button onClick={() => setFeatured(i)} className="text-[10px] uppercase tracking-[2px] text-[#3E3AA8] hover:underline">Set Featured</button>
                                                )}
                                                <button onClick={() => removeImage(i)} className="text-[10px] uppercase tracking-[2px] text-red-400 hover:text-red-600">Remove</button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                )}

                {/* ── FAQS TAB ── */}
                {activeTab === "faqs" && (
                    <div className="flex flex-col gap-6">
                        <div className="bg-white border border-black/10 p-8">
                            <p className="text-[11px] uppercase tracking-[5px] text-black/40 mb-6">Add FAQ</p>
                            <div className="flex flex-col gap-4">
                                <div>
                                    <label className={labelClass}>Question</label>
                                    <input value={newFaq.question} onChange={(e) => setNewFaq((p) => ({ ...p, question: e.target.value }))} placeholder="What is..." className={inputClass} />
                                </div>
                                <div>
                                    <label className={labelClass}>Answer</label>
                                    <textarea value={newFaq.answer} onChange={(e) => setNewFaq((p) => ({ ...p, answer: e.target.value }))} rows={3} placeholder="The answer is..." className={inputClass + " resize-none"} />
                                </div>
                                <button onClick={addFaq} className="self-start bg-[#3E3AA8] text-white px-6 py-3 text-[11px] uppercase tracking-[3px] hover:bg-[#2f2c8f] transition-colors">
                                    Add FAQ
                                </button>
                            </div>
                        </div>

                        {form.faqs.length > 0 && (
                            <div className="bg-white border border-black/10 p-8">
                                <p className="text-[11px] uppercase tracking-[5px] text-black/40 mb-6">FAQs ({form.faqs.length})</p>
                                <div className="flex flex-col gap-3">
                                    {form.faqs.map((faq, i) => (
                                        <div key={i} className="border border-black/10 p-5 flex justify-between items-start gap-4">
                                            <div className="flex-1">
                                                <p className="text-[13px] font-semibold text-black mb-1">Q: {faq.question}</p>
                                                <p className="text-[13px] text-black/55 leading-[1.7]">A: {faq.answer}</p>
                                            </div>
                                            <button onClick={() => removeFaq(i)} className="text-[11px] uppercase tracking-[2px] text-red-400 hover:text-red-600 flex-shrink-0 transition-colors">Remove</button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                )}

                {/* ── SEO TAB ── */}
                {activeTab === "seo" && (
                    <div className="flex flex-col gap-6">
                        <div className="bg-white border border-black/10 p-8 flex flex-col gap-6">
                            <p className="text-[11px] uppercase tracking-[5px] text-black/40">Meta Tags</p>
                            <div>
                                <label className={labelClass}>Meta Title</label>
                                <input name="metaTitle" value={form.metaTitle} onChange={handleChange} placeholder={form.title || "Leave blank to use blog title"} className={inputClass} />
                                <p className={`text-[11px] mt-1.5 ${form.metaTitle.length > 60 ? "text-red-500" : "text-black/30"}`}>{form.metaTitle.length}/60 characters</p>
                            </div>
                            <div>
                                <label className={labelClass}>Meta Description</label>
                                <textarea name="metaDescription" value={form.metaDescription} onChange={handleChange} rows={3} placeholder={form.excerpt || "Leave blank to use excerpt"} className={inputClass + " resize-none"} />
                                <p className={`text-[11px] mt-1.5 ${form.metaDescription.length > 160 ? "text-red-500" : "text-black/30"}`}>{form.metaDescription.length}/160 characters</p>
                            </div>
                            <div>
                                <label className={labelClass}>Meta Keywords <span className="normal-case tracking-normal text-black/30">(comma separated)</span></label>
                                <input name="metaKeywords" value={form.metaKeywords} onChange={handleChange} className={inputClass} />
                            </div>
                            <div>
                                <label className={labelClass}>Canonical URL</label>
                                <input name="canonicalUrl" value={form.canonicalUrl} onChange={handleChange} placeholder="https://harishparmar.com/blog/..." className={inputClass} />
                            </div>
                        </div>

                        <div className="bg-white border border-black/10 p-8 flex flex-col gap-6">
                            <p className="text-[11px] uppercase tracking-[5px] text-black/40">Open Graph (Social Sharing)</p>
                            <div>
                                <label className={labelClass}>OG Title</label>
                                <input name="ogTitle" value={form.ogTitle} onChange={handleChange} placeholder={form.metaTitle || form.title} className={inputClass} />
                            </div>
                            <div>
                                <label className={labelClass}>OG Description</label>
                                <textarea name="ogDescription" value={form.ogDescription} onChange={handleChange} rows={2} placeholder={form.metaDescription || form.excerpt} className={inputClass + " resize-none"} />
                            </div>
                            <div>
                                <label className={labelClass}>OG Image URL</label>
                                <input name="ogImage" value={form.ogImage} onChange={handleChange} placeholder="https://example.com/og-image.jpg" className={inputClass} />
                                <p className="text-[11px] text-black/30 mt-1.5">Recommended: 1200×630px</p>
                            </div>
                        </div>
                    </div>
                )}

                {/* ── PREVIEW TAB ── */}
                {activeTab === "preview" && (
                    <div className="bg-white border border-black/10">
                        {form.images.find((i) => i.isFeatured) && (
                            <img src={form.images.find((i) => i.isFeatured).url} alt="featured" className="w-full h-[300px] object-cover" />
                        )}
                        <div className="p-8 md:p-14">
                            <div className="flex flex-wrap items-center gap-3 mb-6">
                                <span className={`text-[10px] uppercase tracking-[3px] px-2.5 py-1 border ${isPublished ? "text-green-600 bg-green-50 border-green-200" : "text-yellow-600 bg-yellow-50 border-yellow-200"
                                    }`}>
                                    {isPublished ? "Published" : "Draft Preview"}
                                </span>
                                {form.categories.split(",").filter(Boolean).map((c, i) => (
                                    <span key={i} className="text-[10px] uppercase tracking-[3px] text-[#3E3AA8] bg-[#3E3AA8]/10 px-2.5 py-1">{c.trim()}</span>
                                ))}
                            </div>

                            <h1 className="text-[32px] sm:text-[44px] font-semibold leading-[1.1] text-black mb-4">{form.title || "Your Blog Title"}</h1>
                            {form.excerpt && <p className="text-[16px] text-black/55 leading-[1.9] mb-8 border-l-2 border-[#3E3AA8] pl-5">{form.excerpt}</p>}

                            <div className="flex items-center gap-3 mb-10 pb-8 border-b border-black/10">
                                <div className="w-8 h-8 rounded-full bg-[#3E3AA8] flex items-center justify-center text-white text-[12px] font-semibold">H</div>
                                <div>
                                    <p className="text-[13px] font-semibold text-black">{form.author}</p>
                                    <p className="text-[11px] text-black/40">{new Date().toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}</p>
                                </div>
                            </div>

                            <div className="prose max-w-none text-[15px] leading-[1.9] text-black/75"
                                dangerouslySetInnerHTML={{ __html: form.content || "<p>Your content will appear here...</p>" }} />

                            {form.images.filter((i) => !i.isFeatured).length > 0 && (
                                <div className="mt-10 grid grid-cols-2 gap-4">
                                    {form.images.filter((i) => !i.isFeatured).map((img, i) => (
                                        <div key={i}>
                                            <img src={img.url} alt={img.alt} className="w-full h-48 object-cover" />
                                            {img.caption && <p className="text-[11px] text-black/40 mt-1 text-center italic">{img.caption}</p>}
                                        </div>
                                    ))}
                                </div>
                            )}

                            {form.faqs.length > 0 && (
                                <div className="mt-12 border-t border-black/10 pt-10">
                                    <h2 className="text-[24px] font-semibold text-black mb-6">Frequently Asked Questions</h2>
                                    <div className="flex flex-col gap-4">
                                        {form.faqs.map((faq, i) => (
                                            <div key={i} className="border border-black/10 p-5">
                                                <p className="text-[15px] font-semibold text-black mb-2">{faq.question}</p>
                                                <p className="text-[14px] text-black/60 leading-[1.8]">{faq.answer}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {form.tags && (
                                <div className="mt-10 flex flex-wrap gap-2">
                                    {form.tags.split(",").filter(Boolean).map((tag, i) => (
                                        <span key={i} className="text-[11px] uppercase tracking-[2px] text-black/50 border border-black/15 px-3 py-1">#{tag.trim()}</span>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BlogForm;