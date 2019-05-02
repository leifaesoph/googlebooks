const express = require("express");
// dependencies //
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

//Middleware 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
//add routes, view/api
app.use(routes);

//connect to mongo db
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/googlebooks",
  {
    useCreateIndex: true,
    useNewUrlParser: true
  }
);

//start api server
app.listen(PORT, () =>
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);
