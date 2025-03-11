import React from 'react'
import { data } from '../data/list'
import { removeTodoToList } from '@/redux/listSlice'

const Todolist = () => {
    return (
        <div>
            {data?.map((todo, index) => (
                <div>
                    <p> {todo.fruit} </p>
                    <span onClick={() => dispatch(removeTodoToList(index))}>Remove</span>
                </div>
            ))}
        </div>
    )
}

export default Todolist
