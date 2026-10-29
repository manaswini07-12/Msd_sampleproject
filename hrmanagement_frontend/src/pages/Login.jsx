import {useState} from 'react';
function Login()
{
    let [email,setEmail]=useState("");
    let [password,setPassword]=useState("");
    let handleLogin=async(event)=>{
      event.preventDefault();
      console.log(email);
      console.log(password);
      if (email=="admin@gmail.com"&& password=="admin"){
        Navigate("/adminhome");
    }else{
        let req=await fetch("http://localhost:3000/api/emp//login",
            {
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify({email,password})
            }
        );
        let res=await req.json()
        console.log(res)

    }
}
    return(
        <div>
         <form onSubmit={handleLogin}>
    <input type="email" value={email} 
      onChange={(event)=>setEmail(event.target.value)}
    placeholder="Enter your emailid"></input><br/>
    
    <input type="password" value={password}
     onChange={(event)=>setPassword(event.target.value)}
     placeholder="Enter your password"></input><br/>
    <button type="submit">Login</button>
         </form>
        </div>
    )
}
export default Login