import type { NextPage } from 'next'
import { gql, useQuery } from '@apollo/client'
import Cwysiwyg from '../components/organisms/Cwysiwyg'
import LcustomComponents from '../components/templates/LcustomComponents'

const entry = gql`
  query Entry {
    entry {
      ...on homepage_homepage_Entry {
        customComponents {
          ...on customComponents_wysiwyg_BlockType {
            typeHandle
            copy
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
    <div className="o-container o-container--xl">
      <LcustomComponents field={data.entry.customComponents} />
    </div>
    
  )
}

export default Home
