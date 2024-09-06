import React from 'react';
import { useEffect } from 'react';
import gsap from 'gsap';
import Slider from 'react-slick';

// Import local images



const images = ["https://images.unsplash.com/photo-1636217432188-3a81bccad020?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGdvdmVybm1lbnQlMjBidWlsZGluZ3xlbnwwfHwwfHx8MA%3D%3D", "https://images.unsplash.com/photo-1636217432188-3a81bccad020?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGdvdmVybm1lbnQlMjBidWlsZGluZ3xlbnwwfHwwfHx8MA%3D%3D","https://images.unsplash.com/photo-1636217432188-3a81bccad020?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGdvdmVybm1lbnQlMjBidWlsZGluZ3xlbnwwfHwwfHx8MA%3D%3D"];

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  useEffect(()=>
  {
    gsap.to("h2",{
      x:200,
      duration:2,
      delay:1
    })
  })

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img 
              src={image} 
              alt={`Slide ${index}`} 
              className="slider-image"
            />
            
          </div>
          
        ))}
       
      </Slider>
    </div>
  );
};

export default ImageSlider;