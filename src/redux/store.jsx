import { configureStore } from '@reduxjs/toolkit'
import todos from './Todos'

const Store = configureStore({
    reducer: {
        todos: todos,
    }
})

export default Store