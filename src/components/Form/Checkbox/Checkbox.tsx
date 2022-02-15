import { FC } from 'react'
import classnames from 'classnames'

import styles from './Checkbox.module.css'

interface Props {
  label?: string
  className?: string
  classNameCheckbox?: string
  classNameLabel?: string
  checked: boolean
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Checkbox: FC<Props> = ({ label, className, classNameCheckbox, classNameLabel, ...rest }) => {
  return (
    <label className={classnames(styles.wrapper, className)}>
      <input type="checkbox" className={classnames(styles.checkbox, classNameCheckbox)} {...rest} />
      {label && <span className={classnames(styles.label, classNameLabel)}>{label}</span>}
    </label>
  )
}

export default Checkbox
