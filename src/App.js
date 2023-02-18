import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';

function App() {
  const navigate = useNavigate();
  const back = () => navigate(-1);
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
