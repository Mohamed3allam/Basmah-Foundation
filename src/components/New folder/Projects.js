import React from 'react'
import imgs from '../webMedia'

export const Projects = () => {
    return (
        <section className="container">
            <div className="projects">
                <h1> Our projects </h1>
                    {/* <img className={"brush"} src={imgs.brushStroke} alt="svg" width="100" height="100"/>  */}
                <p className="breif">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt <br/>consectetur adipiscing elit</p>
            </div>
            <div className="projectsContainer">
                <div className="projectBox">
                    <div className="picBox">
                        <img src={imgs.bareeq_p} alt="Bareeq" className="projectImg" />
                    </div>
                    <hr width="0.0001" color="gray" />
                    <div className="descriptionBox">
                        <h1 className="projectTitle">
                            Bareeq Project
                        </h1>
                        <p className="projectDescription">
                            Bareeq project believes in the uniqueness of each child. Our project helps blind children discover the light within themselves so they can shine brightly.
                        </p>
                    </div>
                </div>
                <div className="projectBox">
                    <div className="picBox">
                        <img src={imgs.elaf_p} alt="Elaf" className="projectImg" />
                    </div>
                    <hr width="0.0001" />
                    <div className="descriptionBox">
                        <h1 className="projectTitle">
                            Elaf Project
                        </h1>
                        <p className="projectDescription">
                            A simple act of kindness creates a ripple that comes back to you. Elaf project believes in the importance for children to grow up in a caring and loving environment. Thus, our project provides a safe environment for orphans to grow, learn and play through our sessions that develop their physical and mental abilities.
                        </p>
                    </div>
                </div>
                <div className="projectBox">
                    <div className="picBox">
                        <img src={imgs.janan_p} alt="Janan" className="projectImg" />
                    </div>
                    <hr width="0.0001" color="gray" />
                    <div className="descriptionBox">
                        <h1 className="projectTitle">
                            Janan Project
                        </h1>
                        <p className="projectDescription">
                        We aim to provide development opportunities for disadvantaged children by facilitating educational content in non-traditional educational methods to increase their self-awareness and build strong personalities that lead society towards a promising future.
                        </p>
                    </div>
                </div>
                <div className="projectBox">
                    <div className="picBox">
                        <img src={imgs.kawen_p} alt="Kawen" className="projectImg" />
                    </div>
                    <hr width="0.0001" color="gray" />
                    <div className="descriptionBox">
                        <h1 className="projectTitle">
                            Kawen Project
                        </h1>
                        <p className="projectDescription">
                            The lack of practicality had been something missing throughout the journey of children at school. Our project aims to fill that gap and pave the way for children to discover the world within their souls.
                        </p>
                    </div>
                </div>
                <div className="projectBox">
                    <div className="picBox">
                        <img src={imgs.marsah_p} alt="Marsah" className="projectImg" />
                    </div>
                    <hr width="0.0001" color="gray" />
                    <div className="descriptionBox">
                        <h1 className="projectTitle">
                            Marsah Project
                        </h1>
                        <p className="projectDescription">
                            Marsah project aims to be the beacon that guides those who are lost and brings them home. We involve the refugees in our society through our interactive sessions that also enhances their skills and knowledge.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
