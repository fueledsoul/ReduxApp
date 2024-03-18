import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import PostAuthor from './PostAuthor';
import TimeAgo from './TimeAgo';
import ReactionButton from './ReactionButton';

export default function PostLists() {
    const posts = useSelector(state => state.posts);

    const orderedPosts = posts.slice().sort((a,b)=>b.date.localeCompare(a.date));

    const renderedPost = orderedPosts.map((data,index)=>{
        return(
            <>
            <article className='post-excerpt' key={index} style={{border:"1px solid black",marginTop:"10px",padding:"10px",textAlign:"center"}}>
                <h2>{data.title}</h2>
                <p className='post-content'>{data.content}</p>
                <Link to={`/posts/${data.id}`} className="button muted-button">
                View more
                </Link>
                
                <p>Created by {data.user ? data.user : "Unknown"}</p>
                {/* <PostAuthor userId={data.user}/> */}
                 <TimeAgo timeStamp={data.date}/>
                 <ReactionButton post={data} />
            </article>
            </>
        )
    })
  return (
    <section>
        <h1>Posts</h1>
        {renderedPost}
    
    </section>
  )
}
