import React from "react";
import {stripIndent} from "react-codepen-prefill-embed";

const SubsriptionContactForm = stripIndent`
<div
  class="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-rose-300 p-8 sm:p-12"
>
  <div
    class="w-full max-w-4xl rounded-md border-2 border-gray-100 bg-gray-800 p-14 shadow-lg shadow-blue-300"
  >
    <div class="flex flex-col items-center">
      <h3
        class="mt-2 mb-4 max-w-2xl text-center text-2xl font-bold leading-tight text-white sm:text-3xl md:text-4xl md:leading-tight"
      >
        Subscribe for latest newsletter
      </h3>
      <form
        action=""
        class="mx-auto mt-4 flex w-full max-w-md flex-col gap-3 sm:flex-row sm:gap-0"
      >
        <input
          type="email"
          name="email"
          class="grow rounded-lg border-2 border-gray-300 py-3 px-3 focus:border-red-500 focus:outline-none sm:rounded-l-md sm:rounded-r-none sm:border-r-0"
          placeholder="Your Email"
        />
        <button
          type="submit"
          class="rounded bg-blue-500 px-5 py-4 font-bold text-white sm:rounded-l-none sm:rounded-r-md"
        >
          Subscribe
        </button>
      </form>
    </div>
  </div>
</div>
`;

export default SubsriptionContactForm;
