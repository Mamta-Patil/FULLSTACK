import { createSlice } from "@reduxjs/toolkit";
// import listReducer from "./listSlice"
export const listSlice=createSlice({
    name:"todolist",
    reducers:{
        addTodoToList: (state, action) => {
            state.todoList.push(action.payload)
        },
        removeTodoToList: (state, action) => {
            state.todoList.push(action.payload)
        },
    }
})


export const {addTodoToList,removeTodoToList}=listSlice.actions;
export default listSlice.reducer