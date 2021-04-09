import fire from '../../config/fire-config';
import Link from 'next/link';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';


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
      <header className='pb-24 pt-10 bg-ltLime-100'>
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

            <div className='mx-auto'>
              <h2 className='text-6xl font-accent text-dkGrey-100'>
                {itinerary.tripName}

              </h2>

            </div>

            <div className='ml-4 relative flex-shrink-0'>
              <div className='md:text-6xl text-teal-100'>
                <FontAwesomeIcon icon={faTrash} />
               
              </div>
            </div>

          </div>
        </div>
      </header>

      <main className='-mt-16 pb-8'>
        <div className='max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
          <h1 className='sr-only'>{itinerary.tripName}</h1>

          <div className='grid grid-cols-1 gap-4 items-start lg:grid-cols-3 lg:gap-8'>

            <div className='grid grid-cols-1 gap-4 lg:col-span-2'>
              <section aria-labelledby='section-1-title'>
                <h2 className='sr-only' id='section-1-title'>Trip Details</h2>
                <div className='rounded-lg bg-white overflow-hidden shadow'>
                  <div className='p-6'>
                    
                    <div className='md:flex md:items-center md:justify-between'>
                      <div className='flex-1 min-w-0'>
                        <h2 className='text-2xl font-bold leading-7 text-purple-100 sm:text-3xl sm:truncate'>
                          Trip Details
                        </h2>
                      </div>

                      <div className='mt-4 flex md:mt-0 md:ml-4'>
                        <div className='md:text-6xl text-ltGrey-100'>
                          <FontAwesomeIcon icon={faEdit} />
                        </div>
                      </div>

                    </div>

                    <div className='flex flex-col mt-6'>
                      <div className='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
                        <div className='py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8'>
                          <div className='shadow-lg overflow-hidden border border-ltLime-100 sm:rounded-lg'>
                            <table className='min-w-full divide-y divide-ltGrey-100'>
                              <tbody className='bg-white divide-y divide-teal-100'>
                                <tr>
                                  <td className='px-6 py-4 whitespace-nowrap text-xl font-medium text-dkGrey-100'>
                                    Trip name
                                  </td>
                                  <td className='px-6 py-4 whitespace-nowrap text-right text-md text-dkGrey-100 font-medium'>
                                    {itinerary.tripName}
                                  </td>
                                </tr>
                                <tr>
                                  <td className='px-6 py-4 whitespace-nowrap text-xl font-medium text-dkGrey-100'>
                                    Trip dates
                                  </td>
                                  <td className='px-6 py-4 whitespace-nowrap text-right text-md text-dkGrey-100 font-medium'>
                                    {itinerary.startMonth}.{itinerary.startDay} - {itinerary.endMonth}.{itinerary.endDay}
                                  </td>
                                </tr>
                                <tr>
                                  <td className='px-6 py-4 whitespace-nowrap text-xl font-medium text-dkGrey-100'>
                                    Airport
                                  </td>
                                  <td className='px-6 py-4 whitespace-nowrap text-right text-md text-dkGrey-100 font-medium'>
                                    {itinerary.airportCode}
                                  </td>
                                </tr>
                                <tr>
                                  <td className='px-6 py-4 whitespace-nowrap text-xl font-medium text-dkGrey-100'>
                                    Airline name + flight number
                                  </td>
                                  <td className='px-6 py-4 whitespace-nowrap text-right text-md text-dkGrey-100 font-medium'>
                                    {itinerary.airlineName} flight number {itinerary.flightNumber}
                                  </td>
                                </tr>
                                <tr>
                                  <td className='px-6 py-4 whitespace-nowrap text-xl font-medium text-dkGrey-100'>
                                    Departure time
                                  </td>
                                  <td className='px-6 py-4 whitespace-nowrap text-right text-md text-dkGrey-100 font-medium'>
                                    {itinerary.departureHour}{itinerary.departureMinute} {itinerary.amPm}
                                  </td>
                                </tr>
                                <tr>
                                  <td className='px-6 py-4 whitespace-nowrap text-xl font-medium text-dkGrey-100'>
                                    Headed to the airport from
                                  </td>
                                  <td className='px-6 py-4 whitespace-nowrap text-right text-md text-dkGrey-100 font-medium'>
                                    {itinerary.houseNumber} {itinerary.street}
                                    <br></br>
                                    {itinerary.city}, {itinerary.state} {itinerary.zip}
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            <div className='grid grid-cols-1 gap-4'>
              <section aria-labelledby='section-2-title'>
                <h2 className='sr-only' id='section-2-title'>Packing List</h2>
                <div className='rounded-lg bg-white overflow-hidden shadow'>
                  <div className='p-6'>

                    <div className='md:flex md:items-center md:justify-between'>
                      <div className='flex-1 min-w-0'>
                        <h2 className='text-2xl font-bold leading-7 text-purple-100 sm:text-3xl sm:truncate'>
                          Packing List
                        </h2>
                      </div>

                      <div className='mt-4 flex md:mt-0 md:ml-4'>
                        <div className='md:text-6xl text-ltGrey-100'>
                          <FontAwesomeIcon icon={faCheckSquare} />
                        </div>
                      </div>



                    </div>
                    

                    
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




