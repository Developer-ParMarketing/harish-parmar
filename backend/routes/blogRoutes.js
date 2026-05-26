const express = require("express");
const router = express.Router();
const {
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
} = require("../controllers/blogController");
const { protect } = require("../middleware/authMiddleware");

// ── Admin routes MUST come before /:slug — otherwise "admin" gets treated as a slug
router.get("/admin/all", protect, adminGetAll);
router.get("/admin/:id", protect, adminGetById);
router.post("/admin", protect, createBlog);
router.put("/admin/:id", protect, updateBlog);
router.delete("/admin/:id/comment/:commentId", protect, deleteComment);
router.delete("/admin/:id", protect, deleteBlog);

// ── Public routes ─────────────────────────────────────────────────────────────
router.get("/", getAllPublished);
router.get("/:slug", getBySlug);
router.post("/:slug/like", likeBlog);
router.post("/:slug/comment", addComment);

module.exports = router;