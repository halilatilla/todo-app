import { FC, useState } from 'react'
import classnames from 'classnames'
import { motion } from 'framer-motion'
import { HiOutlineCheck, HiX } from 'react-icons/hi'
import { MdDragIndicator } from 'react-icons/md'

import { toggleComplete, editTodo } from '@src/store/reducers/todoSlice'
import { useAppDispatch } from '@src/store/store'
import { Button, Input } from '@src/components'
import { isTextEmpty, removeWhiteSpace } from '@src/lib'
import TodoItemMenu from './TodoItemMenu/TodoItemMenu'

import styles from './TodoItem.module.css'

export interface Props {
  id: string
  title: string
  completed: boolean
}

const TodoItem: FC<Props> = ({ id, title, completed }) => {
  const [isEdit, setIsEdit] = useState(false)
  const [editedValue, setEditedValue] = useState('')
  const dispatch = useAppDispatch()

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
          {isEdit && (
            <div className="flex space-x-1">
              <Button onClick={onEditTodo} appearance="icon">
                <HiOutlineCheck className="text-xl text-green-500" />
              </Button>
              <Button onClick={onEditTodoCancel} appearance="icon">
                <HiX className="text-xl" />
              </Button>
            </div>
          )}

          <TodoItemMenu id={id} setIsEdit={setIsEdit} />
        </div>
      </div>
    </motion.li>
  )
}

export default TodoItem
