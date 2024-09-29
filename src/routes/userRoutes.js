const express = require('express');
const { getUsers, createUser, updateUser, deleteUser } = require('../controllers/userController');
const router = express.Router();

router.get('/users', getUsers)
    .post('/users', createUser)
    .put('/users/:id', updateUser)
    .delete('/users/:id', deleteUser);

module.exports = router;
