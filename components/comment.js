export default function Comment({ commentData }) {
  return (
    <>
      <div>
        <p>{commentData.name}</p>
        <p>{commentData.email}</p>
        <p>{commentData.body}</p>
      </div>
    </>
  );
}
