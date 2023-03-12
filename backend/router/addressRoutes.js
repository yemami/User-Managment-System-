const express = require('express');
const router = express.Router();

// import address controllers
const{
    getAllAddress,
    getAddressById,
    addAddress,
    updateAddress,
    deleteAddress
}=require('../controller/addressController')

// address routes
router.get('/:user_id/address', getAllAddress);
router.get('/:user_id/address/:address_id', getAddressById);
router.post('/:user_id/address', addAddress);
router.put('/:user_id/address/:address_id', updateAddress);
router.delete('/:user_id/address/:address_id', deleteAddress);

module.exports = router;