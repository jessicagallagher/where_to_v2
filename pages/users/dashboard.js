import Head from 'next/head';

export default function Dashboard() {
  return (
    <div>
      <Head>
        <title>Your Dashboard</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {/* begin mobile / responsive sidebar */}
      <div className='h-screen flex overflow-hidden bg-white'>
        <div className='fixed inset-0 flex z-40 lg:hidden' role='dialog' aria-modal='true'>
          <div className='fixed inset-0 bg-gray-600 bg-opacity-75' aria-hidden='true'></div>
          <div className='relative flex-1 flex flex-col max-w-xs w-full bg-white focus:outline-none'>
            <div className='absolute top-0 right-0 -mr-12 pt-2'>
              <button type='button' className='ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
                <span className='sr-only'>Close sidebar</span>
                <svg className='h-6 w-6 text-white' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' aria-hidden='true'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12' />
                </svg>
              </button>
            </div>

            <div className='flex-1 h-0 pt-5 pb-4 overflow-y-auto'>
              <div className='flex-shrink-0 flex items-center px-4'>
                <img className='h-8 w-auto' src='../logo.png' alt='logo'></img>
                <h1 className='font-accent text-dkGrey-100 inline md:text-4xl mx-auto'>Where To?</h1>

              </div>
              <nav className='mt-5' aria-label='Sidebar'>
                <div className='px-2 space-y-1'>
                  <a href='#' className='bg-notWhite-100 text-dkGrey-100 group flex items-center px-2 py-2 text-base font-medium rounded-md'>
                    <svg className='text-teal-100 mr-4 h-6 w-6' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' aria-hidden='true'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' />
              </svg>
              Dashboard

                  </a>
                  <a href='#' className='text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-base font-medium rounded-md'>
              <svg className='text-gray-400 group-hover:text-gray-500 mr-4 h-6 w-6' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' aria-hidden='true'>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
              Create New Itinerary
            </a>
            <a href='#' className='text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-base font-medium rounded-md'>
              <svg className='text-gray-400 group-hover:text-gray-500 mr-4 h-6 w-6' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' aria-hidden='true'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' />
              </svg>
              Calendar
            </a>
            <a href='#' className='text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-base font-medium rounded-md'>
              <svg className='text-gray-400 group-hover:text-gray-500 mr-4 h-6 w-6' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' aria-hidden='true'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
              </svg>
              Directory
            </a>

            <a href='#' className='text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-base font-medium rounded-md'>
              <svg className='text-gray-400 group-hover:text-gray-500 mr-4 h-6 w-6' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' aria-hidden='true'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z' />
              </svg>
              Announcements
            </a>

            <a href='#' className='text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-base font-medium rounded-md'>
              <svg className='text-gray-400 group-hover:text-gray-500 mr-4 h-6 w-6' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' aria-hidden='true'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7' />
              </svg>
              Office Map
            </a>
                </div>
              </nav>
            </div>
            <div className='flex-shrink-0 flex border-t border-gray-200 p-4'>
              <a href='#' className='flex-shrink-0 group block'>
                <div className='flex items-center'>
                  <div>
                    <img className='inline-block h-10 w-10 rounded-full' src='https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80' alt=''></img>
                  </div>
                  <div className='ml-3'>
                    <p className='text-base font-medium text-gray-700 group-hover:text-gray-900'>
                Whitney Francis
              </p>
              <p className='text-sm font-medium text-gray-500 group-hover:text-gray-700'>
                View profile
              </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className='flex-shrink-0 w-14' aria-hidden='true'>
          </div>
        </div>
        {/* begin static */}
        <div className='hidden lg:flex lg:flex-shrink-0'>
    <div className='flex flex-col w-64'>
      <div className='flex flex-col h-0 flex-1 border-r border-ltGrey-100 bg-ltLime-100'>
        <div className='flex-1 flex flex-col pt-5 pb-4 overflow-y-auto'>
          <div className='flex items-center flex-shrink-0 px-4'>
            <img className='h-8 w-auto' src='../logo.png' alt='logo' />
            <h1 className='font-accent text-dkGrey-100 inline md:text-4xl mx-auto'>Where To?</h1>
          </div>
          <nav className='mt-5 flex-1' aria-label='Sidebar'>
            <div className='px-2 space-y-1'>
              <a href='#' className='hover:bg-notWhite-100 text-dkGrey-100 group flex items-center px-2 py-2 text-sm font-medium rounded-md'>
                <svg className='text-teal-100 mr-3 h-6 w-6' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' aria-hidden='true'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' />
                </svg>
                Dashboard
              </a>

              <a href='#' className='bg-notWhite-100 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md'>
                <svg className='text-gray-400 group-hover:text-gray-500 mr-3 h-6 w-6' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' aria-hidden='true'>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
                Create New Itinerary
              </a>

              <a href='#' className='text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md'>
                <svg className='text-gray-400 group-hover:text-gray-500 mr-3 h-6 w-6' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' aria-hidden='true'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' />
                </svg>
                Calendar
              </a>

              <a href='#' className='text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md'>
                <svg className='text-gray-400 group-hover:text-gray-500 mr-3 h-6 w-6' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' aria-hidden='true'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
                </svg>
                Directory
              </a>

              <a href='#' className='text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md'>
                <svg className='text-gray-400 group-hover:text-gray-500 mr-3 h-6 w-6' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' aria-hidden='true'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z' />
                </svg>
                Announcements
              </a>

              <a href='#' className='text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md'>
                <svg className='text-gray-400 group-hover:text-gray-500 mr-3 h-6 w-6' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' aria-hidden='true'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7' />
                </svg>
                Office Map
              </a>
            </div>
          </nav>
        </div>
        <div className='flex-shrink-0 flex border-t border-gray-200 p-4'>
          <a href='#' className='flex-shrink-0 w-full group block'>
            <div className='flex items-center'>
              <div>
                <img className='inline-block h-9 w-9 rounded-full' src='https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80' alt='' />
              </div>
              <div className='ml-3'>
                <p className='text-sm font-medium text-gray-700 group-hover:text-gray-900'>
                  Whitney Francis
                </p>
                <p className='text-xs font-medium text-gray-500 group-hover:text-gray-700'>
                  View profile
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>

      </div>
    </div>
    <div className='flex flex-col min-w-0 flex-1 overflow-hidden'>
      <div className='lg:hidden'>
        <div className='flex items-center justify-between bg-gray-50 border-b border-gray-200 px-4 py-1.5'>
          <div>
            <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow"></img>
          </div>
          <div>
            <button type='button' className='-mr-3 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900'>
              <span className="sr-only">Open sidebar</span>
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            </button>
          </div>
        </div>
      </div>
      <div className='flex-1 relative z-0 flex overflow-hidden'>
        <main className='flex-1 relative z-0 overflow-y-auto focus:outline-none xl:order-last' tabIndex='0'>
          <div className='absolute inset-0 py-6 px-4 sm:px-6 lg:px-8'>
            <div className='h-full border-2 border-gray-200 border-dashed rounded-lg'></div>
          </div>
        </main>
        <aside className='hidden relative xl:order-first xl:flex xl:flex-col flex-shrink-0 w-96 border-r border-gray-200'>
          <div className='absolute inset-0 py-6 px-4 sm:px-6 lg:px-8'>
            <div className='h-full border-2 border-gray-200 border-dashed rounded-lg'></div>
          </div>
        </aside>
      </div>
    </div>
    </div>
    </div>
  )
}