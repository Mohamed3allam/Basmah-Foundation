import React from 'react'
import imgs from '../webMedia'

export const Footer = () => {
    return (
        <footer>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
            <div className="footerContainer">
                <div className="contactUs">
                    <h2 className="contactUsTitle">
                        Contact Us
                    </h2>
                </div>
                <div className="socialMedia">
                    <div className="socialMediaCol">
                        <p>
                            
                            <h2>
                                <a href="https://web.facebook.com/Basmah.asu" className="link">
                                    <i className="fa fa-facebook-square"></i>
                                    &nbsp;basmah.asu
                                </a>
                            </h2>
                        </p>
                    </div>
                    <div className="socialMediaCol">
                        <p>
                            <h2>
                                <a href="https://www.instagram.com/basmah_asu" className="link">
                                    <i className="fa fa-instagram"></i>
                                    &nbsp;basmah_asu
                                </a>
                            </h2>
                        </p>
                    </div>
                    <div className="socialMediaCol">
                        <p>
                            <h2>
                                <p className="link">
                                    <i className="fa fa-envelope"> </i>
                                    &nbsp;basmah.asu15@gmail.com
                                </p>
                            </h2>
                        </p>
                    </div>
                    <div className="lastLogo">
                        <img src={imgs.footer_logo} alt="logo" className="footerLogo" />
                    </div>
                </div>
            </div>
        </footer>
    )
}
