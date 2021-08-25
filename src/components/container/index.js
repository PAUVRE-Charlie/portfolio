import { h } from 'preact'
import style from './style.css'
import { Logo } from '../../assets/icons'

export default ({children}) => (
    <div className={style.container}>
        {children}
    </div>
)
