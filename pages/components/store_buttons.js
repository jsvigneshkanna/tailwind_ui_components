/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Navbar from "../../components/navbar";
import {useRouter} from "next/router";
import Codepen from "../../components/codepen";
// import test from "../tailwind_components/buttons/test_file.jsx";
import storeButtonCollections from "../../tailwind_components/store_buttons/collection";

const Forms = () => {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>Tailwind UI Components</title>
        <meta name="description" content="TailwindCSS ui component bootstrap" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="codepen_page">
        {storeButtonCollections.map((storeButton, index) => {
          return (
            <div key={index} className="codepen_container">
              <h3 className="codepen_name">{storeButton.componentName}</h3>
              <Codepen htmlText={storeButton.component} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Forms;
