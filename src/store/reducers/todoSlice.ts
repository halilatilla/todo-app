import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { nanoid } from 'nanoid'

export interface Todo {
  id: string
  title: string
  completed: boolean
}

const initialState: Todo[] = []

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      const newTodo = { id: nanoid(), title: action.payload, completed: false }
      state.push(newTodo)
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      return state.filter((todo) => todo.id !== action.payload)
    },
    toggleTodo: (state, action: PayloadAction<string>) => {
      const todo = state.find((todo) => todo.id === action.payload)
      if (todo) {
        todo.completed = !todo.completed
      }
    },
    clearCompletedTodos: (state) => {
      return state.filter((todo) => !todo.completed)
    },
  },
})

export default todoSlice.reducer
export const { addTodo, removeTodo, toggleTodo, clearCompletedTodos } = todoSlice.actions
