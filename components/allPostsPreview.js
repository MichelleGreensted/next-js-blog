import PostPreview from "./postPreview";

export default function AllPostsPreview({ postsData }) {
  return (
    <>
      <div>
        {postsData.map((post) => (
          <PostPreview key={post.id} postData={post} />
        ))}
      </div>
    </>
  );
}
