import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
  return (
  <nav className={s.nav}>
  <div className={s.item}>
  <img className='profile-icon' src='https://cdn-icons-png.flaticon.com/512/747/747376.png'/>
  <NavLink to='/profile' className = { navData => navData.isActive ? s.active : s.item }>Profile</NavLink>
    </div>
  <div className={`${s.item} ${s.active}`}>
  <img className='messages-icon' src='https://cdn-icons-png.flaticon.com/512/2462/2462719.png'/>
  <NavLink to='/dialogs' className = { navData => navData.isActive ? s.active : s.item }>Messages</NavLink>
    </div>
    <div className={`${s.item} ${s.active}`}>
      <img className='messages-icon' src='https://cdn-icons-png.flaticon.com/512/880/880543.png'/>
      <NavLink to='/users' className = { navData => navData.isActive ? s.active : s.item }>Users</NavLink>
    </div>
  <div className={s.item}>
  <img className='news-icon' src='https://cdn-icons-png.flaticon.com/512/3249/3249786.png'/>
  <NavLink to='/news' className = { navData => navData.isActive ? s.active : s.item }>News</NavLink>
    </div>
  <div className={s.item}>
  <img className='music-icon' src='https://cdn-icons-png.flaticon.com/512/3747/3747233.png'/>
  <NavLink to='/music' className = { navData => navData.isActive ? s.active : s.item }>Music</NavLink>
    </div>
  <div className={s.item}>
  <img className='settings-icon' src='https://cdn-icons-png.flaticon.com/512/503/503822.png'/>
  <NavLink to='/settings' className = { navData => navData.isActive ? s.active : s.item }>Settings</NavLink>
    </div>
</nav>
)
}

export default Navbar;