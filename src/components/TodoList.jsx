import React, { useEffect } from 'react'
import Todo from './Todo'
import '../App.css'
import { useSelector, useDispatch } from 'react-redux'
import { fetchTodos } from '../redux/todos'
function TodoList() {

  const list = useSelector((store) => {
    return store.todos.list
  })
  console.log(list)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchTodos())
  }, [dispatch])

  return (

    <div className='container-app-div' >
      <div className='TodoList-Div'>
        {
          list && list.map((todo) => {

            return <Todo key={todo.id} id={todo.id} text={todo.text}></Todo>
          })
        }
      </div >
    </div >
  )
}

export default TodoList