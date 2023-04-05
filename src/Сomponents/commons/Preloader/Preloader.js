import React from "react";
import preloaderPng from '../../../assets/images/Preloader.gif'
import s from './Preloader.module.css'

let Preloader = (props) => {
    return <div className={s.preloader}>
        <img src={preloaderPng}/>
    </div>
}

export default Preloader