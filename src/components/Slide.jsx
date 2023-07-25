import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// Utilizo react-bootstrap para crear un carousel...

const Slide = () => {
  return (
    <div className='slide' >
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../public/images/slide_inicio.png"
            alt="Slide 1"
          />

        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../public/images/slide_sale.png"
            alt="Slide 2"
          />

        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../public/images/slide_final.png"
            alt="Slide 3"
          />

        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slide;
