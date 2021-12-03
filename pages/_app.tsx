import '../assets/css/tailwind.css'
import type { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import { useApollo } from '../apollo/apolloClient'
import Cfooter from '../components/organisms/Cfooter'

function MyApp({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps)
  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
      <Cfooter />
    </ApolloProvider>
  )
}

export default MyApp
