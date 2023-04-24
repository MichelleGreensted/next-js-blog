import Comment from "./comment";

export default function AllCommentsForPost({ commentsData }) {
  return (
    <>
      <h3>Comments</h3>
      {commentsData.map((comment) => (
        <Comment key={comment.id} commentData={comment} />
      ))}
    </>
  );
}
