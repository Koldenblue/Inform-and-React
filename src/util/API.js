let db = require("../../models");


db.User.find({}).then((data) => {
  console.log(data)
})
