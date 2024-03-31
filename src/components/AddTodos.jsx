import React from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../redux/reduxSlice'
import { v4 as uuidv4 } from "uuid";


function AddTodos() {
    const dispatch = useDispatch();
    const handleCreate = ()=>{
        dispatch(
            addTodo({
                id: uuidv4(),
                todo:document.getElementById("create-todo-input").value,
                completed:false,
            })
        );
    };
    return (
        <>
            <div className='create-todo container w-100'>
                <input
                    type="text"
                    className='create-todo-input'
                    placeholder='Add Todo...'
                    id='create-todo-input'
                />
                <button className='create-todo-btn' onClick={() => handleCreate()}>Create</button>
            </div>

        </>
    )
}

export default AddTodos