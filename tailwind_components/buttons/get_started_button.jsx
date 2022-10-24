import {stripIndent} from "react-codepen-prefill-embed";

const getStartedButton = stripIndent`
<div class="flex h-screen bg-sky-300">
  <div
    class="m-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8"
  >
    <button
      class="flex flex-row items-center gap-4 overflow-hidden rounded-full border-transparent bg-left-top bg-repeat px-6 py-4 text-base font-medium text-white shadow"
      style="
        background-image: repeating-linear-gradient(
          -45deg,
          #7a67b2 10px 40px,
          #71b9b0 40px 100px,
          #c07a83 100px 150px,
          #c9c57c 150px 200px,
          #919fce 200px 250px
        );
      "
    >
      <a href="https://tailwindcsscomponents.vercel.app/" class="text-black">
        Get Started
      </a>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="#000"
        class="h-6 w-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
        />
      </svg>
    </button>
  </div>
</div>
`;

export default getStartedButton;
