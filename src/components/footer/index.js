import { h } from 'preact'
import style from './style.css'
import { Element } from 'react-scroll'

import Container from '../../components/container'

import * as images from '../../assets/images'
import { Text } from '../language'

export default () => {

    return <Container>
        <Element name='contact' className={style.footer}>
            <div>
                <h1><Text id='footer.title' /></h1>
                <h3><Text id='footer.subtitle' /></h3>
                <div>
                    <h3><Text id='footer.mail' /></h3>
                    <h3><Text id='footer.tel' /></h3>
                </div>
            </div>
            <img src={images.deerEating} />
        </Element>
    </Container>
}
