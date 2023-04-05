import React, {useEffect, useState} from 'react';
import s from "./ProfileInfo.module.css";

const ProfileStatusWithHooks = (props) => {
    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            {!editMode &&
                <div>
                    <div onDoubleClick={activateEditMode}
                         className={s.avatarDescription}>{props.status || "No Status"}</div>
                </div>
            }
            {editMode &&
                <div>
                    <input value={status} onChange={onStatusChange} onBlur={deactivateEditMode} autoFocus={true}
                           className={s.input}/>
                </div>
            }
        </div>
    )
}

export default ProfileStatusWithHooks;
