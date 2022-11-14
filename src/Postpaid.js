import { useEffect, useState } from "react";
import MyModal from './MyModal.js'
import './Recharge.css';

 export default function Postpaid(){
    const [show, setShow] = useState(false);
    const [mobile,setMobile]=useState();
    const [operatorName,setOperatorName]=useState("Bharti-Airtel");
    const [amount,setAmount]=useState();
    const [opList,setOpList]=useState([
        {op_name:'Bharti-Airtel',op_img:'https://cdn.iconscout.com/icon/free/png-256/jio-2363161-1970123.png'},
        {op_name:'Reliance-Jio',op_img:'https://cdn.iconscout.com/icon/free/png-256/jio-2363161-1970123.png'},
    ]);
   
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleReset=()=>{
        setMobile('');
        setAmount('');
        setOperatorName('');
    }
    

    return(
        <div >

<div className="row" id="ppform">
    <div className="col-md-6" id="pp">
        Mobile <br/> Postpaid
    </div>
    <div className="col-md-4">
        <div className="postpaid-form">
        <label className="rec-form-label2">Mobile Number</label>
                        <br/>
                        <form onSubmit={(e)=>{e.preventDefault();handleShow();}}>
                            <input type='tel' pattern="[0-9]{10}" className='mobile' value={mobile} onInput={(e)=>setMobile(e.target.value)} onChange={(e)=>setMobile(e.target.value)} required></input>
                            <br/>

                            <label className="rec-form-label2">Operator</label><br/>
                            <select name="op" className="op" value={operatorName} onChange={(e)=>setOperatorName(e.target.value)}>
                                {opList.map((val,key)=>
                                <option key={key} value={val.op_name}  >{val.op_name}<img src={val.op_img} alt=''/></option>
                                )
                                }
                                
                            </select>
                            <br/>

                            <label className="rec-form-label2">Enter the Amount</label><br/>
                            <input type='number'  className='mobile' required value={amount} onChange={(event)=>setAmount(event.target.value)} onInput={(event)=>setAmount(event.target.value)}></input>
                                <br/>
                            <button type="submit" className="recharge-now">Recharge</button>
                         </form>
        </div>




    </div>
    
</div>

<MyModal operator={operatorName} mobile={mobile} amount={amount} show={show} handleReset={handleReset}   onClick={handleClose} onHide={handleClose}/>




            
        </div>


    );
 }
 