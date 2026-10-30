import Comment from "./Comment"
function AllComments(props){
    const allComments = props.allComments;

  const commentComponents = allComments.map( allComments => {
    return <Comment comment={allComments.comment} />
  })  

  return(
    <>
    {commentComponents}
    </>
  );

}

export default AllComments