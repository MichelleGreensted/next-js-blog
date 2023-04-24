import AllCommentsForPost from "../../../../components/allCommentsForPost";
import Layout from "../../../../components/layout";
import getPostData from "../../../../utils/getPostData";
import Link from "next/link";

export async function getServerSideProps({ params }) {
  const postData = await getPostData({ params });

  const commentsUrl = `https://jsonplaceholder.typicode.com/comments?postId=${params.id}`;

  const res = await fetch(commentsUrl);

  const commentsData = await res.json();

  return { props: { postData, commentsData } };
}

export default function Post({ postData, commentsData }) {
  return (
    <Layout>
      <div className="h-screen overflow-auto flex justify-center">
        <div className="w-2/3 p-20">
          <div className="grid gap-3 grid-cols-1 p-10 bg-sky-50 rounded-lg bg-opacity-80">
            <h1 className="text-3xl font-serif font-semibold">
              {postData.title}
            </h1>
            <h2 className="text-base font-serif italic">
              By user {postData.title}
            </h2>
            <p className="text-base">{postData.body}</p>
          </div>
          <div className="flex justify-end pt-10 pb-10">
            <Link
              href={"/posts/" + postData.id + "/edit"}
              className="font-serif bg-sky-50 px-4 py-2 rounded-lg shadow-sm hover:bg-white bg-opacity-80 hover:bg-opacity-100 hover:text-sky-700"
            >
              Edit Post
            </Link>
          </div>
          <AllCommentsForPost commentsData={commentsData} />
        </div>
      </div>
    </Layout>
  );
}
