import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <img
        src="https://media.moddb.com/images/groups/1/3/2392/cat.jpg"
        className={s.imgPost}
      />
      {props.message}
      <div className={s.postItem}>
        <img src="https://clipground.com/images/herz-orange-clipart-6.jpg" />
        <span className={s.likes}>{props.likesCount}</span>
      </div>
    </div>
  );
};

export default Post;
