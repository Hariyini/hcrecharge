import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRef, useState, useEffect } from 'react';
import './Paid.css';


export default function Paid(props){
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return(
        <div  >
        <Modal show={props.show} onHide={() => props.onHide({ msg: 'Cross Icon Clicked!' })} size="md"  id="paid">

            <Modal.Header closeButton>
                <Modal.Title>
                    <div className='modal-t'>
                   Payment Succesful !!! Recharge Done</div>
                </Modal.Title>
            </Modal.Header>
            
            

                </Modal>
            </div>
    )
}