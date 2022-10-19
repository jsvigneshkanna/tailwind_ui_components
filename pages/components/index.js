/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Navbar from "../../components/navbar";
import Image from "next/image";
import Codepen from "../../components/codepen";
import {useEffect} from "react";
import {useRouter} from "next/router";

// import test from "../tailwind_components/buttons/test_file.jsx";
import buttonCollections from "../../tailwind_components/buttons/collection";

const Components = () => {
  const router = useRouter();
  //   useEffect(() => {
  //     window.onload = function () {
  //       if (!window.location.hash) {
  //         window.location = window.location + "#loaded";
  //         window.location.reload();
  //       }
  //     };
  //     window.onclose = function () {
  //       if (window.location.hash) {
  //         window.location = "";
  //       }
  //     };
  //   }, []);

  return (
    <div>
      <Head>
        <title>Tailwind UI Components</title>
        <meta name="description" content="TailwindCSS ui component bootstrap" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      {/* <div className="component_page">
        {buttonCollections.map((button, index) => {
          return (
            <div key={index} className="component_container">
              <h3 className="component_name">{button.componentName}</h3>
              <Codepen htmlText={button.component} />
            </div>
          );
        })}
      </div> */}

      <div className="component_page">
        <div className="component_container">
          <a className="component_card" href="/components/buttons">
            <img
              src="/button_component_img.png"
              alt="button_component"
              className="container_card_img"
            />
            <h2>Button Components</h2>
          </a>
          <a className="component_card" href="/components/forms">
            <img
              src="/form_component.png"
              alt="form_component"
              className="container_card_img"
            />
            <h2>Form Components</h2>
          </a>
          <a className="component_card" href="/components/store_buttons">
            <img
              src="/store_button_component.png"
              alt="store_button_component"
              className="container_card_img"
            />
            <h2>Store Button Components</h2>
          </a>
          <a className="component_card" href="/components/alert">
            <img
              src="/alert_component.png"
              alt="alert_component"
              className="container_card_img"
            />
            <h2>Alert Components</h2>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Components;
