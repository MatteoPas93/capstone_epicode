const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');
const validateUser = require('../middlewares/validateUser');

router.get('/getUsers', userController.getUsers);

router.get('/getUser/:id', userController.getUser);

router.post('/addUser', validateUser, userController.postUser);

router.patch('/editUser/:id', userController.patchUser);

router.delete('/deleteUser/:id', userController.deleteUser);

module.exports = router;