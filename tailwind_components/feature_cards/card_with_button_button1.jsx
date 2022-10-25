import {stripIndent} from "react-codepen-prefill-embed";

const cardWithButton = stripIndent`
<div class="h-screen bg-sky-300 pt-20">
  <div
    class="mx-auto max-w-sm space-y-2 rounded-xl bg-white py-8 px-8 shadow-lg shadow-red-300 sm:flex sm:items-center sm:space-y-0 sm:space-x-6 sm:py-4"
  >
    <img
      class="mx-auto block h-24 rounded-full sm:mx-0 sm:shrink-0"
      src="https://thispersondoesnotexist.com/image"
      alt="Woman's Face"
    />
    <div class="space-y-2 text-center sm:text-left">
      <div class="space-y-0.5">
        <p class="text-lg font-semibold text-black">J S Vignesh Kanna</p>
        <p class="font-medium text-slate-500">Software Engineer</p>
      </div>
      <button
        class="rounded-full border border-purple-200 px-4 py-1 text-sm font-semibold text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
      >
        Message
      </button>
    </div>
  </div>
</div>
`;

export default cardWithButton;
