import {stripIndent} from "react-codepen-prefill-embed";

const pricingCardRibbon = stripIndent`
<div class="flex min-h-screen items-center justify-center overflow-hidden py-6 sm:py-12">
  <!-- Parent -->
  <div class="relative">
    <!-- Ribbon -->
    <div class="z-2 absolute right-7 -top-7 flex h-20 w-20 items-center justify-center rounded-full bg-[#E77C40] text-xl font-bold text-white">
      <p>New</p>
    </div>
    <!-- Card -->
    <div class="z-1 flex h-[33em] w-[17em] flex-col items-center justify-center gap-5 rounded-xl border-2 px-5 text-center shadow-lg">
      <p class="text-3xl font-bold">Free</p>
      <p class="text-md font-bold opacity-60">Organize across all apps by hand</p>
      <div>
        <p class="text-3xl font-bold text-[#1855CB]">$19</p>
        <p class="font-bold text-[#1855CB] opacity-50">Per Month</p>
      </div>
      <button class="w-full rounded-md bg-[#1855CB] py-3 text-white hover:bg-[#306fee]">Try for free</button>
      <div class="flex flex-col items-start gap-2">
        <!-- TICK 1 -->
        <div class="flex items-center gap-3">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#3DBB77" class="h-7 w-7">
            <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
          </svg>
          <p class="text-start text-xs">Unlimited product updates</p>
        </div>
        <!-- TICK 2 -->
        <div class="flex items-center gap-3">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#3DBB77" class="h-7 w-7">
            <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
          </svg>
          <p class="text-start text-xs">Unlimited product updates</p>
        </div>
        <!-- TICK 3 -->
        <div class="flex items-center gap-3">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#3DBB77" class="h-7 w-7">
            <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
          </svg>
          <p class="text-start text-xs">Unlimited product updates</p>
        </div>
        <!-- TICK 4 -->
        <div class="flex items-center gap-3">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#BDBDBD" class="h-7 w-7">
            <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
          </svg>
          <p class="text-start text-xs">1GB Cloud Storage</p>
        </div>
        <!-- TICK 5 -->
        <div class="flex items-center gap-3">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#BDBDBD" class="h-7 w-7">
            <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
          </svg>
          <p class="flex-wrap text-start text-xs">Email & Community support</p>
        </div>
      </div>
    </div>
  </div>
</div>
  `;

export default pricingCardRibbon;