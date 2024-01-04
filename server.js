const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const http = require('http');
const cors = require('cors');
const socketio = require('socket.io');
const mongoose = require('mongoose');
const session = require('express-session');
const {acclogin , getprofile , setprofile , deleteprofile } = require('./lmscontrollers/lmsaccountcontrollers');
const { dashboardcon , getnotices , setnotices , getchatdisc , editdisc , deletedisc , addchats , getdisclist,deletenotices,editnotices,getnoticestaff } = require('./lmscontrollers/lmsdashboardcontrollers');
const { getgrades , getresultsdoc } = require('./lmscontrollers/lmsgradescontrollers');
const { setmodcontent , getmods , deletemodcontent} = require('./lmscontrollers/lmsmodcontentcontrollers');
const { getstudentsubmissions , getsubstudent , editsubs , deletesubs , addsubmission} = require('./lmscontrollers/lmssubmissionscontrollers');
const websocket = require('./lmscontrollers/websocket');

const server = http.createServer(app);
const io = websocket(server);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`N-Learn server is running on port ${PORT}`);
});

    app.use(bodyParser.json());
    app.use(cors());
    app.use(
      session({
        secret: 'nlearnLMS', 
        resave: false,
        saveUninitialized: true,
      })
    );

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

          //api for load special notices for staff

        app.get('/api/nlearn/getnoticestaff' , (req , res) => {
          getnoticestaff(req , res)
        });

        //api for post notices only for staff

        app.post('/api/nlearn/setnotices' , (req , res) => {
            setnotices(req , res)
          });

        //api for edit notices only for staff

        app.put('/api/nlearn/editnotices' , (req , res) => {
          editnotices(req , res)
        });

        //api for delete notices only for staff

        app.delete('/api/nlearn/deletenotices' , (req , res) => {
          deletenotices(req , res)
        });

        //api for load discussion batch list only for staff

        app.get('/api/nlearn/getdisclist' , (req , res) => {
          getdisclist(req , res)
        });

        //api for load chat discussion

        app.get('/api/nlearn/getchatdisc' , (req , res) => {
            getchatdisc(req , res)
          });

        //api for post chat discussion

        app.post('/api/nlearn/addchats' , (req , res) => {
          addchats(req , res)
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

