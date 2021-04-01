import Head from 'next/head'
import LandingPage from '../components/LandingPage';

export default function Home() {
  return (
    <div className='container flex flex-col justify-center items-center mx-auto py-0 px-2 min-h-screen sm:px-6 lg:px-8'>
      <Head>
        <title>Where To?</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='py-20 px-0 flex flex-col justify-center items-center order-1 w-1/2'>
        <LandingPage />
      </main>
    </div>
  )
}
