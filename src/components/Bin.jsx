import React from 'react';
import { AiFillDelete, AiOutlineDelete } from 'react-icons/ai';

function Bin(isempty) {
  console.log(isempty);
  return (
    <div>
      {(isempty)
        ? (<AiOutlineDelete className="h-16 w-16 cursor-pointer" />)
        : (<AiFillDelete className="h-16 w-16 cursor-pointer" />)}
    </div>
  );
}
export default Bin;
