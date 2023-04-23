export default function readFormData(e) {
  const post = e.target;
  const postData = new FormData(post);

  const postJson = Object.fromEntries(postData.entries());
  return postJson;
}
