import {stripIndent} from "react-codepen-prefill-embed";

const deleteButton = stripIndent`
<div class="h-screen bg-sky-300">
  <div class="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
    <div class="mt-8 flex lg:mt-0 lg:flex-shrink-0">
      <div class="rounded-4xl inline-flex shadow">
        <a href="https://tailwindcsscomponents.vercel.app/" class="inline-flex items-center justify-center rounded-sm border border-transparent bg-red-200 px-5 py-3 text-base font-medium text-red-500 hover:bg-indigo-700">
          <span class="mx-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
            </svg>
          </span>
          Delete
        </a>
      </div>
      <div class="ml-3 inline-flex rounded-full shadow">
        <a href="https://tailwindcsscomponents.vercel.app/" class="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-indigo-600 hover:bg-indigo-50"> Learn more </a>
      </div>
    </div>
  </div>
</div>
`;

export default deleteButton;
