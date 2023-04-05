import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../commons/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div className={s.avatarItem}>
                <img src={props.profile.photos.large}/>
                <div className={s.block}>
                    <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;

//<div className={s.avatarDescription}><h4>Love cats</h4></div>
//<div className={s.avatarName}><h3>Dmitry Ilyin </h3></div>