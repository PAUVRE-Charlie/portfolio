import { h } from 'preact'
import { useState } from 'react'
import style from './style.css'

import Header from '../../components/header'
import Container from '../../components/container'
import Skill from '../../components/skill'
import ProjectPreview from '../../components/projectPreview'

import * as images from '../../assets/images'
import {github_dark, linkedin} from '../../assets/icons'
import {resume_english} from '../../assets/files'

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

  const projects = {
    tgeu: {
      name: 'TGEU Website',
      folderName: 'tgeu',
      description: 'I worked in a two person team with a designer during 1.5 months to build an interactive version of the Trans Rights Map in English and Russian, on the occasion of the International Day Against Homophobia, Biphobia, and Transphobia.',
      linkWeb: 'https://transrightsmap.tgeu.org/',
      context: 'On the occasion of the International Day Against Homophobia, Biphobia, and Transphobia, TGEU (Trans Gender Europe) wanted to build a website that would represent the repartition of rights for transgender people in Europe & Central Asia. They wanted it as maps and the only thing they had was their data in excel sheets.',
      date: 'April - May 2021',
      team: ['Mia Chávez Ruz'],
      process: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo elementum at id rhoncus turpis mi eget. Sit feugiat at viverra netus et nam ornare. Massa tincidunt tortor arcu egestas blandit sit pharetra, rhoncus. Sed amet arcu in volutpat sit nunc nisl, semper.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo elementum at id rhoncus turpis mi eget. Sit feugiat at viverra netus et nam ornare. Massa tincidunt tortor arcu egestas blandit sit pharetra, rhoncus. Sed amet arcu in volutpat sit nunc nisl, semper.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo elementum at id rhoncus turpis mi eget. Sit feugiat at viverra netus et nam ornare. Massa tincidunt tortor arcu egestas blandit sit pharetra, rhoncus. Sed amet arcu in volutpat sit nunc nisl, semper.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo elementum at id rhoncus turpis mi eget. Sit feugiat at viverra netus et nam ornare. Massa tincidunt tortor arcu egestas blandit sit pharetra, rhoncus. Sed amet arcu in volutpat sit nunc nisl, semper.'
      ],
    },
    ublo: {
      name: 'Ublo',
      folderName: 'ublo',
      description: 'I worked alongside designers and other developers to build a property management solution for public lessors, using React and a REST api. I was also in charge of creating the docker containers and deploying them on AWS.',
      linkWeb: 'https://www.ublo.immo/',
      context: 'June & July 2021',
      date: 'May - June 2021',
      team: ['Dev team of Ublo'],
      process: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo elementum at id rhoncus turpis mi eget. Sit feugiat at viverra netus et nam ornare. Massa tincidunt tortor arcu egestas blandit sit pharetra, rhoncus. Sed amet arcu in volutpat sit nunc nisl, semper.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo elementum at id rhoncus turpis mi eget. Sit feugiat at viverra netus et nam ornare. Massa tincidunt tortor arcu egestas blandit sit pharetra, rhoncus. Sed amet arcu in volutpat sit nunc nisl, semper.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo elementum at id rhoncus turpis mi eget. Sit feugiat at viverra netus et nam ornare. Massa tincidunt tortor arcu egestas blandit sit pharetra, rhoncus. Sed amet arcu in volutpat sit nunc nisl, semper.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo elementum at id rhoncus turpis mi eget. Sit feugiat at viverra netus et nam ornare. Massa tincidunt tortor arcu egestas blandit sit pharetra, rhoncus. Sed amet arcu in volutpat sit nunc nisl, semper.'
      ],
    },
    mangakan: {
      name: 'Mangakan',
      folderName: 'mangakan',
      description: 'With a friend, I am designing and developing an app whose goal is to help manga and manhwas readers keep tabs of what they are reading and at which chapter they are at. We use Figma for designs and React with MongoDB for code.',
      context: '',
      date: 'April 2021 - now',
      team: ['Chloé Oulabsir'],
      process: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo elementum at id rhoncus turpis mi eget. Sit feugiat at viverra netus et nam ornare. Massa tincidunt tortor arcu egestas blandit sit pharetra, rhoncus. Sed amet arcu in volutpat sit nunc nisl, semper.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo elementum at id rhoncus turpis mi eget. Sit feugiat at viverra netus et nam ornare. Massa tincidunt tortor arcu egestas blandit sit pharetra, rhoncus. Sed amet arcu in volutpat sit nunc nisl, semper.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo elementum at id rhoncus turpis mi eget. Sit feugiat at viverra netus et nam ornare. Massa tincidunt tortor arcu egestas blandit sit pharetra, rhoncus. Sed amet arcu in volutpat sit nunc nisl, semper.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo elementum at id rhoncus turpis mi eget. Sit feugiat at viverra netus et nam ornare. Massa tincidunt tortor arcu egestas blandit sit pharetra, rhoncus. Sed amet arcu in volutpat sit nunc nisl, semper.'
      ],
    },
    dataneo: {
      name: 'Dataneo',
      folderName: 'dataneo',
      description: '',
      linkWeb: 'https://www.dataneo.fr/',
      context: '',
      date: 'March 2021',
      team: ['Alexandre Brajeux', 'Eva Vermot'],
      process: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo elementum at id rhoncus turpis mi eget. Sit feugiat at viverra netus et nam ornare. Massa tincidunt tortor arcu egestas blandit sit pharetra, rhoncus. Sed amet arcu in volutpat sit nunc nisl, semper.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo elementum at id rhoncus turpis mi eget. Sit feugiat at viverra netus et nam ornare. Massa tincidunt tortor arcu egestas blandit sit pharetra, rhoncus. Sed amet arcu in volutpat sit nunc nisl, semper.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo elementum at id rhoncus turpis mi eget. Sit feugiat at viverra netus et nam ornare. Massa tincidunt tortor arcu egestas blandit sit pharetra, rhoncus. Sed amet arcu in volutpat sit nunc nisl, semper.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo elementum at id rhoncus turpis mi eget. Sit feugiat at viverra netus et nam ornare. Massa tincidunt tortor arcu egestas blandit sit pharetra, rhoncus. Sed amet arcu in volutpat sit nunc nisl, semper.'
      ],
    },
    barbart: {
      name: 'Barb\'Art',
      folderName: 'barbart',
      description: '',
      linkGithub: 'https://github.com/ThomRI/BarbArt',
      context: '',
      date: 'July 2020 - December 2020',
      team: ['Thomas Rossi'],
      process: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo elementum at id rhoncus turpis mi eget. Sit feugiat at viverra netus et nam ornare. Massa tincidunt tortor arcu egestas blandit sit pharetra, rhoncus. Sed amet arcu in volutpat sit nunc nisl, semper.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo elementum at id rhoncus turpis mi eget. Sit feugiat at viverra netus et nam ornare. Massa tincidunt tortor arcu egestas blandit sit pharetra, rhoncus. Sed amet arcu in volutpat sit nunc nisl, semper.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo elementum at id rhoncus turpis mi eget. Sit feugiat at viverra netus et nam ornare. Massa tincidunt tortor arcu egestas blandit sit pharetra, rhoncus. Sed amet arcu in volutpat sit nunc nisl, semper.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo elementum at id rhoncus turpis mi eget. Sit feugiat at viverra netus et nam ornare. Massa tincidunt tortor arcu egestas blandit sit pharetra, rhoncus. Sed amet arcu in volutpat sit nunc nisl, semper.'
      ],
    },
    caps: {
      name: 'Caps',
      folderName: 'caps',
      description: '',
      context: '',
      date: 'January 2021 - March 2021',
      team: ['Pierre Schmutz'],
      process: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo elementum at id rhoncus turpis mi eget. Sit feugiat at viverra netus et nam ornare. Massa tincidunt tortor arcu egestas blandit sit pharetra, rhoncus. Sed amet arcu in volutpat sit nunc nisl, semper.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo elementum at id rhoncus turpis mi eget. Sit feugiat at viverra netus et nam ornare. Massa tincidunt tortor arcu egestas blandit sit pharetra, rhoncus. Sed amet arcu in volutpat sit nunc nisl, semper.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo elementum at id rhoncus turpis mi eget. Sit feugiat at viverra netus et nam ornare. Massa tincidunt tortor arcu egestas blandit sit pharetra, rhoncus. Sed amet arcu in volutpat sit nunc nisl, semper.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo elementum at id rhoncus turpis mi eget. Sit feugiat at viverra netus et nam ornare. Massa tincidunt tortor arcu egestas blandit sit pharetra, rhoncus. Sed amet arcu in volutpat sit nunc nisl, semper.'
      ],
    },
    arc: {
      name: 'Atlantic Robotic Club',
      folderName: 'arc',
      description: '',
      linkWeb: 'https://atlantic-robotic-club.netlify.app/',
      linkGithub: 'https://github.com/PAUVRE-Charlie/atlantic-robotic-club',
      context: '',
      date: 'September 2020 - January 2021',
      team: [],
      process: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo elementum at id rhoncus turpis mi eget. Sit feugiat at viverra netus et nam ornare. Massa tincidunt tortor arcu egestas blandit sit pharetra, rhoncus. Sed amet arcu in volutpat sit nunc nisl, semper.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo elementum at id rhoncus turpis mi eget. Sit feugiat at viverra netus et nam ornare. Massa tincidunt tortor arcu egestas blandit sit pharetra, rhoncus. Sed amet arcu in volutpat sit nunc nisl, semper.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo elementum at id rhoncus turpis mi eget. Sit feugiat at viverra netus et nam ornare. Massa tincidunt tortor arcu egestas blandit sit pharetra, rhoncus. Sed amet arcu in volutpat sit nunc nisl, semper.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo elementum at id rhoncus turpis mi eget. Sit feugiat at viverra netus et nam ornare. Massa tincidunt tortor arcu egestas blandit sit pharetra, rhoncus. Sed amet arcu in volutpat sit nunc nisl, semper.'
      ],
    }
  }

  return <div className={style.home}>
    <Header />
    {/* HERO */}
    <Container>
      <div className={style.hero}>
        <img src={images.deerHello} />
        <div style={{ overflow: 'hidden' }}>
          <div>
            <h1>Hello I'm Charlie 👋🏼</h1>
            <h3>A Front-end Developer based in Bruxelles</h3>
          </div>
          <div className={style.introduction}>
            <p>I am a French web and app developer with a strong eye for innovative design and a keen understanding of techniques geared toward optimum user experience and low environmental impact.</p>
            <p>I grew up in Paris and studied at IMT Atlantique in Nantes, France. I currently work in Bruxelles (Belgium) and I would like to continue to travel in a way to discover new cities and cultures. </p>
          </div>
          <div className={style.footerHero}>
            <a href={resume_english} rel="noreferrer" target="_blank" download="resume_Charlie_Pauvre"><button>Download my resume 📭</button></a>
            <div className={style.socialMedia}>
              <a href='https://www.linkedin.com/in/charlie-pauvre/' rel="noreferrer" target="_blank"><img src={linkedin} /></a>
              <a href='https://github.com/PAUVRE-Charlie/' rel="noreferrer" target="_blank"><img src={github_dark} /></a>
            </div>
          </div>
        </div>
      </div>
    </Container>

    {/* SKILLS */}
    <Container>
      <div>
        <h1>My Skills</h1>
        <h3>Passionate about front-end development, UX/UI Design Enthusiast 💡</h3>
        <div className={style.skills}>
          <Skill image={images.skill1} shape={images.shape1} title='Front-end & Design' description='Front-end dev in HTML/CSS, Javascript, TypeScript and Design on Figma, Adobe XD, Illustrator' />
          <Skill image={images.skill2} shape={images.shape2} title='Back-end & App' description='Back-end dev in Python, Node, Apollo/Express, Graphql, React, Flutter, Java, XML' />
          <Skill image={images.skill3} shape={images.shape3} title='CMS' description='I can develop and configure Wordpress, Shopify, AWS and Docker' />
        </div>
      </div>
    </Container>

    {/* PROJECTS */}
    <Container>
      <div className={style.projects}>
        <div className={style.intro}>
          <div>
            <h1>My Projects</h1>
            <h3>Discover all the projects I’ve been working on during my internships, studies and my personals projects 🚀 </h3>
          </div>
          <img src={images.deerHappy} />
        </div>
        <div className={style.projectList} style={{height: expanded ? '2800px' : '1150px'}}>
          <ProjectPreview {...projects.tgeu} />
          <ProjectPreview {...projects.ublo} />
          <ProjectPreview {...projects.mangakan} />
          {
            showAllProjects && <>
              <ProjectPreview {...projects.dataneo} />
              <ProjectPreview {...projects.barbart} />
              <ProjectPreview {...projects.caps} />
              <ProjectPreview {...projects.arc} />
            </>
          }
        </div>
        <button onClick={expanded ? handleLessProject : handleMoreProject}>{expanded ? 'Less projects' : 'More projects'}</button>
      </div>
    </Container>
  </div>
}

export default Home
