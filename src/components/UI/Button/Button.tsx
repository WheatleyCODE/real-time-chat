import React from 'react'
import './Button.scss'

type ButtonProps = {
  text: string
  size?: string
}

const Button = ({ text, size }:ButtonProps) => {
  const style = size || 'standart'
  return(
    <button className={`Button ${style}`}>{text}</button>
  )
}

export default Button
