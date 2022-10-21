import { stripIndent } from "react-codepen-prefill-embed";

const productCard = stripIndent`
<div class="flex h-screen w-screen items-center justify-center bg-slate-800">
  <div class="w-64 max-w-sm rounded-xl border border-gray-200 bg-white shadow-md">
    <a href="#"> </a>
    <div class="flex flex-col items-center justify-center p-6 text-center">
      <a href="#"> </a>
      <div class="mt-4 mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-700">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-8 w-8 text-white">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
        </svg>
      </div>
      <h5 class="mb-5 px-4 font-bold tracking-tight text-gray-700">At your fingertips</h5>
      <p class="mb-3 text-sm font-normal text-gray-700">Slate helps you see how many more days you need to work to reach your financial goal.</p>
      <button class="my-4 rounded bg-blue-600 py-3 px-4 text-sm font-bold text-white hover:bg-blue-700">Try for free</button>
      <img src="https://cdn.mos.cms.futurecdn.net/ypPU5BkLx6jYmawjkhpeNE.png" alt="" />
    </div>
  </div>
</div>
`;

export default productCard;
