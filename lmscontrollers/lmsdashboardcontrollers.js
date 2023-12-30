const session = require('express-session');
const nodemailer = require('nodemailer');
const bcrypt = require('bcrypt');
const EnrolledMod = require('../lmsmodel/lmsmodel');
const Notices = require('../lmsmodel/lmsmodel');
const DiscForum = require('../lmsmodel/lmsmodel');

// processes related to dashboard: module listout, discssion forum, special notices

  // load dashboard content
  
  async function dashboardcon(req, res) {
    try {
      const accID = req.session.accID; 

      const enrolledModules = await EnrolledMod.find({ accID });

      const modIDs = enrolledModules.map(enrollment => enrollment.modID);
  
      const modulesInfo = [];
      for (const modID of modIDs) {
        const moduleInfo = await Modlms.findOne({ modID });
        if (moduleInfo) {
          modulesInfo.push(moduleInfo);
        }
      }

      const moduleNames = modulesInfo.map(module => module.modname);
  
      res.status(200).json({ moduleNames });
      
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Could not able to load the module content. Please try again later!' }); 
    }
  }
  
  // load special notices
  
  async function getnotices(req, res) {
    try {
      const batchID = req.session.batchID; 
      const notes = await Notices.find({ batchID }).sort({ notetime: 'desc' });
      res.status(200).json({ notes });
      
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Could not able to load the notices. Please try again later!' }); 
    }
  }
  
  // post notices
  
  async function setnotices(req, res) {
    try {
      const { batchID, notetitle, note } = req.body;
      const staffID = req.session.accID;
      const notetime = new Date();

      const newNotice = new Notices({
      staffID,
      batchID,
      notetitle,
      note,
      notetime
    });
    await newNotice.save();

    res.status(201).json({ message: 'Notice added successfully' });
      
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error posting Notice. Try again!' }); 
    }
  }
  
  // load chat discusiion
  
  async function getchatdisc(req, res) {
    try {
      const batchID = req.session.batchID; 
      const chats = await DiscForum.find({ batchID }).sort({ chattime: 'asc' });
      res.status(200).json({ chats });
      
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Could not able to load the discussion. Please try again!' }); 
    }
  }

  // add chat discussion
  async function addchats(req, res) {
    try {
      const { chat } = req.body;
      const chatsender = req.session.accID;
      const batchID = req.session.batchID;

    const newChat = new DiscForum({
      chatsender,
      batchID,
      chat,
      chattime: new Date(), 
    });
    await newChat.save();

    res.status(201).json({ message: 'Chat saved successfully' });
      
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error saving chat' }); 
    }
  }
  
  
  // edit chat discussion
  
  async function editdisc(req, res) {
    try {
    const { chat } = req.body;
    const chatId = req.params.chatId;
    const chatsender = req.session.accID;
    const batchID = req.session.batchID;

    const existingChat = await DiscForum.findOne({ _id: chatId, chatsender, batchID });

    if (!existingChat) {
      return res.status(404).json({ message: 'Chat not found' });
    }

    existingChat.chat = chat;
    existingChat.chattime = new Date(); 
    await existingChat.save();

    res.status(200).json({ message: 'Chat edited successfully' });
      
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'error editing chat!' }); 
    }
  }
  
  //delete chat discussion
  
  async function deletedisc(req, res) {
    try {
    const chatId = req.params.chatId;
    const chatsender = req.session.accID;
    const batchID = req.session.batchID;

    const existingChat = await DiscForum.findOne({ _id: chatId, chatsender, batchID });

    if (!existingChat) {
      return res.status(404).json({ message: 'Chat not found ' });
    }

    await existingChat.remove();

    res.status(200).json({ message: 'Chat deleted successfully' });
      
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'error deleting chat!' }); 
    }
  }

  module.exports = {
    deletedisc,
    editdisc,
    getchatdisc,
    setnotices,
    getnotices,
    dashboardcon,
    addchats
  }