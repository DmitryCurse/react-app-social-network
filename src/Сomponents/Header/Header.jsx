import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <header className={s.header}>
        <img
            src='https://i1.wp.com/files.123freevectors.com/wp-content/original/110489-blue-blurred-background-vector.jpg'/>
        <div className={s.loginBlock}>
            {props.isAuth
                ? <div>{props.login} - <button className={s.button} onClick={props.logout}>Log out</button></div>
                : <NavLink to={'/login'}>Login</NavLink>}
        </div>
    </header>
}

export default Header;