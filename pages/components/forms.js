/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Navbar from "../../components/navbar";
import {useRouter} from "next/router";
import Codepen from "../../components/codepen";
// import test from "../tailwind_components/buttons/test_file.jsx";
import formCollections from "../../tailwind_components/forms/collection";

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
      <div className="codepen_page font-poppins">
        <p className="codepen_brief">
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
    </div>
  );
};
export default Forms;
