import React, { FC } from 'react'
import Asvg from './Asvg'

const Abutton:FC<any> = ({iconName, ...props}) => {
  return (
    <a className={`${props.className} flex hover:opacity-50`} href={props.href} target={props.target}>
      {
        iconName ?
        <Asvg width={props.width || 24} height={props.height || 24} name={iconName} viewBox="0 0 24 24" />
        : null
      }
      { props.children }
    </a>
  )
}

export default Abutton
