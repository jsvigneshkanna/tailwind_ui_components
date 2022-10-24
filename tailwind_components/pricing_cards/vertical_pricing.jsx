import {stripIndent} from "react-codepen-prefill-embed";

const verticalPricing = stripIndent`
<div class="flex h-full py-6 w-full items-center justify-center bg-sky-300">
  <div
    class="my-5 w-64 max-w-sm rounded-xl border border-gray-200 bg-white shadow-md"
  >
    <div class="flex flex-col items-center justify-center p-6 text-center">
      <div
        class="mt-4 mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-700"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="h-8 w-8 text-white"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
          />
        </svg>
      </div>
      <h5 class="mb-5 px-4 font-bold tracking-tight text-gray-700">Standard</h5>
      <p class="mb-4 px-8 text-sm font-bold text-gray-500">
        VK Tailwind Bootsrap
      </p>

      <div class="mb-3 flex flex-row">
        <h3 class="mx-2 text-4xl font-bold text-blue-700">6</h3>
        <div class="flex flex-col">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-currency-dollar font-bold text-blue-700"
            viewBox="0 0 16 16"
          >
            <path
              d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z"
            />
          </svg>
          <p class="text-xs text-blue-500">Per Month</p>
        </div>
      </div>
      <p class="mb-3 text-sm font-medium text-gray-700">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
        consectetur in, soluta illum,...
      </p>
      <button
        class="my-4 rounded bg-blue-600 py-3 px-4 text-sm font-bold text-white hover:bg-blue-700"
      >
        Try for free
      </button>
    </div>
  </div>
</div>
`;
export default verticalPricing;
