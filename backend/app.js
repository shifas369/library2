const express = require('express')
const cors = require('cors')
const logger = require('morgan')

const app = new express() //define app for server
const port = 3000 //port number

require('./middleware/mongodb')





app.use(cors())//to connect frnt end and backend without disturbance
app.use(express.json())// to recieve data from frntend
app.use(express.urlencoded({extended:true}))
app.use(logger('dev'))

// const path = require('path');
// app.use(express.static(path.join(__dirname + '/dist/lib')));





//connecting api with app.js
const api = require('./api')
app.use('/api',api) 












// app.get('/*', function (req, res) {
//     res.sendFile(path.join(__dirname + '/dist/lib/index.html'));
// });




// server connection

 app.listen(port,()=>{
    console.log(`..server is connected to ${port}`)

})






