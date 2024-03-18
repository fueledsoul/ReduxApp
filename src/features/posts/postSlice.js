import { createSlice, nanoid } from "@reduxjs/toolkit";
import {sub} from "date-fns";

const initialState = [
    {id:"1", title:"First Post", content:"Bitcoin to moon",date:sub(new Date,{minutes:10}).toISOString(),reactions:{
        thumbsup :0,
    raisingHands:0,
    heart:0,
    rocket:0,
    eyes:0
    }},
    {id:"2", title:"Second Post", content:"Mack is Rock",
date:sub(new Date,{minutes:20}).toISOString(),reactions:{
        thumbsup :0,
    raisingHands:0,
    heart:0,
    rocket:0,
    eyes:0
    }},
]

const postsSlice = createSlice({
    name:"posts",
    initialState,
    reducers:{
        reactionAdded(state,action){
            const {postId,reaction} = action.payload;
            const existingPost = state.find(post=>post.id === postId);
            if(existingPost){
                existingPost.reactions[reaction]++;
            }
        },
        postAdded : {
            reducer(state,action){
                state.push(action.payload)
            },
            prepare(title,content,userId){
                return{
                    payload:{
                        date:new Date().toISOString(),
                        id:nanoid(),
                        title,
                        content,
                        user:userId,
                        reactions:{
                            thumbsup :0,
                            raisingHands:0,
                            heart:0,
                            rocket:0,
                            eyes:0
                        }
                    }
                }
            }
        },
        editPost(state,action){
            const {id,title,content} = action.payload
            const findExisting = state.find(post=>post.id === id)
            if(findExisting){
                    findExisting.title = title;
                    findExisting.content = content;
            }
        }
    }
})

export const {postAdded,postDelete,editPost,reactionAdded} = postsSlice.actions

export default postsSlice.reducer;