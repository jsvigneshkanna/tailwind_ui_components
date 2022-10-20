import {stripIndent} from "react-codepen-prefill-embed";

const slider_input_form = stripIndent`
<div class="flex flex-col p-10">
  <div class="flex flex-col mb-5">
    <label for="slider_basic_range" class="block mb-2 text-xl font-medium text-gray-900" >Basic range</label >
    <input id="slider_basic_range" type="range" value="50" />
  </div>
  <div class="flex flex-col mb-5 mt-5">
    <label for="slider_range_steps" class="block mb-2 text-xl font-medium text-gray-900" >Range steps</label >
    <input id="slider_range_steps" type="range" min="0" max="100" value="50" step="10" />
  </div>
</div>`;

export default slider_input_form;
