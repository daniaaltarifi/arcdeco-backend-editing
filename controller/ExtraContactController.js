const db=require("../config")

const add = async (req, res) => {
    console.log(req.body); // Log the request body to see what data is received

    const { contact} = req.body;
   
  
    // Insert the user's data and image into the database.
    const sqlInsert = "INSERT INTO extracontact (contact) VALUES (?)";
    db.query(sqlInsert, [contact], (err, result) => {
      if (err) {
        console.error('Error inserting data: ' + err.message);
        return res.json({ message: "Error" });
      }
      return res.json({ status: "success" });
    });
  };
  
  
  

const get = async (req, res) => {
    const sqlSelect = 'SELECT * FROM extracontact';
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




const deleteContact=async(req,res)=>{
    const id=req.params.id
    const sqlDelete="DELETE FROM extracontact WHERE id = ? ";
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
//     const contact = req.body.contact;
//     const footer_id = req.body.footer_id;
    

//     // Check if the row with the specified 'id' exists
//     const checkSql = 'SELECT * FROM extracontact WHERE id = ?';
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
//                 const sqlUpdate = 'UPDATE extracontact SET contact = ?,footer_id = ?  WHERE id = ?';
//                 db.query(sqlUpdate, [contact, footer_id, id], (updateErr, updateResult) => {
//                     if (updateErr) {
//                         console.log(updateErr);
//                         res.json({ error: 'Error updating data' });
//                     } else {
//                         console.log(updateResult);
//                         res.json({ id,contact,footer_id});
//                     }
//                 });
//             }
//         }
//     });
// };

// const update = async (req, res) => {
//     const id = req.params.id;
//     const contact = req.body.contact;

//     // Retrieve the footer_id associated with the provided id from extracontact
//     const getFooterIdSql = 'SELECT * FROM extracontact WHERE id = ?';
//     db.query(getFooterIdSql, [id], (getFooterIdErr, getFooterIdResult) => {
//         if (getFooterIdErr) {
//             console.log(getFooterIdErr);
//             res.json({ error: 'Error retrieving footer_id' });
//         } else {
//             if (getFooterIdResult.length === 0) {
//                 res.json({ error: 'No data found for the specified ID' });
//             } else {
//                 const footer_id = getFooterIdResult[0].footer_id;
                
//                 // Proceed with the update using the retrieved footer_id
//                 const sqlUpdate = 'UPDATE extracontact SET contact = ? WHERE id = ?';
//                 db.query(sqlUpdate, [contact, id], (updateErr, updateResult) => {
//                     if (updateErr) {
//                         console.log(updateErr);
//                         res.json({ error: 'Error updating data' });
//                     } else {
//                         console.log(updateResult);
//                         res.json({ id, contact, footer_id });
//                     }
//                 });
//             }
//         }
//     });
// };
const update = async (req, res) => {
    const id = req.params.id;
    const contact = req.body.contact;
    

    // Check if the row with the specified 'id' exists
    const checkSql = 'SELECT * FROM extracontact WHERE id = ?';
    db.query(checkSql, [id], (checkErr, checkResult) => {
        if (checkErr) {
            console.log(checkErr);
            res.json({ error: 'Error checking data' });
        } else {
            if (checkResult.length === 0) {
                // No matching row found, return an error
                res.json({ error: 'No data found for the specified ID' });
            } else {
                // Row exists, proceed with the update
                const sqlUpdate = 'UPDATE extracontact SET contact = ? WHERE id = ?';
                db.query(sqlUpdate, [contact, id], (updateErr, updateResult) => {
                    if (updateErr) {
                        console.log(updateErr);
                        res.json({ error: 'Error updating data' });
                    } else {
                        console.log(updateResult);
                        res.json({ id,contact});
                    }
                });
            }
        }
    });
};
module.exports={add,get,update,deleteContact}