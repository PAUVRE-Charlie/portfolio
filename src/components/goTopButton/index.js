import { h } from 'preact'
import { scroller } from 'react-scroll'
import style from './style.css'
import { arrowUp } from '../../assets/icons'

export default ({scroll}) => (
    <button className={style.goTopButton} style={{display: scroll <= 600 ? 'none' : 'block'}} onClick={() => scroller.scrollTo('header')} >
        <img src={arrowUp} alt='arrowUp' />
    </button>
)