import {stripIndent} from "react-codepen-prefill-embed";

const centerDropdownNav = stripIndent`
<script src="https://cdn.tailwindcss.com"></script>
<div class="h-screen bg-sky-300">
  <nav class="bg-rose-800 shadow-lg shadow-yellow-100">
    <div class="container mx-auto flex justify-center px-4 py-5 sm:space-x-4">
      <div class="mt-2 w-full sm:mt-0 sm:inline-flex sm:w-auto">
        <ul
          class="flex w-full flex-col space-y-2 sm:w-auto sm:flex-row sm:space-y-0 sm:space-x-2"
        >
          <li>
            <a
              href="https://tailwindcsscomponents.vercel.app/"
              target="_blank"
              rel="noreferrer"
              class="flex px-4 py-2 font-medium text-white hover:bg-red-600"
              >Home</a
            >
          </li>
          <li>
            <a
              href="https://tailwindcsscomponents.vercel.app/"
              target="_blank"
              rel="noreferrer"
              class="flex px-4 py-2 font-medium text-white hover:bg-red-600"
              >About Us</a
            >
          </li>
          <li class="relative">
            <button
              href="https://tailwindcsscomponents.vercel.app/"
              target="_blank"
              rel="noreferrer"
              name="close"
              class="flex w-full px-4 py-2 font-medium text-white outline-none hover:bg-red-600 focus:outline-none"
              onclick="Open(this)"
            >
              UI Components
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-6 w-6 pl-1"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </button>
            <div
              class="dropdown right-0 mt-1 bg-white p-2 opacity-0 shadow sm:absolute"
            >
              <ul class="space-y-2 sm:w-48">
                <li>
                  <a
                    href="https://tailwindcsscomponents.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                    class="flex p-2 font-medium text-gray-600 hover:bg-gray-100 hover:text-black"
                    >Buttons</a
                  >
                </li>
                <li>
                  <a
                    href="https://tailwindcsscomponents.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                    class="flex p-2 font-medium text-gray-600 hover:bg-gray-100 hover:text-black"
                    >Forms</a
                  >
                </li>
                <li>
                  <a
                    href="https://tailwindcsscomponents.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                    class="flex p-2 font-medium text-gray-600 hover:bg-gray-100 hover:text-black"
                    >Alerts</a
                  >
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a
              href="https://tailwindcsscomponents.vercel.app/"
              target="_blank"
              rel="noreferrer"
              class="flex px-4 py-2 font-medium text-white hover:bg-red-600"
              >FAQs</a
            >
          </li>
          <li>
            <a
              href="https://tailwindcsscomponents.vercel.app/"
              target="_blank"
              rel="noreferrer"
              class="flex px-4 py-2 font-medium text-white hover:bg-red-600"
              >Contact Us</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <h2 class="mt-20 text-center text-lg font-semibold text-gray-800">
    Kindly make the codepen to 0.5x size to get the feel of navbar
  </h2>
</div>
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
`;

export default centerDropdownNav;
