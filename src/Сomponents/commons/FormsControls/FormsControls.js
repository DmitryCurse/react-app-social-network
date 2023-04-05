import React from 'react'
import styles from "./FormsControls.module.css";
import {Field} from "redux-form";

const FormControl = ({input, meta: {touched, error}, children, ...props}) => {
    const showError = touched && error
    return (
        <div className={styles.formControl + "" + (showError ? styles.error : "")}>
            <div>
                {children}
            </div>
            <div className={styles.errorBlockSpan}>
                {showError && <span>{error}</span>}
            </div>
        </div>
    )
}

export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props
    return <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
}
export const Input = (props) => {
    const {input, meta, child, ...restProps} = props
    return <FormControl {...props}><input {...input} {...restProps}/></FormControl>
}

export const createField = (placeholder, name, validators, component, props = {}, text = '') => (
    <div>
        <Field placeholder={placeholder} name={name} validate={validators} component={component}
               className={props} {...props}/> {text}
    </div>
)