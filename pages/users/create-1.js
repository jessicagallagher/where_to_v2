import Head from 'next/head';
import { useState } from 'react';
import { useRouter } from 'next/router';
import fire from '../../config/fire-config';

export default function Create() {
  const router = useRouter();

  const [tripName, setTripName] = useState('');
  const [startMonth, setStartMonth] = useState('');
  const [startDay, setStartDay] = useState('');
  const [endMonth, setEndMonth] = useState('');
  const [endDay, setEndDay] = useState('');

  // firestore takes everything in as a string when using useState. numbers go in as strings but are capped at 2...

  const handleSubmit = (e) => {
    e.preventDefault();

    fire.firestore()
    .collection('itinerary/tripName/tripdetails')
    .add({
      tripName: tripName,
      startMonth: startMonth,
      startDay: startDay,
      endMonth: endMonth,
      endDay: endDay
    })
    .catch(error => {
      console.log('trip info not added to db');
    })

    setTripName('');
    setStartMonth('');
    setStartDay('');
    setEndMonth('');
    setEndDay('');

    router.push('/users/create-2')
  };



  return (
    <div className='container flex flex-col justify-center items-center mx-auto py-0 px-2 min-h-screen sm:px-6 lg:px-8'>
      <Head>
        <title>Create Itinerary</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='bg-white overflow-hidden shadow sm:rounded-lg w-1/2'>
        <div className='px-4 py-5 sm:p-6 relative'>
          <form className='space-y-8 divide-y divide-mdGrey-100' onSubmit={handleSubmit}>
            <div className='space-y-8 divide-y divide-mdGrey-100'>
              <div>
                <div className='pt-8'>
                  <div>
                    <h1 className='font-accent md:text-6xl leading-6 text-mdGrey-100 text-center'>Create New Itinerary</h1>
                    <h3 className='font-accent md:text-3xl my-3 text-teal-100 text-center'>Trip Name + Dates</h3>
                  </div>
                  <div className='mt-6 mx-auto'>
                    <div className='sm:col-span-3'>
                      <label className='block text-lg text-dkGrey-100 text-center'>Trip name</label>
                      <div className='mt-1'>
                        <input type='text' name='tripName'  id='tripName' placeholder='Weekend Getaway' className='shadow-md block w-full sm:text-sm border border-ltLime-100 rounded-sm' value={tripName} onChange={({target}) => setTripName(target.value)}></input>
                      </div>
                    </div>
                    </div>
                    <div className='mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6'>
                    <div className='sm:col-span-3'>
                      <p className='block text-lg text-dkGrey-100'>Leaving on</p>
                      <label className='block text-lg text-dkGrey-100'>MM</label>
                      <div className='mt-1'>
                        <select id='startMonth' name='startMonth' className='shadow-md block w-3/4 border text-base border-ltLime-100 sm:text-sm rounded-sm' value={startMonth} onChange={({target}) => setStartMonth(target.value)}>
                          <option selected>01</option>
                          <option>02</option>
                          <option>03</option>
                          <option>04</option>
                          <option>05</option>
                          <option>06</option>
                          <option>07</option>
                          <option>08</option>
                          <option>09</option>
                          <option>10</option>
                          <option>11</option>
                          <option>12</option>
                          </select>
                      </div>
                      <div className='sm:col-span-3'>
                      <label className='block text-lg text-dkGrey-100'>DD</label>
                      <div className='mt-1'>
                        <select id='startDay' name='startDay' className='shadow-md block w-3/4 border text-base border-ltLime-100 sm:text-sm rounded-sm' value={startDay} onChange={({target}) => setStartDay(target.value)}>
                          <option selected>01</option>
                          <option>02</option>
                          <option>03</option>
                          <option>04</option>
                          <option>05</option>
                          <option>06</option>
                          <option>07</option>
                          <option>08</option>
                          <option>09</option>
                          <option>10</option>
                          <option>11</option>
                          <option>12</option>
                          <option>13</option>
                          <option>14</option>
                          <option>15</option>
                          <option>16</option>
                          <option>17</option>
                          <option>18</option>
                          <option>19</option>
                          <option>20</option>
                          <option>21</option>
                          <option>22</option>
                          <option>23</option>
                          <option>24</option>
                          <option>25</option>
                          <option>26</option>
                          <option>27</option>
                          <option>28</option>
                          <option>29</option>
                          <option>30</option>
                          <option>31</option>
                          </select>
                      </div>
                    </div>
                  </div>
                  <div className='sm:col-span-3'>
                      <p className='block text-lg text-dkGrey-100'>Returning on</p>
                      <label className='block text-lg text-dkGrey-100'>MM</label>
                      <div className='mt-1'>
                        <select id='endMonth' name='endMonth' className='shadow-md block w-3/4 border text-base border-ltLime-100 sm:text-sm rounded-sm' value={endMonth} onChange={({target}) => setEndMonth(target.value)}>
                          <option selected>01</option>
                          <option>02</option>
                          <option>03</option>
                          <option>04</option>
                          <option>05</option>
                          <option>06</option>
                          <option>07</option>
                          <option>08</option>
                          <option>09</option>
                          <option>10</option>
                          <option>11</option>
                          <option>12</option>
                          </select>
                      </div>
                      <div className='sm:col-span-3'>
                      <label className='block text-lg text-dkGrey-100'>DD</label>
                      <div className='mt-1'>
                        <select id='endDay' name='endDay' className='shadow-md block w-3/4 border text-base border-ltLime-100 sm:text-sm rounded-sm' value={endDay} onChange={({target}) => setEndDay(target.value)}>
                          <option selected>01</option>
                          <option>02</option>
                          <option>03</option>
                          <option>04</option>
                          <option>05</option>
                          <option>06</option>
                          <option>07</option>
                          <option>08</option>
                          <option>09</option>
                          <option>10</option>
                          <option>11</option>
                          <option>12</option>
                          <option>13</option>
                          <option>14</option>
                          <option>15</option>
                          <option>16</option>
                          <option>17</option>
                          <option>18</option>
                          <option>19</option>
                          <option>20</option>
                          <option>21</option>
                          <option>22</option>
                          <option>23</option>
                          <option>24</option>
                          <option>25</option>
                          <option>26</option>
                          <option>27</option>
                          <option>28</option>
                          <option>29</option>
                          <option>30</option>
                          <option>31</option>
                          </select>
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
                          {/* current */}
                          <div className='border border-ltGrey-100 overflow-hidden lg:border-0'>
                            <a href='#' className='group' aria-current='step'>
                              <span className='absolute top-0 left-0 w-1 h-full bg-purple-100 lg:w-full lg:h-1 lg:bottom-0 lg:top-auto' aria-hidden='true'></span>
                              <span className='px-6 py-5 flex items-start text-sm font-medium lg:pl-9'>
                                <span className='flex-shrink-0'>
                                  <span className='w-10 h-10 flex items-center justify-center border-2 border-purple-100 rounded-full'>
                                    <span className='text-purple-100'>1</span>

                                  </span>

                                </span>
                                <span className='mt-0.5 ml-4 min-w-0 flex flex-col'>
                                  <span className='text-xs font-semibold text-purple-100 tracking-wide uppercase'>Trip Name + Dates</span>

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
                            <a href='/users/create-2' className='group'>
                              <span className='absolute top-0 left-0 w-1 h-full bg-transparent group-hover:bg-ltGrey-100 lg:w-full lg:h-1 lg:bottom-0 lg:top-auto' aria-hidden='true'></span>
                              <span className='px-6 py-5 flex items-start text-sm font-medium lg:pl-9'>
                                <span className='flex-shrink-0'>
                                  <span className='w-10 h-10 flex items-center justify-center border-2 border-ltGrey-100 rounded-full'>
                                    <span className='text-ltGrey-100'>2</span>

                                  </span>

                                </span>
                                <span className='mt-0.5 ml-4 min-w-0 flex flex-col'>
                                  <span className='text-xs font-semibold text-ltGrey-100 tracking-wide uppercase'>Flight Details</span>

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

            </div>

          </form>

        </div>

      </div>
    </div>
  )
}