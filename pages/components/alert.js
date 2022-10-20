/* eslint-disable @next/next/no-img-element */
import {BallTriangle} from "react-loader-spinner";
import {useState, useRef, useEffect} from "react";
import Head from "next/head";
import Navbar from "../../components/navbar";
import {useRouter} from "next/router";
import Codepen from "../../components/codepen";
// import test from "../tailwind_components/buttons/test_file.jsx";
import alertCollections from "../../tailwind_components/alerts/collection";

const Alert = () => {
  const [loading, setloading] = useState(false);
  useEffect(() => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 1500);
  }, []);
  const router = useRouter();
  return (
    <div>
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
          <Head>
            <title>Tailwind UI Components</title>
            <meta
              name="description"
              content="TailwindCSS ui component bootstrap"
            />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <Navbar />
          <div className="codepen_page">
            <p className="codepen_brief">
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
        </div>
      )}
    </div>
  );
};
export default Alert;
