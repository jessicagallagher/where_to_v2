import { LandingPage } from '../components'
import Head from 'next/head'

export default function Home() {
  return (
    <div className='md:py-24'>
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
