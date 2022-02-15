import { useEffect } from 'react'
import classnames from 'classnames'
import { AnimatePresence } from 'framer-motion'
import { DragDropContext, Droppable, Draggable, DropResult, resetServerContext } from 'react-beautiful-dnd'

import { useAppSelector, useAppDispatch, updateTodoList } from '@src/store'
import { TodoItem } from '@src/components'
import { useLocalStorage } from '@src/hooks'

const TodoList = () => {
  resetServerContext()

  const todoList = useAppSelector((state) => state.todoList)
  const dispatch = useAppDispatch()

  const [storedValue, setStoredValue] = useLocalStorage('todoList', todoList)

  function onDragEnd(result: DropResult) {
    const { destination, source } = result

    if (!destination) return

    if (destination.index === result.source.index) return

    const newTodoList = Array.from(todoList)
    const [reorderedItem] = newTodoList.splice(source.index, 1)
    newTodoList.splice(destination.index, 0, reorderedItem)

    dispatch(updateTodoList(newTodoList))
  }

  useEffect(() => {
    if (storedValue) {
      dispatch(updateTodoList(storedValue))
    }
  }, [])

  useEffect(() => {
    setStoredValue(todoList)
  }, [todoList])

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="list">
        {(provided) => (
          <ul className="flex flex-col space-y-3" ref={provided.innerRef} {...provided.droppableProps}>
            <AnimatePresence>
              {todoList?.map((todo, index) => (
                <Draggable draggableId={todo.id} key={todo.id} index={index}>
                  {(provided, { isDragging }) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className={classnames({ 'opacity-80': isDragging })}
                    >
                      <TodoItem id={todo.id} title={todo.title} completed={todo.completed} />
                    </div>
                  )}
                </Draggable>
              ))}
            </AnimatePresence>
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  )
}

export default TodoList
