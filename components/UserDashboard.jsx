import { db, auth } from '../firebase/clientApp';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { EllipsisVerticalIcon } from '@heroicons/react/20/solid';
import { useState, useEffect } from 'react';
import {
  getFirestore,
  getDocs,
  collection,
} from 'firebase/firestore';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function UserDashboard() {
  const [trips, setTrips] = useState([]);
  const [itineraries, setItineraries] = useState([]);
  const [details, setDetails] = useState([]);
  const db = getFirestore();

  useEffect(() => {
    getTrips()
  }, [])

  const getTrips = async () => {
    const querySnapshot = await getDocs(collection(db, 'users'));
    querySnapshot.forEach((doc) => {
      setTrips(doc.data())
      setItineraries(doc.data().trips)
    })
    
  }
  console.log(trips)
  console.log(itineraries)

  return (
    <>
      <div className='min-h-full'>
        <div className='bg-purple'>
          <header className='py-10'>
            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
              <h1 className='text-3xl font-bold tracking-tight text-greyLight'>
                Dashboard
              </h1>
            </div>
          </header>
        </div>

        <main className='pt-10'>
          <div className='mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8'>
            <div className='rounded-lg bg-white px-5 py-6 shadow-2xl sm:px-6'>
              <h1 className='text-2xl'>Your upcoming trips</h1>
              <div>
                <ul
                  role='list'
                  className='mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4'
                >
                  {itineraries.map((itinerary) => (
                    <li
                      key={itinerary.tripName}
                      className='col-span-1 flex rounded-md shadow-sm'
                    >
                      <div
                        className=
                          'flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md bg-teal'
                        
                      >
                        {itinerary.tripName}
                      </div>
                      <div className='flex flex-1 items-center justify-between truncate rounded-r-md border-t border-r border-b border-gray-200 bg-white'>
                        <div className='flex-shrink-0 pr-2'>
                          <button
                            type='button'
                            className='inline-flex h-8 w-8 items-center justify-center rounded-full bg-white bg-transparent text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                          >
                            <span className='sr-only'>Open options</span>
                            <EllipsisVerticalIcon
                              className='h-5 w-5'
                              aria-hidden='true'
                            />
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
