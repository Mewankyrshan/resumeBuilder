// src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import EditResume from './pages/EditResume';
import PreviewResume from './pages/PreviewResume';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edit" element={<EditResume />} />
        <Route path="/preview" element={<PreviewResume />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
