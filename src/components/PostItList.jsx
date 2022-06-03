import React, { useState } from 'react';
import PostItForm from './PostItForm';
import PostIt from './PostIt';

function PostitList() {
  const [allPostIt, setAllPosIt] = useState([]);
  const addPostIt = (postIt) => {
    if (postIt.text.trim()) {
      const updateAllPostIt = [postIt, ...allPostIt];
      setAllPosIt(updateAllPostIt);
    }
  };
  const deletePostIt = (id) => {
    const updateAllPostIt = allPostIt.filter((postIt) => postIt.id !== id);
    setAllPosIt(updateAllPostIt);
  };
  /*
  const editPostIt = (id) => {
    const updateAllPostIt = allPostIt.map((postIt) => {
      if (postIt.id === id) {
      }
      return postIt;
    });
    setAllPosIt(updateAllPostIt);
  };
  */
  return (
    <div className="flex flex-row flex-wrap">
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
              deletePostIt={deletePostIt}
              /* editPostIt={editPostIt} */
            />
          ))
        }
      </div>
    </div>
  );
}

export default PostitList;
