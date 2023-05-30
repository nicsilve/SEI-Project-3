import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createRoot } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>
);