import {stripIndent} from "react-codepen-prefill-embed";

const slider_input_form = stripIndent`
<div class="flex flex-col bg-sky-300 p-10">
  <div class="mb-5 flex flex-col">
    <label
      for="basic_range"
      class="mb-2 block w-max rounded-2xl bg-gray-600 p-4 text-xl font-medium text-white"
      >Basic range</label
    >
    <input id="basic_range" type="range" value="50" />
  </div>
  <div class="mb-5 mt-5 flex flex-col">
    <label
      for="range_steps"
      class="mb-2 block w-max rounded-2xl bg-green-300 p-4 text-xl font-medium text-red-500"
      >Range steps</label
    >
    <input
      id="range_steps"
      type="range"
      min="0"
      max="100"
      value="50"
      step="10"
    />
  </div>
</div>
`;

export default slider_input_form;
