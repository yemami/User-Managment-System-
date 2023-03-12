const User = require('../model/user')

module.exports.getAllAddress = async (req ,res)=>{
    try {
        const user_id = req.params.user_id
        const result = await User.find({_id:user_id})
        const data ={
            message:'address is retrive from database successfully'
        }
        if(!result){
            return res.status(404).json({message:'address is not found with id = ',user_id})
        }
        res.json(result.address).send(data)
        
    } catch (error) {
        console.error(error)
        res.status(500).json('internal server error')        
    }
}
module.exports.getAddressById = async (req ,res)=>{
    try {
        const user_id = req.params.user_id
        const address_id = req.params.address_id
        const result = await User.findOne({_id:user_id ,'address._id':address_id})
        const data ={
            message:'address is retrive from database successfully'
        }
        if(!result){
            return res.status(404).json({message:'address is not found with id = ',address_id})
        }
        res.json(result).send(data)
        
    } catch (error) {
        console.error(error)
        res.status(500).json('internal server error')        
    }
}
module.exports.addAddress = async (req ,res)=>{
    try {
        const user_id = req.params.user_id
        const newAddress = req.body
        const result = await User.updateOne({_id:user_id},{$push:{address:newAddress}})
        const data ={
            message:'address is added successfully'
        }
        if(!result){
            return res.status(404).json({message:'address is not found with id = ',user_id})
        }
        res.json(result).send(data)
        
    } catch (error) {
        console.error(error)
        res.status(500).json('internal server error')        
    }
}
module.exports.deleteAddress = async (req ,res)=>{
    try {
        const user_id = req.params.user_id
        const address_id = req.params.address_id
        const result = await User.updateOne({_id:user_id},{$pull:{address:{_id:address_id}}})
        const data ={
            message:'delete address successfully'
        }
        if(!result){
            return res.status(404).json({message:'address is not found with id = ',address_id})
        }
        res.json(result).send(data)
        
    } catch (error) {
        console.error(error)
        res.status(500).json('internal server error')        
    }
}
module.exports.updateAddress = async (req ,res)=>{
    try {
        const user_id = req.params.user_id
        const address_id = req.params.address_id
        const updatedAdress = req.body
        const result = await User.updateOne({_id:user_id, 'address._id':address_id},{$set:{'address.$':updatedAdress}})
        const data ={
            message:'address updated successfully'
        }
        if(!result){
            return res.status(404).json({message:'address is not found with id = ',user_id})
        }
        res.json(result).send(data)
        
    } catch (error) {
        console.error(error)
        res.status(500).json('internal server error')        
    }
}