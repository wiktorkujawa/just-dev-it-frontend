import React, { FC } from 'react'
import Asvg from './Asvg'
import Link from 'next/link'

const Abutton:FC<any> = ({iconName, onClick, ...props}) => {
  return ( 
    props.href ?
    <Link href={props.href} passHref={props.passHref}>
    <a onClick={onClick} className={`${props.className || ''} flex cursor-pointer`} target={props.target}>
      {
        iconName ?
        <Asvg width={props.width || 24} height={props.height || 24} name={iconName} />
        : null
      }
      { props.children }
    </a>
    </Link>
    :
    <a onClick={onClick} className={`${props.className || ''} flex cursor-pointer`} target={props.target}>
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
