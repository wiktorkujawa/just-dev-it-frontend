import { gql } from '@apollo/client'
import React, { FC } from 'react'
import Mproject from '../molecules/Mproject'

export const fragment = gql`
fragment projectGrid on projects_projects_Entry {
  project {
    ...on project_block_BlockType {
      mediaLink
      button
      heading
      projectDescription
      media {
        url
        title
      }
    }
  }
}
`

interface Asset {
  url: string
  title: string
}

interface Project {
  project: {
    mediaLink: string
    button: string
    heading: string
    projectDescription: string
    media: Asset[]
  }
}

interface Props {
  field: Project[]
}

const CprojectGrid:FC<Props> = ({field}) => {
  console.log(field)
  return (
    <div className="o-container o-container--lg my-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-20">
      {
        field.map( (block: any,index) => {
          return <Mproject key={index} field={block.project[0]} />
        })
      }
      </div>
    </div>
  )
}

export default CprojectGrid
