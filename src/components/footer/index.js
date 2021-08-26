import { h } from 'preact'
import style from './style.css'
import { Element } from 'react-scroll'

import Container from '../../components/container'
import ProjectPreview from '../../components/projectPreview'

import * as images from '../../assets/images'

export default () => {

    return <Container>
        <Element name='contact' className={style.footer}>
            <div>
                <h1>Want to know more?</h1>
                <h3>Let’s discuss around a cup of popcorn 🍿</h3>
                <div>
                    <h3>Mail : chpauvre@gmail.com</h3>
                    <h3>Tel : +33 6 67 62 42 64</h3>
                </div>
            </div>
            <img src={images.deerEating} />
        </Element>
    </Container>
}
