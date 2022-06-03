import React, { useState } from 'react';
import { AiOutlineDelete, AiOutlineEdit, AiOutlineSave } from 'react-icons/ai';

function PostIt({
  id, text, editPostIt, deletePostIt, isediting, editingPostIt,
}) {
  const [input, setInput] = useState('');
  const typing = (e) => {
    setInput(e.target.value);
  };
  const adding = (e) => {
    e.preventDefault();
    const addingPostIt = {
      text: input,
    };
    text(addingPostIt);
  };
  return (
    <div className=" text-base flex-col text-center m-2 p-2 bg-amber-200 w-44 h-44 box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px">
      <div className="flex">
        <div
          className="ml-32 cursor-pointer"
          onClick={() => editingPostIt(id)}
          onKeyDown={() => editingPostIt(id)}
          role="button"
          tabIndex={0}
        >
          <AiOutlineEdit />
        </div>
        <div
          className="ml-1 cursor-pointer"
          onClick={() => deletePostIt(id)}
          onKeyDown={() => deletePostIt(id)}
          role="button"
          tabIndex={0}
        >
          <AiOutlineDelete />
        </div>
      </div>
      {isediting
        ? (
          <>
            <textarea
              className="bg-amber-200 whitespace-normal w-32 h-32 cursor-text"
              onChange={typing}
              onSubmit={adding}
              aria-hidden="true"
            >
              {text}
            </textarea>
            <div
              className="cursor-pointer"
              onClick={() => editPostIt(id, input)}
              onKeyDown={() => editPostIt(id, input)}
              role="button"
              tabIndex={0}
            >
              <AiOutlineSave />
            </div>
          </>
        )
        : (
          <div
            className="bg-amber-200"
          >
            <p className="whitespace-normal text-center w-40 h-32">
              {text}
            </p>
          </div>
        )}
    </div>
  );
}

export default PostIt;
