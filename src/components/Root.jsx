import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Logo from '../img/logo.png';

import Bin from './Bin';
import Home from './Home';

function Root() {
  return (
    <div className="p-8 bg-gridimg bg-repeat min-h-screen">
      <div className="flex flex-row place-content-center">
        <h1 className="py-5 text-center text-3xl font-bold">Post It Board</h1>
        <img src={Logo} alt="Logo" className="h-16 w-16" />
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Bin" element={<Bin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default Root;
