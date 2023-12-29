const session = require('express-session');
const nodemailer = require('nodemailer');
const bcrypt = require('bcrypt');
const ModSub = require('../lmsmodel/lmsmodel');
const EnrolledMod = require('../lmsmodel/lmsmodel');

// processes related to submissions

// load submitted docs for staff

async function getstudentsubmissions(req, res) {
    try {
      
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' }); //change the error msg here according to prefs
    }
  }
  
  // edit submitted docs for students
  
  async function editsubs(req, res) {
    try {
      
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' }); //change the error msg here according to prefs
    }
  }
  
  // delete submitted docs for students
  
  async function deletesubs(req, res) {
    try {
      
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' }); //change the error msg here according to prefs
    }
  }
  
  //add submissions
  
  async function addsubmission(req, res) {
    try {
      
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' }); //change the error msg here according to prefs
    }
  }
  
  //sub view for students
  
  async function getsubstudent(req, res) {
    try {
      
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' }); //change the error msg here according to prefs
    }
  }

  module.exports = {
    getstudentsubmissions,
    getsubstudent,
    editsubs,
    deletesubs,
    addsubmission
  }