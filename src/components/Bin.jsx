import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';
import PostIt from './PostIt';

function Bin() {
  const [allDeletedPostIt, setAllDeletedPosIt] = useState([]);
  //
  useEffect(() => {
    const dPostIt = JSON.parse(localStorage.getItem('deletedPostIt'));
    setAllDeletedPosIt(dPostIt);
  }, []);
  return (
    <div className="flex flex-col bg-gray-200 p-8 rounded-xl shadow-2xl">
      <div>
        <Link to="/">
          <AiOutlineClose className="h-8 w-8" />
        </Link>
        <div className="flex felx-row flex-wrap place-content-center">
          {localStorage.deletedPostIt
            ? (
              allDeletedPostIt.map((binPostIt) => (
                <PostIt
                  key={binPostIt.id}
                  text={binPostIt.text}
                  isdeleted
                />
              )))
            : null}
        </div>
      </div>
      <button
        type="button"
        className="place-content-end"
        onClick={() => localStorage.removeItem('deletedPostIt')}
      >
        Empty trash
      </button>
    </div>
  );
}

export default Bin;
