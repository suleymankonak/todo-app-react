import React, { useState } from 'react'
import { IoIosRemoveCircle } from "react-icons/io"
import { CiEdit } from "react-icons/ci"
import { FaCheck } from "react-icons/fa"
import '../css/Todo.css'
import { useDispatch } from 'react-redux'
import { deleteTodoAsync, updateTodoAsync } from '../redux/todos'
function Todo({ id, text }) {

  const [textThis, setTextThis] = useState(text);

  const dispatch = useDispatch();
  function RemoveTodos() {
    dispatch(deleteTodoAsync(id));
  }
  function EditText() {
    setcheck(true)
    dispatch(updateTodoAsync({ id, text: textThis }))

  }

  const [check, setcheck] = useState(true);
  // const [newTodo, setNewTodo] = useState(text);
  return (

    <div>

      <div className='container-div-todo'>
        <div className="container-top">
          <div className="container-center">



            <div className='container-edit-div'>

              {
                check ?
                  <div className='Todo-Div'> {text}</div>
                  :
                  <div className='Input-Div'><input className='editInput ' value={textThis} type="text" onChange={(e) => setTextThis(e.target.value)} /></div>
              }



              <div className='iconDiv'>
                <IoIosRemoveCircle onClick={RemoveTodos} />
                {
                  check ?
                    <CiEdit onClick={(e) => setcheck(false)} />
                    :
                    <FaCheck onClick={EditText} />}
              </div>

            </div>

          </div>
        </div>
      </div >
    </div >
  )
}

export default Todo