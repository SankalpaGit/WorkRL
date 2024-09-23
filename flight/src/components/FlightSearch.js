import axios from 'axios';

const fetchDomesticFlights = async ({ trip_type, departure, arrival, departure_date, adult, child }) => {
  const payload = {
    trip_type,
    departure,
    arrival,
    departure_date,
    adult,
    child,
  };

  console.log('Payload:', payload);

  try {
    const response = await axios.post("https://mytripary.com/mt8848_api/flight/search", payload, {
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      }
    });

    console.log('Response:', response.data);
    return { data: response.data, error: null };
  } catch (error) {
    console.error('Error Response:', error.response?.data || error.message);
    return { data: null, error: error.response ? error.response.data : error.message };
  }
  
};

export default fetchDomesticFlights;
