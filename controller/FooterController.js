const { link } = require("../Router/HomeRouter");
const db=require("../config")




// const add = async (req, res) => {
//     const { phone, email, address, link1, link2, link3, extraContact } = req.body;
//     let social1 = '';
//     let social2 = '';
//     let social3 = '';
  
//     // Check if files are uploaded and assign the filename
//     if (req.files["social1"]) {
//       social1 = req.files["social1"][0].filename;
//     }
//     if (req.files["social2"]) {
//       social2 = req.files["social2"][0].filename;
//     }
//     if (req.files["social3"]) {
//       social3 = req.files["social3"][0].filename;
//     }
  
//     // Insert the user's data and image into the database.
//     const sqlInsert = "INSERT INTO footer (phone, email, address, link1, link2, link3, extraContact, social1, social2, social3) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
//     db.query(sqlInsert, [phone, email, address, link1, link2, link3, extraContact, social1, social2, social3], (err, result) => {
//       if (err) {
//         console.error('Error inserting data: ' + err.message);
//         return res.json({ message: "Error" });
//       }
//       return res.json({ status: "success" });
//     });
//   };
  
// const add = async (req, res) => {
//     const { phone, email, address, link1, link2, link3 } = req.body;
//     let social1 = '';
//     let social2 = '';
//     let social3 = '';
  
//     // Check if files are uploaded and assign the filename
//     if (req.files["social1"]) {
//       social1 = req.files["social1"][0].filename;
//     }
//     if (req.files["social2"]) {
//       social2 = req.files["social2"][0].filename;
//     }
//     if (req.files["social3"]) {
//       social3 = req.files["social3"][0].filename;
//     }
  
//     // Insert the user's data and image into the database.
//     const sqlInsertFooter = "INSERT INTO footer (phone, email, address, link1, link2, link3, social1, social2, social3) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
//     db.query(sqlInsertFooter, [phone, email, address, link1, link2, link3, social1, social2, social3], (err, result) => {
//       if (err) {
//         console.error('Error inserting data into footer: ' + err.message);
//         return res.json({ message: "Error" });
//       }
  
//       // Get the ID of the newly inserted footer
//       const footerId = result.insertId;
//   const {contact}=req.body;
//       // Insert into extracontact table using the footerId
//       const sqlInsertExtraContact = "INSERT INTO extracontact (footer_id, contact) VALUES (?, ?)"; // Add other necessary columns
//       db.query(sqlInsertExtraContact, [footerId, contact], (err, result) => {
//         if (err) {
//           console.error('Error inserting data into extracontact: ' + err.message);
//           return res.json({ message: "Error" });
//         }
//         return res.json({ status: "success" });
//       });
//     });
//   };
  
const add = async (req, res) => {
    const { phone, email, address} = req.body;
    // let social1 = '';
    // let social2 = '';
    // let social3 = '';
  
    // // Check if files are uploaded and assign the filename
    // if (req.files["social1"]) {
    //   social1 = req.files["social1"][0].filename;
    // }
    // if (req.files["social2"]) {
    //   social2 = req.files["social2"][0].filename;
    // }
    // if (req.files["social3"]) {
    //   social3 = req.files["social3"][0].filename;
    // }
  
    // Ensure contacts is an array
    // const{contact}=req.body
    // const contactArray = Array.isArray(contact) ? contact : [contact];
  
    // Insert the user's data and image into the database.
    const sqlInsertFooter = "INSERT INTO footer (phone, email, address) VALUES (?, ?, ?)";
    db.query(sqlInsertFooter, [phone, email, address], (err, result) => {
      if (err) {
        console.error('Error inserting data into footer: ' + err.message);
        return res.json({ message: "Error" });
      }
      return res.json({status:"success"})
  
      // Get the ID of the newly inserted footer
    //   const footerId = result.insertId;
  
      // Insert into extracontact table using the footerId for each contact in the array
    //   const sqlInsertExtraContact = "INSERT INTO extracontact (footer_id, contact) VALUES ?";
    //   const contactValues = contactArray.map(contact => {
    //     const contactName = contact; // Replace 'name' with the correct property name
    //     return [footerId,contact];
    //   });
        
    //   db.query(sqlInsertExtraContact, [contactValues], (err, result) => {
    //     if (err) {
    //       console.error('Error inserting data into extracontact: ' + err.message);
    //       return res.json({ message: "Error" });
    //     }
    //     return res.json({ status: "success" });
    //   });
//     const sqlInsertExtraContact = "INSERT INTO extracontact (footer_id, contact) VALUES ?";
// const contactValues = contactArray.map(contact => [footerId, contact]);

// db.query(sqlInsertExtraContact, [contactValues], (err, result) => {
//   if (err) {
//     console.error('Error inserting data into extracontact: ' + err.message);
//     return res.json({ message: "Error" });
//   }
//   return res.json({ status: "success" });
// });

    });
  };
  
  
const get = async (req, res) => {
    const sqlSelect = 'SELECT * FROM footer';
    db.query(sqlSelect, (err, result) => {
        if (err) {
            console.log(err);
            res.json({ error: "Error fetching data" });
        } else {
            console.log(result);
            res.json(result);
        }
    });
};




const deleteFooter=async(req,res)=>{
    const id=req.params.id
    const sqlDelete="DELETE FROM footer WHERE id = ? ";
    db.query(sqlDelete,[id],(err,result)=>{
        if(err){
            console.log(err)
            res.json("Error Deleted")
        }
        else{
            console.log(result)
            res.json("Deleted Succsesfully")
        }
    })
}
// const update = async (req, res) => {
//     const id = req.params.id;
//     const phone = req.body.phone;
//     const email = req.body.email;
//     const address = req.body.address;
//     const extraContact = req.body.extraContact;
//     const social1 = req.files["social1"][0].filename;
//     const social2 = req.files["social2"][0].filename;
//     const social3 = req.files["social3"][0].filename;

//     // Check if the row with the specified 'id' exists
//     const checkSql = 'SELECT * FROM footer WHERE id = ?';
//     db.query(checkSql, [id], (checkErr, checkResult) => {
//         if (checkErr) {
//             console.log(checkErr);
//             res.json({ error: 'Error checking data' });
//         } else {
//             if (checkResult.length === 0) {
//                 // No matching row found, return an error
//                 res.json({ error: 'No data found for the specified ID' });
//             } else {
//                 // Row exists, proceed with the update
//                 const sqlUpdate = 'UPDATE footer SET  phone = ?, email = ?, address = ? ,  extraContact = ? , social1 = ? , social2 = ?, social3 = ? WHERE id = ?';
//                 db.query(sqlUpdate, [phone, email, address, extraContact, social1,social2,social3, id], (updateErr, updateResult) => {
//                     if (updateErr) {
//                         console.log(updateErr);
//                         res.json({ error: 'Error updating data' });
//                     } else {
//                         console.log(updateResult);
//                         res.json({ id,phone, email, address, extraContact, social1,social2,social3});
//                     }
//                 });
//             }
//         }
//     });
// };




// const update = async (req, res) => {
//     const id = req.params.id;
//     const phone = req.body.phone;
//     const email = req.body.email;
//     const address = req.body.address;
//     const extraContact = req.body.extraContact;
//     const link1 = req.body.link1;
//     const link2 = req.body.link2;
//     const link3 = req.body.link3;
// //     const validate = (phone) => {
// //         var re = /^\+{0,2}([\-\. ])?(\(?\d{0,3}\))?([\-\. ])?\(?\d{0,3}\)?([\-\. ])?\d{3}([\-\. ])?\d{4}/;
// //         return re.test(phone);
// //     };
// //     if(validate){
// //     res.json({message:"response"});
// // }
// // else{
// //     res.json({message:"faild"});

// // }
//     let social1 = ''; // Initialize social1 variable
//     let social2 = ''; // Initialize social2 variable
//     let social3 = ''; // Initialize social2 variable

//     // Check if the 'social1' file exists in the request
//     if (req.files && req.files['social1'] && req.files['social1'][0]) {
//         social1 = req.files['social1'][0].filename; // If social1 exists, update the variable
//     }

//     // Check if the 'social2' file exists in the request
//     if (req.files && req.files['social2'] && req.files['social2'][0]) {
//         social2 = req.files['social2'][0].filename; // If social2 exists, update the variable
//     }
//  // Check if the 'social2' file exists in the request
//  if (req.files && req.files['social3'] && req.files['social3'][0]) {
//     social3 = req.files['social3'][0].filename; // If social2 exists, update the variable
// }

//     // Fetch the current values of social1 and social2
//     const checkSql = 'SELECT social1,social2,social3 FROM footer WHERE id = ?';
//     db.query(checkSql, [id], (checkErr, checkResult) => {
//         if (checkErr) {
//             console.log(checkErr);
//             res.json({ error: 'Error checking data' });
//         } else {
//             if (checkResult.length === 0) {
//                 res.json({ error: 'No data found for the specified ID' });
//             } else {
//                 const currentsocial1 = checkResult[0].social1;
//                 const currentsocial2 = checkResult[0].social2;
//                 const currentsocial3 = checkResult[0].social3;

//                 // Determine which images to update based on whether they are provided in the request
//                 let updatedsocial1 = currentsocial1;
//                 let updatedsocial2 = currentsocial2;
//                 let updatedsocial3 = currentsocial3;

//                 if (social1) {
//                     updatedsocial1 = social1;
//                 }

//                 if (social2) {
//                     updatedsocial2 = social2;
//                 }
//                 if (social3) {
//                     updatedsocial3 = social3;
//                 }
//                 // Update only the text fields and respective images
//                 const sqlUpdateText = 'UPDATE footer SET phone = ?, email = ?, address = ?, social1 = ?, link1 = ? , social2 = ? , link2 = ? ,social3 = ? , link3 = ? , extraContact = ? WHERE id = ?';
//                 db.query(sqlUpdateText, [phone, email, address, updatedsocial1,link1, updatedsocial2,link2,updatedsocial3,link3,extraContact, id], (updateErr, updateResult) => {
//                     if (updateErr) {
//                         console.log(updateErr);
//                         res.json({ error: 'Error updating data' });
//                     } else {
//                         console.log(updateResult);
//                         res.json({ id, phone, email, address, social1: updatedsocial1, social2: updatedsocial2,social3: updatedsocial3,extraContact });
//                     }
//                 });
//             }
//         }
//     });
// };
const update = async (req, res) => {
    const id = req.params.id;
    const { phone, email, address } = req.body;
    // let social1 = null; // Initialize social1 variable
    // let social2 = null; // Initialize social2 variable
    // let social3 = null; // Initialize social3 variable
  
    // // Check if files are uploaded and assign the filename if available
    // if (req.files["social1"] && req.files["social1"][0]) {
    //     social1 = req.files["social1"][0].filename;
    // }
    // if (req.files["social2"] && req.files["social2"][0]) {
    //     social2 = req.files["social2"][0].filename;
    // }
    // if (req.files["social3"] && req.files["social3"][0]) {
    //     social3 = req.files["social3"][0].filename;
    // }
  
    // // Ensure contacts is an array
    // const { contact } = req.body;
    // const contactArray = Array.isArray(contact) ? contact : [contact];
  
    // Update the footer data
    const sqlUpdateFooter = `
      UPDATE footer 
      SET phone = ?, email = ?, address = ?
      WHERE id = ?`;

    db.query(sqlUpdateFooter, [phone, email, address, id], (err, result) => {
        if (err) {
            console.error('Error updating data in footer: ' + err.message);
            return res.json({ message: "Error1" });
        }

        // Use the existing footer ID for extracontact insertion
       
            return res.json({ status: "success" });
    });
};






module.exports={add,get,update,deleteFooter}