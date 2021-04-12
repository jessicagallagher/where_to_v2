import React from 'react';


export default function Step3({ setForm, formData, navigation }) {
  const { clothesItem, toiletriesItem, miscItem } = formData;
  const { previous, next } = navigation;

  return (
    <div className='bg-white overflow-hidden shadow sm:rounded-lg'>
      <div className='px-4 py-5 sm:p-6 relative'>
        <form className='space-y-8 divide-y divide-mdGrey-100'>
          <div className='space-y-8 divide-y divide-mdGrey-100 sm:space-y-5'>
            <div>
              <div>
                <h3 className='font-accent md:text-3xl my-3 text-dkGrey-100 text-center'>Packing List</h3>
                  <h3 className='text-lg leading-6 font-medium text-dkGrey-100'>
          Clothes
        </h3>
        <p className='mt-1 max-w-2xl text-sm text-teal-100'>
          Separate items with a comma
        </p>
              </div>
              <div className='mt-6 sm:mt-5 space-y-6 sm:space-y-5'>
                  <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-purple-100 sm:pt-5'>
                    <label className='block text-sm font-medium text-dkGrey-100 sm:mt-px sm:pt-2'>Item</label>
                    <div className='mt-1 sm:mt-0 sm:col-span-2'>
                        <div className='max-w-lg flex'>
                          <input type='text' name='clothesItem' id='clothesItem' placeholder='swimsuit, beach hat, sunnies' className='flex-1 block w-full min-w-0 rounded-sm sm:text-sm border border-ltLime-100 shadow-md' value={clothesItem} onChange={setForm}></input>
                        </div>
                      </div>
                  </div>
                </div>
                
            </div>

          </div>
          <div className='space-y-8 divide-y divide-mdGrey-100 sm:space-y-5'>
            <div>
              <div>
                  <h3 className='text-lg mt-3 leading-6 font-medium text-dkGrey-100'>
          Toiletries
        </h3>
        <p className='mt-1 max-w-2xl text-sm text-teal-100'>
          Separate items with a comma
        </p>
              </div>
              <div className='mt-6 sm:mt-5 space-y-6 sm:space-y-5'>
                  <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-purple-100 sm:pt-5'>
                    <label className='block text-sm font-medium text-dkGrey-100 sm:mt-px sm:pt-2'>Item</label>
                    <div className='mt-1 sm:mt-0 sm:col-span-2'>
                        <div className='max-w-lg flex'>
                          <input type='text' name='toiletriesItem' id='toiletriesItem' placeholder='toothbrush, toothpaste, makeup' className='flex-1 block w-full min-w-0 rounded-sm sm:text-sm border border-ltLime-100 shadow-md' value={toiletriesItem} onChange={setForm}></input>
                        </div>
                      </div>
                  </div>
                </div>
                
            </div>

          </div>
          <div className='space-y-8 divide-y divide-mdGrey-100 sm:space-y-5'>
            <div>
              <div>
                  <h3 className='text-lg mt-3 leading-6 font-medium text-dkGrey-100'>
          Miscellaneous
        </h3>
        <p className='mt-1 max-w-2xl text-sm text-teal-100'>
          Separate items with a comma
        </p>
              </div>
              <div className='mt-6 sm:mt-5 space-y-6 sm:space-y-5'>
                  <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-purple-100 sm:pt-5'>
                    <label className='block text-sm font-medium text-dkGrey-100 sm:mt-px sm:pt-2'>Item</label>
                    <div className='mt-1 sm:mt-0 sm:col-span-2'>
                        <div className='max-w-lg flex'>
                          <input type='text' name='miscItem' id='miscItem' placeholder='passport, laptop, phone charger' className='flex-1 block w-full min-w-0 rounded-sm sm:text-sm border border-ltLime-100 shadow-md' value={miscItem} onChange={setForm}></input>
                        </div>
                      </div>
                  </div>
                </div>
                
            </div>

          </div>
          <div className='mt-1 pt-5'>
                  <div className='flex justify-start'>
                    <button className='inline-flex justify-center py-2 border border-teal-100 text-base font-medium rounded-md text-dkGrey-100 bg-transparent hover:border-purple-100 w-36' onClick={previous}>
                      Previous
                    </button>
                    <button className='inline-flex justify-center py-2 border border-teal-100 text-base font-medium rounded-md text-dkGrey-100 bg-transparent hover:border-purple-100 w-36 ml-3' onClick={next}>
                      Next
                    </button>
                  </div>
                </div>

        </form>

      </div>

    </div>
  );
};