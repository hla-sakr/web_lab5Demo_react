import { useState } from "react";

function CommentInput(props){
    const allComments = props.allComments;
    const setallComments = props.setallComments;

    const [input, setInput] = useState();

    function saveInputText(event){
        setInput(event.target.value)
    }

    function addComment(){
        setallComments([...allComments, {comment:input}])
        console.log(allComments);
    }


    return(
        <>
        <h1>Comments ({allComments.length}) </h1>
        <input placeholder="Write a comment" size="30" onChange={saveInputText}/>
        <button onClick={addComment}>Post</button>
        </>
    );
}

export default CommentInput
