import React from 'react';
import about from '../media/about.jpg';

function ImageSection() {
  return (
    <div className="ImageSection">
      <div className="img">
        <img src={about} alt="mannequin" />
      </div>
      <div className="about-info">
        <h4>I am<span> a Dude </span></h4>
        <p>
          Another Text area to add detailed information about me. Make sure it is engaging and reads well.
          This only needs to  be on or two paragraphs long. With focus on software development.
        </p>
        <div className="about-details">
          <div className="left-section">
            <p>Full Name</p>
            <p>Age</p>
            <p>Nationality</p>
            <p>Languages</p>
            <p>Address</p>
            <p>Country</p>
          </div>
          <div className="right-section">
            <p>: Robin Collins</p>
            <p>: 46</p>
            <p>: British</p>
            <p>: Computer Language</p>
            <p>: Address Here</p>
            <p>: England</p>
          </div>
        </div>
        <button className="btn">Download CV</button>
      </div>
    </div>
  )
}

export default ImageSection;