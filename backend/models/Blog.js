const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    website: { type: String, default: "" },
    comment: { type: String, required: true, trim: true },
    createdAt: { type: Date, default: Date.now },
});

const blogSchema = new mongoose.Schema(
    {
        title: { type: String, required: true, trim: true },

        slug: { type: String, required: true, unique: true, lowercase: true, trim: true },

        excerpt: { type: String, trim: true, default: "" },

        content: { type: String, required: true },

        // Multiple images — array instead of single featuredImage
        images: [
            {
                url: { type: String, required: true },
                alt: { type: String, default: "" },
                caption: { type: String, default: "" },
                isFeatured: { type: Boolean, default: false }, // first image marked as featured
            },
        ],

        author: { type: String, default: "Harish Parmar" },

        categories: [{ type: String, trim: true }],
        tags: [{ type: String, trim: true }],

        status: {
            type: String,
            enum: ["draft", "published", "archived"],
            default: "draft",
        },

        views: { type: Number, default: 0 },
        likes: { type: Number, default: 0 },
        shares: { type: Number, default: 0 },
        likedBy: [{ type: String }],

        comments: [commentSchema],

        faqs: [
            {
                question: { type: String, trim: true },
                answer: { type: String, trim: true },
            },
        ],

        // SEO
        metaTitle: { type: String, trim: true, default: "" },
        metaDescription: { type: String, trim: true, default: "" },
        metaKeywords: [{ type: String, trim: true }],
        ogTitle: { type: String, trim: true, default: "" },
        ogDescription: { type: String, trim: true, default: "" },
        ogImage: { type: String, default: "" },
        canonicalUrl: { type: String, default: "" },

        datePublished: { type: Date, default: null },
        dateModified: { type: Date, default: null },
    },
    { timestamps: true }
);

// Auto-generate slug from title if not provided
blogSchema.pre("save", function () {
    if (!this.slug && this.title) {
        this.slug = this.title
            .toLowerCase()
            .replace(/[^a-z0-9\s-]/g, "")
            .replace(/\s+/g, "-")
            .replace(/-+/g, "-")
            .trim();
    }
    if (this.isModified("content") || this.isModified("title")) {
        this.dateModified = new Date();
    }
});

module.exports = mongoose.model("Blog", blogSchema);