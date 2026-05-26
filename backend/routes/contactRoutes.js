const express = require("express");
const router = express.Router();
const {
    submitContact,
    getAllContacts,
    getContactById,
    updateContactStatus,
    deleteContact,
} = require("../controllers/contactController");

// Public
router.post("/", submitContact);

// Admin / internal
router.get("/", getAllContacts);
router.get("/:id", getContactById);
router.patch("/:id/status", updateContactStatus);
router.delete("/:id", deleteContact);

module.exports = router;