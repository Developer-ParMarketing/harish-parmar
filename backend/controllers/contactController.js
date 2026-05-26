const Contact = require("../models/Contact");

// POST /api/contact
// Submit a new contact inquiry
const submitContact = async (req, res) => {
    try {
        const { name, email, company, type, message } = req.body;

        // Basic presence check before hitting mongoose validation
        if (!name || !email || !type || !message) {
            return res.status(400).json({
                success: false,
                message: "name, email, type and message are required",
            });
        }

        const contact = await Contact.create({ name, email, company, type, message });

        return res.status(201).json({
            success: true,
            message: "Your message has been received. We'll respond within 24 hours.",
            data: contact,
        });
    } catch (err) {
        // Mongoose validation error
        if (err.name === "ValidationError") {
            const errors = Object.values(err.errors).map((e) => e.message);
            return res.status(400).json({ success: false, message: errors.join(", ") });
        }
        console.error("submitContact error:", err);
        return res.status(500).json({ success: false, message: "Server error. Please try again." });
    }
};

// GET /api/contact
// Get all inquiries (admin use)
const getAllContacts = async (req, res) => {
    try {
        const { status, type, page = 1, limit = 20 } = req.query;

        const filter = {};
        if (status) filter.status = status;
        if (type) filter.type = type;

        const skip = (Number(page) - 1) * Number(limit);

        const [contacts, total] = await Promise.all([
            Contact.find(filter).sort({ createdAt: -1 }).skip(skip).limit(Number(limit)),
            Contact.countDocuments(filter),
        ]);

        return res.status(200).json({
            success: true,
            total,
            page: Number(page),
            pages: Math.ceil(total / Number(limit)),
            data: contacts,
        });
    } catch (err) {
        console.error("getAllContacts error:", err);
        return res.status(500).json({ success: false, message: "Server error." });
    }
};

// GET /api/contact/:id
// Get a single inquiry by ID
const getContactById = async (req, res) => {
    try {
        const contact = await Contact.findById(req.params.id);
        if (!contact) {
            return res.status(404).json({ success: false, message: "Inquiry not found." });
        }
        return res.status(200).json({ success: true, data: contact });
    } catch (err) {
        console.error("getContactById error:", err);
        return res.status(500).json({ success: false, message: "Server error." });
    }
};

// PATCH /api/contact/:id/status
// Update status of an inquiry (new → read → replied)
const updateContactStatus = async (req, res) => {
    try {
        const { status } = req.body;
        if (!["new", "read", "replied"].includes(status)) {
            return res.status(400).json({ success: false, message: "Invalid status. Use: new, read, replied" });
        }

        const contact = await Contact.findByIdAndUpdate(
            req.params.id,
            { status },
            { new: true, runValidators: true }
        );

        if (!contact) {
            return res.status(404).json({ success: false, message: "Inquiry not found." });
        }

        return res.status(200).json({ success: true, data: contact });
    } catch (err) {
        console.error("updateContactStatus error:", err);
        return res.status(500).json({ success: false, message: "Server error." });
    }
};

// DELETE /api/contact/:id
const deleteContact = async (req, res) => {
    try {
        const contact = await Contact.findByIdAndDelete(req.params.id);
        if (!contact) {
            return res.status(404).json({ success: false, message: "Inquiry not found." });
        }
        return res.status(200).json({ success: true, message: "Inquiry deleted." });
    } catch (err) {
        console.error("deleteContact error:", err);
        return res.status(500).json({ success: false, message: "Server error." });
    }
};

module.exports = {
    submitContact,
    getAllContacts,
    getContactById,
    updateContactStatus,
    deleteContact,
};