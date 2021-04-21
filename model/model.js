import mongoose from 'mongoose';

let task = mongoose.model('PostMessage',{
    taskname:{type:String} ,
    description:{type:String},
    start:{type:String},
    end:{type:String}
});

export {task};