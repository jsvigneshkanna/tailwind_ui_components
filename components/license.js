/* eslint-disable @next/next/no-img-element */
const LicenseContent = () => {
  return (
    <div>
      <div className="w-full flex flex-col md:flex-row px-4 md:px-40 py-36 pb-8  md:py-44 gap-8 justify-center md:justify-between items-center bg-gradient-to-bl md:bg-gradient-to-l from-[#520044] to-[#000046] text-white">
        <div className=" w-full md:w-3/4">
          <div className="text-base">
            <p className="text-2xl underline underline-offset-4">MIT License</p>
            <p className=" text-lg md:pt-8 pt-4">
              Copyright (c) 2022 - Now J S Vignesh Kanna
            </p>
            <p className=" md:pt-8 pt-4">
              Permission is hereby granted, free of charge, to any person
              obtaining a copy of this software and associated documentation
              files (the &quot;Software&quot;), to deal in the Software without
              restriction, including without limitation the rights to use, copy,
              modify, merge, publish, distribute, sublicense, and/or sell copies
              of the Software, and to permit persons to whom the Software is
              furnished to do so, subject to the following conditions:
            </p>

            <p className=" md:pt-8 pt-4">
              The above copyright notice and this permission notice shall be
              included in all copies or substantial portions of the Software.
            </p>

            <p className=" md:mt-8 mt-4 bg-sky-300 text-blue-700 rounded-xl p-4">
              THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF
              ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
              WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE
              AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
              HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
              WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
              OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
              DEALINGS IN THE SOFTWARE.
            </p>
          </div>
        </div>
        <div>
          <img
            src="/MIT_license.png"
            alt="license"
            className=" object-contain w-96 hidden md:block rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
};

export default LicenseContent;
