const Blog = require("../models/Blog");

// ── Helpers ───────────────────────────────────────────────────────────────────

const generateSlug = (title) =>
    title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-")
        .trim();

// ── PUBLIC ROUTES ─────────────────────────────────────────────────────────────

// GET /api/blog
// All published blogs — supports ?category=x&tag=x&page=1&limit=10&search=x
const getAllPublished = async (req, res) => {
    try {
        const { category, tag, page = 1, limit = 10, search } = req.query;

        const filter = { status: "published" };
        if (category) filter.categories = category;
        if (tag) filter.tags = tag;
        if (search) filter.title = { $regex: search, $options: "i" };

        const skip = (Number(page) - 1) * Number(limit);

        const [blogs, total] = await Promise.all([
            Blog.find(filter)
                .select("-content -comments -faqs -likedBy") // lightweight list
                .sort({ datePublished: -1 })
                .skip(skip)
                .limit(Number(limit)),
            Blog.countDocuments(filter),
        ]);

        return res.status(200).json({
            success: true,
            total,
            page: Number(page),
            pages: Math.ceil(total / Number(limit)),
            data: blogs,
        });
    } catch (err) {
        console.error("getAllPublished error:", err);
        return res.status(500).json({ success: false, message: "Server error." });
    }
};

// GET /api/blog/:slug
// Single published blog by slug + increment views
const getBySlug = async (req, res) => {
    try {
        const blog = await Blog.findOneAndUpdate(
            { slug: req.params.slug, status: "published" },
            { $inc: { views: 1 } },
            { new: true }
        );

        if (!blog) {
            return res.status(404).json({ success: false, message: "Blog not found." });
        }

        return res.status(200).json({ success: true, data: blog });
    } catch (err) {
        console.error("getBySlug error:", err);
        return res.status(500).json({ success: false, message: "Server error." });
    }
};

// POST /api/blog/:slug/like
// Like a blog (track by IP to prevent duplicate likes)
const likeBlog = async (req, res) => {
    try {
        const ip = req.ip || req.headers["x-forwarded-for"] || "unknown";
        const blog = await Blog.findOne({ slug: req.params.slug, status: "published" });

        if (!blog) return res.status(404).json({ success: false, message: "Blog not found." });

        if (blog.likedBy.includes(ip)) {
            return res.status(400).json({ success: false, message: "Already liked." });
        }

        blog.likes += 1;
        blog.likedBy.push(ip);
        await blog.save();

        return res.status(200).json({ success: true, likes: blog.likes });
    } catch (err) {
        console.error("likeBlog error:", err);
        return res.status(500).json({ success: false, message: "Server error." });
    }
};

// POST /api/blog/:slug/comment
// Add a comment to a blog
const addComment = async (req, res) => {
    try {
        const { name, email, website, comment } = req.body;

        if (!name || !email || !comment) {
            return res.status(400).json({ success: false, message: "Name, email and comment are required." });
        }

        const blog = await Blog.findOne({ slug: req.params.slug, status: "published" });
        if (!blog) return res.status(404).json({ success: false, message: "Blog not found." });

        blog.comments.push({ name, email, website, comment });
        await blog.save();

        return res.status(201).json({ success: true, message: "Comment added.", comments: blog.comments });
    } catch (err) {
        console.error("addComment error:", err);
        return res.status(500).json({ success: false, message: "Server error." });
    }
};

// ── ADMIN ROUTES (protected) ──────────────────────────────────────────────────

// GET /api/blog/admin/all
// All blogs regardless of status — for admin dashboard
const adminGetAll = async (req, res) => {
    try {
        const { status, page = 1, limit = 20, search } = req.query;

        const filter = {};
        if (status) filter.status = status;
        if (search) filter.title = { $regex: search, $options: "i" };

        const skip = (Number(page) - 1) * Number(limit);

        const [blogs, total] = await Promise.all([
            Blog.find(filter)
                .select("title slug status views likes comments datePublished createdAt images categories")
                .sort({ createdAt: -1 })
                .skip(skip)
                .limit(Number(limit)),
            Blog.countDocuments(filter),
        ]);

        return res.status(200).json({
            success: true,
            total,
            page: Number(page),
            pages: Math.ceil(total / Number(limit)),
            data: blogs,
        });
    } catch (err) {
        console.error("adminGetAll error:", err);
        return res.status(500).json({ success: false, message: "Server error." });
    }
};

// GET /api/blog/admin/:id
// Get single blog by ID (for edit form)
const adminGetById = async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);
        if (!blog) return res.status(404).json({ success: false, message: "Blog not found." });
        return res.status(200).json({ success: true, data: blog });
    } catch (err) {
        console.error("adminGetById error:", err);
        return res.status(500).json({ success: false, message: "Server error." });
    }
};

// POST /api/blog/admin
// Create new blog
const createBlog = async (req, res) => {
    try {
        const {
            title, slug, excerpt, content, images,
            author, categories, tags, status,
            faqs, metaTitle, metaDescription, metaKeywords,
            ogTitle, ogDescription, ogImage, canonicalUrl,
        } = req.body;

        if (!title || !content) {
            return res.status(400).json({ success: false, message: "Title and content are required." });
        }

        // Auto-generate slug if not provided
        const finalSlug = slug || generateSlug(title);

        // Check slug uniqueness
        const exists = await Blog.findOne({ slug: finalSlug });
        if (exists) {
            return res.status(409).json({ success: false, message: "A blog with this slug already exists. Change the title or provide a custom slug." });
        }

        const blog = await Blog.create({
            title, slug: finalSlug, excerpt, content, images: images || [],
            author, categories: categories || [], tags: tags || [],
            status: status || "draft",
            faqs: faqs || [],
            metaTitle, metaDescription, metaKeywords: metaKeywords || [],
            ogTitle, ogDescription, ogImage, canonicalUrl,
            datePublished: status === "published" ? new Date() : null,
        });

        return res.status(201).json({ success: true, message: "Blog created.", data: blog });
    } catch (err) {
        console.error("createBlog error:", err);
        return res.status(500).json({ success: false, message: "Server error." });
    }
};

// PUT /api/blog/admin/:id
// Update blog
const updateBlog = async (req, res) => {
    try {
        const existing = await Blog.findById(req.params.id);
        if (!existing) return res.status(404).json({ success: false, message: "Blog not found." });

        const updates = { ...req.body };

        // If publishing for the first time, set datePublished
        if (updates.status === "published" && existing.status !== "published") {
            updates.datePublished = new Date();
        }

        // If slug is being changed, check uniqueness
        if (updates.slug && updates.slug !== existing.slug) {
            const slugExists = await Blog.findOne({ slug: updates.slug, _id: { $ne: req.params.id } });
            if (slugExists) {
                return res.status(409).json({ success: false, message: "Slug already in use by another blog." });
            }
        }

        // $set ensures status and other fields update correctly
        const blog = await Blog.findByIdAndUpdate(
            req.params.id,
            { $set: updates },
            { new: true, runValidators: true }
        );

        return res.status(200).json({ success: true, message: "Blog updated.", data: blog });
    } catch (err) {
        console.error("updateBlog error:", err);
        return res.status(500).json({ success: false, message: "Server error." });
    }
};

// DELETE /api/blog/admin/:id
const deleteBlog = async (req, res) => {
    try {
        const blog = await Blog.findByIdAndDelete(req.params.id);
        if (!blog) return res.status(404).json({ success: false, message: "Blog not found." });
        return res.status(200).json({ success: true, message: "Blog deleted." });
    } catch (err) {
        console.error("deleteBlog error:", err);
        return res.status(500).json({ success: false, message: "Server error." });
    }
};

// DELETE /api/blog/admin/:id/comment/:commentId
const deleteComment = async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);
        if (!blog) return res.status(404).json({ success: false, message: "Blog not found." });

        blog.comments = blog.comments.filter((c) => c._id.toString() !== req.params.commentId);
        await blog.save();

        return res.status(200).json({ success: true, message: "Comment deleted.", comments: blog.comments });
    } catch (err) {
        console.error("deleteComment error:", err);
        return res.status(500).json({ success: false, message: "Server error." });
    }
};

module.exports = {
    getAllPublished,
    getBySlug,
    likeBlog,
    addComment,
    adminGetAll,
    adminGetById,
    createBlog,
    updateBlog,
    deleteBlog,
    deleteComment,
};