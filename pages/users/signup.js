import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import fire from '../../config/fire-config';

export default function Signup() {
  const router = useRouter();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    setPassword('');

    fire.auth().createUserWithEmailAndPassword(userName, password)
    .then(() => {
      fire.firestore().collection('users').doc(fire.auth().currentUser.uid)
      .set({
        firstName: firstName,
        lastName: lastName,
        email: userName
      })
      .catch(error => {
        console.log('user wasn\'t added to db: ', error);
      })
    })
    .catch(error => {
      console.log('user wasn\'t able to cretae an account: ', error);
    })
    router.push('/users/dashboard')
  };



  return (
    <div className='container flex flex-col justify-center items-center mx-auto py-0 px-2 min-h-screen sm:px-6 lg:px-8'>
      <Head>
        <title>Create an Account</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='bg-white overflow-hidden shadow sm:rounded-lg w-1/2'>
      <div className='px-4 py-5 sm:p-6 relative'>
      <form onSubmit={handleSubmit} className='space-y-8 divide-y divide-gray-200'>
        <div className='space-y-8 divide-y divide-gray-200'>
          <div>
            <div className='pt-8'>
              <div>
                <h1 className='font-accent md:text-6xl leading-6 text-mdGrey-100 text-center'>Create an Account</h1>
              </div>
              <div className='mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6'>
                <div className='sm:col-span-3'>
                  <label className='block text-lg text-dkGrey-100'>First name</label>
                  <div className='mt-1'>
                    <input type='text' name='firstName' id='firstName' value={firstName} placeholder='First name' className='shadow-md block w-3/4 sm:text-sm border border-ltLime-100 rounded-sm' onChange={({target}) => setFirstName(target.value)}></input>
                  </div>
                </div>
                <div className='sm:col-span-3'>
                  <label className='block text-lg text-dkGrey-100'>Last name</label>
                  <div className='mt-1'>
                    <input type='text' name='lastName' id='lastName' value={lastName} placeholder='Last name' className='shadow-md block w-3/4 sm:text-sm border border-ltLime-100 rounded-sm' onChange={({target}) => setLastName(target.value)}></input>
                  </div>
                </div>
                <div className='sm:col-span-3'>
                  <label className='block text-lg text-dkGrey-100'>Email</label>
                  <div className='mt-1'>
                    <input id='email' name='email' type='text' value={userName} placeholder='Email' className='shadow-md block w-3/4 sm:text-sm border border-ltLime-100 rounded-sm' onChange={({target}) => setUserName(target.value)}></input>
                  </div>
                </div>
                <div className='sm:col-span-3'>
                  <label className='block text-lg text-dkGrey-100'>Password</label>
                  <div className='mt-1'>
                    <input type='password' name='password' id='password' className='shadow-md block w-3/4 sm:text-sm border border-ltLime-100 rounded-sm' value={password} placeholder='Password should be at least 6 characters' onChange={({target}) => setPassword(target.value)}></input>
                  </div>
                </div>
                <div className='pt-5'>
                  <div className='flex justify-end'>
                    <button type='submit' className='inline-flex justify-center py-2 border border-teal text-base font-medium rounded-sm text-dkGrey-100 bg-transparent hover:border-purple-100 w-36'>
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