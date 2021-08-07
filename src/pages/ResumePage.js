import React from 'react';
import Title from '../Components/Title';
import SkillsSection from "../Components/SkillsSection";
import ResumeItem from '../Components/ResumeItem';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

function ResumePage() {
  return ( 
    <div className="ResumePage">
      <Title title={'Resume'} span={'Resume'} />
      <Title title={'My Skills'} span={'My Skills'} />
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
                    <Title icon={faFacebook} title={'Work Experience'} />
                </div>
                <div className="resume-content">
                    <ResumeItem 
                        year={'2008 - Present'} 
                        title={'Photographer & Designer'}
                        subTitle={'Robin Collins Photography'}
                        text={`• Liaising with customers taking in requirements and execute the desired service.`}
                    />
                    <ResumeItem 
                        year={'2015 - Present'} 
                        title={'Full Stack Developer'}
                        subTitle={'Microsoft Studios'}
                        text={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nihil impedit natus nostrum? Velit accusantium id quos, nihil vel quod.Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. '} 
                    />
                    <ResumeItem 
                        year={'2010 - 2017'} 
                        title={'User Interface Designer'}
                        subTitle={'Google Inc'}
                        text={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nihil impedit natus nostrum? Velit accusantium id quos, nihil vel quod.Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. '} 
                    />
                </div>
                <div className="title">
                    <Title icon={faFacebook} title={'Educational Qualifications'} />
                </div>
                <div className="resume-content ">
                    <ResumeItem 
                        year={'201 - 2022'} 
                        title={'Computer Science Degree'}
                        subTitle={'Sussex University'}
                        text={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nihil impedit natus nostrum? Velit accusantium id quos, nihil vel quod.Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. '} 
                    />
                    <ResumeItem 
                        year={'2015 - 2017'} 
                        title={'A - Levels'}
                        subTitle={'Church Hill High'}
                        text={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nihil impedit natus nostrum? Velit accusantium id quos, nihil vel quod.Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. '} 
                    />
                    <ResumeItem 
                        year={'2015 - 2017'} 
                        title={'High School Graduation'}
                        subTitle={'ABC School'}
                        text={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nihil impedit natus nostrum? Velit accusantium id quos, nihil vel quod.Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. '} 
                    />
                </div>
            
          
    </div>
    
    
  )
}


export default ResumePage;