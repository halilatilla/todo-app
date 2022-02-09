import { FC } from 'react'
import classnames from 'classnames'

interface Props {
  label?: string
  type?: string
  placeholder?: string
  defaultValue?: string
  className?: string
  classNameInput?: string
  value?: string | number
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input: FC<Props> = ({ label, type = 'text', className, classNameInput, ...rest }) => {
  return (
    <label className={classnames('block', className)}>
      {label && <span className="text-sm capitalize text-gray-300">{label}</span>}
      <input
        type={type}
        className={classnames(
          'mt-1 block w-full rounded-md border-gray-300  text-gray-900 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50',
          classNameInput,
        )}
        {...rest}
      />
    </label>
  )
}

export default Input
