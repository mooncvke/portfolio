const imageRouter = require("express").Router();
const Image = require("../models/image.js");

imageRouter.get("/", async (req, res) => {
  // get all objects from Image model
  const images = await Image.find({});
  res.json(images);
});

imageRouter.get("/traditional", async (req, res) => {
  // get objects from Image model where category is traditional
  try {
    // get objects from Image model where category is traditional
    const images = await Image.find({ category: "traditional" });
    res.json(images);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

imageRouter.get("/digital", async (req, res) => {
  // get objects from Image model where category is digital
  const images = await Image.find({ category: "digital" });
  res.json(images);
});

imageRouter.get("/photography", async (req, res) => {
  // get objects from Image model where category is photography
  const images = await Image.find({ category: "photography" });
  res.json(images);
});

imageRouter.post("/", async (req, res) => {
  const body = req.body;
  const image = new Image({
    id: body.id,
    name: body.name,
    year: body.year,
    comments: body.comments,
    url: body.url,
    category: body.category,
  });
  const savedImage = await image.save();
  res.status(201).json(savedImage.toJson);
});

module.exports = imageRouter;
