const session = require('express-session');
const nodemailer = require('nodemailer');
const bcrypt = require('bcrypt');
const ModContent = require('../lmsmodel/lmsmodel');
const ModSub = require('../lmsmodel/lmsmodel');
const EnrolledMod = require('../lmsmodel/lmsmodel');
const Notices = require('../lmsmodel/lmsmodel');
const DiscForum = require('../lmsmodel/lmsmodel');

// processes related to dashboard: module listout, discssion forum, special notices

  // load dashboard content
  
  async function dashboardcon(req, res) {
    try {
      
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' }); //change the error msg here according to prefs
    }
  }
  
  // load special notices
  
  async function getnotices(req, res) {
    try {
      
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' }); //change the error msg here according to prefs
    }
  }
  
  // post notices
  
  async function setnotices(req, res) {
    try {
      
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' }); //change the error msg here according to prefs
    }
  }
  
  // load chat discusiion
  
  async function getchatdisc(req, res) {
    try {
      
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' }); //change the error msg here according to prefs
    }
  }
  
  // edit chat discussion
  
  async function editdisc(req, res) {
    try {
      
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' }); //change the error msg here according to prefs
    }
  }
  
  //delete chat discussion
  
  async function deletedisc(req, res) {
    try {
      
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' }); //change the error msg here according to prefs
    }
  }