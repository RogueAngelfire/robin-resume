import React from 'react';
import Title from '../Components/Title';
import SkillsSection from "../Components/SkillsSection";
import ResumeItem from '../Components/ResumeItem';
import SmallTitle from '../Components/SmallTitle';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SchoolIcon from '@material-ui/icons/School';

function ResumePage() {
    const briefcase = <BusinessCenterIcon />
    const school = <SchoolIcon />
  return ( 
    <div className="ResumePage">
      <Title title={'Resume'} span={'Resume'} />
      <SmallTitle title={'My Skills'} span={'My Skills'} />
      <div className="skillsContainer">
      <SkillsSection skill={'HTML5'} progress={'90%'} width={'90%'} />
                <SkillsSection skill={'CSS3'} progress={'90%'} width={'90%'} />
                <SkillsSection skill={'JavaScript'} progress={'60%'} width={'60%'} />
                <SkillsSection skill={'Django'} progress={'80%'} width={'80%'} />
                <SkillsSection skill={'Python'} progress={'80%'} width={'80%'} />
                <SkillsSection skill={'React Js'} progress={'70%'} width={'70%'} />
                <SkillsSection skill={'WordPress'} progress={'50%'} width={'50%'} />
                <SkillsSection skill={'PHP'} progress={'40%'} width={'40%'} />
                <SkillsSection skill={'React-Native'} progress={'40%'} width={'40%'} />
                <SkillsSection skill={'UI/UX Design'} progress={'90%'} width={'90%'} />
                <SkillsSection skill={'Typescript'} progress={'30%'} width={'30%'} />
            </div>
            
                <div className="title">
                    <SmallTitle icon={briefcase} title={'Work Experience'} />
                </div>
                <div className="resume-content">
                    <ResumeItem 
                        year={'2008 - Present'} 
                        title={'Photographer & Designer'}
                        subTitle={'Robin Collins Photography'}
                        text={`Liasing with customers taking in requirements and execute the desired service. Undertaken 100's of weddings mainly in the South East of England. Commissioned for the Kent Community Safety Awards in 2013. Provided additional services including Website and Graphic Design. Adobe Creative Cloud Software, Advanced in Photoshop, Lightroom and InDesign. Creativity - Constantly looking for creating new styles and market trends. Attention to Detail - Looking for inconsistancies and breaks in continuity.`}
                    />
                    <ResumeItem 
                        year={'2018 - 2019'} 
                        title={'Shift Manager'}
                        subTitle={'Amazon'}
                        text={`Working in a fast pased enviroment as a shift manager for LCY8 at its launch. Accountable for 80+ staff. Analytical Communication reporting and organising with focus on staff welfare and attendance. Working with Amazon's internal Computer system.`} 
                    />
                    <ResumeItem 
                        year={'2017 - 2019'} 
                        title={'Driver'}
                        subTitle={'Skill-Tech Recruitment'}
                        text={`Driving for Sprint Refrigeration and BCA nationwide. Communicating with Head Office, Clients and Customers to Organise and Arrange Deliveries, Collections and Problem-solving. Long and Anti-social delivery/service times working late into the evening and early hours. Adaptability for consistent changes - Being available at short notice to meet customer needs.`} 
                    />
                </div>
                <div className="title">
                    <SmallTitle icon={school} title={'Education'} />
                </div>
                <div className="resume-content ">
                    <ResumeItem 
                        year={'2019 - 2021'} 
                        title={'Full Stack Software Developer'}
                        subTitle={'The Code Institute'}
                        text={`Diploma in Software Development. Accredited by the University of Napier, Edinburgh.`} 
                    />
                    <ResumeItem 
                        year={'1997 - 1999'} 
                        title={'HND Television & Video Production Technology'}
                        subTitle={'Greenwich University Campas - West Kent College'}
                        text={`From Script to Screen producing Documentaries. My final assingment was a Documentary called 'Save our Seas' featuring the enviromental group 'Surfers Against Sewage'`} 
                    />
                    <ResumeItem 
                        year={'1994 - 1999'} 
                        title={'Btec National Diploma in Media Arts Technology'}
                        subTitle={'West Kent College'}
                        text={`Film, Televison, Editing, Scripts, Photography, Graphic Design, Computer Graphics, Computer Studies, Light and Sound, Radio and more linked to Media Design.`} 
                    />
                </div>
            
          
    </div>
    
    
  )
}


export default ResumePage;