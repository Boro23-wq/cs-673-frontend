import fetchJson from 'lib/fetchJson'
import type { AppProps } from 'next/app'
import { SWRConfig } from 'swr'
import '../styles/globals.css'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <SWRConfig
      value={{
        fetcher: fetchJson,
        onError: (err) => {
          console.error(err)
        }
      }}>
      <Component {...pageProps} />
    </SWRConfig>
  )
}

export default MyApp
