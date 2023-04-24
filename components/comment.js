export default function Comment({ commentData }) {
  return (
    <>
      <div>
        <p className="text-sm italic font-serif">{commentData.name}</p>
        <p className="text-sm italic font-serif">{commentData.email}</p>
        <p className="text-base">{commentData.body}</p>
      </div>
    </>
  );
}
