import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from '../App';
import Bin from './Bin';

function Root() {
  return (
    <div className="p-8 bg-gridimg bg-repeat">
      <div className="flex-wrap justify-center items-center">
        <div className="flex flex-row">
          <h1 className="pl-16 grow text-center text-3xl font-bold my-5 mx-0">Post It Board</h1>
        </div>
        <div className="min-h-screen p-6 m-2.5">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<App />} />
              <Route path="/Bin" element={<Bin />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
}
export default Root;
