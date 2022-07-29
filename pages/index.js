import Head from "next/head";
import { client } from "../lib/sanity";
import Link from 'next/link'

export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>Blog</title>
        <meta name=" Blog web application" content="Blog homepage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="text-center p-6 text-xl italic">
        <h1>Yup Not The blog you expected yeah, but excuse my html lol</h1>
        <p className="text-sm opacity-25">i dey learn boss</p>
      </div>

      <section className="pt-10 ">
        <div className="wrapper p-10 space-y-8  md:grid md:grid-cols-3  ">
          <div className="blog-xl_left flex flex-col justify-center items-center col-span-2 md:h-full md:w-4/5 md:border-r border-gray-300">
            <div className="content text-center  border border-gray-300 px-8 py-4 md:p-8">
              <p className="text-gray-300">Headless cms</p>
              <p>by Stephen</p>
            </div>
          </div>

          <div className="blogs-contents px-4 space-y-8 md:space-y-6 cursor-pointer">
            {posts.map((post, index) => (
              <Link key={index} as={`posts/${post.slug}`} href='posts/[slug]'>
               <div
                className="content text-center border border-gray-300 p-4"
                
              >
                <p className="text-gray-300">
                  {new Date(post.publishedAt).toDateString().slice(4)}
                </p>
                <h1 className="text-2xl tracking-tight font-bold">
                  {post.title}
                </h1>
              </div></Link>
             
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export async function getStaticProps() {
  const posts =
    await client.fetch(`*[_type == "post"] | order(publishedAt desc){
    _id,
    title,
    publishedAt,
    'slug': slug.current,
  }`);

  return {
    props: { posts },
  };
}
