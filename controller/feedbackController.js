const feedbacks = require('../model/feedbackModel')

// add feedback
exports.addFeedback = async (req,res)=>{
    console.log("Inside addFeedback");
    const {name,email,message} = req.body
    try{
        const newFeedback = await feedbacks.create({
            name,email,message
        })
        res.status(200).json(newFeedback)
    }catch(err){
        console.log(err);
        res.status(500).json(err)       
    }
}