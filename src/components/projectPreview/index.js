import { h } from 'preact'
import style from './style.css'

import { github_medium, web } from '../../assets/icons'

import { shape1 } from '../../assets/images'

export default ({name, folderName, description, linkWeb, linkGithub, context, date, team, process}) => (
    <div className={style.projectPreview}>
        <div className={style.preview}>
            <img className={style.shape} src={shape1} />
            <a className={style.image} href={`project/${folderName}`}><img className={style.image} src={`../../assets/images/${folderName}/preview.png`} /></a>
        </div>
        <div className={style.info}>
            <a className={style.image} href={`project/${folderName}`}><h2>{name}</h2></a>
            <h4>{date}</h4>
            <small>{description}</small>
            <div>
                {linkWeb && <a href={linkWeb} rel="noreferrer" target="_blank"><img src={web} /></a>}
                {linkGithub && <a href={linkGithub} rel="noreferrer" target="_blank"><img src={github_medium} /></a>}
            </div>
        </div>
    </div>
)
