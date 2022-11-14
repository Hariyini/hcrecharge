import React from 'react';


import sliderContent from './data';

const HomeSlider = ({id, image, title, description, contentIndex, index}) => {
    
    let position = "nextSlide";
    if(contentIndex === index){
        position = 'activeSlide'
    }
    if(contentIndex === index - 1 || (index === 0 && contentIndex === sliderContent.length - 1)){
        position = 'lastSlide'
    }
    return(
        <article className={position} key={id}>
               
                
                <p className='title'>{title}</p>
                <p className="text">{description}</p>
                <img src={image} alt={''} className="person-img" />
                <br/>
                
        </article>
        )
}



export default HomeSlider;