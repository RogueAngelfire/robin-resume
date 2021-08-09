import React from 'react';
import about from '../media/about.jpg'; // PDF CV link required at the bottom.

function ImageSection() {
    return (
        <div className="ImageSection">
            <div className="img">
                <img src={about} alt="mannequin"/>
            </div>
            <div className="about-info">
                <h4>Fully Qualified<span> Full Stack Developer</span></h4>
                <p className="about-text">
                  I have 13 years of Website Design experience in a variety of methods and programming languages.
                  In early 2021 I Graduated as a Software Developer with the Code Institute which is accredited by the University of Napier, Edinburgh.
                  I have linked up with other graduates and currently planning some exciting project for real clients from Animators to cake makers
                  using the latest technologies in front and back end web development incorporating secure Ecommerce services.
                </p>
                <div className="about-details">
                    <div className="left-section">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Location</p>
                    </div>
                    <div className="right-section">
                        <p>: Robin Collins</p>
                        <p>: 46</p>
                        <p>: British</p>
                        <p>: High Halstow, Rochester, Kent</p>
                    </div>
                </div>
                <button className="btn">Download CV</button>
            </div>
        </div>
    )
}

export default ImageSection;