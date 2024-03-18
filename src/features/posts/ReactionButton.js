import React from 'react'
import { useDispatch } from 'react-redux'
import { reactionAdded } from './postSlice';

const reactionEmoji = {
    thumbsup : "👍",
    raisingHands:"🙌",
    heart:"❤️",
    rocket:"🚀",
    eyes:"👀"
}


export default function ReactionButton({post}) {
    const dispatch = useDispatch();
    const reactionButton = Object.entries(reactionEmoji).map(([name,emoji]) => {
  return (
    <button key={name} type="button" className='muted-button reaction-button'
    onClick={()=>dispatch(reactionAdded({postId:post.id,reaction:name}))}>
        {emoji} {post.reactions[name]}
    </button>
  )
    })

    return(
        <div>
            {reactionButton}
        </div>
    )

}
