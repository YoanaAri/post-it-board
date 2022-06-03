import React from 'react';
import './App.css';
import PostitList from './components/PostItList';

function App() {
  return (
    <div className="p-8 bg-boardimg bg-cover">
      <div className="flex-wrap justify-center items-center">
        <div className="text-center text-3xl font-bold my-5 mx-0">
          <h1>Post It Board</h1>
        </div>
        <div className="min-h-screen p-6 m-2.5">
          <PostitList />
        </div>
      </div>
    </div>
  );
}

export default App;
