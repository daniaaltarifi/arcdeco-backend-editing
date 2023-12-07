const express = require('express')
const router = express.Router();
const MainSliderController = require('../controller/MainSliderController.js')
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'images');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '_' + file.originalname);
  },
});

const upload = multer({ storage: storage });
router.post('/post', upload.array('images'),MainSliderController.add);
router.get('/',MainSliderController.get)
router.delete('/delete/:id', MainSliderController.deleteMainSlider)
router.put('/update/:id', upload.array('images'),MainSliderController.update)
module.exports = router
