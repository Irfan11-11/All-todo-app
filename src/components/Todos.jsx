import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { completeTodo, deleteTodo } from '../redux/reduxSlice';

function Todos() {
    const { todos } = useSelector((state) => state.todoReducer)
    const dispatch = useDispatch();

    const handleComplete = (e, id) => {
        dispatch(
            completeTodo({
                id: id,
                completed: e.target.checked,
            })
        )
    }

    const deleteTodos = (id) => {
        dispatch(deleteTodo({
            id: id,
        })
        );
    };
    useEffect(() => {
        console.log("Todos", todos);
    }, [todos]);
    return (
        <>
            <div className='todo-list'>
                {
                    todos &&
                    todos.map((todo) => {
                        return (
                            <div className='todo'>
                                <input
                                    type="checkbox"
                                    id='todo-input'
                                    checked={todo.completed}
                                    onClick={(e) => handleComplete(e, todo.id)}
                                />
                                <p>{todo.todo}</p>
                                <button className='delete-todo' onClick={() => deleteTodos(todo.id)}>DELETE</button>
                            </div>
                        )

                    })
                }
            </div>
        </>
    )
}

export default Todos