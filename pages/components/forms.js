/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Navbar from "../../components/navbar";
import Codepen from "../../components/codepen";
import Footer from "../../components/footer";
import formCollections from "../../tailwind_components/forms/collection";

const Forms = () => {
  return (
    <div>
      <Head>
        <title>Tailwind UI Components</title>
        <meta name="description" content="TailwindCSS ui component bootstrap" />
        <link rel="icon" href="/favi-tailwind.png" type="image/png" />
      </Head>
      <Navbar />
      <div className="codepen_page font-poppins">
        <p className="codepen_brief bg-sky-200 md:mx-44 mx-4 px-4 mb-12 text-center py-4 rounded-2xl">
          Forms are vital in website/ apps where these helps end users to
          interact with the website smoothly and increase user experience 📝
        </p>
        {formCollections.map((form, index) => {
          return (
            <div key={index} className="codepen_container">
              <h3 className="codepen_name">{form.componentName}</h3>
              <Codepen htmlText={form.component} />
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};
export default Forms;
