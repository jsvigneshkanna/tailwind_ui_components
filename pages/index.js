import Head from "next/head";

import Navbar from "../components/navbar";
import Homebanner from "../components/homebanner";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tailwind Bootstrap</title>
        <link rel="icon" href="/favi-tailwind.png" type="image/png" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
        />
        <meta name="title" content="Tailwind Bootstrap" />
        <meta name="description" content="TailwindCSS ui component bootstrap" />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://tailwindcsscomponents.vercel.app/"
        />
        <meta property="og:title" content="Tailwind Bootstrap" />
        <meta
          property="og:description"
          content="TailwindCSS ui component bootstrap"
        />

        <meta
          property="twitter:url"
          content="https://tailwindcsscomponents.vercel.app/"
        />
        <meta property="twitter:title" content="Tailwind Bootstrap" />
        <meta
          property="twitter:description"
          content="TailwindCSS ui component bootstrap"
        />
      </Head>

      <div className=" bg-slate-100 w-full min-h-screen font-poppins">
        <Navbar />
        <Homebanner />
      </div>
    </>
  );
}
