import React from 'react';
import Arts from './pages/Arts';
import ArtDetails from './pages/ArtDetails';
import { Link } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <a href='http://localhost:3000'>
      <h1>
          Art Vault
      </h1>
      </a>
      <Routes>
        <Route path='/' element= {<Arts />} />
        <Route path='/details/:id' element={<ArtDetails />} />
      </Routes>
      
    </div>
  );
};

export default App;
