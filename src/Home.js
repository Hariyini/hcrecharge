import React, {useState, useEffect} from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import HomeSlider from './HomeSlider';
import data from './data';
import { Link } from 'react-router-dom';
import './App.css';

export default function Home(){
    const [sliderContent, setSliderContent] = useState(data);
    const [index, setIndex] = useState(0);
  
    useEffect(() => {
       const lastIndex = sliderContent.length - 1
      if (index < 0) {
        setIndex(lastIndex)
      }
      if (index > lastIndex){
        setIndex(0)
      }
    }, [index, sliderContent])
  
    useEffect(() => {
      let slider = setInterval(() => {
        setIndex(index + 1)
      }, 3000);
      return () => clearInterval(slider)
    }, [index])


    return(
        <>
        <section className="section">
                
                <div className="section-center">
                      {sliderContent.map((item, itemIndex) => {
                            return <HomeSlider key={item.id} {...item} contentIndex={itemIndex} index={index} />
                      })}
                      <button className="prev" onClick={() => setIndex(index - 1)}>
                        <FiChevronLeft />
                      </button>
                      <button className="next" onClick={() => setIndex(index + 1)}>
                        <FiChevronRight />
                      </button>
                      
                </div>
                <br/>
                <p className='rechargeNow'>
                  <div className='row'>
                          <div className='col-sm-6' id='colDiv'><div id='rnLink1' ><Link to="/recharge" className='leftDiv' >Mobile Prepaid </Link></div></div>
                          <div className='col-sm-6'>
                          <div id='rnLink2'><Link to="/postpaid"  className='leftDiv'>Mobile Postpaid</Link></div>
                          </div>

                  </div>
                  
                  
                
                </p>
                
               
            </section> 
             
             </>
    )
}