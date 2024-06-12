import React from 'react'
import SlideShow from './SlideShow';


export const Statistics = () => {

  return (
    <div className="StatisticsContainer">
      <div className="ProjectContainer">
        <h2 className="ProjectTitle">
          <strong><em> How our projects affect children </em></strong>
        </h2>
        <p className="ProjectsDescription">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis voluptates possimus assumenda eum harum
          atque recusandae, repellendus sint nobis provident aut quibusdam ad dolorum facilis perspiciatis eaque
          voluptatum eius! Quos!
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus et quo vero. Illo, voluptate itaque optio,
          eius vel explicabo voluptatibus temporibus veniam possimus provident alias nesciunt modi odio magnam
          laborum.
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur voluptates voluptate vero accusamus
          ut porro reprehenderit nam ex ullam sit id optio aliquam, mollitia dolores magni adipisci impedit similique
          cum!
        </p>

        <div className="ProjectsPicSlider">
          <div className="slideshow-container">
            <SlideShow />
          </div>
        </div>
      </div>
    </div>
  )
}