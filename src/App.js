import * as React from 'react';
import './style.css';
import Data from './db.json';
import { useState } from 'react';
import Home from './pages/Home.js';
import MainPage from './components/swiper.js';

function App() {
  return (
    <div>
      <MainPage />
    </div>
  );
}

export default App;
