import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function PostItForm({ onSubmit }) {
  //
  const [input, setInput] = useState('');
  //
  //
  const typing = (e) => {
    setInput(e.target.value);
  };
  //
  //
  const adding = (e) => {
    e.preventDefault();
    const newPostIt = {
      id: uuidv4(),
      text: input,
      isediting: false,
    };
    onSubmit(newPostIt);
    setInput('');
  };
  //
  //
  return (
    <form
      className=" m-2 flex flex-wrap items-center justify-center bg-amber-200 w-44 h-44 shadow-2xl"
      onSubmit={adding}
    >
      <textarea
        className=" rounded mt-1 border border-amber-500 w-36 h-32 text-base bg-amber-200 outline-none"
        type="text"
        placeholder="Ingresar texto"
        name="text"
        value={input}
        onChange={typing}
      />
      <button
        type="submit"
        className="h-6 p-1 text-xs cursor-pointer bg-amber-500/50 rounded"
      >
        Add Post it
      </button>
    </form>
  );
}

export default PostItForm;
