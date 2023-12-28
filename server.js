const express = require('express');
const app = express();
const socketio = require('socket.io');
const mongoose = require('mongoose');


app.listen(3001, () => {
    console.log('N-Learn Server started on port 3001');
    });

    const uri = 'mongodb+srv://lmsadmin:lmsadmin123@clusterlms.crshboq.mongodb.net/?retryWrites=true&w=majority';

    mongoose.connect( uri,
        ) 
        .then( () => {
            console.log("connected to db")
        })
        .catch((err) => {
            console.error(`error : ${err}`)
        }) 

  