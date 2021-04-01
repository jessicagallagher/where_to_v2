import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

export default function Signup() {
  return (
    <div className='container flex flex-col justify-center items-center mx-auto py-0 px-2 min-h-screen sm:px-6 lg:px-8'>
      <Head>
        <title>Create an Account</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
    </div>
  )
}