const express = require('express');
const router = express.Router();
const winterDestinationController = require('../controller/winterDestController');

router.get('/getWinterDestinations', winterDestinationController.getDestinations);

router.get('/getWinterDestination/:id', winterDestinationController.getDestination);

router.post('/addWinterDestination', winterDestinationController.addDestination);

router.patch('/editWinterDestination/:id', winterDestinationController.patchDestination);

router.delete('/deleteWinterDestination/:id', winterDestinationController.deleteDestination);

module.exports = router;