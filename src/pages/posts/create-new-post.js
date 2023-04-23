import Layout from "../../../components/layout";
import readFormData from "../../../utils/readFormData";
import { useRouter } from "next/router";

export default function CreateNewPost() {
  const router = useRouter();
  async function handleSubmitAndRedirect(e) {
    e.preventDefault();

    const postJson = readFormData(e);

    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(postJson),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    const data = await res.json();
    console.log("Response to new blog post POST request: ", data);

    router.push("/");
  }

  return (
    <>
      <Layout>
        <form method="post" onSubmit={handleSubmitAndRedirect}>
          <h1>Create a new post:</h1>
          <input type="text" name="title" placeholder="Title here" />
          <input type="number" name="userId" placeholder="User ID here" />
          <label>
            <textarea name="body" rows={8} placeholder="Post content here" />
            <div>
              <button type="reset">Reset post</button>
              <button type="submit">Submit</button>
            </div>
          </label>
        </form>
      </Layout>
    </>
  );
}
