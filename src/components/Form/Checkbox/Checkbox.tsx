import { FC } from 'react'
import classnames from 'classnames'

import styles from './Checkbox.module.css'

interface Props {
  label?: string
  className?: string
  classNameCheckbox?: string
  checked?: boolean
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Checkbox: FC<Props> = ({ label, className, classNameCheckbox, ...rest }) => {
  return (
    <label className={classnames(styles.wrapper, className)}>
      {label && <span className={classnames(styles.label)}>{label}</span>}
      <input type="checkbox" className={classnames(styles.checkbox, classNameCheckbox)} {...rest} />
    </label>
  )
}

export default Checkbox
