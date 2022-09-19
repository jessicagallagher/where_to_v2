import { RegisterLogIn } from '../components';
import Head from 'next/head';

export default function LogIn() {
  return (
    <div className='md:py-24'>
      <Head>
        <title>Where To?</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <RegisterLogIn />
      </main>
    </div>
  );
}
