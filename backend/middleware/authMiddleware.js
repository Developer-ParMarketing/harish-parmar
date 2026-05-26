const jwt = require("jsonwebtoken");

const JWT_SECRET = "harish_parmar_admin_secret_2024"; // move to env in production

const protect = (req, res, next) => {
    const token = req.cookies?.adminToken;

    if (!token) {
        return res.status(401).json({ success: false, message: "Not authorized. Please login." });
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.admin = decoded;
        next();
    } catch (err) {
        return res.status(401).json({ success: false, message: "Invalid or expired session. Please login again." });
    }
};

module.exports = { protect, JWT_SECRET };