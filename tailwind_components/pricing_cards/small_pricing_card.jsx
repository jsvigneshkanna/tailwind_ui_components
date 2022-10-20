import {stripIndent} from "react-codepen-prefill-embed";

const smallPricingCard = stripIndent`
  <head>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" />
</head>

  <div class='bg-gray-50'>
  <div class="mx-auto  max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
      <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        <span class="block">Ready to dive in?</span>
        <span class="block text-indigo-600">Start your free trial today.</span>
      </h2>
      <div class='mt-8'>
  <div>
  <button
  class='bg-white font-medium text-base border-transparent px-6 py-3 rounded-md flex flex-row items-center gap-4 shadow'>
  <span>
  <i class="fa-brands fa-google-play text-4xl"></i>
  </span>
  <a href='#'>
  <p class='text-xs font-bold'>Download on the</p>
  <p class='text-md'>Google Play</p>
  </a>
</button>
  </div>
  <div class='py-4'>
  <button
  class='bg-black font-medium text-base border-transparent px-6 py-3 rounded-md flex flex-row items-center gap-4 shadow'>
  <span>
  <i class="fa-brands text-white fa-google-play text-4xl"></i>
  </span>
  <a class='text-white block' href='#'>
  <p class='text-xs font-bold'>Download on the</p>
  <p class='text-md'>Google Play</p>
  </a>
</button>
  </div>
</div>
</div>
</div>    
  `;

export default smallPricingCard;