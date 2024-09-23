import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Form from './components/Form';
import DisplayFlightOW from './components/DisplayFlighOW';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/display" element={<DisplayFlightOW />} />
      </Routes>
    </Router>
  );
};

export default App;
