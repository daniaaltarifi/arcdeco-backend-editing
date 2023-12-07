const express = require('express')
const router = express.Router();
const homeController = require('../controller/HomeController.js')
const multer = require("multer");
const path = require("path");
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname))
    }
})
const upload = multer({
    storage: storage
})
router.post('/post', homeController.add);
router.get('/', homeController.get)
router.delete('/delete/:id', homeController.deleteHome)
router.put('/update/:id',homeController.update)
module.exports = router
