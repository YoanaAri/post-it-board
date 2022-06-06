import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineEdit, AiOutlineSave } from 'react-icons/ai';

function PostIt({
  id, text, editPostIt, deletePostIt, isediting, editingPostIt,
}) {
  //
  const [input, setInput] = useState(text);
  //
  //
  return (
    <div className=" text-base flex-col text-center m-2 p-2 bg-amber-200 w-44 h-44 shadow-2xl">
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
          <AiOutlineClose />
        </div>
      </div>
      {isediting
        ? (
          <>
            <textarea
              className="border border-solid border-amber-600 bg-amber-200 whitespace-normal w-32 h-32 cursor-text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
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
            <p className="whitespace-normal truncate text-center w-40 h-32">
              {text}
            </p>
          </div>
        )}
    </div>
  );
}

export default PostIt;
