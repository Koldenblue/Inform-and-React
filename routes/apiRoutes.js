const router = require("express").Router();

console.log("API ROUTE")
router.route("/", (req, res) => {
  res.json("HERE")
})

module.exports = router;
