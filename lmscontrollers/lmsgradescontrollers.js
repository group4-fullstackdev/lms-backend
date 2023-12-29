const session = require('express-session');
const nodemailer = require('nodemailer');
const bcrypt = require('bcrypt');
const StudentGrade = require('../lmsmodel/lmsmodel');

// processes related to student results

//load grades

async function getgrades(req, res) {
    try {
      
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' }); //change the error msg here according to prefs
    }
  }
  
  // get results for downloading
  
  async function getresultsdoc(req, res) {
    try {
      
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' }); //change the error msg here according to prefs
    }
  }

  module.exports = {
    getgrades,
    getresultsdoc
  }
  