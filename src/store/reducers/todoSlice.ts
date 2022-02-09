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
    toggleComplete: (state, action: PayloadAction<string>) => {
      const todo = state.find((todo) => todo.id === action.payload)
      if (todo) {
        todo.completed = !todo.completed
      }
    },
    clearCompletedTodos: (state) => {
      return state.map((todo) => (todo.completed ? { ...todo, completed: false } : todo))
    },
    updateTodoList: (state, action: PayloadAction<Todo[]>) => {
      return (state = action.payload)
    },
    editTodo: (state, action: PayloadAction<{ id: string; title: string }>) => {
      const todo = state.find((todo) => todo.id === action.payload.id)
      if (todo) {
        todo.title = action.payload.title
      }
    },
  },
})

export default todoSlice.reducer
export const { addTodo, removeTodo, toggleComplete, clearCompletedTodos, updateTodoList, editTodo } = todoSlice.actions
