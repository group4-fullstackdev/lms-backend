const session = require('express-session');
const nodemailer = require('nodemailer');
const bcrypt = require('bcrypt');
const {StudentGrade} = require('../lmsmodel/lmsmodel');

// processes related to student results

//load grades

async function getgrades(req, res) {
    try {
      const accID = req.session.accID; 
      const batchID = req.session.batchID; 
      const grades = await StudentGrade.find(
        { batchID, accID },
        { examType: 1, moduleID: 1, exammark: 1, assignmark: 1, totalmark: 1, grade: 1, _id: 0 }
      );
      return grades;
      
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error loading Grades. Please try again!' }); 
    }
  }
  
  // get results for downloading
  
  async function getresultsdoc(req, res) {
    try {
      const accID = req.session.accID; 
      const batchID = req.session.batchID; 
      const files = await StudentGrade.find(
        { batchID, accID },
        { gradefname: 1, gradefile: 1, _id: 0 }
      );
      return files;
      
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error loading files for downloading. Please try again later!' }); 
    }
  }

  module.exports = {
    getgrades,
    getresultsdoc
  }
  