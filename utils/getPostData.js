export default async function getPostData({ params }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );

  const postData = await res.json();

  return postData;
}
