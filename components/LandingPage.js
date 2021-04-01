import styles from '../styles/LandingPage.module.css';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className='bg-white overflow-hidden shadow sm:rounded-lg w-full'>
      <div className='px-4 py-5 sm:p-6 relative'>
        <img src='/logo.png' alt='person with suitcase' width={173} height={300} className={styles.logo}/>
        <h1 className='font-accent text-mdGrey-100 inline md:text-6xl absolute top-1/3 right-1/4'>Where To?</h1>
        <button type='button' className='absolute py-2 left-1/3 bottom-1/3 ml-8 border border-teal-100 bg-transparent text-base font-medium rounded-md text-dkGrey-100 hover:border-purple-100 w-36'>Login</button>
        <Link href='/users/signup'>
        <a><button type='button' className='absolute py-2 left-2/3 bottom-1/3 border border-teal-100 bg-transparent text-base font-medium rounded-md text-dkGrey-100 hover:border-purple-100 w-36'>Create an Account</button></a>
        </Link>
      </div>

    </div>
  )
}