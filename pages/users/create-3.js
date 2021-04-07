import Head from 'next/head';
import { useState, useEffect } from 'react';
import fire from '../../config/fire-config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTshirt } from '@fortawesome/free-solid-svg-icons';
import { faShower } from '@fortawesome/free-solid-svg-icons';
import { faPassport } from '@fortawesome/free-solid-svg-icons';

export default function ThirdStep() {
  const [clothesItem, setClothesItem] = useState('');
  const [toiletriesItem, setToiletriesItem] = useState('');
  const [miscItem, setMiscItem] = useState('');
  const [category, setCategory] = useState('');
  const [clothesList, setClothesList] = useState([]);

  const handleSubmitClothes = (e) => {
    e.preventDefault();

    fire.firestore()
    .collection('packingList')
    .add({
      item: clothesItem,
      category: 'clothes'
    });

    setClothesItem('');
    setCategory('');
  }

  const handleSubmitToiletries = (e) => {
    e.preventDefault();

    fire.firestore()
    .collection('packingList')
    .add({
      item: toiletriesItem,
      category: 'toiletries'
    });

    setToiletriesItem('');
    setCategory('');
  }

  const handleSubmitMisc = (e) => {
    e.preventDefault();

    fire.firestore()
    .collection('packingList')
    .add({
      item: miscItem,
      category: 'miscellaneous'
    });

    setMiscItem('');
    setCategory('');
  }

  const handleDelete = (e, documentId) => {
    // e.preventDefault();
    // e.stopPropagation();

    fire.firestore()
    .collection('packingList')
    .doc(documentId).delete()
    .then(() => {
      console.log('deleted');
    }).catch((error) => console.log(error));
    
  }

  useEffect(() => {
    fire.firestore()
      .collection('packingList')
      .where('category', '==', 'clothes')
      .onSnapshot(snap => {
        const clothesList = snap.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setClothesList(clothesList);
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
          <form className='space-y-8 divide-y divide-mdGrey-100' onSubmit={handleSubmitClothes}>
            <div className='space-y-8 divide-y divide-mdGrey-100 sm:space-y-5'>
              <div>
                <div>
                  <h3 className='font-accent md:text-3xl my-3 text-dkGrey-100 text-center'>Packing List</h3>
                  <h3 className='text-lg leading-6 font-medium text-dkGrey-100'>
          Clothes
        </h3>
        <p className='mt-1 max-w-2xl text-sm text-teal-100'>
          Add each item.
        </p>
                </div>
                <div className='mt-6 sm:mt-5 space-y-6 sm:space-y-5'>
                  <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-purple-100 sm:pt-5'>
                    <label className='block text-sm font-medium text-dkGrey-100 sm:mt-px sm:pt-2'>Item</label>
                    <div className='mt-1 sm:mt-0 sm:col-span-2'>
                        <div className='max-w-lg flex'>
                          <input type='text' name='clothesItem' id='clothesItem' placeholder='socks' className='flex-1 block w-full min-w-0 rounded-sm sm:text-sm border border-ltLime-100 shadow-md' value={clothesItem} onChange={({target}) => setClothesItem(target.value)}></input>

                        </div>
                        <ul>
                          {clothesList.map(packingList =>
                            <li key={packingList.id} onClick={() => handleDelete(packingList.id)}>
                              {packingList.item}
                              </li>
                              )}

                        </ul>
                      </div>
                      
                      <button type='submit' className='inline-flex justify-center py-2 border border-teal-100 text-base font-medium rounded-md text-dkGrey-100 bg-transparent hover:border-purple-100 w-36'>
                      Next
                    </button>
                  </div>
                </div>
                </div>
            </div>
            </form>
            <form onSubmit={handleSubmitToiletries}>
              <div className='space-y-8 divide-y divide-mdGrey-100 sm:space-y-5'>
              <div>
                <div>
                  <h3 className='text-lg leading-6 font-medium text-dkGrey-100'>
          Toiletries
        </h3>
        <p className='mt-1 max-w-2xl text-sm text-teal-100'>
          Add each item.
        </p>
                </div>
                <div className='mt-6 sm:mt-5 space-y-6 sm:space-y-5'>
                  <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-purple-100 sm:pt-5'>
                    <label className='block text-sm font-medium text-dkGrey-100 sm:mt-px sm:pt-2'>Item</label>
                    <div className='mt-1 sm:mt-0 sm:col-span-2'>
                        <div className='max-w-lg flex'>
                          <input type='text' name='toiletriesItem' id='toiletriesItem' placeholder='toothpaste' className='flex-1 block w-full min-w-0 rounded-sm sm:text-sm border border-ltLime-100 shadow-md' value={toiletriesItem} onChange={({target}) => setToiletriesItem(target.value)}></input>

                        </div>

                      </div>
                      <button type='submit' className='inline-flex justify-center py-2 border border-teal-100 text-base font-medium rounded-md text-dkGrey-100 bg-transparent hover:border-purple-100 w-36'>
                      Next
                    </button>
                  </div>
                </div>
                </div>
            </div>

            </form>
            <form onSubmit={handleSubmitMisc}>
              <div className='space-y-8 divide-y divide-mdGrey-100 sm:space-y-5'>
              <div>
                <div>
                  <h3 className='text-lg leading-6 font-medium text-dkGrey-100'>
          Miscellaneous
        </h3>
        <p className='mt-1 max-w-2xl text-sm text-teal-100'>
          Add each item.
        </p>
                </div>
                <div className='mt-6 sm:mt-5 space-y-6 sm:space-y-5'>
                  <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-purple-100 sm:pt-5'>
                    <label className='block text-sm font-medium text-dkGrey-100 sm:mt-px sm:pt-2'>Item</label>
                    <div className='mt-1 sm:mt-0 sm:col-span-2'>
                        <div className='max-w-lg flex'>
                          <input type='text' name='miscItem' id='miscItem' placeholder='passport' className='flex-1 block w-full min-w-0 rounded-sm sm:text-sm border border-ltLime-100 shadow-md' value={miscItem} onChange={({target}) => setMiscItem(target.value)}></input>

                        </div>

                      </div>
                      <button type='submit' className='inline-flex justify-center py-2 border border-teal-100 text-base font-medium rounded-md text-dkGrey-100 bg-transparent hover:border-purple-100 w-36'>
                      Next
                    </button>
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