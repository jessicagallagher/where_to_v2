import Head from 'next/head';
import { useState, useEffect } from 'react';
import fire from '../../config/fire-config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTshirt } from '@fortawesome/free-solid-svg-icons';
import { faShower } from '@fortawesome/free-solid-svg-icons';
import { faPassport } from '@fortawesome/free-solid-svg-icons';

export default function ThirdStep() {
  const [clothesItem, setClothesItem] = useState([]);
  const [toiletriesItem, setToiletriesItem] = useState([]);
  const [miscItem, setMiscItem] = useState([]);
  const [isAdded, setIsAdded] = useState(false);

  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(isAdded)
    
    fire.firestore()
    .collection('new')
    .add({
      itemName : clothesItem,
      isAdded : isAdded

    });

    

  }


 
  
  
  

  useEffect(() => {
    fire.firestore()
      .collection('clothes')
      .onSnapshot(snap => {
        const clothesItem = snap.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setClothesItem(clothesItem);
      });
  }, []);

  useEffect(() => {
    fire.firestore()
      .collection('toiletries')
      .onSnapshot(snap => {
        const toiletriesItem = snap.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setToiletriesItem(toiletriesItem);
      });
  }, []);

  useEffect(() => {
    fire.firestore()
      .collection('misc')
      .onSnapshot(snap => {
        const miscItem = snap.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setMiscItem(miscItem);
      });
  }, []);

 


  
  

  





  return (
    <div className='container flex flex-col justify-center items-center mx-auto py-0 px-2 min-h-screen sm:px-6 lg:px-8'>
      <Head>
        <title>Create Itinerary</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='bg-white overflow-hidden shadow sm:rounded-lg'>
        <div className='px-4 py-5 sm:p-6 relative'>
          <form className='space-y-8 divide-y divide-mdGrey-100' onSubmit={handleSubmit}>
            <div className='space-y-8 divide-y divide-mdGrey-100 sm:space-y-5'>
              <div>
                  <div>
                    <h3 className='font-accent md:text-3xl my-3 text-dkGrey-100 text-center'>Packing List</h3>
                  </div>

                  {/* start packing list screens */}

                  {/* clothes */}
                  <div className='bg-white px-4 py-5 border-b border-mdGrey-100 sm:px-6'>
                    <div className='-ml-4 -mt-4 flex justify-between items-center flex-wrap sm:flex-nowrap'>
                      <div className='ml-4 mt-4'>
                        <h3 className='text-lg leading-6 font-medium text-teal-100 text-center'>
                          Clothes
                        </h3>

                        {/* start card lists */}
                        
                        <ul className='mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4'>
                          {clothesItem.map(clothes =>
                            <li key={clothes.id} className='col-span-1 flex shadow-sm rounded-md'>
                              <div className='flex-shrink-0 flex items-center justify-center w-16 bg-purple-100 bg-opacity-50 border border-mdGrey-100 text-dkGrey-100 text-2xl font-medium rounded-l-md'>
                                <label className='absolute p-9' key={clothes.id}><input type='checkbox' className='absolute' onClick={({target}) => setIsAdded(!isAdded)} isAdded={isAdded} value={clothes.name} id='isAdded' name='isAdded'/></label>
                                
                                <FontAwesomeIcon icon={faTshirt} />
                              </div>
                              <div className='flex-1 flex items-center justify-between border-t border-r border-b border-mdGrey-100 bg-white rounded-r-md'>
                                
                                <div className='flex-1 px-4 py-2 text-sm'>
                                  
                                  {clothes.name}
                                  

                                </div>
                                

                              </div>
                              </li>
                              
                              
                            )}
                        </ul>
                        <button type='submit' className='inline-flex justify-center py-2 border border-teal-100 text-base font-medium rounded-md text-dkGrey-100 bg-transparent hover:border-purple-100 w-36'>
                      Submit
                    </button>

                      
                      </div>
                    </div>
                  
                  </div>
                  

                  {/* toiletries */}
                  <div className='bg-white px-4 py-5 border-b border-mdGrey-100 sm:px-6'>
                    <div className='-ml-4 -mt-4 flex justify-between items-center flex-wrap sm:flex-nowrap'>
                      <div className='ml-4 mt-4'>
                        <h3 className='text-lg leading-6 font-medium text-teal-100'>
                          Toiletries
                        </h3>

                        <ul className='mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4'>
                          {toiletriesItem.map(toiletries =>
                            <li key={toiletries.id} className='col-span-1 flex shadow-sm rounded-md' >
                              <div className='flex-shrink-0 flex items-center justify-center w-16 bg-lime-100 bg-opacity-50 border border-mdGrey-100 text-dkGrey-100 text-2xl font-medium rounded-l-md'>
                                <FontAwesomeIcon icon={faShower} />

                              </div>
                              <div className='flex-1 flex items-center justify-between border-t border-r border-b border-mdGrey-100 bg-white rounded-r-md'>
                                <div className='flex-1 px-4 py-2 text-sm'>
                                  {toiletries.name}
                                  

                                </div>
                                

                              </div>
                              </li>
                              
                              
                            )}
                        </ul>
                        
                      </div>
                    </div>
                  </div>

                  {/* miscellaneous */}
                  <div className='bg-white px-4 py-5 border-b border-mdGrey-100 sm:px-6'>
                    <div className='-ml-4 -mt-4 flex justify-between items-center flex-wrap sm:flex-nowrap'>
                      <div className='ml-4 mt-4'>
                        <h3 className='text-lg leading-6 font-medium text-teal-100'>
                          Miscellaneous
                        </h3>
                        <ul className='mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4'>
                          {miscItem.map(misc =>
                            <li key={misc.id} className='col-span-1 flex shadow-sm rounded-md' >
                              <div className='flex-shrink-0 flex items-center justify-center w-16 bg-ltPink-100 bg-opacity-50 border border-mdGrey-100 text-dkGrey-100 text-2xl font-medium rounded-l-md'>
                                <FontAwesomeIcon icon={faPassport} />

                              </div>
                              <div className='flex-1 flex items-center justify-between border-t border-r border-b border-mdGrey-100 bg-white rounded-r-md'>
                                <div className='flex-1 px-4 py-2 text-sm'>
                                  {misc.name}
                                  

                                </div>
                                

                              </div>
                              </li>
                              
                              
                            )}
                        </ul>
                        
                      </div>
                    </div>
                  </div>

                  {/* created list */}

                  <div className='bg-white px-4 py-5 border-b border-mdGrey-100 sm:px-6'>
                    <div className='-ml-4 -mt-4 flex justify-between items-center flex-wrap sm:flex-nowrap'>
                      <div className='ml-4 mt-4'>
                        <h3 className='text-lg leading-6 font-medium text-teal-100'>
                          Your Packing List
                        </h3>
                        
                        
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
                                <span className=''>
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
                                <span className=''>
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
                            <a href='#' className='group'>
                              <span className='absolute top-0 left-0 w-1 h-full bg-transparent group-hover:bg-ltGrey-100 lg:w-full lg:h-1 lg:bottom-0 lg:top-auto' aria-hidden='true'></span>
                              <span className='px-6 py-5 flex items-start text-sm font-medium lg:pl-9'>
                                <span className=''>
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