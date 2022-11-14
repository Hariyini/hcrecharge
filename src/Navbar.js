import React from 'react';

import { Link } from 'react-router-dom';
import './Navbar.css';



class Navbar extends React.Component{
    render(){
        return(
            <>
            <nav class="navbar navbar-expand-lg navbar-light" id='inav'>
    <div class="container-fluid">
      <a class="navbar-brand" href="#" id='nb'><b>HC Recharge</b></a>
      <button class="navbar-toggler" id='btn1'type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"  id='ni'></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav ms-auto" id='navdiv'>
          
        <Link to="/" id='nava'>Home</Link>
        <Link to="/recharge" id='nava'>Recharge</Link>
        <Link to="/contact" id='nava'>Contact</Link>
        <Link to="/signin" id='nava'>Admin</Link>
          
                                    
          
        </div>
      </div>
    </div>
    </nav>
            </>


        );
    }
}

export default Navbar;

