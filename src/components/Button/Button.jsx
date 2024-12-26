import React from 'react'
import styles from "./Button.module.css"

const Button = ({text , icon , isOutlined , ...rest} ) => {
  
  return (
    <button  {...rest} className={isOutlined ?   styles.outline_btn : styles.primary_btn}>
         {icon}
         {text}
    </button>
  )
}

export default Button
