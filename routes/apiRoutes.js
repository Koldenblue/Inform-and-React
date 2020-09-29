const router = require("express").Router();
const axios = require("axios");
const db = require("../models")
const passport = require("../config/passport")

router.get("/representatives/search/:address", ({params: {address}}, res) => {  
  axios.get(`https://www.googleapis.com/civicinfo/v2/representatives?address=${address}&key=${process.env.apikey}`)
  .then(({data})=> res.json(data))
})


router.get('/voterinfo/search/:address', (req, res) => {
  axios.get(`https://www.googleapis.com/civicinfo/v2/voterinfo?electionId=7000&address=${req.params.address}&key=${process.env.apikey}`).then(({data}) => {
    console.log(data)
    res.json(data)
  }).catch((err) => {
    console.log(err);
  })
  console.log("found the server")
  console.log(req.params)
})


router.get('/users', (req, res) => {
  console.log("users api get route, now validate, go thru passport, and put in database");
  db.User.find({}).then(data => {
    res.json(data)
  }).catch((err) => {
    console.log(err);
  })
})

router.get('/logout', (req, res) => {
  req.logout();
  res.status(200).end();
})

router.put('/users/address/:userid', (req, res) => {
  db.User.findOne({_id: req.params.userid}, (err, doc) => {
    if (err) console.log(err);
    doc.homeAddress.address = req.body.address;
    doc.homeAddress.city = req.body.city;
    doc.homeAddress.zip = req.body.zip;
    doc.homeAddress.state = req.body.state;
    doc.concatenateHomeAddress();
    doc.save();
  })
  res.status(200).end();
})

router.put('/users/infourls/:userid', (req, res) => {
  db.User.findOne({_id: req.params.userid}, (err, doc) => {
    if (err) console.log(err);
    doc.googleApiInfoUrls.votingLocationFinderUrl = req.body.votingLocationFinderUrl;
    doc.googleApiInfoUrls.electionInfoUrl = req.body.electionInfoUrl;
    doc.googleApiInfoUrls.ballotInfoUrl = req.body.ballotInfoUrl;
    doc.save();
  })
  res.status(200).end();
})


router.post('/users', (req, res) => {
  db.User.create(req.body).then((data) => {
    res.status(200).end();
  }).catch((err) => {
    console.log(err);
  })
})

router.post('/login', passport.authenticate("local"),(req, res) => {
  res.json( {username: req.user.username, id: req.user._id} )
})

router.get("/userdata", ({user},res) => {
  if(user){
    const {password, ...data} = user;
    return res.json(data).end()
  }
  res.json(null)
})

module.exports = router;
