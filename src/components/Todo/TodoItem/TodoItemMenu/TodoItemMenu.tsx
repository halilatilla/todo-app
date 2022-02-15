import { Menu, Transition } from '@headlessui/react'
import { Fragment, FC } from 'react'
import { HiDotsVertical, HiTrash, HiPencil, HiDuplicate } from 'react-icons/hi'

import { removeTodo, duplicateTodo, useAppDispatch } from '@src/store'
import { Button } from '@src/components'

export interface Props {
  id: string
  setIsEdit: (arg: boolean) => void
}

const TodoItemMenu: FC<Props> = ({ id, setIsEdit }) => {
  const dispatch = useAppDispatch()

  const onRemoveTodo = () => {
    dispatch(removeTodo(id))
  }

  const onDuplicateTodo = () => {
    dispatch(duplicateTodo(id))
  }

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button as="div">
          <Button className="border-none">
            <HiDotsVertical className="h-5 w-5 text-violet-200 hover:text-violet-100" aria-hidden="true" />
          </Button>
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-50 mt-2 origin-top-right  rounded-md bg-gray-700  focus:outline-none">
          <div className="px-1 py-1 ">
            <Menu.Item>
              <Button onClick={() => setIsEdit(true)} appearance="icon">
                <HiPencil className="text-xl" />
              </Button>
            </Menu.Item>
            <Menu.Item>
              <Button onClick={onDuplicateTodo} appearance="icon">
                <HiDuplicate className="text-xl" />
              </Button>
            </Menu.Item>
            <Menu.Item>
              <Button className="text-red-300" appearance="icon" onClick={onRemoveTodo}>
                <HiTrash className="text-xl" />
              </Button>
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default TodoItemMenu
