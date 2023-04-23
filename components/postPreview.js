import Link from "next/link";

export default function PostPreview({ postData }) {
  return (
    <>
      <Link href={"/posts/" + postData.id}>
        <p>{postData.title}</p>
        <p>By user {postData.userId}</p>
      </Link>
    </>
  );
}
