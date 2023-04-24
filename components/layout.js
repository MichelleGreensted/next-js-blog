import Link from "next/link";

export default function Layout({ children }) {
  return (
    <>
      <div className="overscroll-none h-screen overflow-auto bg-light-ice bg-no-repeat bg-cover bg-center bg-fixed">
        <header className="sticky top-0 flex flex-wrap items-center justify-between mx-auto p-6 pr-10 pl-10 min-h-500 bg-sky-50 bg-opacity-80 hover:bg-opacity-100">
          <h1 className="text-3xl font-semibold font-serif">Next.js Blog</h1>
          <Link
            href={"/"}
            className="text-xl font-serif pr-24 hover:text-sky-700 hover:underline underline-offset-8"
          >
            All Posts
          </Link>
          <Link
            href={"/posts/create-new-post"}
            className="text-xl font-serif hover:text-sky-700 hover:underline underline-offset-8"
          >
            Create New Post
          </Link>
        </header>
        <main>{children}</main>
      </div>
    </>
  );
}
