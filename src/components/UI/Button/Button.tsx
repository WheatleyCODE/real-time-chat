import React from 'react'
import './Button.scss'

type ButtonProps = {
  text: string
  size?: string
  onClick?: () => void
}

const Button = ({ text, size, onClick }:ButtonProps) => {
  const style = size || 'standart'
  return(
    <button onClick={onClick} className={`Button ${style}`}>{text}</button>
  )
}

export default Button
