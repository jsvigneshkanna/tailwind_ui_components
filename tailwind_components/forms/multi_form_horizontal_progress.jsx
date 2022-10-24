import {stripIndent} from "react-codepen-prefill-embed";

const horizontalProgress = stripIndent`
<div class="flex h-screen items-center justify-between bg-sky-300 p-20">
  <div class="flex w-full items-center">
    <div class="relative flex flex-col items-center font-bold text-blue-900">
      <div
        class="flex h-12 w-12 items-center justify-center rounded-full border-2 border-green-600 bg-green-600 py-3 font-bold text-white transition duration-500 ease-in-out"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          class="h-5 w-5"
        >
          <path
            fill-rule="evenodd"
            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
      <div
        class="absolute top-0 mt-16 w-32 text-center text-xs font-bold uppercase text-blue-900"
      >
        Description 1
      </div>
    </div>
    <div
      class="flex-auto border-t-2 border-green-600 transition duration-500 ease-in-out"
    ></div>
  </div>
  <div class="flex w-full items-center">
    <div class="relative flex flex-col items-center font-bold text-blue-900">
      <div
        class="flex h-12 w-12 items-center justify-center rounded-full border-2 border-green-600 bg-green-600 py-3 font-bold text-white transition duration-500 ease-in-out"
      >
        2
      </div>
      <div
        class="absolute top-0 mt-16 w-32 text-center text-xs font-bold uppercase text-blue-900"
      >
        Description 2
      </div>
    </div>
    <div class="flex-auto border-t-2 transition duration-500 ease-in-out"></div>
  </div>
  <div class="flex w-full items-center">
    <div class="relative flex flex-col items-center font-bold text-blue-900">
      <div
        class="flex h-12 w-12 items-center justify-center rounded-full border-2 border-white py-3 text-black transition duration-500 ease-in-out"
      >
        3
      </div>
      <div
        class="absolute top-0 mt-16 w-32 text-center text-xs font-bold uppercase text-blue-900"
      >
        Description 3
      </div>
    </div>
  </div>
</div>
`;

export default horizontalProgress;
