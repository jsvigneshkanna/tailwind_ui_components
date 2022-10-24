import {stripIndent} from "react-codepen-prefill-embed";

const searchButton = stripIndent`
<div class="flex h-screen w-screen items-center justify-center bg-sky-300">
  <form>
    <div class="text-blue relative focus-within:text-rose-400">
      <span class="absolute inset-y-0 right-0 flex items-center pr-2">
        <div class="h-4 border-l-2 border-solid border-amber-500 pr-1"></div>
        <button class="focus:shadow-outline p-2 focus:outline-none">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="h-6 w-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </button>
      </span>
      <input class="text-red w-56 rounded-full bg-amber-500 py-3 pl-5 text-sm placeholder:text-black focus:bg-white focus:text-gray-900 focus:outline-none" placeholder="Search Here" autocomplete="off" />
    </div>
  </form>
</div>
`;

export default searchButton;
