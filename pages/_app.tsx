import '/public/assets/css/tailwind.css'
import type { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import { useApollo } from '../apollo/apolloClient'
import Cfooter from '../components/organisms/Cfooter'
import Cheader from '../components/organisms/Cheader'
import CNavbar from '../components/organisms/CNavbar'

function MyApp({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps)

  return (
    <ApolloProvider client={apolloClient}>
      <main className="main main__light min-h-screen o-container o-container--xl">
        <Cheader/>
        <div className="pb-1">
          <CNavbar />
          <Component {...pageProps} />
        </div>
          <Cfooter />
      </main>
    </ApolloProvider>
  )
}

export default MyApp
