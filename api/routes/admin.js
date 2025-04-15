// const express = require("express");
// const crypto = require("crypto");
// const { connection } = require("../utils/database");
// const { validateToken, requireRoles } = require("../utils/middleware");

// const router = express.Router();

// // Change Admin Password (Only Admins)
// router.post("/changePassword", validateToken, async (req, res) => {
//     try {
//         const { oldPassword, newPassword,adminEmail } = req.body;
//         console.log(adminEmail);
//         // Hash the old password
//         const oldPasswordHash = crypto.createHash("sha256").update(oldPassword).digest("hex");

//         // Check if the old password matches the one in the database
//         connection.query(`SELECT * FROM Users WHERE Email='${adminEmail}'`, (err, result) => {
//             if (err) {
//                 console.error(err);
//                 return res.status(500).json({ message: "Database error" });
//             }

//             if (result.length === 0) {
//                 return res.status(404).json({ message: "Admin not found" });
//             }

//             const admin = result[0];

//             if (admin.Password !== oldPasswordHash) {
//                 return res.status(400).json({ message: "Incorrect old password" });
//             }

//             // Hash the new password
//             const newPasswordHash = crypto.createHash("sha256").update(newPassword).digest("hex");

//             // Update the password in the database
//             connection.query(
//                 `UPDATE Users SET Password='${newPasswordHash}' WHERE Email='${adminEmail}'`,
//                 (updateErr) => {
//                     if (updateErr) {
//                         console.error(updateErr);
//                         return res.status(500).json({ message: "Failed to update password" });
//                     }

//                     res.status(200).json({ message: "Password changed successfully" });
//                 }
//             );
//         });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: "Internal server error" });
//     }
// });

// module.exports = router;
