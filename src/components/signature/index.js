import { h } from 'preact'
import style from './style.css'
import { logo } from '../../assets/icons'
import { Text } from '../language'

export default () => (
    <div className={style.signature}>
        <p><Text id='signature.madeWith' /></p>
        <img src={logo} alt='logo_small' />
        <p><Text id='signature.author' /></p>
    </div>
)
