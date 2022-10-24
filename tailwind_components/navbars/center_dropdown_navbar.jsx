import {stripIndent} from "react-codepen-prefill-embed";

const centerDropdownNav = stripIndent`<!DOCTYPE html>
<html lang="en">
  <head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <script src="https://cdn.tailwindcss.com"></script>
  </head>
  <body class="bg-gray-100">
    <nav class="bg-gray-800 shadow-md">
      <div
        class="container flex  px-4 mx-auto sm:space-x-4 justify-center"
      >
        <div class="w-full mt-2 sm:inline-flex sm:w-auto sm:mt-0">
          <ul
            class="flex flex-col w-full space-y-2 sm:w-auto sm:flex-row sm:space-y-0 sm:space-x-2"
          >
            <li>
              <a
                href="#"
                class="flex px-4 py-2 font-medium text-white hover:bg-red-600"
                >Home</a
              >
            </li>
            <li>
              <a
                href="#"
                class="flex px-4 py-2 font-medium text-white hover:bg-red-600"
                >About</a
              >
            </li>
            <!-- dropdown -->
            <li class="relative">
              <button
                href="#"
                name="close"
                class="flex w-full px-4 py-2 font-medium text-white outline-none focus:outline-none hover:bg-red-600"
                onclick="Open(this)"
              >
                Clients
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 pl-1"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </button>
              <!-- dropdown menu -->
              <div
                class="right-0 p-2 mt-1 bg-white shadow sm:absolute dropdown opacity-0"
              >
                <ul class="space-y-2 sm:w-48">
                  <li>
                    <a
                      href="#"
                      class="flex p-2 font-medium text-gray-600 hover:bg-gray-100 hover:text-black"
                      >Burger King</a
                    >
                  </li>
                  <li>
                    <a
                      href="#"
                      class="flex p-2 font-medium text-gray-600 hover:bg-gray-100 hover:text-black"
                      >Southwest Airlines</a
                    >
                  </li>
                  <li>
                    <a
                      href="#"
                      class="flex p-2 font-medium text-gray-600 hover:bg-gray-100 hover:text-black"
                      >Levi Strauss</a
                    >
                  </li>
                </ul>
              </div>
              <!-- dropdown menu -->
            </li>
            <!-- dropdown -->
            <li>
              <a
                href="#"
                class="flex px-4 py-2 font-medium text-white hover:bg-red-600"
                >Services</a
              >
            </li>
            <li>
              <a
                href="#"
                class="flex px-4 py-2 font-medium text-white hover:bg-red-600"
                >Contact</a
              >
            </li>
          </ul>
        </div>
        <!-- menu -->
      </div>
      <!-- container -->
    </nav>
  </body>
  <script>
    function Open(e) {
      let dropdown = document.querySelector(".dropdown");
      if (e.name == "close") {
        dropdown.classList.remove("opacity-0");
        dropdown.classList.add("opacity-100");
        e.name = "open";
      } else {
        dropdown.classList.remove("opacity-100");
        dropdown.classList.add("opacity-0");
        e.name = "close";
      }
    }
  </script>
</html>
`;

export default centerDropdownNav;
