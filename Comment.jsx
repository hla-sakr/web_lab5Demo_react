import userImg from './user.png'
function Comment(props){
    const comment = props.comment;

    return(
        <div className='comment-container'>
            <img src={userImg} width="50"/>
            <div className='comment-box'>
                <strong>Hla Sakr</strong>
                <p>{comment}</p>
            </div>
        </div>
    );
}

export default Comment
