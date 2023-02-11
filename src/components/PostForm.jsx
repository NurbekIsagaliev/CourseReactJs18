import React from 'react';
import MyInput from './UI/input/MyInput';
import MyButton from './UI/button/MyButton';
import { useState } from "react";

const PostForm = ({ create }) => {
  const [post, setPost] = useState({ title: '', body: '' })



  const addNewPost = (e) => {
    e.preventDefault()

    const newPost = {
      ...post,
      id: Date.now()
    }
    create(newPost)
    setPost({ title: '', body: '' })
  }


  return (
    <form>
      {/* Управляемый компонент*/}
      <MyInput
        value={post.title}
        onChange={e => setPost({ ...post, title: e.target.value })}
        type="text"
        placeholder="Nazvanie  posta"
      />
      {/* неуправляемый/неконтролируемый   компонент*/}
      <MyInput
        value={post.body}
        onChange={e => setPost({ ...post, body: e.target.value })}
        type="text"
        placeholder="Opisanie  posta"
      />

      <MyButton onClick={addNewPost}>Create Post</MyButton>
    </form>
  );
};

export default PostForm;