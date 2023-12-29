const session = require('express-session');
const nodemailer = require('nodemailer');
const bcrypt = require('bcrypt');
const lmsMod = require('../lmsmodel/lmsmodel');
const ModContent = require('../lmsmodel/lmsmodel');

// processes related to module contents

// post module content

async function setmodcontent(req, res) {
    try {
      
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' }); //change the error msg here according to prefs
    }
  }

// delete module content

async function deletemodcontent(req, res) {
    try {
      
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' }); //change the error msg here according to prefs
    }
  }

// load module content

async function getmods(req, res) {
    try {
      
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' }); //change the error msg here according to prefs
    }
  }

  module.exports = {
    getmods,
    deletemodcontent,
    setmodcontent
  }