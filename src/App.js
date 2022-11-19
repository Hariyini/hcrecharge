import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import HomeSlider from './HomeSlider';

import Navbar from './Navbar';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Recharge from './Recharge';
import Contact from './Contact';


import Signin from './Signin';
import Home from './Home';
import Postpaid from './Postpaid';
import Admin from './Admin';
function App() {

  

  return (
    <Router>
    <div className="App">   
           
          <Navbar />
           <Routes>
                 <Route exact path='/' element={<Home />}></Route>
                 <Route exact path='/recharge' element={< Recharge />}></Route>
                 <Route exact path='/postpaid' element={< Postpaid />}></Route>
                 <Route exact path='/contact' element={< Contact />}></Route>
                 <Route exact path='/signin' element={< Signin />}></Route>
                 <Route exact path='/admin' element={< Admin />}></Route>
                 
          </Routes>
          
                
    </div>
          
       </Router>












          
  );
}

export default App;
