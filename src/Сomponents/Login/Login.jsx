import React from "react";
import {Field, reduxForm} from "redux-form";
import s from './Login.module.css'
import {createField, Input} from "../commons/FormsControls/FormsControls";
import {required} from "../../utils/helpers/validators";
import {login} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {Navigate} from "react-router-dom";
import style from "../commons/FormsControls/FormsControls.module.css"

const LoginForm = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField('Email', 'email', [required], Input, s.input)}
            {createField('Password', 'password', [required], Input, {type: 'password', className:s.input})}
            {createField(null, 'rememberMe', [], Input, {type: 'checkbox', className: s.remember})} remember me

            {error && <div className={style.formSummaryError}>
                {error}
            </div>}
            <div className={s.buttonBlock}>
                <button className={s.button}>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)
const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth) {
        return <Navigate replace to="/profile"/>;
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login)
