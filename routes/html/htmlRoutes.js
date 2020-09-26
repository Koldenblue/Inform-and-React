const router = require("express").Router();
const path = require("path")

console.log("THE HTML ROUTE HAS BEEN HIT, IT HAS BEEN HIT")

router.route("/sophia/:password", (req,res)=> {
    res.json(req.params.password === "123" ? "WELCOME SOPHIA" : "NEW PHONE WHO DIS?")
})

router.route("/*", (req, res) => {
    res.json({hello})
})
//router.get("*", (req,res)=>{
    //res.sendFile(path.join(__dirname, "../client/build/index.html"))
//})

module.exports = router;