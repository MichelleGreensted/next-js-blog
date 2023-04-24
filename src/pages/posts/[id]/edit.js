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
      <div className="h-screen flex justify-center p-20 overflow-auto">
        <form
          method="post"
          onSubmit={handleSubmitAndRedirect}
          className="w-3/5"
        >
          <div className="place-content-center grid gap-4 grid-cols-1">
            <h1 className="text-white text-3xl font-serif">Edit post:</h1>
            <input
              type="text"
              name="title"
              placeholder="Title here"
              defaultValue={postData.title}
              className="bg-sky-50 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:bg-sky-50 bg-opacity-80 focus:bg-opacity-100"
            />
            <label>
              <textarea
                name="body"
                rows={8}
                placeholder="Post content here"
                defaultValue={postData.body}
                className="bg-sky-50 px-3 py-2 w-full rounded-lg shadow-sm focus:outline-none focus:bg-sky-50 bg-opacity-80 focus:bg-opacity-100"
              />
            </label>
            <div className="flex justify-end gap-4">
              <button
                type="reset"
                className="font-serif bg-sky-50 px-4 py-2 rounded-lg shadow-sm hover:bg-sky-50 bg-opacity-80 hover:bg-opacity-100 hover:text-sky-700"
              >
                Reset post
              </button>
              <button
                type="submit"
                className="font-serif bg-sky-50 px-4 py-2 rounded-lg shadow-sm hover:bg-sky-50 bg-opacity-80 hover:bg-opacity-100 hover:text-sky-700"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
}
