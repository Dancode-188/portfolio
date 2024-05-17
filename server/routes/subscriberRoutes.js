// subscriberRoutes.js
const express = require("express");
const router = express.Router();
const Subscriber = require("../models/subscriber");

router.post("/", async (req, res) => {
  try {
    const { email } = req.body;
    console.log("Received email:", email);

    // Create a new subscriber
    const subscriber = new Subscriber({ email });
    await subscriber.save();

    res.status(200).json({ message: "Subscription successful" });
  } catch (error) {
    console.error("Error saving subscriber:", error);
    res.status(500).json({ error: "An error occurred" });
  }
});

module.exports = router;
