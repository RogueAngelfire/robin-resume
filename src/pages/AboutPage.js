import React from 'react'
import Title from '../Components/Title'
import ImageSection from '../Components/ImageSection';
import ServicesSection from '../Components/ServicesSection';
import design from '../media/design.svg';
import intelligence from '../media/intelligence.svg';
import gamedev from '../media/game-dev.svg';

function AboutPage() {
    return (
        <div className="AboutPage">
            <Title title={'About Me'} span={'About Me'} />
            <ImageSection />

            <Title title={'Services'} span={'Services'} />
            <div className="servives-container">
                <ServicesSection image={design} title={'Web design'} 
                text={'My new passion now a qualified Full Stack Developer.'}
                />
                <ServicesSection image={intelligence} title={'Photography'} 
                text={'Over 30 years experience from Wedding shoots to dramatic landscapes.'}
                />
                <ServicesSection image={gamedev} title={'Graphic Design'} 
                text={'In addition to Web Design with over 25 years experice in Adobe CC.'}
                />

                
            </div>

        </div>
    )
}

export default AboutPage;
