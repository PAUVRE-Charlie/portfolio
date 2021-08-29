import { h } from 'preact'
import { useState } from 'react'
import { Element } from 'react-scroll'
import style from './style.css'

import Header from '../../components/header'
import Container from '../../components/container'
import Skill from '../../components/skill'
import ProjectPreview from '../../components/projectPreview'
import Footer from '../../components/footer'
import Signature from '../../components/signature'

import * as images from '../../assets/images'
import {github_dark, linkedin} from '../../assets/icons'
import {resume_english} from '../../assets/files'
import { Text } from '../../components/language'

const Home = () => {

  const [expanded, setExpanded] = useState(false)
  const [showAllProjects, setShowAllProject] = useState(false)

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
        <img src={images.deerHello} alt='deerHello' />
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
            <a href={resume_english} rel="noreferrer" target="_blank" download="resume_Charlie_Pauvre"><button><Text id='home.downloadResume' /></button></a>
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
          <ProjectPreview project='ublo' />
          <ProjectPreview project='mangakan' />
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

export default Home
