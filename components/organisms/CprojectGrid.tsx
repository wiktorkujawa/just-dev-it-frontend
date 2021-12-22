import { gql } from '@apollo/client'
import React, { FC } from 'react'
import Mproject from '../molecules/Mproject'

export const fragment = gql`
fragment projectGrid on projects_projects_Entry {
    medialink
    button
    heading
    description
    media {
      url
      title
    }
}
`

interface Asset {
  url: string
  title: string
}

interface Project {
  project: {
    medialink: string
    button: string
    heading: string
    description: string
    media: Asset[]
  }
}

interface Props {
  field: Project[]
}

const CprojectGrid:FC<Props> = ({field}) => {
  return (
    <div className="o-container o-container--lg my-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-20">
      {
        field.map( (block: any,index: number) => {
          return <Mproject key={index} field={block} />
        })
      }
      </div>
    </div>
  )
}

export default CprojectGrid
