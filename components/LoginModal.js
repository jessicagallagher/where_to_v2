import React, { useState } from 'react';
import { useRouter } from 'next/router';
import LoginPortal from './LoginPortal';
import fire from '../config/fire-config';

export default function LoginModal() {
  const router = useRouter();

  const [open, setOpen] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    
    fire.auth()
      .signInWithEmailAndPassword(username, password)
      .catch((error) => {
        console.log('user wasn\'t able to login: ', error);
      })

    setUsername('')
    setPassword('')
    router.push('/users/dashboard')
  };

  return (
    <>
    <button type='button' className='absolute py-2 left-1/3 bottom-1/3 ml-8 border border-teal-100 bg-transparent text-base font-medium rounded-md text-dkGrey-100 hover:border-purple-100 w-36' onClick={() => setOpen(true)}>Login</button>
    {open && (
      <LoginPortal selector='#modal'>
    <div className='fixed z-10 inset-0 overflow-y-auto' aria-labelledby='modal-title' role='dialog' aria-modal='true'>
      <div className='flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
        <div className='fixed inset-0 bg-ltLime-100 bg-opacity-60 transition-opacity' aria-hidden='true'>
        </div>
        <span className='hidden sm:inline-block sm:align-middle sm:h-screen' aria-hidden='true'>&#8203;</span>
        <div className='inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6'>
          <div className='hidden sm:block absolute top-0 right-0 pt-4 pr-4'>
            <button type='button' className='bg-white rounded-md text-mdGrey-100 hover:text-dkGrey-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500' onClick={() => setOpen(false)}>
              <span className='sr-only'>Close</span>
              <svg className='h-6 w-6' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' aria-hidden='true'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12' />
              </svg>
            </button>
          </div>
          <div className='sm:flex sm:items-start'>
            <div className='mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 sm:mx-0 sm:h-10 sm:w-10'>
              <img src='/logo.png' alt='person with suitcase' width={173} height={300} className='p-2' />
            </div>
            <div className='mt-4 text-center sm:mt-0 sm:ml-4 sm:text-left'>
              <h1 className='pt-2 text-5xl leading-6 font-medium font-accent text-mdGrey-100' id='modal-title'>
                Welcome back!
              </h1>
            </div>
          </div>
          <form className='mt-8 space-y-6' onSubmit={handleLogin}>
      <div className='rounded-md shadow-sm -space-y-px'>
        <div>
          <label htmlFor='email' className='sr-only'>Email</label>
          <input id='email' name='email' type='text' required className='appearance-none rounded-none relative block w-full px-3 py-2 border border-teal-100 rounded-t-md focus:z-10 sm:text-sm' placeholder='Email' value={username} onChange={({target}) => setUsername(target.value)} />
        </div>
        <div>
          <label htmlFor='password' className='sr-only'>Password</label>
          <input id='password' name='password' type='password' required className='appearance-none rounded-none relative block w-full px-3 py-2 border border-teal-100 rounded-b-md focus:z-10 sm:text-sm' placeholder='Password' value={password} onChange={({target}) => setPassword(target.value)} />
        </div>
      </div>

      <div className='flex items-center justify-between'>
        <div className='flex items-center'>
          <input id='remember_me' name='remember_me' type='checkbox' className='h-4 w-4 border-dkGrey-100 rounded' />
          <label htmlFor='remember_me' className='ml-2 block text-sm text-dkGrey-100'>
            Remember me
          </label>
        </div>

        
      </div>

      <div>
        <button type='submit' className='relative w-1/4 flex justify-center py-2 px-4 border border-teal-100 text-sm font-medium rounded-md text-dkGrey-100 bg-transparent hover:border-purple-100 focus:outline-none focus:ring-2 focus:ring-offset-2'>
          <span className='absolute left-0 inset-y-0 flex items-center pl-3'>
            {/* <!-- Heroicon name: solid/lock-closed --> */}
            <svg className='h-5 w-5 text-dkGrey-100' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' aria-hidden='true'>
              <path fillRule='evenodd' d='M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z' clipRule='evenodd' />
            </svg>
          </span>
          Login
        </button>
      </div>
    </form>
        </div>
      </div>
    </div>
    </LoginPortal>
    )}
    </>
  )
}