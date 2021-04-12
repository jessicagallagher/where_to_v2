import styles from '../styles/LandingPage.module.css';
import Link from 'next/link';
import LoginModal from './LoginModal';

export default function LandingPage() {

  return (
    <div className='bg-white overflow-hidden shadow sm:rounded-lg w-full'>
      <div className='px-4 py-5 sm:p-6 relative'>
        <img src='/logo.png' alt='person with suitcase' width={173} height={300} className={styles.logo}/>
        <h1 className='font-accent text-mdGrey-100 inline md:text-6xl ml-16 align-middle'>Where To?</h1>
        <LoginModal />
        <Link href='/users/signup'>
        <a><button type='button' className='inline-flex mb-6 float-right justify-center py-2 border border-teal-100 bg-transparent text-base font-medium rounded-md text-dkGrey-100 hover:border-purple-100 w-36'>Create an Account</button></a>
        </Link>
      </div>

    </div>
  )
}