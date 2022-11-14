import { useEffect, useState} from "react";
import { useNavigate
 } from "react-router-dom";

import './Signin.css';



export default function Signin(){
    const [user,setUser]=useState();
    const [pass,setPass]=useState();
    const navigate=useNavigate();
    
    const handleSubmit=()=>{
       
        navigate('/admin');
    }
    

    
    
    
       
      
    
    
    return(
        <div className="loginPage">
           
        <h1 style={{textAlign:"center",color:"teal"}}>Admin Login</h1>
        <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4">
                        <form  className="login-form" onSubmit={(e)=>{e.preventDefault();handleSubmit()}} >
                            <label className="login-label">USERNAME</label><br/>
                            <input className="login-input" pattern="admin" type="text" value={user} onChange={(e)=>setUser(e.target.value)} onInput={(e)=>setUser(e.target.value)} required></input>
                          <br/>
                            <label className="login-label">PASSWORD   </label><br/>
                            <input className="login-input" type="password" pattern="admin" value={pass} onChange={(e)=>setPass(e.target.value)} onInput={(e)=>setPass(e.target.value)} required></input>
                            
                            <br/>
                            <button type="submit" className="recharge-now">Login</button>

                        </form>
                        


            </div>
            <div className="col-md-4"></div>
        </div>
        </div>
    )

 }