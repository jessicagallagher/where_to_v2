import { NotAuthorizedNotFound } from '../components/reusable-components';
import Head from 'next/head';

export default function Unauthorized() {
  return (
    <div className='md-py-24'>
      <Head>
        <title>Unauthorized</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <NotAuthorizedNotFound
          headerText={'Unauthorized'}
          mainText={'You must be logged in to view this page!'}
          ctaText={'Log in'} />
      </main>
    </div>
  );
}
