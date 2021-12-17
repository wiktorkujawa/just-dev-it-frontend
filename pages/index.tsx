import type { NextPage } from 'next'
import { gql, useQuery } from '@apollo/client'
import LcustomComponents from '../components/templates/LcustomComponents'

const entry = gql`
  query Entry {
    entry {
      ...on homepage_homepage_Entry {
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
  console.log(data)

  return (
    <div className="p-homepage">
      <LcustomComponents field={data.entry.customComponents} />
    </div>
    
  )
}

export default Home
