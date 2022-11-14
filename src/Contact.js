import './Contact.css';

export default function Contact(){
    return(
        <>
        <h1 className='c-title'>To Contact Us</h1>
        <div className="row" id='contact-row'>
            <div className="col-md-6" id='contact-col1'>
                <h2>Email us at</h2>
                 <div className='mail'><i class="fa fa-envelope" id='cicon'></i>hcrecharge@gmail.com</div>

            </div>
            <div className="col-md-6" id='contact-col2'>
                <h2>Contact for queries</h2>
                <h4><i class="fa fa-phone" id='cicon'></i>9988776655</h4>
                <h4><i class="fa fa-phone" id='cicon'></i>9988776644</h4>
                
            </div>


        </div>
        </>
    )

 }