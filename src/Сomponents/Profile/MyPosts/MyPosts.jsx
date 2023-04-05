import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/helpers/validators";
import {Textarea} from "../../commons/FormsControls/FormsControls";

const maxLength50 = maxLengthCreator(50)

const MyPosts = React.memo((props) => {
    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)
    let onAddPost = (values) => {
        props.addPost(values.newPostText)
    }
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <AddPostReduxForm onSubmit={onAddPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
})

const ProfileForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name='newPostText' component={Textarea} className={s.textarea} validate={[required, maxLength50]}
                       placeholder={'Post message'}/>
            </div>
            <div>
                <button className={s.button}>Add post</button>
            </div>
        </form>
    )
}

const AddPostReduxForm = reduxForm({form: 'profileAddPostForm'})(ProfileForm)

export default MyPosts;