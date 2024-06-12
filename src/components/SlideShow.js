import React, { Component } from 'react';
import Carousel from 'react-elastic-carousel';
// import imgs from '../webMedia';
import { sliderImgs } from '../webMedia'

class SlideShow extends Component {

  render() {
    return (
      <Carousel className="Carousel">
        {
          sliderImgs.map((crsl, index) => {
            return <img src={"." + crsl.img} key={index} alt={crsl.img + ' slider img'} />
          })
        }
      </Carousel>
    )
  }
}
export default SlideShow;