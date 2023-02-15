const express = require("express");
const router = express.Router();
const Gig = require("../models/gigModel");
const { Op } = require("sequelize");

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

router.get("/search", async (req, res) => {
  const { technologies } = req.query;

  const gigs = await Gig.findAll({
    where: { technologies: { [Op.like]: `%${technologies}%` } },
  });

  res.status(200).json({
    status: "success",
    data: {
      gigs,
    },
  });
});

module.exports = router;
