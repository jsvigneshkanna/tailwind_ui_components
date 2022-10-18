import Head from "next/head";
import Navbar from "../components/navbar";
import Codepen from "../components/codepen";
import {useEffect} from "react";

// import test from "../tailwind_components/buttons/test_file.jsx";
import buttonCollections from "../tailwind_components/buttons/collection";

const Components = () => {
  useEffect(() => {
    window.onload = function () {
      if (!window.location.hash) {
        window.location = window.location + "#loaded";
        window.location.reload();
      }
    };
    window.onclose = function () {
      if (window.location.hash) {
        window.location = "";
      }
    };
  }, []);

  return (
    <div>
      <Head>
        <title>Tailwind UI Components</title>
        <meta name="description" content="TailwindCSS ui component bootstrap" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="component_page">
        {buttonCollections.map((button, index) => {
          return (
            <div key={index} className="component_container">
              <h3 className="component_name">{button.componentName}</h3>
              <Codepen htmlText={button.component} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Components;
