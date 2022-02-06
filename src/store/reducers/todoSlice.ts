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
  },
})

export default todoSlice.reducer
export const { addTodo } = todoSlice.actions
