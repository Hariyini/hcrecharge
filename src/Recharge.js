
import { useEffect, useState } from "react";

import './Recharge.css';
import MyModal2 from "./MyModal2";

import { Link } from "react-router-dom";

 export default function Recharge(){

    const [mobile,setMobile]=useState();
    const [operatorName,setOperatorName]=useState("Bharti-Airtel");
    const [plan,setPlan]=useState();
    const [validity,setValidity]=useState();
    const[data,setData]=useState();
    const [description,setDescription]=useState();
    const [show, setShow] = useState(false);
    const [selectedOption, setSelectedOption] = useState("Bharti-Airtel");
    const [opList,setOpList]=useState([
        {value:'Bharti-Airtel',label:'Bharti-Airtel'},
        {value:'Reliance-Jio',label:'Relaince-Jio'},
    ]);
   
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleReset=()=>{
        setMobile('');
        setData('');
        setDescription('');
        setValidity('');
        setPlan('');
    }
   
    

    return(
        <div className="recharge">
            <div className="row" id="recRow">
                <div className="col-md-6">
                <h4 className="ppt">Mobile Prepaid</h4>
                    <div className="rec-form">
                    <form onSubmit={(e)=>{e.preventDefault();handleShow();}} >
                        <label className="rec-form-label">Mobile Number</label>
                        <br/>
                            <input type='tel' pattern="[0-9]{10}" className='mobile' value={mobile} onInput={(e)=>setMobile(e.target.value)} onChange={(e)=>setMobile(e.target.value)} required></input>
                            <br/>

                            <label className="rec-form-label">Operator</label><br/>
                            <select className='op' value={operatorName} onChange={(e)=>{setOperatorName(e.target.value);}} required>
                                <option value="Bharti-Airtel" selected>Bharti-Airtel</option>
                                <option value="Reliance-Jio"> Reliance-Jio</option>
                            </select>
                            
                            
                            <br/>

                            <label className="rec-form-label">Plan</label><br/>
                            <input readOnly type='number' className='plan' required value={plan} onChange={(event)=>setPlan(event.target.value)} onInput={(event)=>setPlan(event.target.value)}></input>
                                 <br/>
                            <button type="submit" className="recharge-now">Recharge</button>
                         </form>
                         
                              
                        
                    </div>
                   <p className="postLink"> <Link to='/postpaid' className="postLink">Click here for Postpaid Recharge</Link></p>

                </div>
                <div className="col-md-6">

                               <h4>Choose recharge plan: {operatorName}</h4>
                               
                               < div className="planDisplay">
                                {operatorName==="Bharti-Airtel" &&
                                airtelList.map((item)=>
                                <div className="planCard" onClick={()=>{setPlan(item.amount);setValidity(item.validity);setData(item.data);setDescription(item.description)}}>
                                                        <div className="planLeft">Rs {item.amount}</div>
                                                        <div className="planRight"><span className="planSpan"><b>validity:</b> {item.validity} </span><span className="planSpan"><b>data:</b> {item.data}</span> 
                                                        <br/>
                                                        <span className="desSpan">{item.description}</span>
                                                            
                                                        </div>
                                                       </div>
                            )
                               
                               
                                }
                                {operatorName==="Reliance-Jio" &&
                                jioList.map((item)=>
                                <div className="planCard" onClick={()=>{setPlan(item.amount);setValidity(item.validity);setData(item.data);setDescription(item.description)}}>
                                                        <div className="planLeft">Rs {item.amount}</div>
                                                        <div className="planRight"><span className="planSpan"><b>validity:</b> {item.validity} </span><span className="planSpan"><b>data:</b> {item.data}</span> 
                                                        <br/>
                                                        <span className="desSpan">{item.description}</span>
                                                            
                                                        </div>
                                                       </div>
                            )
                               
                               
                                }</div>

                                    


                                
                               
                               
<MyModal2 operator={operatorName} mobile={mobile} amount={plan} description={description} data={data} validity={validity} show={show} handleReset={handleReset}  onClick={handleClose} onHide={handleClose}/>     
                                
                               



                </div>



            </div>
        
        </div>
    )

 }


 

 const airtelList=[
    {id:0,amount:299,validity:"28 days",data:"1.5GB/day",description:"calls : unlimited call | sms:100sms/day | validity:28 days"},
    {id:1,amount:499,validity:"56 days",data:"1.5GB/day",description:"calls : unlimited call | sms:100sms/day | validity:56 days"},
    {id:2,amount:799,validity:"84 days",data:"1.5GB/day",description:"calls : unlimited call | sms:100sms/day | validity:84 days"},
    {id:3,amount:899,validity:"84 days",data:"2GB/day",description:"calls : unlimited call | sms:100sms/day | validity:84 days"},
    {id:4,amount:249,validity:"24 days",data:"1GB/day",description:"calls : unlimited call | sms:100sms/day | validity:24 days"},
    {id:5,amount:59,validity:"28 days",data:"3GB",description:"mobile data 4G/3G/2G : 3GB | validity:28 days"},
    {id:6,amount:108,validity:"Till Your Existing Pack",data:"6GB",description:"Data Add On |mobile data 4G/3G/2G : 6GB Data Addon | validity:Till your Existing pack"},
 ];
 const jioList=[
    {id:0,amount:289,validity:"28 days",data:"1.5GB/day",description:"calls : unlimited call | sms:100sms/day | validity:28 days"},
    {id:1,amount:444,validity:"56 days",data:"1.5GB/day",description:"calls : unlimited call | sms:100sms/day | validity:56 days"},
    {id:2,amount:777,validity:"84 days",data:"1.5GB/day",description:"calls : unlimited call | sms:100sms/day | validity:84 days"},
    {id:3,amount:888,validity:"84 days",data:"2GB/day",description:"calls : unlimited call | sms:100sms/day | validity:84 days"},
    {id:4,amount:249,validity:"24 days",data:"1GB/day",description:"calls : unlimited call | sms:100sms/day | validity:24 days"},
    {id:5,amount:59,validity:"28 days",data:"3GB",description:"mobile data 4G/3G/2G : 3GB | validity:28 days"},
    {id:6,amount:108,validity:"Till Your Existing Pack",data:"6GB",description:"Data Add On |mobile data 4G/3G/2G : 6GB Data Addon | validity:Till your Existing pack"},
 ]