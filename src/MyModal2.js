import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRef, useState, useEffect } from 'react';
import './Recharge.css';
import { RadioButton } from './RadioButton';
import Paid from './Paid.js';
import axios from 'axios';

export default function MyModal2(props){
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [pay,setPay]=useState("Card");
  
  const [paymentMethod, setPaymentMethod] = useState("Debit/Credit Card");

  const radioChangeHandler = (e) => {
    setPaymentMethod(e.target.value);
  };
  const addItem=(e)=>{
    e.preventDefault();
    const newItem={
        mobile:props.mobile,
        operator:props.operator,
        amount:props.amount,
        validity:props.validity,
        data:props.data,
        description:props.description,
        payment:paymentMethod
    }
    axios.post('/prepaiddone',newItem);
    
    props.onClick({ msg: 'Modal Closed!' });props.handleReset();handleShow(); 

 }
    return(
        <div>
        <Modal show={props.show} onHide={() =>{ props.onHide({ msg: 'Cross Icon Clicked!' });props.handleReset()}} size="lg">

            <Modal.Header closeButton>
                <Modal.Title>
                    <div className='modal-title'>
                   Payment</div>
                </Modal.Title>
            </Modal.Header>
            
            <Modal.Body>
                <div  className='modal-c'>
                <table className='tp'>
                    <tr>
                        <td id='tt'><b>Mobile Number</b></td>
                        <td id='tc'>{props.mobile}</td>
                    </tr>
                    <tr>
                        <td id='tt'><b>Operator</b></td>
                        <td id='tc'>{props.operator}</td>
                    </tr>
                    <tr>
                        <td id='tt'><b>Amount</b></td>
                        <td id='tc'>Rs. {props.amount}</td>
                    </tr>
                    <tr>
                        <td id='tt'><b>Validity</b></td>
                        <td id='tc'>{props.validity}</td>
                    </tr>
                    <tr>
                        <td id='tt'><b>Data</b></td>
                        <td id='tc'>{props.data}</td>
                    </tr>
                    <tr>
                        <td id='tt'><b>Description</b></td>
                        <td id='tc'>{props.description}</td>
                    </tr>
                </table>
                <br></br>
                <form onSubmit={addItem}>
                <h4 style={{color:'teal'}}>Choose Payment method</h4>
                <RadioButton
                    changed={radioChangeHandler}
                    id="1"
                    isSelected={paymentMethod === "Debit/Credit Card"}
                    label="Debit/Credit Card"
                    iconLink="https://cdn-icons-png.flaticon.com/512/147/147258.png"
                    value="Debit/Credit Card"
                    />
                <RadioButton
                    changed={radioChangeHandler}
                    id="2"
                    isSelected={paymentMethod === "Net Banking"}
                    label="Net Banking"
                    iconLink="https://cdn-icons-png.flaticon.com/512/7847/7847811.png"
                    value="Net Banking"
                />
                <RadioButton
                    changed={radioChangeHandler}
                    id="2"
                    isSelected={paymentMethod === "UPI"}
                    label="UPI"
                    iconLink="https://cdn.iconscout.com/icon/free/png-256/upi-2085056-1747946.png"
                    value="UPI"
                />
                
                <p id='pay'><b>Pay using:</b> {paymentMethod}</p>
                <button type="submit" className="recharge-now">Pay Now</button>

                </form>
                
                
                

                </div>               

                
                </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={() =>{ props.onClick({ msg: 'Modal Closed!' });props.handleReset();}} >Close</Button>
                        
                    </Modal.Footer>

                </Modal>
                <Paid  show={show}   onClick={handleClose} onHide={handleClose}/>
            </div>
    )
}