/* eslint-disable @next/next/no-img-element */
import {useState, useEffect} from "react";
import {BallTriangle} from "react-loader-spinner";
import Link from "next/link";

const AboutUs = () => {
  const [loading, setloading] = useState(true);
  // useEffect(() => {
  //       setTimeout(() => {
  //             setloading(false);
  //       }, 600);
  // }, []);
  // fetch('https://api.github.com/repos/jsvigneshkanna/tailwind_ui_components/contributors').then(res => res.json()).then(res => {
  //       if (document.getElementById('contributors').innerHTML == "") {
  //             for (var xx = 0; xx < res.length; xx++) {
  //                   document.getElementById('contributors').innerHTML += ` <a href="${res[xx].url}" class=" overflow-hidden flex flex-col justify-evenly w-28 m-4"><img class="inline rounded-full"
  //                                                             src="${res[xx].avatar_url}"
  //                                                             alt=""/><span
  //                                                             class="text-white"><div class="w-full text-center">${res[xx].login}</div></span></a>`
  //             }
  //       }
  // })

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
          <div>
            <div className="w-full flex justify-evenly flex-wrap">
              <div className="w-5/12 my-5 p-2 m border-white border-2 rounded">
                <p className="w-full text-xl  text-white">
                  Our website motivation
                </p>
                <hr className="bg-white" />
                <p className="w-full text-white">
                  We do know tailwind css is an emerging CSS framework which
                  makes our website/ app unique without styling compared to
                  other market bootstraps.
                </p>
              </div>
              <div className="w-5/12 my-5 p-2 m border-white border-2 rounded">
                <p className="w-full text-xl text-white">
                  Solution we are providing
                </p>
                <hr className="bg-white" />
                <p className="w-full text-white">
                  You can get almost all layouts and components built under
                  Tailwind CSS, and the best part is we can play around with
                  them in inbuilt code editor and copy the codebase too for your
                  projects.
                </p>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutUs;
