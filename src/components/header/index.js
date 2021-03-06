import { h } from 'preact'
import { Element, Link as LinkScroll } from 'react-scroll'
import { Link } from 'react-router-dom'
import style from './style.css'

import LanguageSelector from '../languageSelector'

import { logo } from '../../assets/icons'
import { Text } from '../language'

export default ({tabs}) => {

    return <Element name='header' className={style.header}>
        <Link to={'/'}><img src={logo} alt='logo'/></Link>
        <div>
            {
                tabs && tabs.length && tabs.map(tab => (
                    <LinkScroll to={tab}><p><Text id={`header.${tab}`} /></p></LinkScroll>
                ))
            }
            <LanguageSelector />
        </div>
    </Element>
}
