import Link from "next/link";

export default function PostPreview({ postData }) {
  return (
    <>
      <div className="p-5">
        <Link
          href={"/posts/" + postData.id}
          className="p-4 grid gap-2 grid-cols-1 rounded-lg bg-sky-50 bg-opacity-70 hover:bg-sky-50 hover:bg-opacity-80 hover:text-sky-700"
        >
          <p className="text-xl font-semibold font-serif max-w-prose">
            {postData.title}
          </p>
          <p className="font-serif italic">By user {postData.userId}</p>
        </Link>
      </div>
    </>
  );
}
