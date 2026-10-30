import { useState } from 'react'
import './App.css'
import CommentInput from '../CommentInput'
import Comment from '../Comment';
import AllComments from '../AllComments';

function App() {

  const [allComments, setallComments] = useState ([
      {comment:"Great explanation of components!" },
      {comment:"Props finally make sense to me." },
      {comment:"Can we do a lab on useState next week?" },
      {comment:"Thanks for the lab, this was fun!" },
    ]);

  return(
    <>
    <CommentInput allComments={allComments} setallComments={setallComments} />
    <AllComments allComments={allComments} />
    </>
  );
}

export default App


