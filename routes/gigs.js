const express = require("express");
const router = express.Router();
const Gig = require("../models/gigModel");

router.get("/", async (req, res) => {
  const gigs = await Gig.findAll();

  res.status(200).json({
    status: "success",
    data: {
      gigs,
    },
  });
});

router.post("/", async (req, res) => {
  let { title, technologies, budget, description, contact_email } = req.body;

  const gig = await Gig.create({
    title,
    technologies,
    budget,
    description,
    contact_email,
  });

  res.status(200).json({
    status: "success",
    data: {
      gig,
    },
  });
});

module.exports = router;
