const router = require('express').Router();
let Movies = require('../models/movies.model')
const fileUpload = require('express-fileupload')
const multer = require('multer')
const path = require('path')
const fs = require('fs')
// const uploadPath = path.join('public', Movies.coverImageBasePath)
 const imageMimeTypes = ['image/jpeg', 'image/png', 'images/gif']




const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, files, cb) {
       let ext = path.extname(file.originalname)    
        cb(null, Date.now() + ext)
    }
})

let upload = multer({
    storage: storage,
    filter: function(req,file,callback){
if (imageMimeTypes.includes(file.mimetype)){
    callback(null,true)
} else{
    console.log('only jpg & png files supported')
}
    }
})

// const upload = multer({ storage: storage })

// router.route('/upload').post((req, res) => {
//     if (req.files === null) {
//         return res.status(400).json({ msg: 'No file uploaded' });
//     }

//     const file = req.files.file;

//     file.mv(`${__dirname}/littlebigstage/public/uploads/${file.name}`, err => {
//         if (err) {
//             console.error(err);
//             return res.status(500).send(err);
//         }

//         res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
//     })
// })

router.route('/').get(async (req, res) => {
    Movies.find()
        .then(movies => res.json(movies))
        .catch(error => res.status(400).json('Error: ' + error))
});

router.route('/add', upload.single('image')).post(async (req, res) => {
    // router.route('/add').post( async (req, res) => {
    console.log('req.files is', req.files)

    const fileName = req.files != null ? req.files.filename : null
    console.log('fileName is ', fileName)
    const reviews = {
        date: Date.now(),
        rating: req.body.rating,
        why: req.body.why,
        username: req.body.username
    }
    const newMovie = new Movies(
        {
            title: req.body.title,
            category: req.body.category,
            // coverImageName: new Buffer.from(req.files.image.data),
            coverImageName: null,
            reviews: reviews

        }
    )
    // saveImage(newMovie, req.body.image)
    newMovie.save()
        .then(() => res.json(newMovie._id + ` has been added`))
        .catch(error => res.status(400).json('Error: ' + error))


});

router.route('/:id').get((req, res) => {
    Movies.findById(req.params.id)
        .then(movies => res.json(movies))
        .catch(error => res.status(400).json('Error: ' + error))
});

router.route('/:id').delete((req, res) => {
    Movies.findByIdAndDelete(req.params.id)
        .then(movies => res.json('Movie deleted.'))
        .catch(error => res.status(400).json('Error: ' + error))
});


router.route('/update/:id').put(async (req, res) => {

    Movies.findById(req.params.id)
        .then(movie => {

            console.log('movie retrieved is ', movie)
            console.log('req.body.reviews is ', req.body)
            movie.reviews.push({
                $each: req.body.reviews,
                $position: 0
            })

            // console.log('movie after is ', movie)
            movie.save()
                .then(() => res.json('Movie updated!'))
                .catch(error => res.status(400).json('Error: ' + error))
        }).catch(error => res.status(400).json('Error: ' + error))


});

function saveImage(movie, imageEncoded) {
    if (imageEncoded === null) return
    const img = JSON.parse(imageEncoded)
    if (img != null && imageMimeTypes.includes(movie.type)) {
        movie.image = new Buffer.from(img.data)
        movie.imageType = img.type
    }
}

module.exports = router