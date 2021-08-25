import { h } from 'preact'
import style from './style.css'
import { Logo } from '../../assets/icons'

export default () => (
    <div className={style.header}>
        <img src={Logo} />
        <div>
            <p>Skills</p>
            <p>Projects</p>
            <p>Contact</p>
        </div>
    </div>
)
