/* eslint-disable @next/next/no-img-element */
import {useState, useEffect} from "react";
import {BallTriangle} from "react-loader-spinner";
import Link from "next/link";

const LicenseContent = () => {
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
        <div className="">
          <div className="banner_container">
            <div className="left_container">
              <div className="what_is_ans ">
              <div className="text-base">
                <p className="text-xl">
                  MIT License
                </p>
                <p>
                  Copyright (c) 2022 - Now J S Vignesh Kanna
                </p>
                <p>
                  Permission is hereby granted, free of charge, to any person obtaining a copy
                  of this software and associated documentation files (the &quot;Software&quot;), to deal
                  in the Software without restriction, including without limitation the rights
                  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                  copies of the Software, and to permit persons to whom the Software is
                  furnished to do so, subject to the following conditions:
                </p>

                <p>
                The above copyright notice and this permission notice shall be included in all
                copies or substantial portions of the Software.
                </p>

                <p>
                THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
                SOFTWARE.
                </p>
              </div>

              </div>
            </div>
            <div className="right_container">
              <img src="/MIT_license.png" alt="banner" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LicenseContent;
