import { FC } from 'react'
import classnames from 'classnames'
import { motion } from 'framer-motion'

import { removeTodo, toggleTodo } from '@src/store/reducers/todoSlice'
import { useAppDispatch } from '@src/store/store'
import { Button } from '@src/components'

export interface Props {
  id: string
  title: string
  completed: boolean
}

const TodoItem: FC<Props> = ({ id, title, completed }) => {
  const dispatch = useAppDispatch()

  return (
    <motion.li
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -20 }}
      key={id}
      className={classnames(
        'flex min-w-[400px] max-w-2xl items-center justify-between space-x-8 rounded bg-gray-900 p-3',
        {
          'line-through': completed,
        },
      )}
    >
      <p className="max-w-xs overflow-hidden font-medium capitalize">{title}</p>
      <div className="space-x-4">
        <Button
          className={classnames('border-green-500 text-green-500', { 'border-gray-500 text-gray-500': completed })}
          onClick={() => dispatch(toggleTodo(id))}
        >
          {completed ? '👎' : '👍'}
        </Button>
        <Button className="border-red-500 text-red-500 " onClick={() => dispatch(removeTodo(id))}>
          🗑
        </Button>
      </div>
    </motion.li>
  )
}

export default TodoItem
