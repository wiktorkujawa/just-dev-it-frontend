import type { NextPage } from 'next'
import { gql, useQuery } from '@apollo/client'
import LcustomComponents from '../components/templates/LcustomComponents'
import CprojectGrid, { fragment as projectGridFragment } from '../components/organisms/CprojectGrid'

const entry = gql`
  query Entry {
    entry(slug:"homepage") {
      ...on homepage_homepage_Entry {
        projectGrid {
          ...projectGrid
        }
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
  ${projectGridFragment}
`

const Skills: NextPage = () => {

  // const { loading, error, data } = useQuery(
  //   entry,
  //   {
  //     variables: { slug: 'homepage'},
  //     notifyOnNetworkStatusChange: true,
  //   }
  // )
  // if (error) return <div>Error</div>
  // if (loading) return <div>Loading</div>
  // console.log(data)

  return (
    <div className="p-skills">
      hello
      {/* <CprojectGrid field={data.entry.projectGrid} />
      <LcustomComponents field={data.entry.customComponents} /> */}
    </div>
    
  )
}

export default Skills
