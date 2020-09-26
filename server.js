const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const routes = require("./routes/index.js");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(logger("dev"));

app.use(express.urlencoded( {extended: true} ));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(express.static("public"));
app.use(routes);

// app.use("/html", htmlRoutes);



mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/voters", { useNewUrlParser: true });


app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});
