import Link from "next/link";

export default function Layout({ children }) {
  return (
    <>
      <header>
        <h1>Next.js Blog</h1>
        <Link href={"/"}>All Posts</Link>
        <Link href={"/posts/create-new-post"}>Create New Post</Link>
      </header>
      <main>{children}</main>
    </>
  );
}
