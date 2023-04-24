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
      <h1>{postData.title}</h1>
      <h2>By user {postData.title}</h2>
      <p>{postData.body}</p>

      <Link href={"/posts/" + postData.id + "/edit"}>Edit Post</Link>
      <AllCommentsForPost commentsData={commentsData} />
    </Layout>
  );
}
