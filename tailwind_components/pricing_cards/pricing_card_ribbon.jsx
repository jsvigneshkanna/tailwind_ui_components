import {stripIndent} from "react-codepen-prefill-embed";

const pricingCardRibbon = stripIndent`
<div class="flex min-h-screen items-center justify-center overflow-hidden py-6 sm:py-12">
  <!-- Card -->
  <div class="h-[23em] w-[17em] flex flex-col gap-5 justify-center items-center text-center rounded-xl px-10 border-2 border-[#1855CB] shadow-lg">
    <p class="font-bold text-md opacity-60">Organize across all apps by hand</p>
    <p class="font-bold text-3xl">Free</p>
    <p class="text-md opacity-60">State helps you see how many more days you need to work to reach your financial goal for the month & year.</p>
    <div class="flex gap-3 items-center">
      <p class="font-bold opacity-50">From</p>
      <p class="text-3xl font-bold text-[#1855CB]">$1</p>
    </div>
  </div>
</div>
  `;

export default pricingCardRibbon;