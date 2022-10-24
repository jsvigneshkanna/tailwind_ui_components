import {stripIndent} from "react-codepen-prefill-embed";

const singleButton = stripIndent`
<div class="h-screen bg-sky-300">
  <div
    class="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8"
  >
    <div class="mt-8 flex lg:mt-0 lg:flex-shrink-0">
      <div class="inline-flex rounded-full shadow">
        <a
          href="https://tailwindcsscomponents.vercel.app/" target="_blank" rel="noreferrer"
          class="inline-flex items-center justify-center rounded-2xl border border-transparent bg-emerald-600 px-5 py-3 text-base font-medium text-red-800 hover:bg-green-500"
        >
          Learn More
        </a>
      </div>
    </div>
  </div>
</div>

`;

export default singleButton;
