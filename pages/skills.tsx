import type { NextPage } from 'next'
import { gql, useQuery } from '@apollo/client'
import LcustomComponents from '../components/templates/LcustomComponents'

const entry = gql`
  query Entry {
    entry(slug:"skills") {
      ...on skills_skills_Entry {
        customComponents {
          ...on customComponents_wysiwyg_BlockType {
            idName
            typeHandle
            copy
            containerMaxWidth
          }
        }
      }
    }
  }
`

const Skills: NextPage = () => {

  const { loading, error, data } = useQuery(
    entry,
    {
      variables: { slug: 'skills'},
      notifyOnNetworkStatusChange: true,
    }
  )
  if (error) return <div>Error</div>
  if (loading) return <div>Loading</div>

  return (
    <div className="p-skills">
      <LcustomComponents field={data.entry.customComponents} />
    </div>
    
  )
}

export default Skills
