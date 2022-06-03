import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function PostItForm({ onSubmit }) {
  const [input, setInput] = useState('');
  const typing = (e) => {
    setInput(e.target.value);
  };
  const adding = (e) => {
    e.preventDefault();
    const newPostIt = {
      id: uuidv4(),
      text: input,
      isediting: false,
    };
    onSubmit(newPostIt);
  };
  return (
    <form
      className=" m-2 flex flex-wrap items-center justify-center bg-amber-200 w-44 h-44 box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px"
      onSubmit={adding}
    >
      <textarea
        className=" mt-1 border border-amber-500 w-36 h-32 text-base bg-amber-200 outline-none"
        type="text"
        placeholder="Ingresar texto"
        name="text"
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
