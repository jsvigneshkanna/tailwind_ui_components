import { stripIndent } from "react-codepen-prefill-embed";

const solidArrowButtons = stripIndent`<div class="flex gap-3">
<!-- Left -->
<a href="#">
  <div class="bg-[#1855CB] p-3 rounded-md shadow flex justify-center items-center hover:bg-slate-700 duration-200">
    <svg  class="w-10 h-10"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2.5" stroke="#FEFEFF">
      <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
    </svg>
  </div>
</a>
<!-- Right -->
<a href="#">
  <div class="bg-[#1855CB] p-3 rounded-md shadow-sm flex justify-center items-center hover:bg-slate-700 duration-200">
    <svg  class="w-10 h-10"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2.5" stroke="#FEFEFF">
      <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
    </svg>
  </div>
</a>
</div>

<!-- Round Icons -->
<div class="flex gap-3">
<!-- Left -->
<a href="#">
  <div class="bg-[#1855CB] p-3 rounded-full shadow-sm flex justify-center items-center hover:bg-slate-700 duration-200">
    <svg  class="w-10 h-10"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2.5" stroke="#FEFEFF">
      <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
    </svg>
</div>
</a>
<!-- Right -->
<a href="#">
  <div class="bg-[#1855CB] p-3 rounded-full shadow-sm flex justify-center items-center hover:bg-slate-700 duration-200">
    <svg  class="w-10 h-10"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2.5" stroke="#FEFEFF">
      <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
    </svg>
  </div>
</a>
</div>`;

export default solidArrowButtons;