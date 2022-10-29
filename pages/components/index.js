/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */

import Head from "next/head";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

const Components = () => {
  return (
    <div>
      <Head>
        <title>Tailwind UI Components Selections</title>
        <meta name="description" content="TailwindCSS ui component bootstrap" />
        <link rel="icon" href="/favicon/favicon.png" type="image/png" />
      </Head>
      <Navbar />

      <div className="component_page font-poppins">
        <div className="text-blue-700 bg-sky-200 text-base mb-16 font-semibold text-center justify-center items-center flex flex-col mx-10 md9:mx-36 lg:!mx-48 my-4 rounded-2xl p-4 md:flex-row ">
          👩‍💻 Built for developers by developers 🧑‍💻 like to contribute?
          <span className="ml-6 bg-rose-600 text-white px-3 rounded-2xl mt-4 md:mt-0">
            <a
              href="https://github.com/jsvigneshkanna/tailwind_ui_components"
              target="_blank"
              rel="noreferrer">
              Check here 👉
            </a>
          </span>
        </div>
        <div className="component_container grid xl:grid-cols-3 md:grid-cols-2 md9:gap-y-20 justify-items-center md:gap-x-8 md9:gap-x-0">
          <a className="component_card" href="/components/buttons">
            <p className="new_ribbon">New Component ⚡</p>
            <img
              src="/button_component_img.png"
              alt="button_component"
              className="container_card_img"
            />
            <h2 className="component_name">Button Components</h2>
            <p className="component_brief">
              Buttons, widely called CTAs in tech are backbones for engineers to
              make user interact easily and navigate different section with a
              click
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
              Forms are vital in website/ apps where these helps end users to
              interact with the website smoothly and increase user experience
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
          <a className="component_card" href="/components/navbars">
            <p className="in_dev_ribbon">Need Contributors 🙏</p>
            <img
              src="/navbar_component.png"
              alt="navbar_component"
              className="container_card_img"
            />
            <h2 className="component_name">NavBar Components</h2>
            <p className="component_brief">
              Guess, IRL where no navbars in website which has 20 pages. This
              would rather increase the memory power in memorizing all the URLs
              🤪
            </p>
          </a>

          <a className="component_card" href="/components/feature_card">
            <p className="in_dev_ribbon">We are building it Fast 🏃‍♂️</p>
            <img
              src="/feature_card_component.png"
              alt="feature_card_component"
              className="container_card_img"
            />
            <h2 className="component_name">Feature Card Components</h2>
            <p className="component_brief">
              In late 90s, we do have visiting cards to showcase our portfolio.
              But now, we are in 20th century where 240px X 240px of div is
              enough for showcasing our portfolio 📝
            </p>
          </a>

          <a className="component_card" href="/components/testimonial_card">
            <p className="in_dev_ribbon">Still checking contributors 🥲</p>
            <img
              src="/testimonial_cards.png"
              alt="testimonial_cards_component"
              className="container_card_img"
            />
            <h2 className="component_name">Testimonial Card Components</h2>
            <p className="component_brief">
              Still Guessing how can you showcase your testimonials(You do have
              🤪). Dont worry if don&apos;t have testimonials or have no idea
              how to design it, click this card
            </p>
          </a>

          <a className="component_card" href="/components/pricing_cards">
            <p className="in_dev_ribbon">Still checking contributors 🥲</p>
            <img
              src="/pricing_card_component.png"
              alt="pricing_card_component"
              className="container_card_img"
            />
            <h2 className="component_name">Pricing Card Components</h2>
            <p className="component_brief">
              Have cool product (Not having? believe you have) but not sure how
              can you sell/ market those pricings. Our developers have designed
              the best pricing templates, Just tweak the text and you are good
              to go 💰
            </p>
          </a>

          <a className="component_card" href="/components/contact_forms">
            <p className="in_dev_ribbon">We are building it Fast 🏃‍♂️</p>
            <img
              src="/contact_component.png"
              alt="contact_component"
              className="container_card_img"
            />
            <h2 className="component_name">Contact forms Components</h2>
            <p className="component_brief">
              As someone in facebook posted &apos;Helps you connect and share
              with people using contact forms&apos;, we are helping you with
              best designed contact forms in tailwindCSS 🍽️
            </p>
          </a>

          <a className="component_card" href="/components/badges">
            <p className="in_dev_ribbon">Simple yet difficult 😶‍🌫️</p>
            <img
              src="/badge_component.png"
              alt="badge_component"
              className="container_card_img"
            />
            <h2 className="component_name">Badges Components</h2>
            <p className="component_brief">
              How cool is to have coloured and meaningfull badges near your
              image/ cards/ testimonials. Sounds interesting, then why waiting
              to check inside 😎
            </p>
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Components;
