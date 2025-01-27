// const express = require("express");
// const router = express.Router();
// const authMiddleware = require("../middlewares/authMiddleware");
// const User = require("../models/User")

// router.post("/apply-doctor-account", authMiddleware , async (req , res) => {
//     try {
       
//     //  const adminUser = await User.findOne({ isAdmin : true});

//         const unseenNotifications = adminUser.unseenNotifications
//         unseenNotifications.push({
//             type : "new-doctor-request",
//             message : `${User.firstName} ${User.lastName} has applied for a doctor account`,
//             data: {
//                 doctorId : User._id,
//             name : User.firstName + " " + User.lastName 
//              },
//              onClickPath : "/admin/doctors"

//         })
//         await User.findByIdAndUpdate(adminUser._id, {unseenNotifications });
//     }
//     catch (error) {
//         console.log(error);
//         res
//         .status(500)
//         .send({message : "error applying doctor account", success :false, error});
//     }
// });

// module.exports =router;