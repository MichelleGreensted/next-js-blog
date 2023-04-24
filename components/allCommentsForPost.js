import Comment from "./comment";

export default function AllCommentsForPost({ commentsData }) {
  return (
    <>
      <div className="pb-10">
        <div className="bg-sky-50 rounded-lg bg-opacity-80 p-10 grid gap-4 grid-cols-1">
          <h3 className="text-xl font-semibold font-serif">Comments</h3>

          {commentsData.map((comment) => (
            <Comment key={comment.id} commentData={comment} />
          ))}
        </div>
      </div>
    </>
  );
}
