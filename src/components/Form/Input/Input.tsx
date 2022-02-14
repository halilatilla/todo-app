import { FC } from 'react'
import classnames from 'classnames'

import styles from './Input.module.css'

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
      <input type={type} className={classnames(styles.input, classNameInput)} {...rest} />
    </label>
  )
}

export default Input
