/* eslint-disable @next/next/no-img-element */
import React from "react";

const Footer = () => {
  return (
    <div>
      <footer class=" p-6 sm:p-6 bg-gradient-to-b from-red-900 to-violet-900">
        <div class="md:flex md:flex-row flex-col md:justify-between md:px-40">
          <div class="mb-6 md:mb-0 mt-6 md:mt-0">
            <a
              href="https://tailwindcsscomponents.vercel.app/"
              class="flex items-center">
              <img
                src="/favi-tailwind.png"
                class="md:mr-3 h-10 mr-1"
                alt="FlowBite Logo"></img>
              <span class="self-center text-xl md:text-2xl font-semibold whitespace-nowrap dark:text-white">
                tailwind
              </span>
              <span class="self-center text-xl md:text-2xl font-semibold whitespace-nowrap dark:text-blue-500 ml-2">
                BOOTSRAP
              </span>
            </a>
          </div>
          <div class="grid grid-cols-2 gap-8 md:gap-36 place-items-center">
            <div>
              <h2 class="mb-4 text-xs md:text-lg font-semibold uppercase text-white underline underline-offset-2">
                Follow us
              </h2>
              <ul class="text-gray-400 text-xs md:text-lg">
                <li class="mb-4">
                  <a
                    href="https://github.com/jsvigneshkanna/tailwind_ui_components"
                    class="hover:underline hover:text-blue-500">
                    Github
                  </a>
                </li>
                <li>
                  <a
                    href="https://discord.com/channels/1031097107324620860/1031097107324620862"
                    class="hover:underline hover:text-blue-500">
                    Discord
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 class="mb-4 text-xs md:text-lg font-semibold uppercase text-white underline underline-offset-2">
                Legal
              </h2>
              <ul class="text-gray-400 text-xs md:text-lg">
                <li class="mb-4">
                  <a href="" class="hover:underline hover:text-blue-500">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="" class="hover:underline hover:text-blue-500">
                    License
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr class="my-6 sm:mx-auto border-gray-400 lg:my-8" />
        <div class="sm:flex sm:items-center sm:justify-between md:px-40 text-center">
          <span class="text-sm text-white sm:text-center">
            © 2022{" "}
            <a href="https://github.com/jsvigneshkanna" class="hover:underline">
              SUSAVI™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
