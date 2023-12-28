//all the db schemas related to mongo db

const req = require('express/lib/request');
const mongoose = require('mongoose');
const { buffer } = require('stream/consumers');


//account schema

const accountDataSchema = new mongoose.Schema({
    accountType: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true 
    },
    password: {
      type: String,
      required: true
    },
    accID: {
        type: String,
        required: true,
        unique: true 
      },
    batchID: {
        type: String,
        required: true,
      },
    

  });

  const AccountData = mongoose.model('AccountData', accountDataSchema);

  //student-grades schema

  const studentgradeDataSchema = new mongoose.Schema({
    examType: {
      type: String,
      required: true
    },
    moduleID: {
      type: String,
      required: true
    },
    exammark: {
      type: Number
    },
    assignmark: {
      type: Number
    },
    totalnmark: {
        type: Number,
        required: true
      },

    accID: {
        type: String,
        required: true,
        unique: true 
      },
    grade:{
        type: String,
        required: true
    },
    gradefname: {
        type: String,
        required: true
      },
    gradefile: {
        type: Buffer,
        required: true
      },
    
  });
  const StudentGrade = mongoose.model('StudentGrade', studentgradeDataSchema);

  //module schema

  const modlmsDataSchema = new mongoose.Schema({
    modname: {
      type: String,
      required: true
    },
    modID: {
        type: String,
        required: true
      },
    batchID: {
        type: String,
        required: true,
      },
    
  });
  const lmsMod = mongoose.model('lmsMod', modlmsDataSchema);

  //module content schema
  const modcontentDataSchema = new mongoose.Schema({
    contentType: {
        type: String,
        required: true
      },
    fname: {
      type: String,
      required: true
    },
    modID: {
        type: String,
        required: true
      },
    ftitle: {
        type: String,
        required: true
      },
    confile: {
        type: Buffer,
        required: true
      }

  });
  const ModContent = mongoose.model('ModContent', modcontentDataSchema);

  //module enrollment schema

  const enrolledModDataSchema = new mongoose.Schema({
    accID: {
      type: String,
      required: true
    },
    modID: {
        type: String,
        required: true,
      }
    
  });
  const EnrolledMod = mongoose.model('EnrolledMod', enrolledModDataSchema);

  //submission schema

  const modSubDataSchema = new mongoose.Schema({
    accID: {
      type: String,
      required: true
    },
    modID: {
        type: String,
        required: true,
      },
    fname: {
        type: String,
        required: true,
      },
    subtitle: {
        type: String,
        required: true,
      },
    subfile: {
        type: Buffer,
        required: true
      },
    subdate: {
        type: Date,
        required: true,
        default: Date.now

      }
    
  });
  const ModSub = mongoose.model('ModSub', modSubDataSchema);

  //Discusiion Schema
  const DiscForumDataSchema = new mongoose.Schema({
    chatsender: {
      type: String,
      required: true
    },
    batchID: {
        type: String,
        required: true,
      },
    chat: {
        type: String,
        required: true,
      },
    chattime: {
        type: Date,
        required: true,
        default: Date.now
      }
    
  });
  const DiscForum = mongoose.model('DiscForum', DiscForumDataSchema);

  // Notice schema
  const NoticesDataSchema = new mongoose.Schema({
    staffID: {
      type: String,
      required: true
    },
    notetitle: {
        type: String,
        required: true,
      },
    note: {
        type: String,
        required: true,
      },
    notetime: {
        type: Date,
        required: true,
        default: Date.now
      },
    batchID: {
        type: String,
        required: true,
      },
    
  });
  const Notices = mongoose.model('Notices', NoticesDataSchema);

  module.exports = {
    AccountData,
    StudentGrade,
    lmsMod,
    ModContent,
    ModSub,
    EnrolledMod,
    Notices,
    DiscForum


  }


