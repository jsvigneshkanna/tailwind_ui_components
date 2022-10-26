/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */

import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <footer className=" p-6 sm:p-6 bg-gradient-to-b from-[#310046] to-[#000057]">
        <div className="md:flex md:flex-row flex-col md:justify-between md:px-40 pt-0 md:pt-4">
          <div className="mb-4 md:mb-0 mt-4 md:mt-0">
            <a
              href="https://tailwindcsscomponents.vercel.app/"
              className="flex items-center justify-center">
              <img
                src="/favicon/favicon.png"
                className="md:mr-3 h-10 mr-1 rounded-3xl"
                alt="FlowBite Logo"></img>
              <span className="text-white self-center text-xl md:text-2xl font-semibold whitespace-nowrap dark:text-white">
                tailwind
              </span>
              <span className="text-white self-center text-xl md:text-2xl font-semibold whitespace-nowrap dark:text-blue-500 ml-2">
                BOOTSTRAP
              </span>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-20 md:gap-32 place-items-center">
            <div>
              <h2 className="mb-4 text-xs md:text-lg font-semibold uppercase text-white underline underline-offset-2">
                Follow us
              </h2>
              <ul className="text-gray-200 text-xs md:text-base">
                <li className="mb-4">
                  <a
                    href="https://github.com/jsvigneshkanna/tailwind_ui_components"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline hover:text-blue-300">
                    Github
                  </a>
                </li>
                <li>
                  <a
                    href="https://discord.com/channels/1031097107324620860/1031097107324620862"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline hover:text-blue-300">
                    Discord
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-4 text-xs md:text-lg font-semibold uppercase text-white underline underline-offset-2">
                Legal
              </h2>
              <ul className="text-gray-200 text-xs md:text-base">
                <li className="mb-4">
                  <Link
                    href="/legal/privacypolicy"
                    className="hover:underline hover:text-blue-300">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/legal/license"
                    className="hover:underline hover:text-blue-300">
                    License
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 sm:mx-auto border-gray-400  lg:my-4" />
        <div className="sm:flex sm:items-center sm:justify-between md:px-40 text-center">
          <span className="text-sm text-white sm:text-center">
            © 2022{" "}
            <a
              href="https://github.com/jsvigneshkanna"
              className="hover:underline text-orange-300">
              SUSAVI™
            </a>{" "}
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
