import { stripIndent } from "react-codepen-prefill-embed";

const solidArrowButton = stripIndent`<!-- Square icons -->
<div class="flex gap-3">
  <!-- Left -->
  <div class="bg-[#1855CB] p-3 rounded-md flex justify-center items-center">
    <svg  class="w-10 h-10"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2.5" stroke="#FEFEFF">
      <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
    </svg>
  </div>
  <!-- Right -->
  <div class="bg-[#1855CB] p-3 rounded-md flex justify-center items-center">
    <svg  class="w-10 h-10"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2.5" stroke="#FEFEFF">
      <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
    </svg>
  </div>
</div>

<!-- Round Icons -->
<div class="flex gap-3">
  <!-- Left -->
  <div class="bg-[#1855CB] p-3 rounded-full flex justify-center items-center">
    <svg  class="w-10 h-10"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2.5" stroke="#FEFEFF">
      <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
    </svg>
  </div>
  <!-- Right -->
  <div class="bg-[#1855CB] p-3 rounded-full flex justify-center items-center">
    <svg  class="w-10 h-10"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2.5" stroke="#FEFEFF">
      <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
    </svg>
  </div>
</div>`;

export default solidArrowButton;