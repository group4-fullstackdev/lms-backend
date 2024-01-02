const mongoose = require("mongoose");
const session = require('express-session');
const nodemailer = require('nodemailer');
const bcrypt = require('bcrypt');
const AccountData = require('../lmsmodel/lmsmodel');
const lmsMod = require('../lmsmodel/lmsmodel');
const EnrolledMod = require('../lmsmodel/lmsmodel');



// process related to login and accounts



async function acclogin(req, res) {
  try {
    const { email, password, accountType } = req.body;

    if (accountType === 'student') {
   
      const student = await Student.findOne({ email }); 

      if (!student) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }

      bcrypt.compare(password, student.password, async (err, result) => {
        if (result) {
          req.session.mail = student.email;
          req.session.usern = student.username;
          req.session.logid = 'student';

          await req.session.save();

          return res.status(200).json({
            message: 'success',
            user: req.session.usern,
            logid: req.session.logid,
            mail: req.session.mail,
            // Other student data
          });
        } else {
          return res.status(401).json({ message: 'Invalid email or password' });
        }
      });
    } else if (accountType === 'teacher') {
      
      const teacher = await Teacher.findOne({ email }); 

      if (!teacher) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }

      bcrypt.compare(password, teacher.password, async (err, result) => {
        if (result) {
          req.session.mail = teacher.email;
          req.session.usern = teacher.username;
          req.session.logid = 'teacher';

          await req.session.save();

          return res.status(200).json({
            message: 'success',
            user: req.session.usern,
            logid: req.session.logid,
            mail: req.session.mail,
         
          });
        } else {
          return res.status(401).json({ message: 'Invalid email or password' });
        }
      });
    } else {
      return res.status(400).json({ message: 'Invalid user type' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}



// load account data for profile

async function getprofile(req, res) {
  try {
    const { accID } = req.session; 

    const userProfile = await AccountData.findOne({ accID });

    if (!userProfile) {
      return res.status(404).json({ message: 'User profile not found' });
    }

    res.status(200).json({ message: 'Profile retrieved successfully', user: userProfile });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}




  // code for setting/updating profile

async function setprofile(req, res) {
  try {
    const { accID } = req.session; 
    const { name, email } = req.body; 

    
    const updatedAccount = await AccountData.findOneAndUpdate(
      { accID },
      { $set: { name, email } }, 
      { new: true } 
    );

    if (!updatedAccount) {
      return res.status(404).json({ message: 'Account not found' });
    }

    res.status(200).json({ message: 'Profile updated successfully', account: updatedAccount });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}


//

// update profile
//
async function updateProfile(req, res) {
  try {
    const { userName, userEmail } = req.body;
    const userId = req.session.userId; 
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { $set: { userName, userEmail } },
      { new: true } // To get the updated document
    );

    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ message: 'Profile updated successfully', user: updatedUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}



//


// delete contents on profile

async function deleteprofile(req, res) {
  try {
    const { accID } = req.session; 
   
    const deletedAccount = await AccountData.findOneAndDelete({ accID });

    if (!deletedAccount) {
      return res.status(404).json({ message: 'Account not found' });
    }

    res.status(200).json({ message: 'Profile deleted successfully', account: deletedAccount });
  } catch (error) {   
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
module.exports = {
  deleteprofile,
  setprofile,
  getprofile,
  acclogin,
  updateProfile
};



