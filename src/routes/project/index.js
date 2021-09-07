import { h } from 'preact'
import style from './style.css'

import Header from '../../components/header'
import Container from '../../components/container'
import Footer from '../../components/footer'
import Signature from '../../components/signature'
import SmallRect from '../../components/smallRect'

import { github_medium } from '../../assets/icons'
import Skill from '../../components/skill'
import en from '../../assets/data/languages/en.json'

//import projects from '../../assets/data/projects'
import * as images from '../../assets/images'
import { Text } from '../../components/language'


export default ({project}) => {

  const { app1, app2, web1, web2, web3, web4, web5 } =  images[project]

  return (
    <div className={style.project}>
      <Header tabs={['contact']} />
      <Container>
        <div className={style.intro}>
          <div className={style.preview}>
            <SmallRect position={{top: '0%', left: '50%'}} />
            <SmallRect position={{top: '70%', left: '20%'}} />
            <SmallRect position={{top: '30%', left: '100%'}} />
            <img className={style.image} src={`../../assets/images/${project}/preview.png`} alt='preview' />
          </div>
          <div className={style.info}>
            <h1><Text id={`projects.${project}.name`} /></h1>
            <p><Text id={`projects.${project}.description`} /></p>
            <div>
              {en.projects[project].web && <a href={en.projects[project].web} rel="noreferrer" target="_blank"><button><Text id='project.launchWeb' /></button></a>}
              {en.projects[project].github && <a href={en.projects[project].github} rel="noreferrer" target="_blank"><img src={github_medium} alt='github' /></a>}
            </div>
          </div>
        </div>
        <div className={style.details}>
          <div className={style.context}>
            <h2><Text id='project.context.title' /></h2>
            <p><Text id={`projects.${project}.context`} /></p>
          </div>
          <div className={style.infos}>
            <div>
              <h3><Text id='project.context.date' /></h3>
              <p><Text id={`projects.${project}.date`} /></p>
            </div>
            {
              en.projects[project].company && <div>
              <h3><Text id='project.context.company' /></h3>
              <p><Text id={`projects.${project}.company`} /></p>
            </div>
            }
            {
              en.projects[project].team && <div>
              <h3><Text id='project.context.team' /></h3>
              <p><Text id={`projects.${project}.team`} /></p>
            </div>
            }
          </div>
        </div>
        <div className={style.process}>
          <h2><Text id='project.process.title' /></h2>
          {
            en.projects[project].process.map((_, i) => (
              <div>
                <h4>👉🏻</h4>
                <p><Text id={`projects.${project}.process.${i}`} /></p>
              </div>
            ))
          }
        </div>
        <div className={style.screens}>
          <h2><Text id='project.screens.title' /></h2>
          <div>
            {
              web1 && web2 && <div>
                <img src={web1} alt='web1' />
                <img src={web2} alt='web2' />
              </div>
            }
            {
              web3 && web4 && web5 && <div>
                <img src={web3} alt='web3' />
                <img src={web4} alt='web4' />
                <img src={web5} alt='web5' />
              </div>
            }
            {
              app1 && app2 && <div>
                <img src={app1} alt='app1' />
                <img src={app2} alt='app2' />
              </div>
            }
          </div>
        </div>
      </Container>
      <Container>
        <div className={style.moreProjects}>
          <h1><Text id='project.more.title' /></h1>
          <h3><Text id='project.more.subtitle' /></h3>
          <div className={style.skills}>
            {
              (project === 'tgeu' ? ['dataneo', 'mangakan', 'ublo'] : project === 'ublo' ? ['tgeu', 'mangakan', 'dataneo'] : project === 'mangakan' ? ['tgeu', 'dataneo', 'ublo'] : ['tgeu', 'mangakan', 'ublo']).map(projectName => (
                <Skill image={images[projectName].preview} link={`../project/${projectName}`} imageSize='120%' shape={images.shape1} title={<Text id={`projects.${projectName}.name`} />} description={<Text id={`projects.${projectName  }.smallDescription`} />} />
              ))
            }
          </div>
        </div>
      </Container>
      <Footer />
      <Signature />
    </div>
  )
}