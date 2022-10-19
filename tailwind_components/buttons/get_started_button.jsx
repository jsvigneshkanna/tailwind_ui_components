import {stripIndent} from "react-codepen-prefill-embed";

const getStartedButton = stripIndent`
<div class='bg-gray-50 flex'>
  <div class="m-auto  max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
    <!-- button component starts from here -->
  <button
  class="bg-left-top font-medium text-base border-transparent bg-repeat px-6 py-4 rounded-full flex flex-row items-center gap-4 text-white shadow overflow-hidden" style="background-image: repeating-linear-gradient(-45deg, 
      #8b6ce8 10px 40px,
      #b2f7ef 40px 100px,
      #eff7f6 100px 150px,
      #f7d6e0 150px 200px,
      #df8ad4 200px 250px
  )">
  <a
    href='#'
    class="text-black"
    >
    Get Started
  </a>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
</svg>
</button>
    
<!--     button component -->
    
</div>
</div>  
  `;

export default getStartedButton
