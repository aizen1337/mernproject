const express = require('express')
require('dotenv').config()
const mongoose = require('mongoose')
const matchesRoutes = require('./routes/matches')
//app initialize
const application = express();
const port = process.env.PORT
//middleware
application.use((req,res,next) => {
    console.log(req.path,req.method)
    next()
})
application.use(express.json())
//routes
application.use('/api/matches',matchesRoutes)
//database connection
mongoose.connect(process.env.DB_URI)
.then(()=>{
    console.log('connected to database')
    //listen
        application.listen(port , () => {
            console.log(`Server running on ${port}`)
        })
})
.catch((error) => {
    console.log(error)
})