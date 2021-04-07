import React from 'react';

export default function Step1({ setForm, formData, navigation }) {
  const { tripName, startMonth, startDay, endMonth, endDay } = formData;

  const { next } = navigation;

  return (
    // <div className='container flex flex-col justify-center items-center mx-auto py-0 px-2 min-h-screen sm:px-6 lg:px-8'>
      <div className='bg-white overflow-hidden shadow sm:rounded-lg w-1/2'>
        <div className='px-4 py-5 sm:p-6 relative'>
          <form className='space-y-8 divide-y divide-mdGrey-100'>
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
                        <input type='text' name='tripName'  id='tripName' placeholder='Weekend Getaway' className='shadow-md block w-full sm:text-sm border border-ltLime-100 rounded-sm' value={tripName} onChange={setForm}></input>
                      </div>
                    </div>
                  </div>
                  <div className='mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6'>
                    <div className='sm:col-span-3'>
                      <p className='block text-lg text-dkGrey-100'>Leaving on</p>
                      <label className='block text-lg text-dkGrey-100'>MM</label>
                      <div className='mt-1'>
                        <select id='startMonth' name='startMonth' className='shadow-md block w-3/4 border text-base border-ltLime-100 sm:text-sm rounded-sm' value={startMonth} onChange={setForm}>
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
                        <select id='startDay' name='startDay' className='shadow-md block w-3/4 border text-base border-ltLime-100 sm:text-sm rounded-sm' value={startDay} onChange={setForm}>
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
                        <select id='endMonth' name='endMonth' className='shadow-md block w-3/4 border text-base border-ltLime-100 sm:text-sm rounded-sm' value={endMonth} onChange={setForm}>
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
                        <select id='endDay' name='endDay' className='shadow-md block w-3/4 border text-base border-ltLime-100 sm:text-sm rounded-sm' value={endDay} onChange={setForm}>
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
                      <div className='mt-1 pt-5'>
                  <div className='flex justify-start'>
                    <button className='inline-flex justify-center py-2 border border-teal-100 text-base font-medium rounded-md text-dkGrey-100 bg-transparent hover:border-purple-100 w-36' onClick={next}>
                      Next
                    </button>
                  </div>
                </div>
                    </div>
                  </div>
                  
                  </div>

                </div>
              </div>

            </div>

          </form>

        </div>

      </div>

    // </div>
  );

};