const router = require("express").Router();
const axios = require("axios");

console.log("API ROUTE")
router.get("/representatives/search/:address", ({params: {address}}, res) => {
  axios.get(`https://www.googleapis.com/civicinfo/v2/representatives?address=${address}&key=${process.env.apikey}`)
  .then(({data})=> res.json(data))
})

router.get('/users', (req, res) => {
  console.log("users api get route, now validate, go thru passport, and put in database");
  res.json("whoa")
})

module.exports = router;
