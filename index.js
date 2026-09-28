let express=require('express');
let app=express();
let mongoose=require('mongoose');
let emproutes=require('./routes/emp_route');
mongoose.connect("mongodb://localhost:27017/hrmanagement").then(()=>console.log("db connected successfully")
).catch((err)=>console.log(err))
app.use(express.json());
let hrroutes=require('./routes/hr_route');

//localhost:3000/api/emp/register=>post
//localhost:3000/api/emp/login=>post
//localhost:3000/api/emp/viewtask=>get
//localhost:3000/api/emp/updateprofile=>patch
app.use("/api/hr",hrroutes);
app.use("/api/emp",emproutes);
//run the server
app.listen(3000,()=>{
    console.log("server listening on port 3000");
})