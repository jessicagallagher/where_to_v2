import { NotAuthorizedNotFound } from '../components/reusable-components'
import Head from 'next/head'

export default function PageNotFound() {
  return (
    <div className='md-py-24'>
      <Head>
        <title>Unauthorized</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <NotAuthorizedNotFound
          headerText={'404'}
          mainText={'Page not found!'}
          ctaText={'Go back'}
        />
      </main>
    </div>
  );
}
