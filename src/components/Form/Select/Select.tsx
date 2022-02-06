import { FC } from 'react'

interface Props {
  label?: string
  options?: string[]
  placeholder?: string
  className?: string
  value?: string
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

const Select: FC<Props> = ({ label, options, ...rest }) => {
  return (
    <label className="block">
      {label && <span className="text-sm capitalize text-gray-300">{label}</span>}

      <select
        className="mt-1 block w-full rounded-md border-gray-300 text-gray-900 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        {...rest}
      >
        {options &&
          options.map((option, index) => (
            <option value={option} key={index}>
              {option}
            </option>
          ))}
      </select>
    </label>
  )
}

export default Select
