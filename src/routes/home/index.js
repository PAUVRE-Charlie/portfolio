import { h } from 'preact'
import { useContext, useState } from 'react'
import { Element } from 'react-scroll'
import style from './style.css'

import Header from '../../components/header'
import Container from '../../components/container'
import Skill from '../../components/skill'
import ProjectPreview from '../../components/projectPreview'
import Footer from '../../components/footer'
import Signature from '../../components/signature'
import SmallRect from '../../components/smallRect'

import * as images from '../../assets/images'
import {github_dark, linkedin} from '../../assets/icons'
import {resume_en, resume_fr} from '../../assets/files'
import { Text } from '../../components/language'
import { LanguageContext } from '../../components/language';

export default _ => {

  const [expanded, setExpanded] = useState(false)
  const [showAllProjects, setShowAllProject] = useState(false)
  const { userLanguage } = useContext(LanguageContext);

  const handleMoreProject = () => {
    setExpanded(true)
    setShowAllProject(true)
  }

  const handleLessProject = () => {
    setExpanded(false)
    setTimeout(() => setShowAllProject(false), 650)
  }

  return <div className={style.home}>
    <Header tabs={['skills', 'projects', 'contact']} />
    {/* HERO */}
    <Container>
      <div className={style.hero}>
        <div className={style.imageContainer}>
          <img src={images.deerHello} alt='deerHello' />
          <SmallRect position={{top: '0%', left: '65%'}} />
          <SmallRect position={{top: '60%', left: '0%'}} />
          <SmallRect position={{top: '50%', left: '75%'}} />
        </div>
        <div style={{ overflow: 'hidden' }}>
          <div>
            <h1><Text id='home.hello' /></h1>
            <h3><Text id='home.job' /></h3>
          </div>
          <div className={style.introduction}>
            <p><Text id='home.intro1' /></p>
            <p><Text id='home.intro2' /></p>
          </div>
          <div className={style.footerHero}>
            <a href={userLanguage === 'en' ? resume_en : resume_fr} rel="noreferrer" target="_blank" download="resume_Charlie_Pauvre"><button><Text id='home.downloadResume' /></button></a>
            <div className={style.socialMedia}>
              <a href='https://www.linkedin.com/in/charlie-pauvre/' rel="noreferrer" target="_blank"><img src={linkedin} alt='linkedin' /></a>
              <a href='https://github.com/PAUVRE-Charlie/' rel="noreferrer" target="_blank"><img src={github_dark} alt='github' /></a>
            </div>
          </div>
        </div>
      </div>
    </Container>

    {/* SKILLS */}
    <Container>
      <Element name='skills' >
        <h1><Text id='home.skills.title' /></h1>
        <h3><Text id='home.skills.subtitle' /></h3>
        <div className={style.skills}>
          <Skill image={images.skill1} shape={images.shape1} title={<Text id='home.skills.skill1.title' />} description={<Text id='home.skills.skill1.description' />} />
          <Skill image={images.skill2} shape={images.shape2} title={<Text id='home.skills.skill2.title' />} description={<Text id='home.skills.skill2.description' />} />
          <Skill image={images.skill3} shape={images.shape3} title={<Text id='home.skills.skill3.title' />} description={<Text id='home.skills.skill3.description' />} />
          </div>
      </Element>
    </Container>

    {/* PROJECTS */}
    <Container>
      <Element name='projects' className={style.projects}>
        <div className={style.intro}>
          <div>
            <h1><Text id='home.projects.title' /></h1>
            <h3><Text id='home.projects.subtitle' /></h3>
          </div>
          <img src={images.deerHappy} alt='deerHappy' />
        </div>
        <div className={style.projectList} style={{height: expanded ? '2800px' : '1150px'}}>
          <ProjectPreview project='tgeu' />
          <ProjectPreview project='mangakan' />
          <ProjectPreview project='ublo' />
          {
            showAllProjects && <>
              <ProjectPreview project='dataneo' />
              <ProjectPreview project='barbart' />
              <ProjectPreview project='caps' />
              <ProjectPreview project='arc' />
            </>
          }
        </div>
        <button onClick={expanded ? handleLessProject : handleMoreProject}>{expanded ? <Text id='home.projects.less' /> : <Text id='home.projects.more' />}</button>
      </Element>
    </Container>
    <Footer />
    <Signature />
  </div>
}