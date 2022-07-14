import React, { Component } from 'react';
import Carousel from 'react-elastic-carousel';
// import imgs from '../webMedia';
import { missionImgs } from '../webMedia'

class SlideTrial extends Component {

  render () {
    return (
      <Carousel className="Carousel">
        {
          missionImgs.map((crsl, index) => {
                      return <img src={"."+crsl.img} key={index} alt={crsl.img+' slider img'}/>
                    })
        }
      </Carousel>
    )
  }
}
export default SlideTrial;