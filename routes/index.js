const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./apiRoutes.js");
const htmlRoutes = require("./htmlRoutes");

// API Routes
router.use("/api", apiRoutes);
router.use("/html", htmlRoutes);


module.exports = router;
