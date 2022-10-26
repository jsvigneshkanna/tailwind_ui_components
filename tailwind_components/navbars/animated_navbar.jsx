import {stripIndent} from "react-codepen-prefill-embed";

const animated_navbar = stripIndent`
<div class="h-screen bg-sky-300">
  <nav
    class="relative my-3 mb-3 flex flex-wrap items-center justify-between bg-sky-700 px-2 pt-1"
  >
    <div class="container mx-auto flex flex-wrap items-center justify-between">
      <div class="static block w-auto justify-start">
        <a
          class="mr-4 inline-block whitespace-nowrap text-sm font-bold uppercase leading-relaxed text-white"
          href="https://tailwindcsscomponents.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          VK Tailwind
        </a>
      </div>
      <div class="flex items-center" id="example-navbar-warning">
        <ul class="ml-auto flex list-none flex-row">
          <li class="nav-item rounded-t-xl hover:bg-sky-300">
            <a
              class="flex items-center gap-2 px-3 py-2 text-xs font-bold leading-snug text-white hover:text-indigo-800"
              href="https://tailwindcsscomponents.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-6 w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>

              Home
            </a>
          </li>
          <li class="nav-item rounded-t-xl hover:bg-sky-300">
            <a
              class="flex items-center gap-2 px-3 py-2 text-xs font-bold leading-snug text-white hover:text-indigo-800"
              href="https://tailwindcsscomponents.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-6 w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605"
                />
              </svg>

              Component
            </a>
          </li>
          <li class="nav-item rounded-t-xl hover:bg-sky-300">
            <a
              class="flex items-center gap-2 px-3 py-2 text-xs font-bold leading-snug text-white hover:text-indigo-800"
              href="https://tailwindcsscomponents.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-6 w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                />
              </svg>

              About Us
            </a>
          </li>
          <li class="nav-item rounded-t-xl hover:bg-sky-300">
            <a
              class="flex items-center gap-2 px-3 py-2 text-xs font-bold leading-snug text-white hover:text-indigo-800"
              href="https://tailwindcsscomponents.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-6 w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
                />
              </svg>

              FAQs
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</div>
`;

export default animated_navbar;
