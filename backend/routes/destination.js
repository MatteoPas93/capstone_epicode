const express = require('express');
const router = express.Router();
const destinationController = require('../controller/destinationController');

router.get('/getDestinations', destinationController.getDestinations);

router.get('/getDestination/:id', destinationController.getDestination);

router.post('/addDestination', destinationController.addDestination);

router.patch('/editDestination/:id', destinationController.patchDestination);

router.delete('/deleteDestination/:id', destinationController.deleteDestination);

module.exports = router;