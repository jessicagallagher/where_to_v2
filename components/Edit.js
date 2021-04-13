import React from 'react';
import { Router, useRouter } from 'next/router';
import fire from '../config/fire-config';

export default function Edit({ setForm, formData, navigation }) {
  const router = useRouter();

  const {
    tripName,
    startMonth,
    startDay,
    endMonth,
    endDay,
    airportCode,
    airlineName,
    flightNumber,
    departureHour,
    departureMinute,
    amPm,
    houseNumber,
    street,
    city,
    state,
    zip,
    clothesItem,
    toiletriesItem,
    miscItem
  } = formData;

  const handleSubmit = (e) => {
    e.preventDefault();

    fire.firestore()
    .collection('users').doc(fire.auth().currentUser.uid).collection('itineraries')
    .add({
      tripName: tripName,
      startMonth: parseInt(startMonth),
      startDay: parseInt(startDay),
      endMonth: parseInt(endMonth),
      endDay: parseInt(endDay),
      airportCode: airportCode,
      airlineName: airlineName,
      flightNumber: flightNumber,
      departureHour: parseInt(departureHour),
      departureMinute: departureMinute,
      amPm: amPm,
      houseNumber: parseInt(houseNumber),
      street: street,
      city: city,
      state: state,
      zip: parseInt(zip),
      clothesItem: clothesItem,
      toiletriesItem: toiletriesItem,
      miscItem: miscItem
    })
    .catch(error => {
      console.log('itinerary not added to db ', error)
    })
    router.push('/users/dashboard')
  }

  const { go } = navigation;

  return (
    <div className='bg-white overflow-hidden shadow sm:rounded-lg'>
      <div className='px-4 py-5 sm:p-6 relative'>
        <form className='space-y-8' onSubmit={handleSubmit}>
          <div className='space-y-8 sm:space-y-5'>
            <div>
              <div>
                <h3 className='font-accent md:text-3xl my-3 text-dkGrey-100 text-center'>👀 Review Your Itinerary</h3>
                <button className='inline mr-3 text-base font-medium rounded-md text-dkGrey-100 bg-transparent' onClick={() => go('step1')}>
                      ✏️
                    </button>
                    <h3 className='text-lg inline leading-6 font-medium text-purple-100'>
          Trip Name + Dates
        </h3>
        <p className='text-dkGrey-100 my-1'>
          {`${tripName} starts on ${startMonth}.${startDay} and ends on ${endMonth}.${endDay}`}
        </p>
                    <hr className='border-lime-100 my-1'></hr>
                     <button className='inline mr-3 mt-3 text-base font-medium rounded-md text-dkGrey-100 bg-transparent' onClick={() => go('step2')}>
                      ✏️
                    </button>
                    <h3 className='text-lg inline leading-6 font-medium text-purple-100'>
          Flight Details
        </h3>
        <p className='text-dkGrey-100 my-1'>
          {`Headed to ${airportCode} airport from ${houseNumber} ${street} in ${city}, ${state}, ${zip} on ${airlineName} flight ${flightNumber}, which departs at ${departureHour}${departureMinute} ${amPm}`}
        </p>
        <hr className='border-lime-100 my-1'></hr>
        <button className='inline mr-3 mt-3 text-base font-medium rounded-md text-dkGrey-100 bg-transparent' onClick={() => go('step3')}>
                      ✏️
                    </button>
                    <h3 className='text-lg inline leading-6 font-medium text-purple-100'>
          Packing List
        </h3>
        <ul className='text-dkGrey-100 my-1'>
          <li>
            👚  Clothes: {`${clothesItem}`}
          </li>
          <li>
            🪥  Toiletries: {`${toiletriesItem}`}
          </li>
          <li>
            💻  Miscellaneous: {`${miscItem}`}
          </li>
        </ul>
              </div>
            </div>
          </div>
          <div className='mt-3'>
          <button type='submit' className='inline-flex justify-center py-2 border border-teal-100 text-base font-medium rounded-md text-dkGrey-100 bg-transparent hover:border-purple-100 w-36'>
                      Submit
                    </button>
                    </div>
        </form>
      </div>
    </div>
  );
};