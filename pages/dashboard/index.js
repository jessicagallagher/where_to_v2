import { UserDashboard } from '../../components'
import { Navbar } from '../../components/reusable-components'
import { auth } from '../../firebase/clientApp'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { useEffect } from 'react';

export default function DashboardHome() {
  const auth = getAuth();
  const router = useRouter();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        let uid = user.uid;
        console.log('logged in')
      } else {
        router.push('/login')
      }
    })
}, [])

  return (
    <div>
      <Head>
        <title>Dashboard</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      <main className='md:pb-24'>
        <UserDashboard />
      </main>
    </div>
  );
}
