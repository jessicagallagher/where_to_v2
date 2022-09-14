import img from '../public/logo.png'
import { Button } from './reusable-components';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { db, auth } from '../firebase/clientApp'
import { useState, useEffect } from 'react';
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword
} from 'firebase/auth'
import {
  getFirestore,
  setDoc,
  doc,
  updateDoc,
} from 'firebase/firestore'

export default function RegisterLogIn() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isUser, setIsUser] = useState(true)
  const [dateTime, setDateTime] = useState((dateTime) => {
    const now = new Date();
    const str = now.toLocaleString();
    return str;
  });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        let uid = user.uid;
        console.log(`Second log in check successful`);
        updateDoc(doc(db, 'users', user.uid), {
          lastLoggedIn: dateTime,
        })
      } else {
        console.log(`No user is logged in`)
      }
    })
  })

  const handleToggleUser = () => {
setIsUser(!isUser)
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const auth = getAuth();
    const db = getFirestore();

    if (!isUser) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          console.log(error);
        })
        .then(() => {
          onAuthStateChanged(auth, (user) => {
            if (user) {
              let uid = user.uid;
              setIsUser(true);
              console.log(`logged in`);
              setDoc(doc(db, 'users', user.uid), {
                firstName: firstName,
                lastName: lastName,
                email: email,
                createdAt: dateTime,
                updatedAt: dateTime,
                lastActive: dateTime,
              });
            } else {
              console.log(`not logged in`)
            }
          });
        });
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(`${userCredential} is logged in`);
        })
        .catch((error) => {
        console.log(error)
        })
    }
  }

  return (
    <div className='flex min-h-full flex-col justify-center py-12 px-6 lg:px-8'>
      <div className='mx-auto'>
        <Image
          src={img}
          width={50}
          height={75}
          alt={'person standing next to suitcase'}
        />
      </div>
      <h2 className='mt-6 text-center text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-greyDefault'>
        {isUser ? `Log in` : `Create an account`}
      </h2>
      <p className='mt-2 text-center text-base text-greyDefault cursor-pointer' onClick={handleToggleUser}>
        <a className='font-semibold text-purple hover:text-teal'>
          {isUser
            ? `Don't have an account? Create one`
            : `Already have an account? Log in`}
        </a>
      </p>

      <div className='mt-8 mx-auto w-full max-w-md'>
        <div className='z-50 py-8 px-4 shadow-2xl border border-purple rounded-lg'>
          <form className='space-y-6' onSubmit={handleSubmit}>
            {!isUser && (
              <>
                <div>
                  <label
                    htmlFor='firstName'
                    className='block text-sm font-medium text-greyDefault'
                  >
                    First name
                  </label>
                  <div className='mt-1'>
                    <input
                      id='firstName'
                      name='firstName'
                      type='firstName'
                      autoComplete='given-name'
                      required
                      className='block w-full appearance-none rounded-md border border-purple px-3 py-2 placeholder-gray-400 shadow-sm text-sm'
                      placeholder='Jane'
                      value={firstName}
                      onChange={({ target }) => setFirstName(target.value)}
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor='lastName'
                    className='block text-sm font-medium text-greyDefault'
                  >
                    Last name
                  </label>
                  <div className='mt-1'>
                    <input
                      id='lastName'
                      name='lastName'
                      type='lastName'
                      autoComplete='family-name'
                      required
                      placeholder='Doe'
                      value={lastName}
                      onChange={({ target }) => setLastName(target.value)}
                      className='block w-full appearance-none rounded-md border border-purple px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                    />
                  </div>
                </div>
              </>
            )}
            <div>
              <label
                htmlFor='email'
                className='block text-sm font-medium text-greyDefault'
              >
                Email
              </label>
              <div className='mt-1'>
                <input
                  id='email'
                  name='email'
                  type='email'
                  autoComplete='email'
                  required
                  className='block w-full appearance-none rounded-md border border-purple px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                  placeholder="jane.doe@gmail.com"
                  value={email}
                  onChange={({ target }) => setEmail(target.value)}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor='password'
                className='block text-sm font-medium text-greyDefault'
              >
                Password
              </label>
              <div className='mt-1'>
                <input
                  id='password'
                  name='password'
                  type='password'
                  autoComplete='current-password'
                  required
                  className='block w-full appearance-none rounded-md border border-purple px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                  placeholder='********'
                  value={password}
                  onChange={({ target }) => setPassword(target.value)}
                />
              </div>
            </div>
            <div className='flex items-center justify-between'>
              <div className='flex items-center'>
                <input
                  id='remember-me'
                  name='remember-me'
                  type='checkbox'
                  className='h-4 w-4 rounded border-gray-300 text-purple'
                />
                <label
                  htmlFor='remember-me'
                  className='ml-2 block text-sm text-greyDefault'
                >
                  Remember me
                </label>
              </div>
              {isUser && (
                <div className='text-sm'>
                  <a
                    href='#'
                    className='font-semibold text-purple hover:text-teal'
                  >
                    Forgot your password?
                  </a>
                </div>
              )}
            </div>
            <div className='flex justify-center'>
              <Button
                buttonText={isUser ? `Log in` : `Create account`}
                buttonType={'submit'}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
