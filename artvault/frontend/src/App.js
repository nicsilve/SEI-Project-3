import React from 'react';
import Arts from './pages/Arts';
import ArtDetails from './pages/ArtDetails';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import AddArt from './pages/AddArt';
import Collections from './pages/Collections';

const App = () => {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element= {<Arts />} />
        <Route path='/details/:id' element={<ArtDetails />} />
        <Route path='/addart' element ={<AddArt />} />
        <Route path='/collections' element={<Collections />} />
      </Routes>
      
    </div>
  );
};

export default App;
