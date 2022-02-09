import { FC } from 'react'
import classnames from 'classnames'
import { motion } from 'framer-motion'
import { HiOutlineViewGrid, HiTrash, HiOutlineCheck, HiX } from 'react-icons/hi'

import { removeTodo, toggleComplete } from '@src/store/reducers/todoSlice'
import { useAppDispatch } from '@src/store/store'
import { Button } from '@src/components'

import styles from './todoItem.module.css'

export interface Props {
  id: string
  title: string
  completed: boolean
}

const TodoItem: FC<Props> = ({ id, title, completed }) => {
  const dispatch = useAppDispatch()

  const onRemoveTodo = () => {
    dispatch(removeTodo(id))
  }

  const onToggleComplete = () => {
    dispatch(toggleComplete(id))
  }

  return (
    <motion.li
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -20 }}
      key={id}
      className={classnames(styles.todoItem, {
        'line-through': completed,
      })}
    >
      <HiOutlineViewGrid />
      <p
        className={classnames(styles.todoItemText, {
          ' text-gray-500': completed,
        })}
      >
        {title}
      </p>
      <div className="flex-center space-x-4">
        <Button
          className={classnames('border-none ', { 'border-gray-500 text-gray-500': completed })}
          onClick={onToggleComplete}
        >
          {completed ? <HiX className="text-xl" /> : <HiOutlineCheck className="text-xl text-green-500" />}
        </Button>
        <Button className="border-none text-red-500 " onClick={onRemoveTodo}>
          <HiTrash className="text-xl" />
        </Button>
      </div>
    </motion.li>
  )
}

export default TodoItem
