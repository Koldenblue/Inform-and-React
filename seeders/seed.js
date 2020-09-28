let mongoose = require("mongoose");
let db = require("../models");

mongoose.connect("mongodb://localhost/voters", {
  useNewUrlParser: true,
  useFindAndModify: false
});

let seeder = [
  {
        username: "kevin",
        password: "123",
        address: "123 Main St.",
        city: "Los Angeles",
        zip: "90012",
        state: "CA"
    
}];
  db.User.deleteMany({})
  .then(() => db.User.insertMany(seeder))
  .then(data => {
    console.log(data.results.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
