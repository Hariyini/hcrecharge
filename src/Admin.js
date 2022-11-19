
import { useNavigate } from "react-router-dom"
import { useState,useEffect } from "react";
import './Admin.css';
  

export default function Admin(){
const navigate=useNavigate();
const [preList,setPreList]=useState(
    [
        {  
            mobile:"",
            operator:"",
            amount:"",
            data:"",
            validity:"",
            description:"",
            description:""
        }
    ]
);
const [postList,setPostList]=useState(
    [
        {  
            mobile:"",
            operator:"",
            amount:"",
            description:""
        }
    ]
);
useEffect(()=>{
    fetch('/prepaiddone').then((res)=>{
        if(res.ok){
            return res.json();
        }
    })
    .then(jsonRes => setPreList(jsonRes))
    .catch(err => console.log(err));

   },[preList]);
   useEffect(()=>{
    fetch('/postpaiddone').then((res)=>{
        if(res.ok){
            return res.json();
        }
    })
    .then(jsonRes => setPostList(jsonRes))
    .catch(err => console.log(err));

   },[postList]);
   


    return(
        <div className="admin" >
        
        <button className="testButton" type="button" onClick={()=>navigate('/signin')}>
         Logout
        </button>
        <br/>
        <br/>
            <div className="row">
                <div className="col-md-6" id="columnview">
                <h2 className="admin-h2">Prepaid Recharges </h2>
                    <div className="paidDisplay">
                    {preList.map((item)=>
                    <div className="planCard1" >
                    <div className="planLeft1">Rs {item.amount}</div>
                        <div className="planRight1"><span className="planSpan1"><b>validity:</b> {item.validity} </span><span className="planSpan1"><b>data:</b> {item.data}</span> 
                            <br/>
                        <span className="desSpan1">{item.description}</span>
                            <div className="mobilenumber">{item.mobile}</div>
                            <div className="paymentM">{item.payment}</div>
                                                                
                        </div>
                    </div>
                        ) }
                    </div>

                </div>
                <div className="col-md-6" id="columnview">
                <h2  className="admin-h2">Postpaid Recharges </h2>
                    <div className="paidDisplay">
                    {postList.map((item)=>
                    <div className="planCard1" >
                    <div className="planLeft1">Rs {item.amount}</div>
                        
                            <br/>
                        <span className="desSpan1">{item.description}</span>
                            <div className="mobilenumber">{item.mobile}</div>
                            <div className="paymentM">{item.payment}</div>
                                                                
                        </div>
                    
                        ) }
                    </div>
                    
                </div>
            </div>
        
        
        </div>
    )

 }