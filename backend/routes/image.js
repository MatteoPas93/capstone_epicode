const express = require('express');
const router = express.Router();
const imageController = require('../controller/imageController');

router.get('/getImages', imageController.getImages);

router.post('/addImage', imageController.addImages);

module.exports = router;