import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Home = () => {
  return (
    <>
    <Carousel>
                <div>
                    <img src="https://drive.google.com/file/d/17bOX1ik0aE5PhxQDqp5VtSvKqxJpNQmJ/view?usp=sharing" />
                </div>
                <div>
                    <img src="../assets/img/image2.png" />
                </div>
                <div>
                    <img src="../assets/img/image3.png" />
                </div>
    </Carousel>
    </>
  )
}

export default Home