import { h } from 'preact'
import { Link } from 'react-scroll'
import style from './style.css'
import { logo } from '../../assets/icons'

export default () => {

    return <div className={style.header}>
        <img src={logo} />
        <div>
            <Link to='skills'><p>Skills</p></Link>
            <Link to='projects'><p>Projects</p></Link>
            <Link to='contact'><p>Contact</p></Link>
        </div>
    </div>
}
