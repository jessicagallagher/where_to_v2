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
    .collection(`itinerary/${tripName}/flight-info/${airportCode}/packing-list`)
    .add({
      tripName: tripName,
      startMonth: startMonth,
      startDay: startDay,
      endMonth: endMonth,
      endDay: endDay,
      airportCode: airportCode,
      airlineName: airlineName,
      flightNumber: flightNumber,
      departureHour: departureHour,
      departureMinute: departureMinute,
      amPm: amPm,
      houseNumber: houseNumber,
      street: street,
      city: city,
      state: state,
      zip: zip,
      clothesItem: clothesItem,
      toiletriesItem: toiletriesItem,
      miscItem: miscItem
    })
    .catch(error => {
      console.log('not added to db ', error)
    })
    router.push('/users/dashboard')
  }

  const { go } = navigation;

  return (
    <div className='bg-white overflow-hidden shadow sm:rounded-lg'>
      <div className='px-4 py-5 sm:p-6 relative'>
        <form className='space-y-8 divide-y divide-mdGrey-100' onSubmit={handleSubmit}>
          <div className='space-y-8 divide-y divide-mdGrey-100 sm:space-y-5'>
            <div>
              <div>
                <h3 className='font-accent md:text-3xl my-3 text-dkGrey-100 text-center'>Review Your Itinerary</h3>
                    <h3 className='text-lg leading-6 font-medium text-teal-100'>
          Trip Name + Dates
        </h3>
        <p>
          {`${tripName} starts on ${startMonth}.${startDay} and ends on ${endMonth}.${endDay}`}
        </p>
        <button className='inline-flex justify-center py-2 border border-teal-100 text-base font-medium rounded-md text-dkGrey-100 bg-transparent hover:border-purple-100 w-36' onClick={() => go('step1')}>
                      Edit
                    </button>
                    <h3 className='text-lg leading-6 font-medium text-teal-100'>
          Flight Details
        </h3>
        <p>
          {`Headed to ${airportCode} airport from ${houseNumber} ${street} in ${city}, ${state}, ${zip} on ${airlineName} flight ${flightNumber}, which departs at ${departureHour}:${departureMinute} ${amPm}`}
        </p>
        <button className='inline-flex justify-center py-2 border border-teal-100 text-base font-medium rounded-md text-dkGrey-100 bg-transparent hover:border-purple-100 w-36' onClick={() => go('step2')}>
                      Edit
                    </button>
                    <h3 className='text-lg leading-6 font-medium text-teal-100'>
          Packing List
        </h3>
        <ul>
          <li>
            Clothes: {`${clothesItem}`}
          </li>
          <li>
            Toiletries: {`${toiletriesItem}`}
          </li>
          <li>
            Miscellaneous: {`${miscItem}`}
          </li>
        </ul>
        <button className='inline-flex justify-center py-2 border border-teal-100 text-base font-medium rounded-md text-dkGrey-100 bg-transparent hover:border-purple-100 w-36' onClick={() => go('step3')}>
                      Edit
                    </button>
        
              </div>
            </div>

          </div>
          <button type='submit' className='inline-flex justify-center py-2 border border-teal-100 text-base font-medium rounded-md text-dkGrey-100 bg-transparent hover:border-purple-100 w-36'>
                      Submit
                    </button>

        </form>

      </div>

    </div>
  );
};