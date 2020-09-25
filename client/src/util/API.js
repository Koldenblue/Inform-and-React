// this db file should prob be outside the react client

let db = require("../../models");


db.User.find({}).then((data) => {
  console.log(data)
})
