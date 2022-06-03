import React from 'react';
import PostItForm from './PostItForm';
import PostIt from './PostIt';
import useLocalStorage from './useLocalStorage';

function PostitList() {
  const [allPostIt, setAllPosIt] = useLocalStorage('allPostIt', []);
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
  const editingPostIt = (id) => {
    const updateAllPostIt = allPostIt.map((postIt) => {
      const auxPostIt = { ...postIt };
      if (postIt.id === id) {
        window.localStorage.setItem('isediting', true);
        auxPostIt.isediting = !postIt.isediting;
      }
      return auxPostIt;
    });
    setAllPosIt(updateAllPostIt);
  };
  const editPostIt = (id, value) => {
    const updateAllPostIt = allPostIt.map((postIt) => {
      const auxPostIt = { ...postIt };
      if (postIt.id === id) {
        window.localStorage.setItem('text', value);
        auxPostIt.text = value;
        window.localStorage.setItem('isediting', true);
        auxPostIt.isediting = !postIt.isediting;
      }
      return auxPostIt;
    });
    setAllPosIt(updateAllPostIt);
  };
  return (
    <div className="flex flex-row flex-wrap">
      <PostItForm
        onSubmit={addPostIt}
      />
      <div className="flex felx-row flex-wrap">
        {
          allPostIt.map((postIt) => (
            <PostIt
              key={postIt.id} // para que al actualizar react sepa el orden
              id={postIt.id} // identificador de cada post it
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
