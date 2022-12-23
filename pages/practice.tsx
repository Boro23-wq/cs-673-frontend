import { Cal } from '@/components/Calendar'
import { CurrentTable } from '@/components/CurrentTable'
import { Pportal } from '@/components/Pportal'
import Head from 'next/head'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div suppressHydrationWarning={true} className="inline-block">
      <Head>
        <title>Carely</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <body>
        <main>
          <br></br>
          <div>
            <Pportal />
          </div>
          <br></br>
          <div className="row container relative left-2 -z-1 top-6">
            <Cal></Cal>
            <div className="container absolute left-1/2 bottom-8 top-1 h-96 w-full">
              <b className=" absolute -z-10">Current Schedule</b>
            </div>
            <div className="container absolute z-1 left-1/2 bottom-8 top-10">
              <CurrentTable></CurrentTable>
            </div>
          </div>
        </main>
      </body>
    </div>
  )
}
