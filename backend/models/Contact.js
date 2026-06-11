const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Name is required"],
            trim: true,
        },
        email: {
            type: String,
            required: [true, "Email is required"],
            trim: true,
            lowercase: true,
            match: [/^\S+@\S+\.\S+$/, "Invalid email format"],
        },
        company: {
            type: String,
            trim: true,
            default: "",
        },
        subject: {
            type: String,
            required: [true, "Subject is required"],
            trim: true,
        },
        type: {
            type: String,
            enum: [
                "Speaking Engagement",
                "Media Inquiry",
                "Advisory / Consulting",
                "Partnership",
                "Other",
            ],
            required: [true, "Inquiry type is required"],
        },
        message: {
            type: String,
            required: [true, "Message is required"],
            trim: true,
        },
        status: {
            type: String,
            enum: ["new", "read", "replied"],
            default: "new",
        },
    },
    {
        timestamps: true, // adds createdAt and updatedAt
    }
);

module.exports = mongoose.model("Contact", contactSchema);