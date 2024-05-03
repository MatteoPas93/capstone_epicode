const express = require('express');
const router = express.Router();
const DestinationController = require('../controller/destinationController');

router.get('/getAllDestinations', DestinationController.getAllDestinations);

router.get('/getDestinations', DestinationController.getDestinations);

router.get('/getDestination/:id', DestinationController.getDestination);

router.post('/addDestination', DestinationController.addDestination);

router.patch('/editDestination/:id', DestinationController.patchDestination);

router.delete('/deleteDestination/:id', DestinationController.deleteDestination);

module.exports = router;