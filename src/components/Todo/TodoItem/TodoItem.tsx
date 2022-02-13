import { FC, useState } from 'react'
import classnames from 'classnames'
import { motion } from 'framer-motion'
import { HiTrash, HiOutlineCheck, HiX, HiPencil } from 'react-icons/hi'
import { MdDragIndicator } from 'react-icons/md'

import { removeTodo, toggleComplete, editTodo } from '@src/store/reducers/todoSlice'
import { useAppDispatch } from '@src/store/store'
import { Button, Input } from '@src/components'
import { isTextEmpty, removeWhiteSpace } from '@src/lib'

import styles from './todoItem.module.css'

export interface Props {
  id: string
  title: string
  completed: boolean
}

const TodoItem: FC<Props> = ({ id, title, completed }) => {
  const [isEdit, setIsEdit] = useState(false)
  const [editedValue, setEditedValue] = useState('')
  const dispatch = useAppDispatch()

  const onRemoveTodo = () => {
    dispatch(removeTodo(id))
  }

  const onToggleComplete = () => {
    dispatch(toggleComplete(id))
  }

  const onEditTodo = () => {
    if (isTextEmpty(editedValue)) return
    dispatch(editTodo({ id, title: removeWhiteSpace(editedValue) }))
    setIsEdit(false)
  }

  const onEditTodoCancel = () => {
    setIsEdit(false)
  }

  return (
    <motion.li
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -20 }}
      key={id}
      className="flex items-center space-x-3"
    >
      <MdDragIndicator className="text-2xl" />
      <div className={classnames(styles.todoItem)}>
        {isEdit ? (
          <Input onChange={(e) => setEditedValue(e.currentTarget.value)} defaultValue={title} className="w-full" />
        ) : (
          <div className="flex items-center space-x-4">
            <input type="checkbox" onChange={onToggleComplete} checked={completed} />
            <p
              className={classnames(styles.todoItemText, {
                'text-gray-500 line-through': completed,
              })}
            >
              {title}
            </p>
          </div>
        )}
        <div className="flex space-x-1">
          {isEdit ? (
            <div className="flex space-x-1">
              <Button onClick={onEditTodo} className="border-none">
                <HiOutlineCheck className="text-xl text-green-500" />
              </Button>
              <Button onClick={onEditTodoCancel} className="border-none">
                <HiX className="text-xl" />
              </Button>
            </div>
          ) : (
            <div className="flex items-center space-x-1">
              <Button
                onClick={() => setIsEdit(true)}
                className={classnames('border-none', { 'border-gray-500 text-gray-500': completed })}
              >
                <HiPencil className="text-xl" />
              </Button>
            </div>
          )}
          <Button className="border-none text-red-500" onClick={onRemoveTodo}>
            <HiTrash className="text-xl" />
          </Button>
        </div>
      </div>
    </motion.li>
  )
}

export default TodoItem
