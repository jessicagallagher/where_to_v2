import { LandingPage } from '../components'
import Head from 'next/head'

export default function Home() {
  return (
    <div className='lg:py-48 md:py-24 py-12'>
      <Head>
        <title>Where To?</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <LandingPage />
      </main>
    </div>
  )
}
