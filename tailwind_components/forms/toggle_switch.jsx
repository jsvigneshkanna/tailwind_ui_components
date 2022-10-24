import {stripIndent} from "react-codepen-prefill-embed";

const ToggleSwitch = stripIndent`
  <div class="flex h-screen items-center justify-center bg-sky-300">
  <label for="toggle" class="mr-2 inline-block font-bold text-blue-800">
    Toggle me when you are free 😁
  </label>

  <label
    for="toggle"
    class="relative grid h-8 w-16 cursor-pointer items-center justify-items-stretch rounded-full"
  >
    <input type="checkbox" id="toggle" class="peer sr-only" />
    <span
      class="absolute inline-block h-full w-full rounded-full bg-red-100 drop-shadow-md delay-150 duration-300 peer-checked:bg-blue-500"
    ></span>
    <span
      class="absolute mx-1 h-4/5 w-2/5 justify-self-start rounded-full bg-red-900 duration-300 peer-checked:justify-self-end peer-checked:bg-white"
    ></span>
  </label>
</div>
`;

export default ToggleSwitch;
