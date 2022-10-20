import { stripIndent } from "react-codepen-prefill-embed";

const fileInput = stripIndent`
<div class="flex h-screen w-screen flex-col justify-center">
  <div class="m-5">
    <label class="mb-2 block text-sm font-medium text-gray-900" for="file_input">Upload file</label>
    <input class="block w-full cursor-pointer rounded-lg border border-gray-300 bg-gray-200 text-sm text-gray-900 focus:outline-none dark:border-gray-600 dark:text-gray-400 dark:placeholder-gray-400" aria-describedby="file_input_help" id="file_input" type="file" />
    <p class="mt-1 text-sm text-gray-500" id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>
  </div>
</div>
`;

export default fileInput;