let mongoose = require("mongoose");
let db = require("../models");

mongoose.connect("mongodb://localhost/voters", {
  useNewUrlParser: true,
  useFindAndModify: false
});

let seeder = 
  {
    username: "kevin",
    password: "123",
    homeAddress: {
      address: "123 Main St.",
      city: "Los Angeles",
      zip: "90012",
      state: "CA"
    },
    dropoffAddress: { 
      address: "555 W 5th St",
      city: "Los Angeles",
      zip: "90013",
      state: "CA"
    }
  }

  db.User.deleteMany({})
  .then(() => db.User.insertMany(seeder))
  .then(data => {
    console.log(data + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
