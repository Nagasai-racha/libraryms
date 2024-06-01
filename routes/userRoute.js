const express = require('express');
const { getAll, createUser, updateUser, getUser, deleteUser } = require('../controllers/userController');
const router = express.Router();
 router.get('/',getAll)
 router.post('/',createUser)
 router.put('/update/:id',updateUser)
 router.get('/:id',getUser)
 router.delete('/:id',deleteUser)


 module.exports = router