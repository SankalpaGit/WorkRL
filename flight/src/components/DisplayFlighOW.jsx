// Display One way flights
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Form from './Form';
import SideComponent from './SideComponent'

const DisplayFlightOW = () => {
  const { state } = useLocation();
  const { flights, form } = state || {};

  if (!flights || flights.length === 0) {
    return <p className="text-center mt-4">No flights found.</p>;
  }

  return (
    <>
      < Form initialFormState={form} />

      <div className=' flex w-10/12  m-auto mt-8 justify-around'>

        <div className=' w-4/12'>
          < SideComponent />
        </div>

        <div className=" w-7/12"> {/*main div for displaying the flight*/}
          {flights.map((flight, index) => (
            <FlightCard key={index} flight={flight} />
          ))}
        </div>

      </div>

    </>
  );
};

const FlightCard = ({ flight }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpand = () => {
    setIsExpanded(!isExpanded);
  };


  return (
    <>
      <div className=' mx-auto border-slate-950 shadow-xl bg-white mb-4'>
        <div className='flex items-center justify-around p-4'>
          <div className='flex flex-col items-center'>
            <div className='w-16 h-16 bg-blue-700 flex items-center justify-center rounded-full '>
              <img src={flight.airline_logo} alt={`${flight.airline} logo`} style={{ width: '100px', height: 'auto' }} />
            </div>
            <p className='mt-2 text-center'>{flight.airline}</p>
            <small className='text-green-500 font-bold'>{flight.refundable}</small>
          </div>

          <div className='flex flex-col items-center'>
            <small className='text-gray-500'>Departure</small>
            <p className='font-semibold'>{flight.departure_time}</p>
            <small className='text-gray-500'>{flight.departure_date}</small>
          </div>

          <div className='flex flex-col items-center'>
            <small className='text-gray-500'>{flight.duration}</small>
            <div className='bg-gray-500 w-28 h-0.5'></div>
            <small className='text-gray-500'>Non Stop</small>
          </div>

          <div className='flex flex-col items-center'>
            <small className='text-gray-500'>Arrival</small>
            <p className='font-semibold'>{flight.arrival_time}</p>
            <small className='text-gray-500'>{flight.arrival_date}</small>
          </div>

          <div className='flex flex-col items-center'>
            <small className='text-gray-500'>Price</small>
            <p className='font-semibold'>{flight.currency} {flight.total_fare}</p>
          </div>

          <div>
            <button className='bg-blue-700 text-white py-1.5 px-2 rounded mb-16'>Book Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DisplayFlightOW;
