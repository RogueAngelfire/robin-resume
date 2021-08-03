import React from 'react';
import Title from '../Components/Title';
import ImageSection from '../Components/ImageSection';
import SkillsSection from '../Components/SkillsSection';

function AboutPage() {
  return (
    <div className="AboutPage">
      <Title title={'About Me'} span={'About Me'} />
      <ImageSection />
      <Title title={'My Skills'} span={'My Skills'} />
      <div className="skillsContainer">
        <SkillsSection skill={'HTML'} progress={'90%'} width={'90%'} />
        <SkillsSection skill={'CSS'} progress={'90%'} width={'90%'} />
        <SkillsSection skill={'JavaScript'} progress={'60%'} width={'60%'}/>
        <SkillsSection skill={'Typescript'} progress={'30%'} width={'30%'} />
        <SkillsSection skill={'React Js'} progress={'70%'} width={'70%'} />
        <SkillsSection skill={'Django'} progress={'80%'} width={'80%'} />
        <SkillsSection skill={'Python'} progress={'90%'} width={'90%'} />
        <SkillsSection skill={'Web Design'} progress={'70%'} width={'70%'} />
        <SkillsSection skill={'UI/Ux Design'} progress={'80%'} width={'80%'} />
      </div>
    </div>
  )
}

export default AboutPage;
