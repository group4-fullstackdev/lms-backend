const session = require('express-session');
const nodemailer = require('nodemailer');
const bcrypt = require('bcrypt');
const AccountData = require('../lmsmodel/lmsmodel');
const lmsMod = require('../lmsmodel/lmsmodel');
const EnrolledMod = require('../lmsmodel/lmsmodel');

// process related to login and accounts

//Account login

async function acclogin(req, res) {
    try {
      
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' }); //change the error msg here according to prefs
    }
  }

  // load account data for profile

async function getprofile(req, res) {
    try {
      
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' }); //change the error msg here according to prefs
    }
  }

// update profile

async function setprofile(req, res) {
    try {
      
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' }); //change the error msg here according to prefs
    }
  }

// delete contents on profile

async function deleteprofile(req, res) {
    try {
      
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' }); //change the error msg here according to prefs
    }
  }

  module.exports = {
    deleteprofile,
    setprofile,
    getprofile,
    acclogin
  }



