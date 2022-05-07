const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Skills = mongoose.model("Skills");

router.get("/getskills", (req, res) => {
  Skills.find()
    .then((works) => {
      res.json({ works });
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router