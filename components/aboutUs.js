/* eslint-disable @next/next/no-img-element */
import {useState, useEffect} from "react";
import {BallTriangle} from "react-loader-spinner";
import {SiBuymeacoffee} from "react-icons/si";
import Link from "next/link";

const AboutUs = () => {
  const [loading, setloading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, 600);
  }, []);
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
            <div className="flex  flex-col justify-center items-center flex-wrap">
              <div className="my-5 mx-3 p-6  md:w-4/5 md:mx-0 flex flex-col justify-center items-center border-white border-2 rounded-lg bg-sky-300">
                <p className="text-xl font-bold underline underline-offset-4 text-blue-700 mb-4">
                  Our motivation ⚡
                </p>
                <hr className="bg-white" />
                <p className="w-full text-center text-blue-900 font-semibold">
                  We do know tailwind css is an emerging CSS framework which
                  makes our website/ app unique without styling compared to
                  other market bootstraps.
                </p>
              </div>
              <div className="my-5 mx-3 p-6  md:w-4/5 md:mx-0 flex flex-col justify-center items-center border-white border-2 rounded-lg bg-sky-300">
                <p className="text-xl font-bold underline underline-offset-4 text-blue-700 mb-4">
                  Solution we are providing 🧑‍💻
                </p>
                <hr className="bg-white" />
                <p className="w-full text-center text-blue-900 font-semibold">
                  You can get almost all layouts and components built under
                  Tailwind CSS, and the best part is we can play around with
                  them in inbuilt code editor and copy the codebase too for your
                  projects.
                </p>
              </div>
              <div className="my-5 mx-3 p-6  md:w-4/5 md:mx-0 flex flex-col justify-center items-center border-white border-2 rounded-lg bg-sky-300">
                <p className="text-xl font-bold underline underline-offset-4 text-blue-700 mb-4">
                  Like our Product 😎
                </p>
                <hr className="bg-white" />
                <p className="w-full text-center text-blue-900 font-semibold flex flex-col md:flex-row justify-center items-center">
                  This contribution is not forced but welcomed, as this will
                  help us run this software for long time, Buy us coffee or tea
                  or even a book at{" "}
                  <a
                    href="https://www.buymeacoffee.com/jsvigneshkanna"
                    target="_blank"
                    rel="noreferrer"
                    className="ml-4 bg-rose-500 p-2 rounded-3xl text-2xl text-white">
                    <SiBuymeacoffee />
                  </a>
                </p>
              </div>
            </div>
            <div>
              <div className="flex  flex-col justify-center items-center flex-wrap">
                <div className=" my-5 mx-3 p-6 flex flex-col justify-center items-center md:w-4/5 md:mx-0p-6 px-5 overflow-auto border-blue-700 border-2 rounded-lg bg-sky-300">
                  <Link href="/contributors" className="cursor-pointer">
                    <p className=" text-xl font-bold underline underline-offset-4 text-blue-700 mb-4">
                      Check out our cool contributors
                    </p>
                    <hr className="bg-white" />
                    <p className="w-full text-center text-blue-900 font-semibold flex flex-col md:flex-row justify-center items-center">
                      We currently have around 50+ open source contributors who have contributed in codebase through different ways from 
                      correcting the UI components to adding this whole new link ❤️‍🔥. Check our contributors in next page, and you too can
                      become a part of our cool 🥸 community. 
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutUs;
