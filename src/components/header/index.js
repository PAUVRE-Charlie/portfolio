import { h } from 'preact'
import { Element, Link } from 'react-scroll'
import style from './style.css'

import LanguageSelector from '../languageSelector'

import { logo } from '../../assets/icons'
import { Text } from '../language'

export default ({tabs}) => {

    return <Element name='header' className={style.header}>
        <a href={'/'}><img src={logo} alt='logo' /></a>
        <div>
            {
                tabs && tabs.length && tabs.map(tab => (
                    <Link to={tab}><p><Text id={`header.${tab}`} /></p></Link>
                ))
            }
            <LanguageSelector />
        </div>
    </Element>
}
