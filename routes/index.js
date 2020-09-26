const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./apiRoutes.js");
const htmlRoutes = require("./htmlRoutes");

console.log("hi")
// API Routes
router.use("/html", htmlRoutes);
router.use("/api", apiRoutes);

router.get("/react", (req,res)=>{
  console.log('react route')
  res.sendFile(path.join(__dirname, "../client/build/index.html"))
})

// If no API routes are hit, send the React app
router.use(function(req, res) {
  // sending the file in the public folder doesn't actually start react:
  // res.sendFile(path.join(__dirname, "../client/public/index.html"))
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
