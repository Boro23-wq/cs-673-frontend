import { Mportal } from '@/components/Mportal'
import { TableContent } from '@/components/Tablecontent'
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
          <Mportal></Mportal>
          <br></br>
          <div className="container relative top-2 left-12 -z-10 bg-blue-600 text-white ">
            <b className="-z-10">Monthly Schedule</b>
            <TableContent></TableContent>
          </div>
        </main>
      </body>
    </div>
  )
}
