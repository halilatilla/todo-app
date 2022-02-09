import { AnimatePresence } from 'framer-motion'
import { DragDropContext, Droppable, Draggable, DropResult, resetServerContext } from 'react-beautiful-dnd'

import { useAppSelector, useAppDispatch } from '@src/store/store'
import { updateTodoList } from '@src/store/reducers/todoSlice'
import { TodoItem } from '@src/components'

const TodoList = () => {
  resetServerContext()

  const todoList = useAppSelector((state) => state.todoList)
  const dispatch = useAppDispatch()

  function onDragEnd(result: DropResult) {
    const { destination, source } = result

    if (!destination) return

    if (destination.index === result.source.index) return

    const newTodoList = Array.from(todoList)
    const [reorderedItem] = newTodoList.splice(source.index, 1)
    newTodoList.splice(destination.index, 0, reorderedItem)

    dispatch(updateTodoList(newTodoList))
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="list">
        {(provided) => (
          <ul className="flex flex-col space-y-3 " ref={provided.innerRef} {...provided.droppableProps}>
            <AnimatePresence>
              {todoList?.map((todo, index) => (
                <Draggable draggableId={todo.id} key={todo.id} index={index}>
                  {(provided) => (
                    <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
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
