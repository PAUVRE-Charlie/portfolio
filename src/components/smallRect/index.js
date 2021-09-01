import { h } from 'preact'
import style from './style.css'
import { logo } from '../../assets/icons'
import { Text } from '../language'

export default ({boost, position: {top, bottom, right, left} = {top: `${Math.random()*(boost ? 120 : 100)}%`, left: `${Math.random()*(boost ? 120 : 100)}%`}}) => {

    const rotation = Math.random() * 360
    const size = Math.random() * 7 + 6

    const color = ['#A57E59', '#DBB85F', '#91B5C8'][Math.floor(Math.random()*3)%3]

    return <div className={style.rect} style={{width: size, height: size, borderRadius: size/6, backgroundColor: color, transform: `rotate(${rotation}deg)`, top, bottom, right, left}} />
}
