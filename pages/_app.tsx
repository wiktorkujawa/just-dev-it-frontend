import '/public/assets/css/tailwind.css'
import type { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import { useApollo } from '../apollo/apolloClient'
import Cfooter from '../components/organisms/Cfooter'
import Cheader from '../components/organisms/Cheader'
import CNavbar from '../components/organisms/CNavbar'
import { useRouter } from 'next/dist/client/router'

function MyApp({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps)
  const router = useRouter()

  return (
    <ApolloProvider client={apolloClient}>
      <main className="main min-h-screen o-container o-container--xl">
        <Cheader/>
        <div className="pb-1 dark:bg-mine-shaft bg-white">
          <CNavbar currentTab={router.pathname} />
          <Component {...pageProps} />
        </div>
          <Cfooter />
      </main>
    </ApolloProvider>
  )
}

export default MyApp
