/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Navbar from "../../components/navbar";
import Codepen from "../../components/codepen";
import Footer from "../../components/footer";
import navbarCollections from "../../tailwind_components/navbars/collection";

const NavbarComponent = () => {
  return (
    <div>
      <Head>
        <title>Tailwind UI | navbar</title>
        <meta name="description" content="TailwindCSS ui component bootstrap" />
        <link rel="icon" href="/favicon/favicon.png" type="image/png" />
      </Head>
      <Navbar />

      <div className="codepen_page font-poppins">
        <p className="codepen_brief bg-sky-200 text-blue-700 md:mx-44 mx-4 px-4 mb-2 text-center py-4 rounded-2xl">
          Guess, IRL where no navbars in website which has 20 pages. This would
          rather increase the memory power in memorizing all the URLs 🤪
        </p>
        <p className="codepen_brief bg-rose-400 md:mx-44 mx-4 px-4 mb-12 text-center py-4 rounded-2xl text-white">
          NOTE: Kindly make the codepen result screen view port to 0.5x in
          mobile devices
        </p>
        {navbarCollections.map((navbar, index) => {
          return (
            <div key={index} className="codepen_container">
              <h3 className="codepen_name">
                {index + 1}. {navbar.componentName}
              </h3>
              <Codepen htmlText={navbar.component} />
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};
export default NavbarComponent;
