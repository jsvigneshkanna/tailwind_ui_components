/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Navbar from "../../components/navbar";
import {useRouter} from "next/router";
import Codepen from "../../components/codepen";
// import test from "../tailwind_components/buttons/test_file.jsx";
import alertCollections from "../../tailwind_components/alerts/collection";

const Alert = () => {
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
        {alertCollections.map((alert, index) => {
          return (
            <div key={index} className="codepen_container">
              <h3 className="codepen_name">{alert.componentName}</h3>
              <Codepen htmlText={alert.component} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Alert;
