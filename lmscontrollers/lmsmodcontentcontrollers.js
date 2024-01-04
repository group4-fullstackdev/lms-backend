const session = require('express-session');
const nodemailer = require('nodemailer');
const bcrypt = require('bcrypt');
const lmsMod = require('../lmsmodel/lmsmodel');
const ModContent = require('../lmsmodel/lmsmodel');

// processes related to module contents

// post module content

async function setmodcontent(req, res) {
    try {
    const { modID, contentType, fname, ftitle, confile } = req.body;
    const newContent = new ModContent({
      contentType,
      fname,
      modID,
      ftitle,
      confile: Buffer.from(confile, 'base64'), 
    });
    await newContent.save();

    res.status(201).json({ message: 'Content added successfully' });
    
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'error adding content' }); 
    }
  }

// delete module content

async function deletemodcontent(req, res) {
    try {
    const ftitle = req.params.ftitle;
    const deletedContent = await ModContent.findOneAndDelete({ ftitle });

    if (!deletedContent) {
      return res.status(404).json({ message: 'Content not found' });
    }

    res.status(200).json({ message: 'Content deleted successfully' });
      
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'error deleting' }); 
    }
  }

// load module content

async function getmods(req, res) {
    try {
    const modID = req.params.modID;

    const moduleContent = await ModContent.find({ modID });

    res.status(200).json({ moduleContent });
      
      
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'error loading content' }); //change the error msg here according to prefs
    }
  }

  module.exports = {
    getmods,
    deletemodcontent,
    setmodcontent
  }