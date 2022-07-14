import React from 'react'
import imgs from '../webMedia'

export const Header = () => {
    return (
        <div className="Header">
            {/* <!-- <img className="layer1" src="layer1_copy2.jpg" alt="layer1"> --> */}
            <img className="layer1" src={imgs.HeaderWithoutLogoImg} alt="layer1"/>

            <div>
                <img src={imgs.HeaderImg} alt="logo" className="logo"/>
            </div>

            <div className="Textbox">
                <img className="TextboxImg" src={imgs.TextboxImg} alt="textbox"/> 
                <p className="TextboxText">To enlighten the youth of our community through a life changing
                experience which will create a brighter future for humanity</p>
            </div>

            {/* <!--,<div className="Header_End">
                <img className="Headerend" src="Copy of Ripped Paper.svg" alt="Header_End">

            </div>!--> */
            }
        </div>
    )
}
