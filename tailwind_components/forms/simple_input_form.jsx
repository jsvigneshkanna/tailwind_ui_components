import {stripIndent} from "react-codepen-prefill-embed";

const inputForm = stripIndent`
<div
  class="flex h-screen w-screen flex-col items-center justify-center bg-sky-300"
>
  <div class="revue-form-group relative my-1 w-3/4">
    <div class="absolute inset-y-0 left-0 flex items-center pl-3">
      <svg
        class="h-5 w-5 text-gray-900"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
        ></path>
        <path
          d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
        ></path>
      </svg>
    </div>
    <input
      class="block w-full rounded-lg border border-gray-700 bg-rose-200 p-4 pl-12 text-sm text-black placeholder-black"
      placeholder="Type your nice email ID"
      type="email"
      required=""
    />
  </div>

  <select
    class="my-1 block w-3/4 rounded-lg border border-gray-400 bg-yellow-300 p-4 pl-6 text-base font-semibold"
  >
    <option selected>Favourite CSS framework</option>
    <option class="pb-3">Tailwind 🥰</option>
    <option class="pb-3">Plain CSS</option>
    <option class="pb-3">Bootstrap 😡</option>
    <option class="pb-3">Invent your own</option>
  </select>
</div>
`;

export default inputForm;
