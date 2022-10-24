import {stripIndent} from "react-codepen-prefill-embed";

const solidArrowButtons = stripIndent`
<div class="flex gap-8 bg-sky-200 p-20">
  <!-- Left -->
  <a href="https://tailwindcsscomponents.vercel.app/" target="_blank" rel="noreferrer">
    <div class="flex items-center justify-center rounded-md bg-[#1855CB] p-3 shadow duration-200 hover:bg-slate-700">
      <svg class="h-10 w-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="#FEFEFF">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
      </svg>
    </div>
  </a>
  <!-- Right -->
  <a href="https://tailwindcsscomponents.vercel.app/" target="_blank" rel="noreferrer">
    <div class="flex items-center justify-center rounded-md bg-[#1855CB] p-3 shadow-sm duration-200 hover:bg-slate-700">
      <svg class="h-10 w-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="#FEFEFF">
        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
      </svg>
    </div>
  </a>
</div>

<!-- Round Icons -->
<div class="flex gap-8 bg-red-200 p-20">
  <!-- Left -->
  <a href="https://tailwindcsscomponents.vercel.app/" target="_blank" rel="noreferrer">
    <div class="flex items-center justify-center rounded-full bg-[#1855CB] p-3 shadow-sm duration-200 hover:bg-slate-700">
      <svg class="h-10 w-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="#FEFEFF">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
      </svg>
    </div>
  </a>
  <!-- Right -->
  <a href="https://tailwindcsscomponents.vercel.app/" target="_blank" rel="noreferrer">
    <div class="flex items-center justify-center rounded-full bg-[#1855CB] p-3 shadow-sm duration-200 hover:bg-slate-700">
      <svg class="h-10 w-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="#FEFEFF">
        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
      </svg>
    </div>
  </a>
</div>
`;

export default solidArrowButtons;
