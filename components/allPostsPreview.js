import PostPreview from "./postPreview";

export default function AllPostsPreview({ postsData }) {
  return (
    <>
      <div className="h-screen overflow-auto flex justify-center pt-14 pl-10">
        <div className="justify-start">
          {postsData.map((post) => (
            <PostPreview key={post.id} postData={post} />
          ))}
        </div>
      </div>
    </>
  );
}
