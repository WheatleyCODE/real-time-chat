import React from 'react'
import './Button.scss'

type ButtonProps = {
  text: string
}

const Button = ({ text }:ButtonProps) => {
  return(
    <button className="Button">{text}</button>
  )
}

export default Button
