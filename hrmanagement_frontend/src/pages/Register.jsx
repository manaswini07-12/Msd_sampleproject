
import { useState } from "react"
import { UNSAFE_createClientRoutesWithHMRRevalidationOptOut } from "react-router-dom"

function Register ()
{
    let [name,setName]=useState("")
    let [emailid,setEmailid]=useState("")
    let [password,setPassword]=useState("")
    let [role,setRole]=useState("")
    let handleRegister=async (event)=>{
        event.preventDefault()
        let res=await fetch("http://localhost:3000/api/emp/register",{
            method:POST,
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({name,emailid,password,role})
        }) 
        let data=await res.json()
        if (res){
            console.log("data inserted success");
            console.log(data)
        }else{
            console.log("data inserted failed")
            console.log(data)
        }


    }
    return(
        <div>
            <h1>Register</h1>
            <from onSubmit={handleRegister}>
                
                <input type="text"
                onChange={(event)=>setName(event.target.value)}value={name} placeholder="Enter name"></input><br/>
                <input type="emailid"
                onChange={(event)=>setEmailid
                (Event.target.value)}value={emailid} placeholder="Enter Emailid"></input><br/>
                <input type="password"onChange={(event)=>setPassword(Event.target.value)}value={password} placeholder="Enter your password"></input><br/>
                <select
                onChange={(event)=>setRole(event.target.value)}value={role}>
                    <option value="">Choose your role</option>
                    <option value="HR">HR</option>
                    <option value="EMPLOYEE">EMPLOYEE</option>
                </select><br/>
                <button type="submit">Register</button>
            </from>
        </div>
    )
}
export default Register