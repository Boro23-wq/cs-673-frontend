import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { navLinksAuthorized } from 'lib/navLinksAuthorized'
import { navLinksUnauthorized } from 'lib/navLinksUnauthorized'
import type { AppProps } from 'next/app'
import '../styles/globals.css'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Header
        authorized={navLinksAuthorized}
        unauthorized={navLinksUnauthorized}
      />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
