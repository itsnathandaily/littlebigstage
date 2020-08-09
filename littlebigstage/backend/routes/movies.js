const router = require("express").Router();
let Movies = require("../models/movies.model");
const fileUpload = require("express-fileupload");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
// const uploadPath = path.join('public', Movies.coverImageBasePath)
const imageMimeTypes = ["image/jpeg", "image/png", "images/gif"];

// var storage = multer.diskStorage({
//   destination: function(req, files, cb) {
//     cb(null, 'uploads/');
//   },
//   filename: function(req, files, cb) {
//     let ext = path.extname(files.originalname);
//     cb(null, files.fieldname + '-' + Date.now() + ext);
//   },
// });

const upload = multer();

// var upload = multer({ dest: 'uploads/' })
/* var upload = multer({
  storage: storage,
  //     filter: function(req,file,callback){
  // if (imageMimeTypes.includes(file.mimetype)){
  //     callback(null,true)
  // } else{
  //     console.log('only jpg & png files supported')
  // }
  //     }
}); */

router.route("/").get(async (req, res) => {
  Movies.find()
    .then((movies) => res.json(movies))
    .catch((error) => res.status(400).json("Error: " + error));
});

router.route("/add", upload.single("file")).post((req, res, next) => {
  // console.log('req is ', req);
  const file = req.files;
  if (!file) {
    const error = new Error("Please upload a file");
    return next(error);
  }
  // res.send(file);
  console.log("files sent in is", req.files);
  // console.log('file sent in is', req.file);
  // console.log('image sent in is', req.image);

  const fileName = req.files != null ? req.files.filename : null;
  //console.log('fileName is ', fileName)
  const reviews = {
    date: Date.now(),
    rating: req.body.rating,
    why: req.body.why,
    username: req.body.username,
  };
  const newMovie = new Movies(
    {
      title: req.body.title,
      category: req.body.category,
      // coverImageName: new Buffer.from(req.files.image.data),
      coverImage: req.files.file,
      reviews: reviews,
    },
  );

  newMovie.save()
    .then(() => res.json(newMovie._id + ` has been added`))
    .catch((error) => res.status(400).json("Error: " + error));
});

router.route("/:id").get((req, res) => {
  Movies.findById(req.params.id)
    .then((movies) => res.json(movies))
    .catch((error) => res.status(400).json("Error: " + error));
});

/* get movie image */
router.route("/:id/image").get((req, res) => {
  Movies.findById(req.params.id)
    .then((movies) => {
      res.set("Content-Type", movies.coverImage.mimetype);
      res.send(movies.coverImage.data);
    })
    .catch((error) => res.status(400).json("Error: " + error));
});

router.route("/:id").delete((req, res) => {
  Movies.findByIdAndDelete(req.params.id)
    .then((movies) => res.json("Movie deleted."))
    .catch((error) => res.status(400).json("Error: " + error));
});

router.route("/update/:id").put(async (req, res) => {
  Movies.findById(req.params.id)
    .then((movie) => {
      console.log("movie retrieved is ", movie);
      console.log("req.body.reviews is ", req.body);
      movie.reviews.push({
        $each: req.body.reviews,
        $position: 0,
      });

      // console.log('movie after is ', movie)
      movie
        .save()
        .then(() => res.json("Movie updated!"))
        .catch((error) => res.status(400).json("Error: " + error));
    })
    .catch((error) => res.status(400).json("Error: " + error));
});

/* {"_id":{"$oid":"5f2928d1c18b0308ca3573d1"},"title":"Name 3","category":"Movie","coverImage":{"name":"growth.jpeg","data":{"$binary":{"base64":"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","subType":"00"}},"size":{"$numberInt":"6655"},"mimetype":"image/jpeg"},"reviews":[{"_id":{"$oid":"5f2928d1c18b0308ca3573d2"},"date":{"$date":{"$numberLong":"1596532945625"}},"rating":{"$numberInt":"3"},"why":"","username":""}],"__v":{"$numberInt":"0"}} */

module.exports = router;
