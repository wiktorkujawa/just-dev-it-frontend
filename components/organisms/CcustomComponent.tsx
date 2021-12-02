import React, { FC } from 'react'
import dynamic from 'next/dynamic'

const DynamicComponent = (componentName: string) => dynamic(() => import(`../organisms/C${componentName}`))

const CcustomComponent:FC<{field: any}> = ({field}) => {
  return (
     <>
      {
        React.createElement(DynamicComponent(field.typeHandle),
        {
          field: field
        }
        )
      }
    </>
  )
}

export default CcustomComponent
