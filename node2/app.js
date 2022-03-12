const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/animals');

mongoose.connection
    .once('open',()=>{console.log('Connected')})
    .on('error',(err)=>{
        console.log(`could not connect`,err)
    });















// const MongoClient = require('mongodb').MongoClient

// MongoClient.connect('mongodb://localhost:27017/animals', (err, db) => {
//   if (err) throw err
//   console.log('connected')
// //   db.collection('mammals').find().toArray((err, result) => {
// //     if (err) throw err

// //     console.log(result)
// //   })
// })