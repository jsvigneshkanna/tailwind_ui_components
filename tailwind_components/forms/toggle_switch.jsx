import {stripIndent} from "react-codepen-prefill-embed";

const ToggleSwitch = stripIndent`
  <div class="flex justify-center items-center h-screen w-screen">
    <label
      for="toggle"
      class="form-check-label inline-block text-gray-800 mr-2">
      Toggle me.
    </label>

    <label
      for="toggle"
      class="grid justify-items-stretch relative items-center cursor-pointer w-14 h-7 rounded-full">
      <input type="checkbox" id="toggle" class="sr-only peer" />
      <span class="drop-shadow-md delay-150 bg-gray-200 w-full h-full absolute inline-block rounded-full peer-checked:bg-blue-500 duration-300"></span>
      <span class="w-2/5 h-4/5 mx-1 absolute justify-self-start bg-gray-400 rounded-full peer-checked:bg-white peer-checked:justify-self-end duration-300"></span>
    </label>
  </div>
`;

export default ToggleSwitch;
