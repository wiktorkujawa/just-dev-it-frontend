import React, { FC } from 'react'
import Asvg from './Asvg'

const Abutton:FC<any> = ({iconName, onClick, ...props}) => {
  return (
    <a onClick={onClick} className={`${props.className || ''} flex cursor-pointer hover:opacity-50`} href={props.href} target={props.target}>
      {
        iconName ?
        <Asvg width={props.width || 24} height={props.height || 24} name={iconName} />
        : null
      }
      { props.children }
    </a>
  )
}

export default Abutton
