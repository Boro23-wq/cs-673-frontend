import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Head>
        <title>Carely</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>{/* TODO: Landing page goes here  */}</main>
    </div>
  )
}

export default Home
