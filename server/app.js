// server/app.js
const express = require("express");
const mongoose = require("mongoose");
const subscriberRoutes = require("./routes/subscriberRoutes");

const app = express();

// Middleware
app.use(express.json());

// Connect to MongoDB Atlas
const mongoURI =
  "mongodb+srv://<username>:<password>@<cluster-url>/<database-name>?retryWrites=true&w=majority";
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Routes
app.use("/api/subscribers", subscriberRoutes);

module.exports = app;
