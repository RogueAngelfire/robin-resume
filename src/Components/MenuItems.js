import React from 'react';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'; 
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function MenuItems({menuItem}) {
    return (
        <div className="portfolis">
            {
                menuItem.map((item)=>{
                    return <div className="portfolio" key={item.id}>
                        <div className="image-data">
                            <img src={item.image} alt=""/>
                            <ul className="hover-items">
                                <li>
                                    <a href={item.link1} target="_blank" rel="noreferrer">
                                        <FontAwesomeIcon icon={faGithub} className="icon li" /> 
                                    </a>
                                    <a href={item.link2} target="_blank" rel="noreferrer">
                                        <FontAwesomeIcon icon={faLinkedin} className="icon li" /> 
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <h5>
                            {item.title}
                        </h5>
                        <p>Click to View Work</p>
                    </div>
                })
            }
        </div>
    )
}


export default MenuItems;