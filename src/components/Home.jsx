import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AiFillDelete, AiOutlineDelete } from 'react-icons/ai';
import PostItForm from './PostItForm';
import PostIt from './PostIt';
import useLocalStorage from './useLocalStorage';

function Home() {
  const [allPostIt, setAllPosIt] = useLocalStorage('allPostIt', []);
  const [deletedPostIt, setDeletedPostIt] = useLocalStorage('deletedPostIt', []);
  const [isempty, setIsempty] = useState(true);
  //
  // If not empty: Add post it to allPostit
  //
  const addPostIt = (postIt) => {
    if (postIt.text.trim()) {
      const updateAllPostIt = [postIt, ...allPostIt];
      setAllPosIt(updateAllPostIt);
    }
  };
  //
  // Add postit to deletedPostIt
  //
  const saveDeletedPostit = (id) => {
    const aux = allPostIt.filter((postIt) => postIt.id === id);
    const updateDeletedPostIt = [aux[0], ...deletedPostIt];
    setDeletedPostIt(updateDeletedPostIt);
  };
  //
  // Remove the postit from allPostIt
  //
  const deletePostIt = (id) => {
    const updateAllPostIt = allPostIt.filter((postIt) => postIt.id !== id);
    setAllPosIt(updateAllPostIt);
    saveDeletedPostit(id);
  };
  //
  // Change iseditng to true
  //
  const editingPostIt = (id) => {
    const updateAllPostIt = allPostIt.map((postIt) => {
      const aux = { ...postIt };
      if (postIt.id === id) {
        aux.isediting = true;
      }
      return aux;
    });
    setAllPosIt(updateAllPostIt);
  };
  //
  // Post it text edit
  //
  const editPostIt = (id, value) => {
    const updateAllPostIt = allPostIt.map((postIt) => {
      const aux = { ...postIt };
      if (postIt.id === id) {
        aux.text = value;
        aux.isediting = !postIt.isediting;
      }
      return aux;
    });
    setAllPosIt(updateAllPostIt);
  };
  //
  // isempty update for each deletedPostIt change
  //
  useEffect(() => {
    const updateIsempty = deletedPostIt.length <= 0;
    setIsempty(updateIsempty);
  }, [deletedPostIt]);
  //

  return (
    <div className="flex flex-col p-8">
      <Link to="/Bin" className="h-8 w-8 cursor-pointer">
        {
        isempty
          ? <AiOutlineDelete className="h-8 w-8" />
          : <AiFillDelete className="h-8 w-8" />
        }
      </Link>

      <div className="flex felx-row flex-wrap place-content-center">
        <PostItForm
          onSubmit={addPostIt}
        />
        {
          allPostIt.map((postIt) => (
            <div className="flex felx-row flex-wrap" key={postIt.id}>
              <PostIt
                id={postIt.id}
                text={postIt.text}
                isediting={postIt.isediting}
                deletePostIt={deletePostIt}
                editPostIt={editPostIt}
                editingPostIt={editingPostIt}
                isdeleted={false}
              />
            </div>
          ))
          }
      </div>

    </div>
  );
}

export default Home;
