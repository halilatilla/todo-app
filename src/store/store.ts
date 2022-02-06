import { configureStore } from '@reduxjs/toolkit'
import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux'

import todoSlice from './reducers/todoSlice'

const store = configureStore({
  reducer: {
    todos: todoSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default store
