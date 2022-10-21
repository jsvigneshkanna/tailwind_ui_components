/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Navbar from "../../components/navbar";
import Codepen from "../../components/codepen";
import alertCollections from "../../tailwind_components/alerts/collection";
import Footer from "../../components/footer";

const Alert = () => {
  return (
    <div>
      <Head>
        <title>Tailwind UI Components</title>
        <meta name="description" content="TailwindCSS ui component bootstrap" />
        <link rel="icon" href="/favi-tailwind.png" type="image/png" />
      </Head>
      <Navbar />
      <div className="codepen_page font-poppins">
        <p className="codepen_brief bg-sky-300 md:mx-44 mx-4 px-4 mb-12 text-center py-4 rounded-2xl">
          Alerts are used in website due user actions 💭
        </p>
        {alertCollections.map((alert, index) => {
          return (
            <div key={index} className="codepen_container">
              <h3 className="codepen_name">{alert.componentName}</h3>
              <Codepen htmlText={alert.component} />
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};
export default Alert;
