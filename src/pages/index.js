import AllPostsPreview from "../../components/allPostsPreview";
import Layout from "../../components/layout";
import Head from "next/head";

export async function getServerSideProps() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);

  const data = await res.json();

  return { props: { postsData: data } };
}

export default function Home({ postsData }) {
  return (
    <>
      <Layout>
        <Head>
          <title>Next.js Blog</title>
        </Head>
        <AllPostsPreview postsData={postsData} />
      </Layout>
    </>
  );
}
