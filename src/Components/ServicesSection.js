import React from 'react';

function ServicesSection({title, text, icon}) {
    return (
        <div className="ServicesSection">
            <div className="service">
                <div className="service-content">
                    <h5 className="s-title">{icon} {title}</h5>
                    <p className="s-text" >
                        {text}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ServicesSection;