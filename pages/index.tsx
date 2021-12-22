import type { NextPage } from 'next'
import { gql, useQuery } from '@apollo/client'
import LcustomComponents from '../components/templates/LcustomComponents'
import CprojectGrid, { fragment as projectGridFragment } from '../components/organisms/CprojectGrid'
import CmainProject from '../components/organisms/CmainProject'

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

const Home: NextPage = () => {

  const { loading, error, data } = useQuery(
    entry,
    {
      variables: { slug: 'homepage'},
      notifyOnNetworkStatusChange: true,
    }
  )
  if (error) return <div>Error</div>
  if (loading) return <div>Loading</div>

  return (
    <div className="p-homepage">
      <LcustomComponents field={data.entry.customComponents} />
      <CmainProject field={data.entry.projectGrid[0]} />
      <CprojectGrid field={data.entry.projectGrid} />
    </div>
    
  )
}

export default Home
