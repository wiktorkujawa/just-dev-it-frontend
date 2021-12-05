import dynamic from 'next/dynamic'
import React, { FC } from 'react'

const DynamicComponent = (name:string) => dynamic(() => import(`/public/assets/svg/${name}.svg`))

const Asvg:FC<any> = ({ name, ...props}) => {
  let Icon = DynamicComponent(name)
  return (
    <Icon {...props}/>
  )
}

export default Asvg
