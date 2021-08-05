import React from 'react';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'; 
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faYoutube} from '@fortawesome/free-brands-svg-icons'; // find alternative
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {A} from 'react-router-dom';

function HomePage() {
  return (
    <div className="HomePage">
      <header className="hero">
        <h1 className="hero-text">
          Hi, I am 
          <span> Robin</span>
        </h1>
        <p className="h-sub-text">
          Add Wording here - That is for resume approximately thirty words maybe an
          introduction possibly from current CV - highlighting transfereable skills.
        </p>
        <div className="icons">
          <a href="https://www.linkedin.com/in/robin-collins-5a785421/" target="_blank" rel="noreferrer" className="icon-holder">
            <FontAwesomeIcon icon={faLinkedin} className="icon li" /> 
          </a>
          <a href="https://github.com/RogueAngelfire" target="_blank" rel="noreferrer" className="icon-holder">
            <FontAwesomeIcon icon={faGithub} className="icon gh" />
          </a>
          <a href="https://www.youtube.com/channel/UCscNOCK2hWtUX-SmFLFP1KQ" target="_blank" rel="noreferrer" className="icon-holder">
            <FontAwesomeIcon icon={faYoutube} className="icon yt"/>
          </a>
        </div>
      </header>
    </div>
  )
}

export default HomePage;