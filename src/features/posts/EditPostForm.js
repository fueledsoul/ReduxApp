import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { editPost, postAdded, postDelete } from './postSlice';
import { nanoid } from '@reduxjs/toolkit';
import { useHistory } from 'react-router-dom';

export default function EditPostsForm({match}) {

    const{postId} =match.params;

    const post = useSelector(state => state.posts.find(post=>post.id === postId));

    const[title,setTitle] = useState(post.title);
    const[content,setContent] = useState(post.content);
    const dispatch = useDispatch();
    const history = useHistory();

    const onTitleChanged = (e) => {
        setTitle(e.target.value);
    }

     const onContenChanged = (e) => {
        setContent(e.target.value);
    }

    const EditPosts = (e) =>{
        e.preventDefault()
        if(title && content){
        dispatch(editPost({id:postId,title,content}));
        history.push(`/posts/${postId}`)
        setContent("");
        setTitle("")
        }
    }

  return (
    <section>
      <h2>Edit-Posts</h2>
      <form>
        <label htmlFor='post'>Post Title</label>
        <input type="text" value={title} onChange={onTitleChanged}/>
        <label htmlFor='post'>Content : </label>
        <textarea type="text" value={content} onChange={onContenChanged}/>
        <button  onClick={EditPosts}>Save Post</button>
      </form>

    </section>
  )
}
