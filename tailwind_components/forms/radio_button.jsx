import {stripIndent} from "react-codepen-prefill-embed";

const Radio_button = stripIndent`
<div class="flex h-screen items-center justify-center bg-sky-300">
  <div>
    <div class="mb-8">
      <input class="form-check-input float-left mt-1 mr-2 h-4 w-4 cursor-pointer appearance-none rounded-full border border-blue-500 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-4 checked:border-red-600 focus:outline-none" type="radio" name="radio1" checked />
      <label class="inline-block font-semibold text-gray-800" for="radio1"> Radio 1 </label>
    </div>
    <div class="mb-8">
      <input class="form-check-input float-left mt-1 mr-2 h-4 w-4 cursor-pointer appearance-none rounded-full border border-blue-500 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-4 checked:border-green-600 focus:outline-none" type="radio" name="radio2" />
      <label class="inline-block font-semibold text-gray-800" for="radio2"> Radio 2 </label>
    </div>
    <div class="mb-8">
      <input class="form-check-input float-left mt-1 mr-2 h-4 w-4 cursor-pointer appearance-none rounded-full border border-blue-500 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-4 checked:border-yellow-600 focus:outline-none" type="radio" name="radio3" />
      <label class="inline-block font-semibold text-gray-800" for="radio3"> Radio 3 </label>
    </div>
  </div>
</div>
`;

export default Radio_button;
