const express = require('express');
const router = express.Router();

// import user controllers
const {
    getAllUser,
    getUserById,
    addUser,
    updateUser,
    deleteUserById
} = require('../controller/userController');

// user routes
router.get('', getAllUser);
router.get('/:user_id', getUserById);
router.post('', addUser);
router.put('/:user_id', updateUser);
router.delete('/:user_id', deleteUserById);

module.exports = router;