const express = require('express')
const router = express.Router();
const FooterSocialController = require('../controller/FooterSocialController.js')
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
router.post('/post', upload.fields([ { name: 'socialmedia', maxCount: 1 }]), FooterSocialController.add);
router.get('/', FooterSocialController.get)
router.delete('/delete/:id', FooterSocialController.deleteSocialFooter)
router.put('/update/:id', upload.fields([ { name: 'socialmedia', maxCount: 1 }]),FooterSocialController.update)
module.exports = router
