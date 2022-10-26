import {stripIndent} from "react-codepen-prefill-embed";

const samplePricingCard = stripIndent`
<div class="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8 bg-sky-300 h-screen">
  <div class= p-3">
    <div class="flex w-max rounded-2xl border border-red-900 bg-white p-9 pr-11 shadow-md shadow-rose-300">
      <div class="p-1">
        <p class="mb-3 text-2xl font-semibold text-blue-700">STANDARD</p>
        <p class="w-52 font-medium text-green-700">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa quam quae repellendus ...</p>
      </div>
      <div class="relative ml-5 w-40 p-1">
        <div class="flex">
          <div class="basis-1/4 text-5xl font-semibold text-blue-700">4</div>
          <div class="basis-3/4">
            <p class="text-2xl font-bold text-blue-700">$</p>
            <p class="text-base font-medium text-sky-300">Per Month</p>
          </div>
        </div>

        <button class="absolute bottom-0 mt-auto w-full rounded bg-blue-700 p-4 text-white">Try for free</button>
      </div>
    </div>
  </div>
</div>
`;

export default samplePricingCard;
