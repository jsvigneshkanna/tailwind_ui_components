import {stripIndent} from "react-codepen-prefill-embed";

const rectangleSettingButton = stripIndent`
<div class="h-screen bg-sky-300">
  <div class="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
    <div class="mt-8 flex lg:mt-0 lg:flex-shrink-0">
      <div class="inline-flex rounded-md shadow">
        <a href="https://tailwindcsscomponents.vercel.app/" target="_blank" rel="noreferrer" class="inline-flex items-center justify-center rounded-sm border border-blue-400 bg-red-400 px-5 py-3 text-base font-medium text-gray-800 hover:bg-red-200">
          <span class="mx-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
            </svg>
          </span>
          Setting
        </a>
      </div>
    </div>
  </div>
</div>
`;

export default rectangleSettingButton;
