import React, { useState, useEffect } from 'react';
import PostItForm from './PostItForm';
import PostIt from './PostIt';
import useLocalStorage from './useLocalStorage';
import Bin from './Bin';

function PostitList() {
  //
  const [allPostIt, setAllPosIt] = useLocalStorage('allPostIt', []);
  //
  //
  // If it is not empty: Add post it to allPostit
  const addPostIt = (postIt) => {
    if (postIt.text.trim()) {
      const updateAllPostIt = [postIt, ...allPostIt];
      setAllPosIt(updateAllPostIt);
    }
  };
  //
  //
  const [deletedPostIt, setDeletedPostIt] = useState([]);
  //
  //
  // Remove the postit from allPostIt and add it to deletedPostIt
  const deletePostIt = (id) => {
    const updateAllPostIt = allPostIt.filter((postIt) => postIt.id !== id);
    const updateDeletedPostIt = allPostIt.filter((postIt) => postIt.id === id);
    setDeletedPostIt(updateDeletedPostIt, ...deletedPostIt);
    setAllPosIt(updateAllPostIt);
  };
  //
  //
  // Change iseditng to true
  const editingPostIt = (id) => {
    const updateAllPostIt = allPostIt.map((postIt) => {
      const auxPostIt = { ...postIt };
      if (postIt.id === id) {
        auxPostIt.isediting = true;
      }
      return auxPostIt;
    });
    setAllPosIt(updateAllPostIt);
  };
  //
  //
  // Edit post it text
  const editPostIt = (id, value) => {
    const updateAllPostIt = allPostIt.map((postIt) => {
      const auxPostIt = { ...postIt };
      if (postIt.id === id) {
        auxPostIt.text = value;
        auxPostIt.isediting = !postIt.isediting;
      }
      return auxPostIt;
    });
    setAllPosIt(updateAllPostIt);
  };
  //
  //
  useEffect(() => {
    <Bin
      isempty="false"
    />;
  }, [deletedPostIt]);
  return (
    <div className="flex flex-row flex-wrap">
      <Bin />
      <PostItForm
        onSubmit={addPostIt}
      />
      <div className="flex felx-row flex-wrap">
        {
          allPostIt.map((postIt) => (
            <PostIt
              key={postIt.id}
              id={postIt.id}
              text={postIt.text}
              isediting={postIt.isediting}
              deletePostIt={deletePostIt}
              editPostIt={editPostIt}
              editingPostIt={editingPostIt}
            />
          ))
        }
      </div>
    </div>
  );
}

export default PostitList;
