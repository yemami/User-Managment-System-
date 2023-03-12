const User = require('../model/user');//import user route

module.exports.getAllUser = async (req,res)=>{
    try{
        const result = await User.find({});
        const data = {
            message:'user successfully retrived'
        }
        if(!result){
            return res.status(404).json({message:'user not found '})
        }
        res.json(result).send(data);

    }catch(error){
        console.error(error);// This logs the error to the console, so you can see what went wrong. This can be helpful for debugging purposes.
        res.status(500).send('internal server error');
    } 
    
};

module.exports.getUserById = async (req,res)=>{
    try{
        const user_id = req.params.user_id
    const result = await User.findOne({_id:user_id})
    const data = {
        message:"user successfully retrive with a given id "
    }
    if(!result){
        return res.status(404).json({message:'user is not found with id = ',user_id})
    }
    res.json(result).send(data)

    }catch(error){
        console.error(error)
        res.status(500).send('internal server error')
    }
    
};

module.exports.addUser = async(req,res,next)=>{
    try{
        const newUser = req.body;
        const result = await User.create(newUser);
        // const data = {
        //     message:'user added successfully'
        // }
        res.json(result);

    }catch(error){
        next(error)
        // console.error(error)
        // res.status(500).send('internal server error')
    }
};

module.exports.updateUser = async (req, res) => {
    try {
      const user_id = req.params.user_id;
      const updatedUser = req.body;
      const result = await User.updateOne({ _id: user_id }, { ...updatedUser });
      const data = {
        message: "user is successfully updated",
      };
      if(!result){
        return res.status(404).json({meesage:"user is not found id = ",user_id})
      }
      res.json(result).send(data);
  
    } catch (error) {
      console.error(error);
      res.status(500).send("internal server error");
    }
  };

  module.exports.deleteUserById = async (req,res) =>{
    try {
        const user_id = req.params.user_id
        const result = await User.deleteOne({_id:user_id})
        const data = {
            message: 'user successfully deleted'
        }
        if(!result){
            return res.status(404).json({message:'user not found with id = '},user_id)
        }
        res.json(result).send(data)
    } catch (error) {
        console.error(error)
        res.status(500).send('internal server error')
        
    }
  }
    


