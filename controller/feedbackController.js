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

// get approved feedback
exports.getApprovedFeedback = async (req,res)=>{
    console.log("Inside getApprovedFeedback controller");
    try{
        const approveFeedback = await feedbacks.find({status:{$eq:"approve"}})
        res.status(200).json(approveFeedback)
    }catch(err){
        console.log(err);
        res.status(500).json(err)       
    }
}