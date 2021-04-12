import React from 'react';

export default function Step2({ setForm, formData,  navigation }) {
  const { airportCode, airlineName, flightNumber, departureHour, departureMinute, amPm, houseNumber, street, city, state, zip } = formData;
  const { previous, next } = navigation;

  return (
      <div className='bg-white overflow-hidden shadow sm:rounded-lg w-1/2'>
        <div className='px-4 py-5 sm:p-6 relative'>
          <form className='space-y-8 divide-y divide-mdGrey-100'>
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
                          <input type='text' name='airportCode' id='airportCode' placeholder='JFK' className='flex-1 block w-full min-w-0 rounded-sm sm:text-sm border border-ltLime-100 shadow-md' value={airportCode} onChange={setForm}></input>

                        </div>

                      </div>
                      
                    
                  </div>
                  <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-ltGrey-100 sm:pt-5'>
                      <label className='block text-sm font-medium text-dkGrey-100 sm:mt-px sm:pt-2'>Airline name + flight number</label>
                      <div className='mt-1 sm:mt-0 sm:col-span-2'>
                        <div className='max-w-lg flex'>
                          <input type='text' name='airlineName' id='airlineName' placeholder='Delta' className='flex-1 block w-full min-w-0 rounded-sm sm:text-sm border border-ltLime-100 shadow-md mr-2' value={airlineName} onChange={setForm}></input>
                          <input type='text' name='flightNumber' id='flightNumber' placeholder='DL123' className='flex-1 block w-full min-w-0 rounded-sm sm:text-sm border border-ltLime-100 shadow-md' value={flightNumber} onChange={setForm}></input>

                        </div>

                      </div>
                      
                    
                  </div>
                  
                  <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-ltGrey-100 sm:pt-5'>
                      <label className='block text-sm font-medium text-dkGrey-100 sm:mt-px sm:pt-2'>Flight departure time</label>
                      <div className='mt-1 sm:mt-0 sm:col-span-2'>
                        <div className='max-w-lg flex'>
                          <select id='departureHour' name='departureHour' className='shadow-md block w-3/4 border text-base border-ltLime-100 sm:text-sm rounded-sm mr-2' value={departureHour} onChange={setForm}>
                          <option defaultValue>1</option>
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
                          <select id='departureMinute' name='departureMinute' className='shadow-md block w-3/4 border text-base border-ltLime-100 sm:text-sm rounded-sm mr-2' value={departureMinute} onChange={setForm}>
                          <option defaultValue>:00</option>
                          <option>:15</option>
                          <option>:30</option>
                          <option>:45</option>
                          </select>
                          <select id='amPm' name='amPm' className='shadow-md block w-3/4 border text-base border-ltLime-100 sm:text-sm rounded-sm' value={amPm} onChange={setForm}>
                          <option defaultValue>AM</option>
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
                          <input type='number' name='houseNumber' id='houseNumber' placeholder='39' className='flex-1 block w-full min-w-0 rounded-sm sm:text-sm border border-ltLime-100 shadow-md mr-2' value={houseNumber} onChange={setForm}></input>
                          <input type='text' name='street' id='street' placeholder='Carroll Street' className='flex-1 block w-full min-w-0 rounded-sm sm:text-sm border border-ltLime-100 shadow-md' value={street} onChange={setForm}></input>

                        </div>

                      </div>
                      
                    
                  </div>
                  <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-ltGrey-100 sm:pt-5'>
                      <label className='block text-sm font-medium text-dkGrey-100 sm:mt-px sm:pt-2'>City + State</label>
                      <div className='mt-1 sm:mt-0 sm:col-span-2'>
                        <div className='max-w-lg flex'>
                          <input type='text' name='city' id='city' placeholder='Brooklyn' className='shadow-md block w-full border text-base border-ltLime-100 sm:text-sm rounded-sm mr-2' value={city} onChange={setForm}></input>
                          <select id='state' name='state' className='shadow-md block w-full border text-base border-ltLime-100 sm:text-sm rounded-sm' value={state} onChange={setForm}>
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
                          <option defaultValue>NY</option>
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
                          <input type='number' name='zip' id='zip' placeholder='11231' className='flex-1 block w-full min-w-0 rounded-sm sm:text-sm border border-ltLime-100 shadow-md' value={zip} onChange={setForm}></input>

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
                
              </div>

            </div>

          </form>

        </div>

      </div>
  );
};