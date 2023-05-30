import React from 'react';
import Arts from './pages/Arts';
import ArtDetails from './pages/ArtDetails';
import { Link } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import AddArt from './pages/AddArt';

const App = () => {
const arturl='http://localhost:4000/'

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element= {<Arts />} />
        <Route path='/details/:id' element={<ArtDetails />} />
        <Route path='/addart' element ={<AddArt />} />
      </Routes>
      
    </div>
  );
};

export default App;
