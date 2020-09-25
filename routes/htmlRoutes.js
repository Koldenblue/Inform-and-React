const router = require("express").Router();
const path = require("path")





router.get("/sophia/:password", (req,res)=> {
    res.json(req.params.password === "123" ? "WELCOME SOPHIA" : "NEW PHONE WHO DIS?")
})


//router.get("*", (req,res)=>{
    //res.sendFile(path.join(__dirname, "../client/build/index.html"))
//})

module.exports = router;