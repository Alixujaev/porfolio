const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Works = mongoose.model("Works");


router.get('/getworks', (req, res) => {
  Works.find()
    .then((result) => {
      res.json({works: result})
    })
    .catch((err) => {
      console.log(err);
    })

})


module.exports = router;