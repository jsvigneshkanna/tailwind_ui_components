import { stripIndent } from "react-codepen-prefill-embed";

const brandCard = stripIndent`
<div class="flex h-screen w-screen items-center justify-center">
  <div class="max-w-sm rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800">
    <a href="#">
      <img class="rounded-t-lg" src="https://www.apple.com/v/iphone/home/bk/images/meta/iphone__ky2k6x5u6vue_og.png" alt="" />
    </a>
    <div class="p-5 text-center">
      <a href="#">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">At your fingertips</h5>
      </a>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Slate helps you see how many more days you need to work to rich.</p>
      <a href="#" class="inline-flex items-center rounded-lg bg-blue-700 py-2 px-3 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Read more
        <svg aria-hidden="true" class="ml-2 -mr-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
      </a>
    </div>
  </div>
</div>
`;

export default brandCard;
