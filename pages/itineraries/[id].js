import fire from '../../config/fire-config';
import Link from 'next/link';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Itinerary = (props) => {
  const [itinerary, setItinerary] = useState(null);

  useEffect(() => {
    fire.firestore()
    .collection('users')
    .doc(fire.auth().currentUser.uid)
    .collection('itineraries')
    .doc(props.id)
    .get()
    .then(result => {
      setItinerary(result.data())
    })
  }, []);

  if(!itinerary){
    return (
      <h2>Just a sec...</h2>
    )
  }

  return (
    <div>
    <Head>
        <title>{itinerary.tripName}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      
    <div className='min-hscreen bg-white'>
      <header className='pb-24 bg-ltLime-100'>
        <div className='max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
          <div className='relative py-5 flex items-center justify-center lg:justify-between'>
            <div className='absolute left-0 flex-shrink-0 lg:static'>
              <Link href='/users/dashboard'>
                <a>
                  <div className='md:text-6xl text-teal-100'>
                  <FontAwesomeIcon icon={faBackward} />
                  </div>
                </a>
              </Link>
            </div>

            <div className='ml-4 relative flex-shrink-0'>
              <div className='md:text-6xl text-teal-100'>
                <FontAwesomeIcon icon={faTrash} />
              </div>
            </div>

          </div>
        </div>
      </header>

      <main className='-mt-24 pb-8'>
        <div className='max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
          <h1 className='sr-only'>{itinerary.tripName}</h1>

          <div className='grid grid-cols-1 gap-4 items-start lg:grid-cols-3 lg:gap-8'>

            <div className='grid grid-cols-1 gap-4 lg:col-span-2'>
              <section aria-labelledby='section-1-title'>
                <h2 className='sr-only' id='section-1-title'>Trip Details</h2>
                <div className='rounded-lg bg-white overflow-hidden shadow'>
                  <div className='p-6'>
                    <h2>{itinerary.tripName}</h2>
                  </div>
                </div>
              </section>
            </div>
            
          </div>

        </div>

      </main>
      
      
    </div>
    </div>
  )
}

Itinerary.getInitialProps = ({ query }) => {
  return {
    id: query.id,
  }
}

export default Itinerary




