import React from 'react'
import Title from '../Components/Title'
import ImageSection from '../Components/ImageSection';
import SkillsSection from '../Components/SkillsSection';
import ServicesSection from '../Components/ServicesSection';
import design from '../media/design.svg';
import intelligence from '../media/intelligence.svg';
import gamedev from '../media/game-dev.svg';

function AboutPage() {
    return (
        <div className="AboutPage">
            <Title title={'About Me'} span={'About Me'} />
            <ImageSection />
            <Title title={'My Skills'} span={'My Skills'} />
            <div className="skillsContainer">
                <SkillsSection skill={'JavaScript'} progress={'60%'} width={'60%'} />
                <SkillsSection skill={'Typescript'} progress={'30%'} width={'30%'} />
                <SkillsSection skill={'React Js'} progress={'70%'} width={'70%'} />
                <SkillsSection skill={'Django'} progress={'80%'} width={'80%'} />
                <SkillsSection skill={'Python'} progress={'80%'} width={'80%'} />
                <SkillsSection skill={'HTML'} progress={'90%'} width={'90%'} />
                <SkillsSection skill={'CSS'} progress={'90%'} width={'90%'} />
                <SkillsSection skill={'React-Native'} progress={'40%'} width={'40%'} />
                <SkillsSection skill={'UI/UX Design'} progress={'90%'} width={'90%'} />
            </div>

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
