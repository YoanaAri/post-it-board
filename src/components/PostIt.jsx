import React from 'react';
import { AiOutlineDelete } from 'react-icons/ai';

function PostIt({
  id, text, editPostIt, deletePostIt,
}) {
  return (
    <div className=" text-base flex-col text-center m-2 p-2 bg-amber-200 w-44 h-44 box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px">
      <div
        className="pl-36 cursor-pointer"
        onClick={() => deletePostIt(id)}
        onKeyDown={() => deletePostIt(id)}
        role="button"
        tabIndex={0}
      >
        <AiOutlineDelete />
      </div>
      <textarea
        className="bg-amber-200 truncate w-32 h-32 cursor-text"
        onClick={() => editPostIt(id)}
        aria-hidden="true"
      >
        {text}
      </textarea>
    </div>
  );
}

export default PostIt;
