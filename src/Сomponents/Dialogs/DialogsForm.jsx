/*
import React from "react";
import {Field, reduxForm} from "redux-form";
import s from "./Dialogs.module.css";let addNewMessage = (values) => {
    alert(values.newMessageBody)
}
const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name='newMessageBody' component='textarea' placeholder='Enter your message'
                       className={s.textarea}/>
            </div>
            <div>
                <button className={s.button}>Send</button>
            </div>
        </form>
    )
}

const AddMesageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)

export default AddMesageFormRedux
*/
