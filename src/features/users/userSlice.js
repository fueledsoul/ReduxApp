import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id:0,name:"Tinna maxk"
    },
    {
        id:1,name:"John Wick"
    },
    {
        id:2,name:"Madison Pack"
    }
]

const userSlice = createSlice({
    name:"users",
    initialState,
    reducers:{
    }
})

export default userSlice.reducer
