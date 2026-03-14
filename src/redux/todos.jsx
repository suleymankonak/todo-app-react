import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:5000/todos";

export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
    const response = await axios.get(API_URL);
    return response.data;
});

export const addTodoAsync = createAsyncThunk("todos/addTodoAsync", async (text) => {
    const newTodo = {
        id: Date.now().toString(),
        text
    };
    const response = await axios.post(API_URL, newTodo);
    return response.data;
});

export const deleteTodoAsync = createAsyncThunk("todos/deleteTodoAsync", async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    return id;
});

export const updateTodoAsync = createAsyncThunk("todos/updateTodoAsync", async ({ id, text }) => {
    const response = await axios.patch(`${API_URL}/${id}`, { text });
    return response.data;
});

const todosSlice = createSlice({
    name: "todos",
    initialState: {
        list: [],
        status: "idle",
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTodos.fulfilled, (state, action) => {
                state.list = action.payload;
                state.status = "succeeded";
            })
            .addCase(addTodoAsync.fulfilled, (state, action) => {
                state.list.push(action.payload);
            })
            .addCase(deleteTodoAsync.fulfilled, (state, action) => {
                state.list = state.list.filter((todo) => todo.id !== action.payload);
            })
            .addCase(updateTodoAsync.fulfilled, (state, action) => {
                const { id, text } = action.payload;
                const existingTodo = state.list.find((todo) => todo.id === id);
                if (existingTodo) {
                    existingTodo.text = text;
                }
            });
    },
});

export default todosSlice.reducer;