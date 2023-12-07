
const db=require("../config")


const add = async (req, res) => {
const {link}=req.body
const socialmedia=req.files['socialmedia'][0].filename

  // Insert the user's data and image into the database.
  const sqlInsert = "INSERT INTO socialfooter (link,socialmedia) VALUES (?, ?)";
  db.query(sqlInsert, [link ,socialmedia], (err, result) => {
    if (err) {
      console.error('Error inserting data: ' + err.message);
      return res.json({ message: "Error" });
    }
    return res.json({ status: "success" });
  });
};


const get = async (req, res) => {
    const sqlSelect = 'SELECT * FROM socialfooter';
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




const deleteSocialFooter=async(req,res)=>{
    const id=req.params.id
    const sqlDelete="DELETE FROM socialfooter WHERE id = ? ";
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
    
//     const link = req.body.link;
//     const socialmedia = req.files["socialmedia"][0].filename;

//     // Check if the row with the specified 'id' exists
//     const checkSql = 'SELECT * FROM socialfooter WHERE id = ?';
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
//                 const sqlUpdate = 'UPDATE socialfooter SET link = ?, socialmedia = ?  WHERE id = ?';
//                 db.query(sqlUpdate, [link, socialmedia, id], (updateErr, updateResult) => {
//                     if (updateErr) {
//                         console.log(updateErr);
//                         res.json({ error: 'Error updating data' });
//                     } else {
//                         console.log(updateResult);
//                         res.json({ id,link,socialmedia});
//                     }
//                 });
//             }
//         }
//     });
// };
const update = async (req, res) => {
    const id = req.params.id;
    const link = req.body.link;
 

    let socialmedia = ''; // Initialize socialmedia variable

    // Check if the 'socialmedia' file exists in the request
    if (req.files && req.files['socialmedia'] && req.files['socialmedia'][0]) {
        socialmedia = req.files['socialmedia'][0].filename; // If socialmedia exists, update the variable
    }

    // Check if 'socialmedia' value is empty
    if (!socialmedia) {
        // If 'socialmedia' value is not updated, only update the text fields
        const checkSql = 'SELECT socialmedia FROM socialfooter WHERE id = ?';
        db.query(checkSql, [id], (checkErr, checkResult) => {
            if (checkErr) {
                console.log(checkErr);
                res.json({ error: 'Error checking data' });
            } else {
                if (checkResult.length === 0) {
                    res.json({ error: 'No data found for the specified ID' });
                } else {
                    const currentsocialmedia = checkResult[0].socialmedia;

                    // Update only the text fields without changing the socialmedia
                    const sqlUpdateText = 'UPDATE socialfooter SET link = ? WHERE id = ?';
                    db.query(sqlUpdateText, [link,id], (updateErr, updateResult) => {
                        if (updateErr) {
                            console.log(updateErr);
                            res.json({ error: 'Error updating text data' });
                        } else {
                            console.log(updateResult);
                            res.json({ id, link,socialmedia: currentsocialmedia });
                        }
                    });
                }
            }
        });
    } else {
        // If 'socialmedia' is updated or a new socialmedia is provided, proceed with the update
        const sqlUpdateAll = 'UPDATE socialfooter SET link = ?,socialmedia = ? WHERE id = ?';
        db.query(sqlUpdateAll, [link, socialmedia, id], (updateErr, updateResult) => {
            if (updateErr) {
                console.log(updateErr);
                res.json({ error: 'Error updating data' });
            } else {
                console.log(updateResult);
                res.json({ id, link,socialmedia });
            }
        });
    }
};

module.exports={add,get,update,deleteSocialFooter}