import Layout from "../../../../components/layout";
import getPostData from "../../../../utils/getPostData";
import readFormData from "../../../../utils/readFormData";
import { useRouter } from "next/router";

export async function getServerSideProps({ params }) {
  const postData = await getPostData({ params });
  return { props: { postData } };
}

export default function EditPost({ postData }) {
  const router = useRouter();

  const postId = postData.id;
  async function handleSubmitAndRedirect(e) {
    e.preventDefault();

    const postJson = readFormData(e);

    const postJsonWithId = Object.assign(postJson, { id: postId });

    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}`,
      {
        method: "PUT",
        body: JSON.stringify(postJsonWithId),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );

    const json = await res.json();
    console.log("Response to updated blog post PUT request:", json);

    router.push("/");
  }

  return (
    <Layout>
      <form method="post" onSubmit={handleSubmitAndRedirect}>
        <h1>Edit post:</h1>
        <input
          type="text"
          name="title"
          placeholder="Title here"
          defaultValue={postData.title}
        />
        <label>
          <textarea
            name="body"
            rows={8}
            placeholder="Post content here"
            defaultValue={postData.body}
          />
        </label>
        <div>
          <button type="reset">Reset post</button>
          <button type="submit">Submit</button>
        </div>
      </form>
    </Layout>
  );
}
