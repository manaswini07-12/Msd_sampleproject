let express=require('express');
let router=express.Router()
let {users}= require('../models/users');
let {task}=require('../models/tasks');
//Router() used to connect api with comman route
router.get("/viewemp",async (req,res)=>{
    let result=await users.find();
    res.send(result);
})
router.post("/assign-task",async (req,res)=>{
    let  data=req.body;
    let newtask=new task(data);
    let result=await newtask.save();
    res.send(result);
    
})
router.delete("/deleteemp/:id",async (req,res)=>{
    let result=await users.findByIdAndDelete(req.params.id);
    if(result){
        res.send("record deleted success");
    }
})
router.get("/viewtask",(req,res)=>{
    res.send("viewtask router called");
})
module.exports=router;