import {stripIndent} from "react-codepen-prefill-embed";

const samplePricingCard = stripIndent`
<head>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" />
</head>


<div class="mx-auto  max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
   <div class="p-3 bg-green-500 w-fit">
      <div class="border rounded-2xl  w-max border-cyan-500 p-9 pr-11 flex bg-white">
        <div class=" p-1">
          <p class="text-2xl text-blue-700 font-semibold mb-3">STANDARD</p>
          <p class="w-52 text-green-300 font-medium">
            Most calenders are designed for teams. State is designed for
            freelancers who want a simple way
          </p>
        </div>
        <div class="p-1 ml-5 w-40 relative">
          <div class="flex">
            <div class="basis-1/4 text-blue-700 text-5xl font-semibold">
              0
            </div>
            <div class="basis-3/4">
              <p class="text-2xl font-bold text-blue-700">$</p>
              <p class="font-medium text-base text-sky-300">Per Month</p>
            </div>
          </div>

          <button class="w-full bg-blue-700 text-white rounded p-4 mt-auto absolute bottom-0">
            Try for free
          </button>
        </div>
      </div>
 
</div>
</div>    
  `;

export default samplePricingCard;
