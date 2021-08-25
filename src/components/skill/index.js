import { h } from 'preact'
import style from './style.css'
import { Logo } from '../../assets/icons'

export default ({image, shape, title, description}) => (
    <div className={style.skill}>
        <div>
            <img className={style.shape} src={shape} />
            <img className={style.image} src={image} />
        </div>
        <h3>{title}</h3>
        <small>{description}</small>
    </div>
)
