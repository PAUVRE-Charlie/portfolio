import { h } from 'preact'
import { useState } from 'react'
import { Link } from "react-router-dom";
import style from './style.css'

import { Text } from '../../components/language'
import SmallRect from '../../components/smallRect'
import en from '../../assets/data/languages/en.json'

import { github_medium, web } from '../../assets/icons'

import { shape1 } from '../../assets/images'
import Tags from '../tags';

export default ({project}) => {

    const [hover, setHover] = useState(false)

    return <div className={style.projectPreview}>
        <div className={style.preview}>
            <img className={style.shape} src={shape1} alt='shape' />
            <SmallRect reload={hover} />
            <SmallRect reload={hover} />
            <SmallRect reload={hover} />
            <Link className={style.image} to={`project/${project}`} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}><img className={style.image} src={`../../assets/images/${project}/preview.png`} alt='preview' /></Link>
        </div>
        <div className={style.info}>
            <Link className={style.image} style={{ textDecoration: hover ? 'underline' : null }} to={`project/${project}`} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}><h2><Text id={`projects.${project}.name`} /></h2></Link>
            <h4><Text id={`projects.${project}.date`} /></h4>
            {en.projects[project].tags && <Tags type={en.projects[project].type} tags={en.projects[project].tags} />}
            <small><Text id={`projects.${project}.description`} /></small>
            <div className={style.lastpart}>
                {en.projects[project].web && <a href={en.projects[project].web} rel="noreferrer" target="_blank"><img src={web} alt='webLink' /></a>}
                {en.projects[project].github && <a href={en.projects[project].github} rel="noreferrer" target="_blank"><img src={github_medium} alt='githubLink' /></a>}
            </div>
        </div>
    </div>
}
