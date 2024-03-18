import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import TimeAgo from './TimeAgo';
import ReactionButton from './ReactionButton';

export default function SinglePostPage({match}) {
    const {postId} = match.params;
    const post  = useSelector(state => state.posts.find(post => post.id === postId));

    if(!post){
        return(
        <section>
            <h4>Post Not Found</h4>
        </section>
        )
    }

  return (
    <div className='container p-1'>
    <article>
        <h2>{post.title}</h2>
        <p>{post.content}</p>
        <p>Created by {post.user ? post.user : "Unknown"}</p>
        <TimeAgo timeStamp={post.date}/>
        <ReactionButton post={post}/>
        <Link to ={`/editposts/${postId}`}>
        <button>Edit Post</button>
        </Link>
    </article>
    </div>
  )
}
