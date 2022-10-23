/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Navbar from "../../components/navbar";
import Codepen from "../../components/codepen";
import Footer from "../../components/footer";
import buttonCollections from "../../tailwind_components/buttons/collection";

const Buttons = () => {
  return (
    <div>
      <Head>
        <title>Tailwind UI | Buttons</title>
        <meta name="description" content="TailwindCSS ui component bootstrap" />
        <link rel="icon" href="/favicon/favicon.png" type="image/png" />
      </Head>
      <Navbar />

      <div className="codepen_page font-poppins">
        <p className="codepen_brief bg-sky-200 md:mx-44 mx-4 px-4 mb-12 text-center py-4 rounded-2xl">
          Buttons, widely called CTAs in tech are backbones for engineers to
          make user interact easily and navigate different section with a click
          👆
        </p>
        {buttonCollections.map((button, index) => {
          return (
            <div key={index} className="codepen_container">
              <h3 className="codepen_name">
                {index + 1}. {button.componentName}
              </h3>
              <Codepen htmlText={button.component} />
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};
export default Buttons;
