import {stripIndent} from "react-codepen-prefill-embed";

const horizontalProgress = stripIndent`<div class="mx-4 p-4 flex justify-between items-center">
  <!--  Step 1  -->
  <div class="flex w-full items-center">
    <div class="relative flex flex-col items-center text-teal-600">
      <div class="rounded-full transition duration-500 ease-in-out border-2 h-12 w-12 flex items-center justify-center py-3 bg-green-600 text-white font-bold border-green-600">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
          <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
        </svg>

      </div>
      <div class="absolute top-0 text-center mt-16 w-32 text-xs font-medium uppercase">
        Description 1
      </div>
    </div>
    <!--   Line   -->
    <div class="flex-auto border-t-2 transition duration-500 ease-in-out border-green-600"></div>
  </div>
  <!--  Step 2  -->
  <div class="flex w-full items-center">
    <div class="relative flex flex-col items-center text-teal-600">
      <div class="rounded-full transition duration-500 ease-in-out border-2 h-12 w-12 flex items-center justify-center py-3 bg-green-600 text-white font-bold border-green-600">2</div>
      <div class="absolute top-0 text-center mt-16 w-32 text-xs font-medium uppercase text-gray-500">
        Description 2
      </div>
    </div>
    <!--  Line    -->
    <div class="flex-auto border-t-2 transition duration-500 ease-in-out"></div>
  </div>
  <!--  Step 3  -->
  <div class="flex w-full items-center">
    <div class="relative flex flex-col items-center text-teal-600">
      <div class="rounded-full transition duration-500 ease-in-out border-2 border-gray-300 h-12 w-12 flex items-center justify-center py-3">3</div>
      <div class="absolute top-0 text-center mt-16 w-32 text-xs font-medium uppercase text-gray-400">
        Description 3
      </div>
    </div>
  </div>
</div>`;

export default horizontalProgress;
