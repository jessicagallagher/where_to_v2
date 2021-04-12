import Head from 'next/head';
import { useRouter } from 'next/router';
import fire from '../../config/fire-config';
import MultiStepForm from '../../components/MultiStepForm';

export default function Create() {
  return (
    <div className='container flex flex-col justify-center items-center mx-auto py-0 px-2 min-h-screen sm:px-6 lg:px-8'>
      <Head>
        <title>Create Itinerary</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <MultiStepForm />
     
    </div>
  )
}