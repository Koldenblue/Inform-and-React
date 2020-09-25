const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const htmlRoutes = require("./routes/htmlRoutes");

const PORT = process.env.PORT || 3001;


const app = express();

app.use(logger("dev"));

app.use(express.urlencoded( {extended: true} ));
app.use(express.json());

app.use(express.static("public"));
app.use(htmlRoutes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });


app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});
