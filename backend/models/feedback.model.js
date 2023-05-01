const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

const feedbackSchema = new Schema({

    course : {type : String,required : true},
    student : {type : String,required : true},
    rating : {type : String,required : true},
    feedback: {type :String, required : true},
    response: {type :String},
    
     
},{
        timestamps : true,
    
});


const Feedback = mongoose.model("Feedback", feedbackSchema);

module.exports = Feedback;