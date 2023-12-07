const db=require("../config")


const add =async(req,res)=>{
  const images = req.files;

  if (!images) {
    return res.status(400).json({ message: 'File upload failed' });
  }


  images.forEach((file) => {
    const filePath = '/' + file.filename;

    // Insert data into the database
    const sql = 'INSERT INTO mainslider (images) VALUES (?)';
    const values = [filePath];

    db.query(sql, values, (err, result) => {
      if (err) {
        console.error('Error inserting into the database: ' + err.message);
        return res.status(500).json({ message: 'Internal Server Error' });
      }
    });
  });

  return res.status(200).json({ message: 'File uploaded successfully' });

}

  
const get = async (req, res) => {
  const sqlSelect = 'SELECT * FROM mainslider';
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

const update = async (req, res) => {
    const images = req.files;
    const { id } = req.params; // Assuming you send the record ID in the URL parameters

    if (!images) {
      // If 'logo' value is not updated, only update the text fields
      const checkSql = 'SELECT images FROM mainslider WHERE id = ?';
      db.query(checkSql, [id], (checkErr, checkResult) => {
          if (checkErr) {
              console.log(checkErr);
              res.json({ error: 'Error checking data' });
          } else {
              if (checkResult.length === 0) {
                  res.json({ error: 'No data found for the specified ID' });
              } else {
                  const currentimages = checkResult[0].images;
                  res.json({ id,images: currentimages });

              
              }
          }
      });
  } 
  else {
      
    // Update existing images for the record
    images.forEach((file) => {
      const filePath = '/' + file.filename;
      const sql = 'INSERT INTO mainslider (id, images) VALUES (?, ?) ON DUPLICATE KEY UPDATE images = VALUES(images)';
      const values = [id, filePath];
  
      db.query(sql, values, (updateErr, updateResult) => {
        if (updateErr) {
          console.error('Error updating the database: ' + updateErr.message);
          return res.status(500).json({ message: 'Internal Server Error' });
        }
      });
    });
  
    return res.status(200).json({ message: images });
  }};
const deleteMainSlider=async(req,res)=>{
  const id=req.params.id
  const sqlDelete="DELETE FROM mainslider WHERE id = ? ";
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
module.exports={add,get,update,deleteMainSlider}