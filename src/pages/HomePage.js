import React from 'react';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'; 
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faYoutube} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {A} from 'react-router-dom';

function HomePage() {
  return (
    <div className="HomePage">
      <header className="hero">
        <h1 className="hero-text">
          Welcom, I am 
          <span> Robin</span>
        </h1>
        <p className="h-sub-text">
        Full Stack Developer with particular proficiency in the Front-End. 
        In early 2021 I qualified with a Diploma in Software Development from Code Institute. 
        I am currently looking to secure a Junior Front-End Developer position to use and further 
        develop my ability with HTML, CSS and Bootstrap in a practical and fast-paced environment.
        My career goal is to assume a role that allows me to further develop my programming skills 
        with a reputable focused organisation.
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