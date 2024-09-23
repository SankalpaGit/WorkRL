// App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import fetchDomesticFlights from './FlightSearch';
import DisplayFlightOW from './DisplayFlighOW';

const airports = [
  { code: 'KTM', name: 'Kathmandu' },
  { code: 'PKR', name: 'Pokhara' },
  { code: 'BHR', name: 'Bharatpur' },
  { code: 'BIR', name: 'Biratnagar' },
];

const NumberInput = ({ label, value, onIncrement, onDecrement }) => (
  <div className="flex items-center mb-4">
    <label className="mr-4 font-semibold">{label}:</label>
    <button onClick={onDecrement} className="text-white px-3 py-1 rounded-full bg-blue-600">-</button>
    <input type="text" value={value} readOnly className="text-center w-5" />
    <button onClick={onIncrement} className="text-white px-3 py-1 rounded-full bg-blue-600">+</button>
  </div>
);

const SearchForm = ({ initialFormState }) => {
  const [form, setForm] = useState(initialFormState || {
    trip_type: 'O',
    departure: 'KTM',
    arrival: 'PKR',
    date: '',
    adult: '1',
    child: '0',
  });

  const navigate = useNavigate();

  const handleIncrement = (name) => {
    setForm((prevForm) => ({
      ...prevForm,
      [name]: (parseInt(prevForm[name]) + 1).toString(),
    }));
  };

  const handleDecrement = (name) => {
    setForm((prevForm) => ({
      ...prevForm,
      [name]: Math.max(0, parseInt(prevForm[name]) - 1).toString(),
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { trip_type, departure, arrival, date, adult, child } = form;

    const { data, error } = await fetchDomesticFlights({
      trip_type,
      departure,
      arrival,
      departure_date: date,
      adult: adult.toString(),
      child: child.toString(),
    });

    if (error) {
      // Handle error (not shown here for brevity)
    } else {
      navigate('/display', { state: { flights: data.departure, form } });
    }
  };


  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-xl w-9/12 mx-auto h-44">
      <div className="w-11/12 m-auto">
        <div className="flex mb-4">
          <label className="mr-4">
            <input type="radio" name="trip_type" value="O" checked={form.trip_type === 'O'} onChange={handleChange} className="mr-2" />
            One-way
          </label>
          <label>
            <input type="radio" name="trip_type" value="R" checked={form.trip_type === 'R'} onChange={handleChange} className="mr-2" />
            Round-trip
          </label>
        </div>
        <div className="flex">
          <div className="flex w-10/12">

            <div className="w-3/12 border border-gray-300 h-24 p-2">
              <label htmlFor="">From</label>
              <select name="departure" value={form.departure} onChange={handleChange} required className="h-2/5 w-full mb-2 rounded">
                <option value="" disabled>From</option>
                {airports.map((airport) => (
                  <option key={airport.code} value={airport.code}>{airport.name}</option>
                ))}
              </select>
            </div>

            <div className="w-3/12 border border-gray-300 h-24 p-2">
              <label htmlFor="">To</label>
              <select name="arrival" value={form.arrival} onChange={handleChange} required className="h-2/5 w-full mb-2   rounded mr-2">
                <option value="" disabled>To</option>
                {airports.map((airport) => (
                  <option key={airport.code} value={airport.code}>{airport.name}</option>
                ))}
              </select>
            </div>

            <div className="w-3/12 border border-gray-300 h-24 p-1.5">
              <label htmlFor="">Departure</label>
              <input type="date" name="date" value={form.date} onChange={handleChange} className="h-2/5 w-full mb-2  rounded" />
            </div>

            <div className="w-3/12  border border-gray-300 h-24 p-1.5">
              <label htmlFor="">Arrival</label>
              <input type="date" name="date" className="h-2/5 w-full mb-2 rounded" />
            </div>

          </div>
          <div className="w-2/12 border border-gray-300  p-1.5  h-24">
            <div className="w-fit m-top">
              <NumberInput label="Adults" value={form.adult} onIncrement={() => handleIncrement('adult')} onDecrement={() => handleDecrement('adult')} />
              <NumberInput label="Childs" value={form.child} onIncrement={() => handleIncrement('child')} onDecrement={() => handleDecrement('child')} />
            </div>
          </div>
        </div>
        <div className="w-fit mx-auto">
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700 mt-4">
            {initialFormState ? 'Search Again' : 'Search Flights'}
          </button>
        </div>
      </div>
    </form>
  );
};


export default SearchForm;
