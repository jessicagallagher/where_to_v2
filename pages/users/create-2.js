import Head from 'next/head';
import { useState } from 'react';
import { useRouter } from 'next/router';
import fire from '../../config/fire-config';

export default function SecondStep() {
  const router = useRouter();

  const [airportCode, setAirportCode] = useState('');
  const [airlineName, setAirlineName] = useState('');
  const [flightNumber, setFlightNumber] = useState('');
  const [departureHour, setDepartureHour] = useState('');
  const [departureMinute, setDepartureMinute] = useState('');
  const [amPm, setAmPm] = useState('');
  const [houseNumber, setHouseNumber] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    fire.firestore()
    .collection('itinerary/tripName/tripdetails/flightDeets/flightinfo')
    .add({
      airportCode: setAirportCode,
      airlineName: setAirlineName,
      flightNumber: setFlightNumber,
      departureHour: setDepartureHour,
      departureMinute: setDepartureMinute,
      amPm: setAmPm,
      houseNumber: setHouseNumber,
      street: setStreet,
      city: setCity,
      state: setState,
      zip: setZip
    })
    .catch(error => {
      console.log('flight info not added to db')
    })

    setAirportCode('');
    setAirlineName('');
    setFlightNumber('');
    setDepartureHour('');
    setDepartureMinute('');
    setAmPm('');
    setHouseNumber('');
    setStreet('');
    setCity('');
    setState('');
    setZip('');
  }


  return (
    <div className='container flex flex-col justify-center items-center mx-auto py-0 px-2 min-h-screen sm:px-6 lg:px-8'>
      <Head>
        <title>Create Itinerary</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='bg-white overflow-hidden shadow sm:rounded-lg w-1/2'>
        <div className='px-4 py-5 sm:p-6 relative'>
          <form className='space-y-8 divide-y divide-mdGrey-100' onSubmit={handleSubmit}>
            <div className='space-y-8 divide-y divide-mdGrey-100 sm:space-y-5'>
              <div>
                  <div>
                    <h3 className='font-accent md:text-3xl my-3 text-dkGrey-100 text-center'>Flight Details</h3>
                    <h3 className='text-lg leading-6 font-medium text-dkGrey-100'>
          Flight Info
        </h3>
                    <p className='mt-1 max-w-2xl text-sm text-teal-100'>
          Enter your departure airport + flight information.
        </p>
                  </div>

                    <div className='mt-6 sm:mt-5 space-y-6 sm:space-y-5'>
                    <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-purple-100 sm:pt-5'>
                      <label className='block text-sm font-medium text-dkGrey-100 sm:mt-px sm:pt-2'>Airport code</label>
                      <div className='mt-1 sm:mt-0 sm:col-span-2'>
                        <div className='max-w-lg flex'>
                          <input type='text' name='airportCode' id='airportCode' placeholder='JFK' className='flex-1 block w-full min-w-0 rounded-sm sm:text-sm border border-ltLime-100 shadow-md' value={airportCode} onChange={({target}) => setAirportCode(target.value)}></input>

                        </div>

                      </div>
                      
                    
                  </div>
                  <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-ltGrey-100 sm:pt-5'>
                      <label className='block text-sm font-medium text-dkGrey-100 sm:mt-px sm:pt-2'>Airline name + flight number</label>
                      <div className='mt-1 sm:mt-0 sm:col-span-2'>
                        <div className='max-w-lg flex'>
                          <input type='text' name='airlineName' id='airlineName' placeholder='Delta' className='flex-1 block w-full min-w-0 rounded-sm sm:text-sm border border-ltLime-100 shadow-md mr-2' value={airlineName} onChange={({target}) => setAirlineName(target.value)}></input>
                          <input type='text' name='flightNumber' id='flightNumber' placeholder='DL123' className='flex-1 block w-full min-w-0 rounded-sm sm:text-sm border border-ltLime-100 shadow-md' value={flightNumber} onChange={({target}) => setFlightNumber(target.value)}></input>

                        </div>

                      </div>
                      
                    
                  </div>
                  
                  <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-ltGrey-100 sm:pt-5'>
                      <label className='block text-sm font-medium text-dkGrey-100 sm:mt-px sm:pt-2'>Flight departure time</label>
                      <div className='mt-1 sm:mt-0 sm:col-span-2'>
                        <div className='max-w-lg flex'>
                          <select id='departureHour' name='departureHour' className='shadow-md block w-3/4 border text-base border-ltLime-100 sm:text-sm rounded-sm mr-2' value={departureHour} onChange={({target}) => setDepartureHour(target.value)}>
                          <option selected>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                          <option>6</option>
                          <option>7</option>
                          <option>8</option>
                          <option>9</option>
                          <option>10</option>
                          <option>11</option>
                          <option>12</option>
                          </select>
                          <select id='departureMinute' name='departureMinute' className='shadow-md block w-3/4 border text-base border-ltLime-100 sm:text-sm rounded-sm mr-2' value={departureMinute} onChange={({target}) => setDepartureMinute(target.value)}>
                          <option selected>:00</option>
                          <option>:15</option>
                          <option>:30</option>
                          <option>:45</option>
                          </select>
                          <select id='amPm' name='amPm' className='shadow-md block w-3/4 border text-base border-ltLime-100 sm:text-sm rounded-sm' value={amPm} onChange={({target}) => setAmPm(target.value)}>
                          <option selected>AM</option>
                          <option>PM</option>
                          </select>

                        </div>

                      </div>
                      
                    
                  </div>
                  <div className='sm:border-t sm:border-ltGrey-100'>
                    <h3 className='text-lg leading-6 mt-4 font-medium text-dkGrey-100'>
          Address
        </h3>
                    <p className='mt-1 max-w-2xl text-sm text-teal-100'>
          Enter your departure address.
        </p>
                  </div>
                  <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-purple-100 sm:pt-5'>
                      <label className='block text-sm font-medium text-dkGrey-100 sm:mt-px sm:pt-2'>Address</label>
                      <div className='mt-1 sm:mt-0 sm:col-span-2'>
                        <div className='max-w-lg flex'>
                          <input type='number' name='houseNumber' id='houseNumber' placeholder='39' className='flex-1 block w-full min-w-0 rounded-sm sm:text-sm border border-ltLime-100 shadow-md mr-2' value={houseNumber} onChange={({target}) => setHouseNumber(target.value)}></input>
                          <input type='text' name='street' id='street' placeholder='Carroll Street' className='flex-1 block w-full min-w-0 rounded-sm sm:text-sm border border-ltLime-100 shadow-md' value={street} onChange={({target}) => setStreet(target.value)}></input>

                        </div>

                      </div>
                      
                    
                  </div>
                  <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-ltGrey-100 sm:pt-5'>
                      <label className='block text-sm font-medium text-dkGrey-100 sm:mt-px sm:pt-2'>City + State</label>
                      <div className='mt-1 sm:mt-0 sm:col-span-2'>
                        <div className='max-w-lg flex'>
                          <input type='text' name='city' id='city' placeholder='Brooklyn' className='shadow-md block w-full border text-base border-ltLime-100 sm:text-sm rounded-sm mr-2' value={city} onChange={({target}) => setCity(target.value)}></input>
                          <select id='state' name='state' className='shadow-md block w-full border text-base border-ltLime-100 sm:text-sm rounded-sm' value={state} onChange={({target}) => setState(target.value)}>
                          <option>AL</option>
                          <option>AK</option>
                          <option>AZ</option>
                          <option>AR</option>
                          <option>CA</option>
                          <option>CO</option>
                          <option>CT</option>
                          <option>DE</option>
                          <option>DC</option>
                          <option>FL</option>
                          <option>GA</option>
                          <option>HI</option>
                          <option>ID</option>
                          <option>IL</option>
                          <option>IN</option>
                          <option>IA</option>
                          <option>KS</option>
                          <option>KY</option>
                          <option>LA</option>
                          <option>ME</option>
                          <option>MD</option>
                          <option>MA</option>
                          <option>MI</option>
                          <option>MN</option>
                          <option>MS</option>
                          <option>MO</option>
                          <option>MT</option>
                          <option>NE</option>
                          <option>NV</option>
                          <option>NH</option>
                          <option>NJ</option>
                          <option>NM</option>
                          <option selected>NY</option>
                          <option>NC</option>
                          <option>ND</option>
                          <option>OH</option>
                          <option>OK</option>
                          <option>OR</option>
                          <option>PA</option>
                          <option>RI</option>
                          <option>SC</option>
                          <option>SD</option>
                          <option>TN</option>
                          <option>TX</option>
                          <option>UT</option>
                          <option>VT</option>
                          <option>VA</option>
                          <option>WA</option>
                          <option>WV</option>
                          <option>WI</option>
                          <option>WY</option>

                          </select>
                          
                        </div>

                      </div>
                      
                    
                  </div>
                  <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-ltGrey-100 sm:pt-5'>
                      <label className='block text-sm font-medium text-dkGrey-100 sm:mt-px sm:pt-2'>Zip</label>
                      <div className='mt-1 sm:mt-0 sm:col-span-2'>
                        <div className='max-w-lg flex'>
                          <input type='number' name='zip' id='zip' placeholder='11231' className='flex-1 block w-full min-w-0 rounded-sm sm:text-sm border border-ltLime-100 shadow-md' value={zip} onChange={({target}) => setZip(target.value)}></input>

                        </div>

                      </div>
                      
                    
                  </div>
                  
                  
                  </div>
                  <div className='mt-1 pt-5'>
                  <div className='flex justify-start'>
                    <button type='submit' className='inline-flex justify-center py-2 border border-teal-100 text-base font-medium rounded-md text-dkGrey-100 bg-transparent hover:border-purple-100 w-36'>
                      Next
                    </button>
                  </div>
                </div>
                  <div className='my-6 lg:border-t lg:border-b lg:border-purple-100'>
                    <nav className='mx-auto max-w-7x1 px-4 sm:px-6 lg:px-8' aria-label='Progress Bar'>
                      <ol className='rounded-md overflow-hidden lg:flex lg:border-l lg:border-r lg:border-ltGrey-100 lg:rounded-none'>
                        <li className='relative overflow-hidden lg:flex-1'>
                          {/* completed */}
                          <div className='border border-ltGrey-100 overflow-hidden border-b-0 rounded-t-md lg:border-0'>
                            <a href='/users/create-1' className='group'>
                              <span className='absolute top-0 left-0 w-1 h-full bg-transparent group-hover:bg-ltGrey-100 lg:w-full lg:h-1 lg:bottom-0 lg:top-auto' aria-hidden='true'></span>
                              <span className='px-6 py-5 flex items-start text-sm font-medium'>
                                <span className='flex-shrink-0'>
                                  <span className='w-10 h-10 flex items-center justify-center bg-purple-100 rounded-full'>
                                    <svg className='w-6 h-6 text-white' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' aria-hidden='true'>
                    <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                  </svg>

                                  </span>

                                </span>
                                <span className='mt-0.5 ml-4 min-w-0 flex flex-col'>
                                  <span className='text-xs font-semibold text-purple-100 tracking-wide uppercase'>Trip Name + Dates</span>

                                </span>
                              </span>

                            </a>
                            
                            

                          </div>

                        </li>
                        <li className='relative overflow-hidden lg:flex-1'>
                          <div className='border border-ltGrey-100 overflow-hidden lg:border-0'>
                            {/* current */}
                            <a href='#' className='group' aria-current='step'>
                              <span className='absolute top-0 left-0 w-1 h-full bg-purple-100 lg:w-full lg:h-1 lg:bottom-0 lg:top-auto' aria-hidden='true'></span>
                              <span className='px-6 py-5 flex items-start text-sm font-medium lg:pl-9'>
                                <span className='flex-shrink-0'>
                                  <span className='w-10 h-10 flex items-center justify-center border-2 border-purple-100 rounded-full'>
                                    <span className='text-purple-100'>2</span>

                                  </span>

                                </span>
                                <span className='mt-0.5 ml-4 min-w-0 flex flex-col'>
                                  <span className='text-xs font-semibold text-purple-100 tracking-wide uppercase'>Flight Details</span>

                                </span>

                              </span>

                            </a>
                            {/* separator */}
                            <div className='hidden absolute top-0 left-0 w-3 inset-0 lg:block' aria-hidden='true'>
                              <svg className='h-full w-full text-ltGrey-100' viewBox='0 0 12 82' fill='none' preserveAspectRatio='none'>
              <path d='M0.5 0V31L10.5 41L0.5 51V82' stroke='currentcolor' vectorEffect='non-scaling-stroke' />
            </svg>

                            </div>

                          </div>

                        </li>
                        <li className='relative overflow-hidden lg:flex-1'>
                          <div className='border border-ltGrey-100 overflow-hidden border-t-0 rounded-b-md lg:border-0'>
                            {/* upcoming */}
                            <a href='/users/create-3' className='group'>
                              <span className='absolute top-0 left-0 w-1 h-full bg-transparent group-hover:bg-ltGrey-100 lg:w-full lg:h-1 lg:bottom-0 lg:top-auto' aria-hidden='true'></span>
                              <span className='px-6 py-5 flex items-start text-sm font-medium lg:pl-9'>
                                <span className='flex-shrink-0'>
                                  <span className='w-10 h-10 flex items-center justify-center border-2 border-ltGrey-100 rounded-full'>
                                    <span className='text-ltGrey-100'>3</span>

                                  </span>

                                </span>
                                <span className='mt-0.5 ml-4 min-w-0 flex flex-col'>
                                  <span className='text-xs font-semibold text-ltGrey-100 tracking-wide uppercase'>Packing List</span>

                                </span>

                              </span>

                            </a>
                            {/* separator */}
                            <div className='hidden absolute top-0 left-0 w-3 inset-0 lg:block' aria-hidden='true'>
                              <svg className='h-full w-full text-ltGrey-100' viewBox='0 0 12 82' fill='none' preserveAspectRatio='none'>
              <path d='M0.5 0V31L10.5 41L0.5 51V82' stroke='currentcolor' vectorEffect='non-scaling-stroke' />
            </svg>

                            </div>

                          </div>

                        </li>
                      </ol>


                    </nav>

                    </div>
                
              </div>

            </div>

          </form>

        </div>

      </div>
    </div>
    
  )
}