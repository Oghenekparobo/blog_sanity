import Head from "next/head";

export default function Home() {
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
              <p className="text-gray-300">feb 10 2022</p>
              <h1 className=" tracking-tight font-bold text-2xl md:text-4xl md:tracking-wide">
                Update don show
              </h1>
              <p className="tracking-wide text-gray-400">
                na so the matter take set oooo
              </p>
            </div>
          </div>

          <div className="blogs-contents px-4 space-y-8 md:space-y-6">
            <div className="content text-center border border-gray-300 p-4">
              <p className="text-gray-300">feb 10 2022</p>
              <h1 className="text-2xl tracking-tight font-bold">
                Update don show
              </h1>
              <p className="tracking-wide text-gray-400">
                na so the matter take set oooo
              </p>
            </div>
            <div className="content text-center border border-gray-300 p-4">
              <p className="text-gray-300">feb 10 2022</p>
              <h1 className="text-2xl tracking-tight font-bold">
                Update don show
              </h1>
              <p className="tracking-wide text-gray-400">
                na so the matter take set oooo
              </p>
            </div>
            <div className="content text-center border border-gray-300 p-4">
              <p className="text-gray-300">feb 10 2022</p>
              <h1 className="text-2xl tracking-tight font-bold">
                Update don show
              </h1>
              <p className="tracking-wide text-gray-400">
                na so the matter take set oooo
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
