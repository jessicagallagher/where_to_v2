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
      <div className='bg-white overflow-hidden shadow sm:rounded-lg w-1/2'>
      <div className='px-4 py-5 sm:p-6 relative'>
      <form className='space-y-8 divide-y divide-gray-200'>
        <div className='space-y-8 divide-y divide-gray-200'>
          <div>
            <div className='pt-8'>
              <div>
                <h1 className="font-accent md:text-6xl leading-6 text-mdGrey-100">Create an Account</h1>
              </div>
              <div className='mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6'>
                <div className='sm:col-span-3'>
                  <label className="block text-lg text-dkGrey-100">First name</label>
                  <div className='mt-1'>
                    <input type="text" name="firstName" id="firstName" autocomplete="given-name" className="shadow-md block w-3/4 sm:text-sm border border-ltLime-100 rounded-md"></input>
                  </div>
                </div>
                <div className='sm:col-span-3'>
                  <label className="block text-lg text-dkGrey-100">Last name</label>
                  <div className='mt-1'>
                    <input type="text" name="lastName" id="lastName" autocomplete="family-name" className="shadow-md block w-3/4 sm:text-sm border border-ltLime-100 rounded-md"></input>
                  </div>
                </div>
                <div className='sm:col-span-3'>
                  <label className="block text-lg text-dkGrey-100">Email</label>
                  <div className='mt-1'>
                    <input id="email" name="email" type="email" autocomplete="email" className="shadow-md block w-3/4 sm:text-sm border border-ltLime-100 rounded-md"></input>
                  </div>
                </div>
                <div className='sm:col-span-3'>
                  <label className="block text-lg text-dkGrey-100">Password</label>
                  <div className='mt-1'>
                    <input type="password" name="password" id="password" className="shadow-md block w-3/4 sm:text-sm border border-ltLime-100 rounded-md"></input>
                  </div>
                </div>
                <div className='pt-5'>
                  <div className='flex justify-end'>
                    <button type="submit" className="inline-flex justify-center py-2 border border-teal text-base font-medium rounded-md text-dkGrey-100 bg-transparent hover:border-purple-100 w-36">
                      Submit
                    </button>
                  </div>
                </div>
                </div>
            </div>
          </div>
        </div>
      </form>
    </div>
    </div>
    </div>
  )
}