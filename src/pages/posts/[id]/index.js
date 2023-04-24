import Layout from "../../../../components/layout";
import getPostData from "../../../../utils/getPostData";
import Link from "next/link";

export async function getServerSideProps({ params }) {
  const postData = await getPostData({ params });

  return { props: { postData } };
}

export default function Post({ postData }) {
  return (
    <Layout>
      <h1>{postData.title}</h1>
      <h2>By user {postData.title}</h2>
      <p>{postData.body}</p>

      <Link href={"/posts/" + postData.id + "/edit"}>Edit Post</Link>
    </Layout>
  );
}
