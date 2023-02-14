const express = require("express");
const router = express.Router();
const Gig = require("../models/gigModel");

router.get("/", (req, res) => {
  Gig.findAll()
    .then((gigs) => {
      res.sendStatus(200);
      console.log(gigs);
    })
    .catch((err) => console.log(err));
});

module.exports = router;
