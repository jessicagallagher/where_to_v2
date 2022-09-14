import img from '../public/logo.png'
import { Button } from './reusable-components'
import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import Image from 'next/image';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className='p-2 md:p-6 lg:px-20 md:bg-greyDefault md:flex items-center'>
      <div className='w-1/2 mx-auto md:w-1/2'>
        <Image
          src={img}
          width={300}
          height={500}
          alt='person standing with suitcase'
          priority
          placeholder='blur'
        />
      </div>
      <div className='w-full md:w-1/2'>
        <div className='text-greyDefault md:text-greyLight'>
          <p className='mt-2 text-2xl font-bold tracking-tight sm:text-3xl'>
            {`Where To?`}
          </p>
          <p className='mt-3 text-base'>
            Where are you going? Keep track of your upcoming trip details—from
            packing lists to figuring out what time you need to leave to get to
            the airport—all in one convenient location.
          </p>
            <div className='my-8'>
              <Link href='/login'>
                <a>
                  <Button buttonText={'Log in or Create account'} buttonType={'button'} />
                </a>
              </Link>
            </div>
        </div>
      </div>
    </div>
  );
}
