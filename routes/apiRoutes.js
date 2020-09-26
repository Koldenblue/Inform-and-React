const router = require("express").Router();

console.log("API ROUTE")
router.use("/", (req, res) => {
  res.json("HERE")
})

module.exports = router;
