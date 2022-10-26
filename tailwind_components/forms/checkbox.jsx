import {stripIndent} from "react-codepen-prefill-embed";

const Checkbox = stripIndent`
<div class="bg-sky-300">
  <div class="bg-sky-300 p-4">
    <div class="py-4">
      <input
        class="form-check-input bg-red float-left mt-1 mr-2 h-4 w-4 cursor-pointer rounded-sm border border-blue-500 bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-blue-600 checked:bg-blue-600 focus:outline-none"
        type="checkbox"
        value=""
        id="checkbox1"
      />
      <label
        class="form-check-label inline-block font-bold text-blue-800"
        for="checkbox1"
      >
        check 1
      </label>
    </div>
    <div class="py-4">
      <input
        class="form-check-input float-left mt-1 mr-2 h-4 w-4 cursor-pointer rounded-sm border border-blue-500 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-blue-600 checked:bg-blue-600 focus:outline-none"
        type="checkbox"
        value=""
        id="checkbox2"
      />
      <label
        class="form-check-label inline-block font-bold text-blue-800"
        for="checkbox2"
      >
        check 2
      </label>
    </div>
    <div class="py-4">
      <input
        class="form-check-input float-left mt-1 mr-2 h-4 w-4 cursor-pointer rounded-sm border border-blue-500 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-blue-600 checked:bg-blue-600 focus:outline-none"
        type="checkbox"
        value=""
        id="checkbox3"
      />
      <label
        class="form-check-label inline-block font-bold text-blue-800"
        for="checkbox3"
      >
        check 3
      </label>
    </div>
    <div class="py-4">
      <input
        class="form-check-input float-left mt-1 mr-2 h-4 w-4 cursor-pointer rounded-sm border border-blue-500 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-blue-600 checked:bg-blue-600 focus:outline-none"
        type="checkbox"
        value=""
        id="checkbox4"
      />
      <label
        class="form-check-label inline-block font-bold text-blue-800"
        for="checkbox4"
      >
        check 4
      </label>
    </div>
  </div>
</div>
`;

export default Checkbox;
