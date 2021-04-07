import React from 'react';
import { useForm, useStep } from 'react-hooks-helper';
import { Router, useRouter } from 'next/router';
import fire from '../config/fire-config';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Edit from './Edit';

const steps = [
  { id: 'step1' },
  { id: 'step2' },
  { id: 'step3' },
  { id: 'edit' }
];

const dummyData = {
  tripName: '',
  startMonth: '',
  startDay: '',
  endMonth: '',
  endDay: '',
  airportCode: '',
  airlineName: '',
  flightNumber: '',
  departureHour: '',
  departureMinute: '',
  amPm: '',
  houseNumber: '',
  street: '',
  city: '',
  state: '',
  zip: '',
  clothesItem: '',
  toiletriesItem: '',
  miscItem: ''
}

export default function MultiStepForm() {
  const [formData, setForm] = useForm(dummyData);
  const { step, navigation } = useStep({ initialStep: 0, steps })
  const { id } = step;
  // const router = useRouter();

  const props = { formData, setForm, navigation };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   fire.firestore()
  //   .collection(`itinerary/${tripName}/flight-info/${airportCode}/packing-list`)
  //   .add({
  //     tripName: tripName,
  //     startMonth: startMonth,
  //     startDay: startDay,
  //     endMonth: endMonth,
  //     endDay: endDay,
  //     airportCode: airportCode,
  //     airlineName: airlineName,
  //     flightNumber: flightNumber,
  //     departureHour: departureHour,
  //     departureMinute: departureMinute,
  //     amPm: amPm,
  //     houseNumber: houseNumber,
  //     street: street,
  //     city: city,
  //     state: state,
  //     zip: zip,
  //     clothesItem: clothesItem,
  //     toiletriesItem: toiletriesItem,
  //     miscItem: miscItem
  //   })
  //   .catch(error => {
  //     console.log('not added to db ', error)
  //   })
  //   router.push('/users/dashboard')
  // }

  switch (id) {
    case 'step1':
      return <Step1 {...props} />;
    case 'step2':
      return <Step2 {...props} />;
    case 'step3':
      return <Step3 {...props} />;
    case 'edit':
      return <Edit {...props} />;
    default:
      return null;
      console.log('lol switch stmt is broken again #neverforget');
  }
};