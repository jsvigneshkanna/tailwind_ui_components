import { stripIndent } from "react-codepen-prefill-embed";

const standardMobileNavbar = stripIndent`<nav class="min-h-screen h-max bg-blue-500 opacity-80 text-white divide-y divide-blue-400">
<div class="px-5 py-3 w-full flex justify-between items-center">
  <div class="">
    <span class="">Homepage</span>
  </div>
  <button class="border-solid border-2 rounded py-1 px-2">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
  </button>
</div>
<div class="px-5 py-3 h-full divide-y divide-blue-400">
  <ul class="w-full pb-3">
      <li class="py-2 px-2 hover:bg-blue-600"><a href="#" class="">Menu Item 1</a></li>
      <li class="w-full py-2 divide-x divide-blue-300">
        <a href="#" class="flex p-2 hover:bg-blue-600">Menu Item 2</a>
        <ul class="ml-2">
          <li class="mt-2 ml-2.5 pl-5 py-2 hover:bg-blue-600 hover:list-disc"><a href="#" class="">Sub-menu Item 1</a></li>
          <li class="pl-5 ml-2.5 pb-2 py-2 hover:bg-blue-600 hover:list-disc"><a href="#" class="">Sub-menu Item 2</a></li>
          <li class="pl-5 ml-2.5 pb-2 py-2 hover:bg-blue-600 hover:list-disc"><a href="#" class="">Sub-menu Item 3</a></li>
          <li class="pl-5 ml-2.5 pb-2 py-2 hover:bg-blue-600 hover:list-disc"><a href="#" class="">Sub-menu Item 4</a></li>
        </ul>
      </li>
  </ul>

  <div class="py-5 w-full divide-y divide-blue-400">
      <div class="pl-2 pb-5">
        <span href="#" class="">Current Buy Price:</span>
        <span class="">100</span>
      </div>

      <div class="pt-10 w-full flex justify-center">
        <button class="flex-grow border-t-2 border-l-2 border-b-2 rounded-l py-1 px-5">Sign in</button>
        <span class="border-solid border-2 rounded-full p-2 my-1 text-xs">OR</span>
        <button class="flex-grow border-t-2 border-r-2 border-b-2 rounded-r  py-1 px-5">Sign up</button>
      </div>
  </div>

</div>

</nav>`;

export default standardMobileNavbar;