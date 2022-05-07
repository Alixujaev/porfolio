const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Message = mongoose.model("Message");

router.post("/message", (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(402).json({ error: "Please add all the fields" });
  }

  const sms = new Message({
    name,
    email,
    subject,
    message,
  });

  sms
    .save()
    .then((result) => {
      res.json({success: 'Your message has been successfully sent to Islom'});
    })
    .catch((err) => console.log(err));
});

module.exports = router
