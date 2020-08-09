const mongoose = require("mongoose");

const coverImageBasePath = "../public/uploads/movieCovers";

const MovieSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    index: true,
    // lowercase: true
  },
  category: {
    type: String,
    required: true,
  },
  coverImage: {
    name: String,
    data: Buffer,
    size: Number,
    mimetype: String,
  },
  reviews: [
    {
      date: {
        type: Date,
        default: Date.now,
      },
      rating: {
        type: Number,
        // required: true
      },
      why: {
        type: String,
      },
      username: {
        type: String,
        //  required: true
      },
    },
  ],
});

module.exports = mongoose.model("Movie", MovieSchema);
module.exports.coverImageBasePath = coverImageBasePath;
