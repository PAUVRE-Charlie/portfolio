import { h } from 'preact'
import { useState } from 'react'
import style from './style.css'

import { Text } from '../../components/language'
import en from '../../assets/data/languages/en.json'

import { github_medium, web } from '../../assets/icons'

import { shape1 } from '../../assets/images'

export default ({project}) => {

    const [hover, setHover] = useState(false)

    return <div className={style.projectPreview}>
        <div className={style.preview}>
            <img className={style.shape} src={shape1} alt='shape' />
            <a className={style.image} href={`project/${project}`} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}><img className={style.image} src={`../../assets/images/${project}/preview.png`} alt='preview' /></a>
        </div>
        <div className={style.info}>
            <a className={style.image} style={{ textDecoration: hover ? 'underline' : null }} href={`project/${project}`} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}><h2><Text id={`projects.${project}.name`} /></h2></a>
            <h4><Text id={`projects.${project}.date`} /></h4>
            <small><Text id={`projects.${project}.description`} /></small>
            <div>
                {en.projects[project].web && <a href={en.projects[project].web} rel="noreferrer" target="_blank"><img src={web} alt='webLink' /></a>}
                {en.projects[project].github && <a href={en.projects[project].github} rel="noreferrer" target="_blank"><img src={github_medium} alt='githubLink' /></a>}
            </div>
        </div>
    </div>
}
