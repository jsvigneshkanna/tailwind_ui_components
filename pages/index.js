import Head from "next/head";

import Navbar from "../components/navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tailwind Bootstrap</title>
        <meta name="description" content="TailwindCSS ui component bootstrap" />
        <link rel="icon" href="/favi-tailwind.png" type='image/png' />
      </Head>

      <div className=" bg-slate-100 w-full min-h-screen">
        <Navbar />
      </div>
    </>
  );
}
