import Head from "next/head";
import Navbar from "../components/navbar";
import Codepen from "../components/codepen";
import {useEffect, useState} from "react";

import test from "../tailwind_components/buttons/test_file.jsx";
// const htmlText = htmlToText(test_component);

const Components = () => {
  return (
    <div>
      <Head>
        <title>Tailwind Bootstrap</title>
        <meta name="description" content="TailwindCSS ui component bootstrap" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className=" bg-slate-100 min-h-screen">
        <Navbar />
        <Codepen htmlText={test} />
        <Codepen htmlText={test} />
        <Codepen htmlText={test} />
        <Codepen htmlText={test} />
        <Codepen htmlText={test} />
        <Codepen htmlText={test} />
        <Codepen htmlText={test} />
        <Codepen htmlText={test} />
        <Codepen htmlText={test} />
      </div>
    </div>
  );
};

export default Components;
