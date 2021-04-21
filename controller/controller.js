import express from 'express'; 
import { task  } from '../model/model.js';
import mongoose from 'mongoose';
let router = express.Router();


router.get('/get',(req,res)=>{
    task.find((err,docs)=>{
        if(!err)res.send(docs)
        else console.log('Error While retrieving all records:'+JSON.stringify(err,undefined,2))
    })
})
router.post('/save',(req,res)=>{
    var newRecord = ({
        taskname:req.body.taskname,
        description:req.body.description,
        start:req.body.start,
        end:req.body.end, 
    });
    var newRecord_save =  new task(newRecord);
    newRecord_save.save((err,docs)=>{
        if(!err)res.json({status:1})
        else console.log('Error While creating new record:'+JSON.stringify(err,undefined,2))
    })
})
router.put('/:id',(req,res)=>{
    if(!mongoose.Types.ObjectId.isValid(req.params.id))
    return res.status(400).send('No record with given id:' + req.params.id);
    var updatedRecord = ({
        taskname:req.body.taskname,
        description:req.body.description,
        start:req.body.start,
        end:req.body.end, 
    });
    task.findByIdAndUpdate(req.params.id,{$set:updatedRecord},{new:true},(err,docs)=>{
        if(!err) res.send(docs)
        else console.log('Error While updating a record:'+JSON.stringify(err,undefined,2))
    })
})
router.delete('/:id',(req,res)=>{
    if(!mongoose.Types.ObjectId.isValid(req.params.id))
    return res.status(400).send('No record with given id:' + req.params.id);
    task.findByIdAndDelete(req.params.id,(err,docs)=>{
        if(!err) res.send(docs);
        else console.log('Error While deleting a record:'+JSON.stringify(err,undefined,2))
    })
})
router.get('/getone/:id',(req,res)=>{
    if(!mongoose.Types.ObjectId.isValid(req.params.id))
    return res.status(400).send('No record with given id:' + req.params.id);
    task.findById(req.params.id,(err,docs)=>{
        if(!err) res.send(docs);
        else console.log('Error While deleting a record:'+JSON.stringify(err,undefined,2))
    })
})

export default router;