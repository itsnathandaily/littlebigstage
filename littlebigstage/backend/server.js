const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose')
const moviesRouter = require('./routes/movies')
const fileUpload = require('express-fileupload')


require('dotenv').config();

const app = express()
app.use(fileUpload());
const port = process.env.PORT || 5000;


//connect to DB
mongoose.connect(process.env.DB_CONNECTION,
    {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    }, () => console.log('Connected to Mongo DB!'))

    mongoose.connection
    .once('open',()=> console.log('really connected'))
    .on('error', error => {
        console.log("Your Error",error)
    })

//middlewares
app.use(cors());
app.use(express.json())
app.use('/movies',moviesRouter)

app.listen(port,()=>{
    console.log('Server is running on port : 5000')
})