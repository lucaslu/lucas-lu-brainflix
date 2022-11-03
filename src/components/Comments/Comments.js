const Comments = ({ comments }) => {
  console.log(comments);
  return (
    <>
      {comments.map((comment) => (
        <div>
          <p>{comment.name}</p>
          <p>{comment.comment}</p>
          <p>{comment.timestamp}</p>
        </div>
      ))}
    </>
  );
};

export default Comments;
