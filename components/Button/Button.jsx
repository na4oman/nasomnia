import React from 'react'
import styles from './button.module.css'

const Button = ({ title, onClick, style = '' }) => {
  return (
    <button className={`${styles.button} ${style}`} onClick={onClick}>
      {title}
    </button>
  )
}

export default Button
