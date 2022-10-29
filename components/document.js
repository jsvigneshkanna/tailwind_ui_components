/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

const Document = () => {
  return (
    <div className=" bg-slate-300 text-black min-h-screen pt-32 md:pt-40 px-4 md:px-40 font-sans">
      <h1 className="text-2xl border-b-2 border-teal-700 font-black">
        Documentation 📝
      </h1>
      <div className="py-8 flex flex-col justify-center items-start">
        <h3 className="text-center pb-8 font-bold text-xl text-red-900 underline underline-offset-4">
          1. Feature video 📺
        </h3>
        <video
          className="w-auto rounded-3xl h-auto border-2 border-rose-500 shadow-xl shadow-blue-300"
          controls>
          <source src="/tailwind_bootstrap_docs.mkv" type="video/mp4"></source>
        </video>
      </div>

      <div className="py-8 flex flex-col justify-center items-start">
        <h3 className="text-left pb-6 font-bold text-xl text-red-900 underline underline-offset-4">
          2. Type of components 💾
        </h3>
        <p className="text-left font-medium">
          Currently we have around 10 different types of components
        </p>
        <p className="pt-4 font-medium">
          Please check
          <Link href="/components">
            <span className="bg-sky-300 text-rose-700 px-3 py-2 rounded-lg ml-2 font-semibold">
              here
            </span>
          </Link>
        </p>
      </div>

      <div className="py-8 flex flex-col justify-center items-start pb-20">
        <h3 className="text-left pb-6 font-bold text-xl text-red-900 underline underline-offset-4">
          3. How to use this website ⚡
        </h3>
        <div className="text-left font-medium">
          <p className="pb-3">
            - You can search some of the required components like &apos;Buttons,
            Forms, Navbars, Alerts&apos; from the components page.
          </p>
          <p className="pb-3">
            - Go to the required component page and try different UI code from
            embeded codepen.
          </p>
          <p className="pb-3">
            - For specific components like &apos;Navbars&apos; you can open/
            close the HTML tab to simulate the mobile responsiveness
          </p>
          <p className="pb-3">
            - In addition to that, we can open the specific codepen in a new tab
            by clicking &apos;EDIT ON CODEPEN&apos;
          </p>
          <p className="bg-rose-500 rounded-lg mt-4 py-2 px-4 text-white font-bold">
            🚀 NOTE: It may take 2-3 seconds for the codepen page to load due to
            the page is heavy in size. Any contributors who can solve this issue
            can connect by Github
          </p>
        </div>
      </div>
    </div>
  );
};

export default Document;
