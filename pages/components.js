import Head from "next/head";
import Navbar from "../components/navbar";
import Codepen from "../components/codepen";
import {useEffect, useState} from "react";
import {htmlToText} from "html-to-text";

import test from "../tailwind_components/buttons/test_file.jsx";
// const htmlText = htmlToText(test_component);
console.log(htmlToText(test));

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
      </div>
    </div>
  );
};

export default Components;
