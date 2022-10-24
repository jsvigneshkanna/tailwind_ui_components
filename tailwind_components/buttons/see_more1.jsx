import {stripIndent} from "react-codepen-prefill-embed";

const seemore = stripIndent`
<div class="bg-sky-500 p-20">
    <div class="mt-8">
      <button
        class="bg-orange-200 hover:bg-orange-500 font-medium text-base border-transparent px-6 py-4 rounded-md flex flex-row items-center gap-4 text-blue-800"
      >
        <a href="https://tailwindcsscomponents.vercel.app/"> See more </a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="{1.5}"
          stroke="currentColor"
          class="w-4 h-4 font-medium"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
    </div>
  </div>
</div>
`;

export default seemore;
