import {stripIndent} from "react-codepen-prefill-embed";

const smallPricingCard = stripIndent`
<div class="flex h-screen w-full items-center justify-center bg-sky-300">
  <div
    class="flex min-h-screen items-center justify-center overflow-hidden py-6 sm:py-12"
  >
    <div
      class="flex h-[23em] w-[17em] flex-col items-center justify-center gap-5 rounded-xl border-2 border-[#1855CB] bg-teal-200 px-10 text-center shadow-md shadow-white"
    >
      <p class="text-md font-bold opacity-60">
        VK Tailwind Bootsrap Organize across all apps by hand
      </p>
      <p class="text-3xl font-bold">Free</p>
      <p class="text-md opacity-60">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
        consectetur in, soluta illum,...
      </p>
      <div class="flex items-center gap-3">
        <p class="font-bold opacity-50">From</p>
        <p class="text-3xl font-bold text-[#1855CB]">$1</p>
      </div>
    </div>
  </div>
</div>
`;

export default smallPricingCard;
