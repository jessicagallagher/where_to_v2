import fire from '../../config/fire-config';
import Link from 'next/link';
import Head from 'next/head';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { Router, useRouter } from 'next/router';
import { useEffect, useState } from 'react';


const Itinerary = (props) => {
  const [itinerary, setItinerary] = useState(null);
  const [email, setEmail] = useState('');
  const MySwal = withReactContent(Swal)
  const router = useRouter();



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

  const handleDelete = (id) => {
    fire.firestore()
    .collection('users')
    .doc(fire.auth().currentUser.uid)
    .collection('itineraries')
    .doc(props.id)
    .delete();
    router.push('/users/dashboard')    
  }

  const handleClick = () => {
    

    const templateParams = {
      email: email,
      tripName: itinerary.tripName,
      startMonth: itinerary.startMonth,
      startDay: itinerary.startDay,
      endMonth: itinerary.endMonth,
      endDay: itinerary.endDay,
      airportCode: itinerary.airportCode,
      houseNumber: itinerary.houseNumber,
      street: itinerary.street,
      city: itinerary.city,
      state: itinerary.state,
      zip: itinerary.zip,
      airlineName: itinerary.airlineName,
      flightNumber: itinerary.flightNumber,
      departureHour: itinerary.departureHour,
      departureMinute: itinerary.departureMinute,
      amPm: itinerary.amPm,
      clothesItem: itinerary.clothesItem,
      toiletriesItem: itinerary.toiletriesItem,
      miscItem: itinerary.miscItem 
    }

    emailjs.send('service_l7jy9yt', 'trip', templateParams, 'user_vJRGE8KylLXL8to1eOZ9A')
    .then(result => {
      MySwal.fire({
        title: <p>🎉 Sent!</p>,
        confirmButtonText: <p>Cool!</p>
      })
    },
    error => {
      MySwal.fire({
        title: <p>👎 Whoops! Sometime went wrong. Try again in a few!</p>,
        confirmButtonText: <p>Got it!</p>
      })
    })
  }

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
      <div>
  <div className='bg-ltLime-100 pb-5'>
    <nav className='sm:hidden' aria-label='Back'>
      <a href='#' className='flex items-center text-sm font-medium text-dkGrey-100 hover:white-100'>
        {/* <!-- Heroicon name: solid/chevron-left --> */}
        <svg className='flex-shrink-0 -ml-1 mr-1 h-5 w-5 text-gray-500' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' aria-hidden='true'>
          <path fillRule='evenodd' d='M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z' clipRule='evenodd' />
        </svg>
        Back
      </a>
    </nav>
    <nav className='hidden sm:flex pt-5 px-5' aria-label='Breadcrumb'>
      <ol className='flex items-center space-x-4'>
        <li>
          <div>
            <a href='#' className='text-dkGrey-100 hover:text-teal-100'>
              <a href='/users/dashboard' className='text-lg font-medium text-dkGrey-100 hover:text-teal-100'>Dashboard</a>
            </a>
          </div>
        </li>
        <li>
          <div className='flex items-center'>
            {/* <!-- Heroicon name: solid/chevron-right --> */}
            <svg className='flex-shrink-0 h-5 w-5 text-teal-100' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' aria-hidden='true'>
              <path fill-rule='evenodd' d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z' clip-rule='evenodd' />
            </svg>
            <a href='/users/dashboard' className='ml-4 text-lg font-medium text-dkGrey-100 hover:text-teal-100'>Upcoming Trips</a>
          </div>
        </li>
        <li>
          <div className='flex items-center'>
            {/* <!-- Heroicon name: solid/chevron-right --> */}
            <svg className='flex-shrink-0 h-5 w-5 text-teal-100' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' aria-hidden='true'>
              <path fill-rule='evenodd' d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z' clip-rule='evenodd' />
            </svg>
            <a href='#' aria-current='page' className='ml-4 text-lg font-medium text-dkGrey-100 hover:text-teal-100'>{itinerary.tripName}</a>
          </div>
        </li>
      </ol>
    </nav>
  </div>
  <div className='mt-2 md:flex md:items-center md:justify-between pt-5 px-5 mx-40'>
    <div className='flex-1 min-w-0'>
      <h2 className='text-2xl font-bold leading-7 text-purple-100 sm:text-3xl sm:truncate'>
        {itinerary.tripName}
      </h2>
    </div>
      <div className='mt-4 flex-shrink-0 flex md:mt-0 md:ml-4 md:text-3xl text-dkGrey-100 hover:text-teal-100 cursor-pointer'>
      <button onClick={() => window.print()}>🖨️</button>
      </div>
      <div className='mt-4 flex-shrink-0 flex md:mt-0 md:ml-4 md:text-3xl text-dkGrey-100 hover:text-teal-100 cursor-pointer'>
      <button onClick={() => handleDelete(props.id)}>🗑️</button>
      </div>     
  </div>
  <div className='bg-white shadow-lg overflow-hidden sm:rounded-lg mt-5 mx-40 pt-5 px-5'>
  <div className='px-4 py-5 sm:px-6'>
    <h3 className='text-xl leading-6 font-medium text-dkGrey-100'>
      Details
    </h3>
    <div className='mt-3'>
    <h3 className='text-lg leading-6 font-medium text-purple-100 inline'>
    📨 Email this! 
    </h3>
    <input type='email' onChange={event => setEmail(event.target.value)} className='shadow-md inline ml-3 w-1/4 sm:text-sm border border-ltLime-100 rounded-sm' placeholder='hi@youremail.com'/>
    <button type='submit' onClick={handleClick} className='inline ml-3 py-1 w-16 border border-teal-100 text-base font-medium rounded-md text-dkGrey-100 bg-transparent hover:border-purple-100'>Send!</button>
    </div>
  </div>
  <div className='border-t border-teal-100 px-4 py-5 sm:p-0'>
    <dl className='sm:divide-y sm:divide-ltLime-100'>
      <div className='py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
        <dt className='text-lg font-medium text-mdGrey-100'>
          Trip name
        </dt>
        <dd className='mt-1 text-lg text-dkGrey-100 sm:mt-0 sm:col-span-2'>
          {itinerary.tripName}
        </dd>
      </div>
      <div className='py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
        <dt className='text-lg font-medium text-mdGrey-100'>
          Trip dates
        </dt>
        <dd className='mt-1 text-lg text-dkGrey-100 sm:mt-0 sm:col-span-2'>
          {itinerary.startMonth}.{itinerary.startDay} -- {itinerary.endMonth}.{itinerary.endDay}
        </dd>
      </div>
      <div className='py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
        <dt className='text-lg font-medium text-mdGrey-100'>
          Flight information
        </dt>
        <dd className='mt-1 text-lg text-dkGrey-100 sm:mt-0 sm:col-span-2'>
          Leaving from {itinerary.airportCode} airport on {itinerary.airlineName} flight {itinerary.flightNumber} at {itinerary.departureHour}{itinerary.departureMinute} {itinerary.amPm}
        </dd>
      </div>
      <div className='py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
        <dt className='text-lg font-medium text-mdGrey-100'>
          Headed to {itinerary.airportCode} from
        </dt>
        <dd className='mt-1 text-lg text-dkGrey-100 sm:mt-0 sm:col-span-2'>
          {itinerary.houseNumber} {itinerary.street}
          <br></br>
          {itinerary.city}, {itinerary.state} {itinerary.zip}
        </dd>
      </div>
      <div className='py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
        <dt className='text-lg font-medium text-mdGrey-100'>
          Clothes to pack
        </dt>
        <dd className='mt-1 text-lg text-dkGrey-100 sm:mt-0 sm:col-span-2'>
          {itinerary.clothesItem}
        </dd>
      </div>
      <div className='py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
        <dt className='text-lg font-medium text-mdGrey-100'>
          Toiletries to pack
        </dt>
        <dd className='mt-1 text-lg text-dkGrey-100 sm:mt-0 sm:col-span-2'>
          {itinerary.toiletriesItem}
        </dd>
      </div>
      <div className='py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
        <dt className='text-lg font-medium text-mdGrey-100'>
          Other items to pack
        </dt>
        <dd className='mt-1 text-lg text-dkGrey-100 sm:mt-0 sm:col-span-2'>
          {itinerary.miscItem}
        </dd>
      </div>
      
    </dl>
  </div>
</div>
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




