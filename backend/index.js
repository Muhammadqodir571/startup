const express = require('express')
const dotenv = require('dotenv')
const router = require('./routes/server')

const  app  =   express()
dotenv.config()

app.use('/dairy',router)




const PORT = process.env.PORT || 2343



app.listen(PORT, () =>{
    console.log(`server workinig on port:${PORT}`)
})

