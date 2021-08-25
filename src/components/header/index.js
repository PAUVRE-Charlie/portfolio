import { h } from 'preact'
import style from './style.css'
import { logo } from '../../assets/icons'

export default () => (
    <div className={style.header}>
        <img src={logo} />
        <div>
            <p>Skills</p>
            <p>Projects</p>
            <p>Contact</p>
        </div>
    </div>
)
