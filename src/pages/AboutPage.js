import React from 'react'
import Title from '../Components/Title'
import ImageSection from '../Components/ImageSection';
import ServicesSection from '../Components/ServicesSection';
//import design from '../media/design.svg';
import ImportantDevicesIcon from '@material-ui/icons/ImportantDevices';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import ComputerIcon from '@material-ui/icons/Computer';
//import intelligence from '../media/intelligence.svg';
//import gamedev from '../media/game-dev.svg';

function AboutPage() {
    const computer = <ImportantDevicesIcon />
    const camera = <CameraAltIcon />
    const screen = <ComputerIcon />
    
    
    return (
        <div className="AboutPage">
            <Title title={'About Me'} span={'About Me'} />
            <ImageSection />

            <Title title={'Services'} span={'Services'} />
            <div className="servives-container">
                <ServicesSection icon={computer} title={'Web design'} 
                text={'My new passion now a qualified Full Stack Developer.'}
                />
                <ServicesSection icon={camera} title={'Photography'} 
                text={'Over 30 years experience from Wedding shoots to dramatic landscapes.'}
                />
                <ServicesSection icon={screen} title={'Graphic Design'} 
                text={'In addition to Web Design with over 25 years experice in Adobe CC.'}
                />

                
            </div>

        </div>
    )
}

export default AboutPage;
