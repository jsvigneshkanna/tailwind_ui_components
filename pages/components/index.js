/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */

import Head from "next/head";
import Navbar from "../../components/navbar";
import {BallTriangle} from "react-loader-spinner";
import {useState, useRef, useEffect} from "react";
const Components = () => {
  const [loading, setloading] = useState(false);
  useEffect(() => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 1500);
  }, []);
  return (
    <div>
      <Head>
        <title>Tailwind UI Components</title>
        <meta name="description" content="TailwindCSS ui component bootstrap" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      {loading ? (
        <div
          style={{
            height: "100vh",
            backgroundColor: "rgba(0,0,0,0.99",
            display: "flex",
            justifyContent: "center",
          }}
          className="component_page">
          <BallTriangle
            height="100"
            width="100"
            color="#e39a09"
            ariaLabel="loading"
          />
        </div>
      ) : (
        <div>
          <div className="component_page">
            <div className="component_container">
              <a className="component_card" href="/components/buttons">
                <p className="new_ribbon">New Component ⚡</p>
                <img
                  src="/button_component_img.png"
                  alt="button_component"
                  className="container_card_img"
                />
                <h2 className="component_name">Button Components</h2>
                <p className="component_brief">
                  Buttons, widely called CTAs in tech are backbones for
                  engineers to make user interact easily and navigate different
                  section with a click
                </p>
              </a>
              <a className="component_card" href="/components/forms">
                <p className="new_ribbon">New Component ⚡</p>
                <img
                  src="/form_component.png"
                  alt="form_component"
                  className="container_card_img"
                />
                <h2 className="component_name">Form Components</h2>
                <p className="component_brief">
                  Forms are vital in website/ apps where these helps end users
                  to interact with the website smoothly and increase user
                  experience
                </p>
              </a>
              <a className="component_card" href="/components/store_buttons">
                <p className="new_ribbon">New Component ⚡</p>
                <img
                  src="/store_button_component.png"
                  alt="store_button_component"
                  className="container_card_img"
                />
                <h2 className="component_name">Store Button Components</h2>
                <p className="component_brief">
                  These components can be used in footer and contact pages to
                  showcase your social/ company cards
                </p>
              </a>
              <a className="component_card" href="/components/alert">
                <p className="new_ribbon">New Component ⚡</p>
                <img
                  src="/alert_component.png"
                  alt="alert_component"
                  className="container_card_img"
                />
                <h2 className="component_name">Alert Components</h2>
                <p className="component_brief">
                  Alerts are used in website due user actions 💭
                </p>
              </a>
              <a className="component_card in_dev_component">
                <p className="in_dev_ribbon">In Dev 🍻</p>
                <img
                  src="/navbar_component.png"
                  alt="navbar_component"
                  className="container_card_img"
                />
                <h2 className="component_name">NavBar Components</h2>
                <p className="component_brief">
                  Guess, IRL where no navbars in website which has 20 pages.
                  This would rather increase the memory power in memorizing all
                  the URLs 🤪
                </p>
              </a>

              <a className="component_card in_dev_component">
                <p className="in_dev_ribbon">In Dev 🍻</p>
                <img
                  src="/feature_card_component.png"
                  alt="feature_card_component"
                  className="container_card_img"
                />
                <h2 className="component_name">Feature Card Components</h2>
                <p className="component_brief">
                  In late 90s, we do have visiting cards to showcase our
                  portfolio. But now, we are in 20th century where 240px X 240px
                  of div is enough for showcasing our portfolio
                </p>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Components;
