import { stripIndent } from "react-codepen-prefill-embed";

const searchButton = stripIndent`
<div class="flex items-center justify-center w-screen h-screen bg-white">
  <form method="GET">
    <div class="relative text-black focus-within:text-gray-400">
      <span class="absolute inset-y-0 right-0 flex items-center pr-2">
        <div class="border-l-2 border-solid border-amber-800 h-4 pr-1"></div>
        <button type="submit" class="p-1 focus:outline-none focus:shadow-outline">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </button> 
      </span>
      <input type="search" name="q" class="py-3 text-sm w-32 text-black placeholder:text-black bg-amber-500 rounded-full pl-5 focus:outline-none focus:bg-white focus:text-gray-900" placeholder="Search..." autocomplete="off">
    </div>
  </form>
</div>
`;

export default searchButton;
