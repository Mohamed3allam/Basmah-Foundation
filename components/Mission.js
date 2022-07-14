import React from 'react'
import Video from '../assets/vids/websiteVideo.mp4'

export const Mission = () => {
    return (
        <div className="mission-container">
            <div className="mission-title">
                <h1> Mission & Core Values  </h1>
            </div>
            <div className="mission-text">
                <p>Our Mission is:
                    <br/>
                    To create a suitable environment for children in which they can discover
                    themselves,think outside the box, and find their own way to be the future
                    leaders in our community.
                </p>
            </div>
            <div className="core">
                    <p>Community service :</p>
                    <ul className="communityServices">
                        <li>Education </li>
                        <li>Interity</li>
                        <li>Acceptance </li>
                        <li>Team work</li>
                        <li>Leadership</li>
                    </ul>
            </div>

            <video  className="vid" controls autoPlay={false} >
                <source src={Video} type="video/mp4"/>
                Your browser does not support the video tag.
            </video>

        </div>     
       
    )
}
