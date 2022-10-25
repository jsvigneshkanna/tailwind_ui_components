import {useState, useEffect} from "react";
import Contributor from "./contributor";
import {BallTriangle} from "react-loader-spinner";

const Contributors = () => {
  const [loading, setloading] = useState(true);
  const [contributors, setContributors] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, 600);

    fetch(
      "https://api.github.com/repos/jsvigneshkanna/tailwind_ui_components/contributors",
    )
      .then((res) => res.json())
      .then((contributors) => setContributors(contributors));
  }, []);

  return (
    <div>
      {loading ? (
        <div
          style={{
            height: "100vh",
            backgroundColor: "rgba(0,0,0,0.99)",
            display: "flex",
            justifyContent: "center",
          }}
          className="banner">
          <BallTriangle
            height="100"
            width="100"
            color="#e39a09"
            ariaLabel="loading"
          />
        </div>
      ) : (
        <div className="banner">
          <div className="mx-4 md:mx-40">
            <p className="text-3xl text-white font-bold text-center ">
              Our contributors:
            </p>
            <div className="p-6 px-5"></div>
            <div
              id="contributors"
              className="max-w-sm relative mx-auto dark:highlight-white/5 shadow-lg ring-1 ring-black/5 rounded-xl flex flex-col   md:max-w-5xl md:overflow-auto md:w-auto md:flex md:flex-row md:flex-wrap md:justify-evenly ">
              {console.log("checking, ", contributors)}
              {contributors.map((contributor, idx) => (
                <Contributor key={idx} contributor={contributor} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contributors;
