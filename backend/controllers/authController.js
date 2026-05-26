const Admin = require("../models/Admin");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../middleware/authMiddleware");

const COOKIE_OPTIONS = {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
};

// POST /api/auth/signup
const signup = async (req, res) => {
    try {
        const { email, password, confirmPassword } = req.body;

        if (!email || !password || !confirmPassword) {
            return res.status(400).json({ success: false, message: "All fields are required." });
        }

        if (password !== confirmPassword) {
            return res.status(400).json({ success: false, message: "Passwords do not match." });
        }

        if (password.length < 6) {
            return res.status(400).json({ success: false, message: "Password must be at least 6 characters." });
        }

        const exists = await Admin.findOne({ email: email.toLowerCase() });
        if (exists) {
            return res.status(409).json({ success: false, message: "An admin with this email already exists." });
        }

        const admin = await Admin.create({ email, password });

        const token = jwt.sign({ id: admin._id, email: admin.email }, JWT_SECRET, { expiresIn: "7d" });

        res.cookie("adminToken", token, COOKIE_OPTIONS);

        return res.status(201).json({
            success: true,
            message: "Admin account created successfully.",
            admin: { email: admin.email },
        });
    } catch (err) {
        console.error("signup error:", err);
        return res.status(500).json({ success: false, message: "Server error." });
    }
};

// POST /api/auth/login
const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ success: false, message: "Email and password are required." });
        }

        const admin = await Admin.findOne({ email: email.toLowerCase() });
        if (!admin) {
            return res.status(401).json({ success: false, message: "Invalid credentials." });
        }

        const isMatch = await admin.comparePassword(password);
        if (!isMatch) {
            return res.status(401).json({ success: false, message: "Invalid credentials." });
        }

        const token = jwt.sign({ id: admin._id, email: admin.email }, JWT_SECRET, { expiresIn: "7d" });

        res.cookie("adminToken", token, COOKIE_OPTIONS);

        return res.status(200).json({
            success: true,
            message: "Login successful.",
            admin: { email: admin.email },
        });
    } catch (err) {
        console.error("login error:", err);
        return res.status(500).json({ success: false, message: "Server error." });
    }
};

// POST /api/auth/logout
const logout = (req, res) => {
    res.clearCookie("adminToken", COOKIE_OPTIONS);
    return res.status(200).json({ success: true, message: "Logged out successfully." });
};

// GET /api/auth/me
const me = (req, res) => {
    return res.status(200).json({ success: true, admin: req.admin });
};

module.exports = { signup, login, logout, me };