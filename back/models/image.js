const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
  id: { type: String },
  name: { type: String, required: true },
  year: Number,
  comments: String,
  url: { type: String, required: true },
  category: { type: String, required: true },
});

imageSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const Image = mongoose.model("Image", imageSchema);

module.exports = Image;
