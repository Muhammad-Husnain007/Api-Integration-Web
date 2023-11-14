import React, {useState} from 'react'
import Navbar from './Navbar'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import  Card  from './Card';


const Home = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 3000, // Auto slide speed in milliseconds (3 seconds)
    autoplay: true,
    autoplaySpeed: 3000, // Delay between slides in milliseconds (3 seconds)
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: true,
  };

  const images = [

   'https://icms-image.slatic.net/images/ims-web/92d95a3e-925f-44e2-a3aa-4293a94609b2.png',
   'https://icms-image.slatic.net/images/ims-web/284695a6-ff1c-4b64-8b74-a0e81b8fa21e.jpg',
   'https://icms-image.slatic.net/images/ims-web/0ad0099e-4f60-41c2-b04d-087e51ee1a31.jpg',
   'https://icms-image.slatic.net/images/ims-web/d2afa8b1-a262-41ee-b770-5f7789374645.jpg',
   'https://icms-image.slatic.net/images/ims-web/b68f72d5-e8aa-47ec-9506-6d5e4634a834.jpg',
   'https://icms-image.slatic.net/images/ims-web/4c5a3dc6-3211-4781-8c81-2d3e23f96400.jpg',
   'https://icms-image.slatic.net/images/ims-web/38d85995-1c9e-4be4-8841-d7eb8235e106.jpg',
   'https://icms-image.slatic.net/images/ims-web/4b6667dd-b286-4a81-89e1-cf1acb3f6039.jpg',
   'https://icms-image.slatic.net/images/ims-web/e2e276c9-121a-46f9-83f8-26d51ee518cb.jpg',
  ];


  return (
    <div className='main-div'>
      <Navbar />
              {/* ===========  SLIDER ============ */}
              <div className="image-slider">
               <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
    <Card />
    </div>
  )
}

export default Home
