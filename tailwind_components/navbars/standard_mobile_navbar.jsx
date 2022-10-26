import {stripIndent} from "react-codepen-prefill-embed";

const standardMobileNavbar = stripIndent`
<nav class="h-max min-h-screen divide-y divide-blue-400 bg-sky-700 text-white">
  <div class="flex w-full items-center justify-between px-5 py-3">
    <div class="">
      <span class="">VK Tailwind</span>
    </div>
    <button class="rounded border-2 border-solid py-1 px-2">
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
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
    </button>
  </div>
  <div class="h-full divide-y divide-blue-400 px-5 py-3">
    <ul class="w-full pb-3">
      <li class="py-2 px-2 hover:bg-blue-600">
        <a
          href="https://tailwindcsscomponents.vercel.app/"
          target="_blank"
          rel="noreferrer"
          class=""
          >Menu Item 1</a
        >
      </li>
      <li class="w-full divide-x divide-blue-300 py-2">
        <a
          href="https://tailwindcsscomponents.vercel.app/"
          target="_blank"
          rel="noreferrer"
          class="flex p-2 hover:bg-blue-600"
          >Menu Item 2</a
        >
        <ul class="ml-2">
          <li class="mt-2 ml-2.5 py-2 pl-5 hover:list-disc hover:bg-blue-600">
            <a
              href="https://tailwindcsscomponents.vercel.app/"
              target="_blank"
              rel="noreferrer"
              class=""
              >Sub-menu Item 1</a
            >
          </li>
          <li class="ml-2.5 py-2 pl-5 pb-2 hover:list-disc hover:bg-blue-600">
            <a
              href="https://tailwindcsscomponents.vercel.app/"
              target="_blank"
              rel="noreferrer"
              class=""
              >Sub-menu Item 2</a
            >
          </li>
          <li class="ml-2.5 py-2 pl-5 pb-2 hover:list-disc hover:bg-blue-600">
            <a
              href="https://tailwindcsscomponents.vercel.app/"
              target="_blank"
              rel="noreferrer"
              class=""
              >Sub-menu Item 3</a
            >
          </li>
          <li class="ml-2.5 py-2 pl-5 pb-2 hover:list-disc hover:bg-blue-600">
            <a
              href="https://tailwindcsscomponents.vercel.app/"
              target="_blank"
              rel="noreferrer"
              class=""
              >Sub-menu Item 4</a
            >
          </li>
        </ul>
      </li>
    </ul>

    <div class="w-full divide-y divide-blue-400 py-5">
      <div class="pl-2 pb-5">
        <span
          href="https://tailwindcsscomponents.vercel.app/"
          target="_blank"
          rel="noreferrer"
          class=""
          >Current Buy Price:</span
        >
        <span class="">69</span>
      </div>

      <div class="flex w-full justify-center pt-10">
        <button
          class="flex-grow rounded-l border-t-2 border-l-2 border-b-2 py-1 px-5"
        >
          Sign in
        </button>
        <span class="my-1 rounded-full border-2 border-solid p-2 text-xs"
          >OR</span
        >
        <button
          class="flex-grow rounded-r border-t-2 border-r-2 border-b-2 py-1 px-5"
        >
          Sign up
        </button>
      </div>
    </div>
  </div>
</nav>
`;

export default standardMobileNavbar;
