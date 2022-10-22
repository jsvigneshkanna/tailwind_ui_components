/* eslint-disable @next/next/no-img-element */
import {useState, useEffect} from "react";
import {BallTriangle} from "react-loader-spinner";
import SocialButtons from "./socialbuttons";

const Homebanner = () => {
  const [loading, setloading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, 600);
  }, []);
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
          <div className="banner_container">
            <div className="left_container">
              <div className="what_is">What is Tailwind CSS UI bootstrap</div>
              <div className="what_is_ans">
                <p>
                  This is one stop for frontend developers (sorry 🙏 fullstack
                  developers) who are designing and building their website with
                  tailwind css
                </p>
                <p>
                  Here you can find all UI components and layouts build
                  exclusively in tailwind CSS
                </p>
                <p>
                  Additional point, checkout components page - dont say this to
                  your competitors
                </p>
              </div>
            </div>
            <div className="right_container">
              <img src="/home_banner.png" alt="banner" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Homebanner;
