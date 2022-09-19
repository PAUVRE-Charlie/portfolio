import { h } from 'preact'
import { useState } from 'react'
import { Link } from "react-router-dom";
import style from './style.css'
import SmallRect from '../smallRect'


export default ({type, tags}) => {

    return <div className={style.tags}>
        {[type, ...tags].map((tag, index) => (
            <div className={style.tag} style={{backgroundColor: index === 0 ? '#DBB85F': '#91B5C8'}}>
                <p>{tag}</p>
            </div>
        ))}
    </div>
}
