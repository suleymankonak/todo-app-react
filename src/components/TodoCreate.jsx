import React, { useEffect, useState } from 'react';
import '../css/TodoCreate.css'
import { useSelector, useDispatch } from 'react-redux'
import { addTodoAsync } from '../redux/todos';

function TodoCreate() {
    const [inputValue, setInputValue] = useState('')
    const dispatch = useDispatch();

    function handleAddTodo() {
        dispatch(addTodoAsync(inputValue))
        setInputValue('')
    }

    return (
        <div className='main-container-div'>

            <div className="h1-div">
                <h1 className="header-h1">TODO ANA SAYFASI</h1>
            </div>

            <div className='container-div'>
                <div className='input-div'>
                    <input onChange={(e) => setInputValue(e.target.value)} value={inputValue} placeholder='Todo Giriniz.' type="text" className="todo-Add-Input" />

                </div>

                <div className='button-div'>
                    <button onClick={handleAddTodo} className="todo-Add-Button" >Todo Ekleyin</button>
                </div>
            </div>

        </div>

    )
}
export default TodoCreate