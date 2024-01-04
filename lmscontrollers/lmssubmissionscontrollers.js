const session = require('express-session');
const nodemailer = require('nodemailer');
const bcrypt = require('bcrypt');
const ModSub = require('../lmsmodel/lmsmodel');
const EnrolledMod = require('../lmsmodel/lmsmodel');

// processes related to submissions

// load submitted docs for staff

async function getstudentsubmissions(req, res) {
    try {
    const modID = req.params.modID;
    const subtitle = req.params.subtitle;
    const modSubData = await ModSub.find({ modID, subtitle });

    const responseData = modSubData.map(({ fname, subfile }) => ({ fname, subfile }));

    res.status(200).json({ modSubData: responseData });
      
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'error loading submissions' }); 
    }
  }
  
  // edit submitted docs for students
  
  async function editsubs(req, res) {
    try {
    const modID = req.params.modID;
    const subtitle = req.params.subtitle;
    const accID = req.session.accID;
    const { newFname, newSubfile } = req.body;

    const existingData = await ModSub.findOne({ modID, subtitle, accID });

    if (!existingData) {
      return res.status(404).json({ message: 'Data not found' });
    }

    existingData.fname = newFname;
    existingData.subfile = Buffer.from(newSubfile, 'base64'); 
    existingData.subdate = new Date();
    await existingData.save();

    res.status(200).json({ message: 'Data updated successfully' });
      
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'error updating' }); 
    }
  }
  
  // delete submitted docs for students
  
  async function deletesubs(req, res) {
    try {
    const modID = req.params.modID;
    const subtitle = req.params.subtitle;
    const accID = req.session.accID;
    const deletedData = await ModSub.findOneAndDelete({ modID, subtitle, accID });

    if (!deletedData) {
      return res.status(404).json({ message: 'Data not found' });
    }

    res.status(200).json({ message: 'Data deleted successfully' });
      
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'error deleting' }); 
    }
  }
  
  //add submissions
  
  async function addsubmission(req, res) {
    try {
    const modID = 'PUSL3031';
    const subtitle = 'Coursework';
    const accID = req.session.accID;
    const { fname, subfile } = req.body;

    
    const newModSubData = new ModSub({
      accID,
      modID,
      fname,
      subtitle,
      subfile: Buffer.from(subfile, 'base64'), 
      subdate: new Date(),
    });
    await newModSubData.save();

    res.status(201).json({ message: 'Data added successfully' });
      
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'error submitting' }); 
    }
  }
  
  //sub view for students
  
  async function getsubstudent(req, res) {
    try {
    const accID = req.session.accID;
    const modSubData = await ModSub.find({ accID });

    const responseData = modSubData.map(({ fname, subfile }) => ({ fname, subfile }));

    res.status(200).json({ modSubData: responseData });
      
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