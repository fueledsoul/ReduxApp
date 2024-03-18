import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { postAdded, postDelete } from './postSlice';
import { nanoid } from '@reduxjs/toolkit';

export default function AddPostsForm() {
    const[title,setTitle] = useState("");
    const[content,setContent] = useState("");
    const[userId,setUserId] = useState("");

    const dispatch = useDispatch();
    const users = useSelector(state=>state.users)
    const onTitleChanged = (e) => {
        setTitle(e.target.value);
    }

     const onContenChanged = (e) => {
        setContent(e.target.value);
    }

     const onUserChanged = (e) => {
        setUserId(e.target.value);
    }

    const deletePos = () =>{
        dispatch(postDelete())
    }

    const savePosts = (e) =>{
        e.preventDefault()
        if(title && content){
        dispatch(postAdded(title,content,userId));
        setContent("");
        setTitle("")
        }
    }

    const canSave = Boolean(title) && Boolean(content) && Boolean(userId);

    const userOptions = users.map(user=>(
        <option key={user.id} value={user.name}>
            {user.name}
        </option>
    ))

  return (
    <section>
      <h2>Add-Posts</h2>
      <button className='btn-danger' onClick={deletePos}>Delete Posts</button>
      <form>
        <label htmlFor='post'>Post Title</label>
        <input type="text" value={title} onChange={onTitleChanged}/>
        <label htmlFor='post'>Content : </label>
        <textarea type="text" value={content} onChange={onContenChanged}/>
        <label>Author</label>
        <select onChange={onUserChanged} value={userId}>
            <option valu=""></option>
            {userOptions}
        </select>
        <button  onClick={savePosts} disabled={!canSave}>Save Post</button>
      </form>

    </section>
  )
}
