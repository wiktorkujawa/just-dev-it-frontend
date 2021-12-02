import React, { FC } from 'react'
import CcustomComponent  from '../organisms/CcustomComponent'

interface Props {
  field: any[]
}

const LcustomComponents: FC<Props> = ({field}) => {
  return (
    <div className="l-custom-components">
      {
        field.map( (block,index) => {
          return <CcustomComponent key={index} field={block} />
        })
        
      }
    </div>
  )
}

export default LcustomComponents
