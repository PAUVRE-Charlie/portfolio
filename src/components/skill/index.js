import { h } from 'preact'
import { useState } from 'react'
import style from './style.css'
import SmallRect from '../smallRect'


export default ({image, imageSize, link, shape, title, description}) => {

    const [hover, setHover] = useState(false)

    return <div className={style.skill}>
        <div>
            <img className={style.shape} src={shape} alt='shape' />
            <SmallRect boost={link} reload={hover} />
            <SmallRect boost={link} reload={hover} />
            <SmallRect boost={link} reload={hover} />
            {
                link ?
                    <a native href={link} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} className={style.image} style={{ height: imageSize ?? '60%' }}><img src={image} alt='main_image' /></a>
                    : <img className={style.image} src={image} style={{ height: imageSize ?? '60%' }} alt='main_image' />
            }
        </div>
        {
            link ?
                <a native href={link} style={{textDecoration: hover ? 'underline': null}} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}><h3>{title}</h3></a>
                : <h3>{title}</h3>
        }
        <small>{description}</small>
    </div>
}
