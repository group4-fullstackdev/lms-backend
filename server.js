const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const socketio = require('socket.io');
const mongoose = require('mongoose');
const {acclogin , getprofile , setprofile , deleteprofile } = require('./lmscontrollers/lmsaccountcontrollers');
const { dashboardcon , getnotices , setnotices , getchatdisc , editdisc , deletedisc } = require('./lmscontrollers/lmsdashboardcontrollers');
const { getgrades , getresultsdoc } = require('./lmscontrollers/lmsgradescontrollers');
const { setmodcontent , getmods , deletemodcontent} = require('./lmscontrollers/lmsmodcontentcontrollers');
const { getstudentsubmissions , getsubstudent , editsubs , deletesubs , addsubmission} = require('./lmscontrollers/lmssubmissionscontrollers');


app.listen(3001, () => {
    console.log('N-Learn Server started on port 3001');
    });

    app.use(bodyParser.json());
    app.use(cors());


    const uri = 'mongodb+srv://lmsadmin:lmsadmin123@clusterlms.crshboq.mongodb.net/n-learn_lms?retryWrites=true&w=majority';

    mongoose.connect( uri,
        ) 
        .then( () => {
            console.log("connected to db")
        })
        .catch((err) => {
            console.error(`error : ${err}`)
        }) 

        // api for login

        app.post('/api/nlearn/login', (req, res) => {
            acclogin(req, res)
        });

        //api for load account data on profile

        app.get('/api/nlearn/getprofile' , (req , res) => {
            getprofile(req , res)
          });

        //api for update profile

        app.put('/api/nlearn/setprofile' , (req , res) => {
            setprofile(req , res)
          });

        //api for delete contents on profile

        app.delete('/api/nlearn/deleteprof' , (req , res) => {
            deleteprofile(req , res)
          });

        // api for post module contents

        app.post('/api/nlearn/setmodcontent', (req, res) => {
            setmodcontent(req, res)
        });

        // api for delete module content

        app.delete('/api/nlearn/deletemodcontent', (req, res) => {
            deletemodcontent(req, res)
        });

         // api for load module contents

         app.get('/api/nlearn/modcontent' , (req , res) => {
            getmods(req , res)
          });

        // api for load student grades for students

        app.get('/api/nlearn/getgrades' , (req , res) => {
            getgrades(req , res)
          });

        // api for get results for downloading

        app.get('/api/nlearn/getresultsdoc' , (req , res) => {
            getresultsdoc(req , res)
          });

        //api for load dashboard contents

        app.get('/api/nlearn/dashboardcon' , (req , res) => {
            dashboardcon(req , res)
          });

        //api for load special notices

        app.get('/api/nlearn/getnotices' , (req , res) => {
            getnotices(req , res)
          });

        //api for post notices only for staff

        app.post('/api/nlearn/setnotices' , (req , res) => {
            setnotices(req , res)
          });

        //api for load chat discussion

        app.get('/api/nlearn/getchatdisc' , (req , res) => {
            getchatdisc(req , res)
          });

        //api for edit chat discussions

        app.put('/api/nlearn/editdisc' , (req , res) => {
            editdisc(req , res)
          });

        //api for delete chat discussions

        app.delete('/api/nlearn/deletedisc' , (req , res) => {
            deletedisc(req , res)
          });

        //api for load submitted docs for the staff

        app.get('/api/nlearn/studentsubmissions' , (req , res) => {
            getstudentsubmissions(req , res)
          });

        //api for edit submitted docs only for students

        app.put('/api/nlearn/editsubs' , (req , res) => {
            editsubs(req , res)
          });

        // api for delete submitted docs only for students

        app.delete('/api/nlearn/deletesubs' , (req , res) => {
            deletesubs(req , res)
          });

        // api for add submissions for students

        app.post('/api/nlearn/addsubmission' , (req , res) => {
            addsubmission(req , res)
          });

        //api for load submit details on submission page for studnets

        app.get('/api/nlearn/getsubstudent' , (req , res) => {
            getsubstudent(req , res)
          });

