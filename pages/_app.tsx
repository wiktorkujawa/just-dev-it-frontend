import '/public/assets/css/tailwind.css'
import type { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import { useApollo } from '../apollo/apolloClient'
import Cfooter from '../components/organisms/Cfooter'

function MyApp({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps)
  return (
    <ApolloProvider client={apolloClient}>
      <main className="main min-h-screen o-container o-container--xl">
        <div className="bg-mine-shaft py-1">
          <Component {...pageProps} />
        </div>
          <Cfooter />
      </main>
    </ApolloProvider>
  )
}

export default MyApp
