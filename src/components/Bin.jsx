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
  //
  const permanentDelete = () => {
    localStorage.removeItem('deletedPostIt');
    setAllDeletedPosIt([]);
  };
  const removePostIt = (id) => {
    const updateAllDeletePostIt = allDeletedPostIt.filter((postIt) => postIt.id !== id);
    localStorage.setItem('deletedPostIt', JSON.stringify(updateAllDeletePostIt));
    setAllDeletedPosIt(updateAllDeletePostIt);
  };
  //
  const returnPostIt = (id) => {
    const auxDeletedPostIt = allDeletedPostIt.filter((postIt) => postIt.id === id);
    const aux2 = JSON.parse(localStorage.getItem('allPostIt'));
    const update = [auxDeletedPostIt[0], ...aux2];
    localStorage.setItem('allPostIt', JSON.stringify(update));
    removePostIt(id);
  };
  //
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
                  id={binPostIt.id}
                  text={binPostIt.text}
                  isdeleted
                  returnPostIt={returnPostIt}
                />
              )))
            : null}
        </div>
      </div>
      <button
        type="button"
        className="place-self-center h-6 w-20 p-1 text-xs cursor-pointer bg-gray-400 rounded"
        onClick={() => permanentDelete()}
      >
        Empty trash
      </button>
    </div>
  );
}

export default Bin;
