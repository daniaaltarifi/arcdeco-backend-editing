const express = require('express')
const router = express.Router();
const ExtraContactController = require('../controller/ExtraContactController.js')

router.post('/post',ExtraContactController.add);
router.get('/', ExtraContactController.get)
router.delete('/delete/:id',ExtraContactController.deleteContact)
router.put('/update/:id',ExtraContactController.update)
module.exports = router
