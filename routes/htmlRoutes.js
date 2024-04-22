const express = require("express");
const router = express.Router();
const path = require("path");

// Define routes
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "html", "index.html"));
});

router.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "html", "about.html"));
});

router.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "html", "contact.html"));
});

router.get("/testimonials", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "html", "testimonials.html"));
});

router.get("/portfolio", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "html", "portfolio.html"));
});

// export routes to server.
module.exports = router;
