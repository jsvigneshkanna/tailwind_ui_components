import {stripIndent} from "react-codepen-prefill-embed";

const dropdownButton = stripIndent
`
<div id="dropdown" class="m-5 inline-block">
        <button onclick="toggle()"
            class="inline-flex justify-center text-center items-center rounded-md border border-transparent bg-indigo-600 px-5 py-2 text-base font-medium text-white hover:bg-indigo-700">
            Dropdown
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 ml-2">
  <path fill-rule="evenodd" d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z" clip-rule="evenodd" />
</svg>

  </button>
        <div id="menu" class="hidden flex flex-col bg-white drop-shadow-md">
            <a class="px-5 py-3 hover:bg-gray-100 border-b border-gray-200" href="#">Option1</a>
            <a class="px-5 py-3 hover:bg-gray-100 border-b border-gray-200" href="#">Option2</a>
            <a class="px-5 py-3 hover:bg-gray-100 border-b border-gray-200" href="#">Option3</a>
            <a class="px-5 py-3 hover:bg-gray-100" href="#">Option4</a>
        </div>
    </div>

    <script>
        var menu = document.getElementById("menu");

        function toggle() {
            if (menu.classList.contains('hidden')) {
                menu.classList.remove('hidden');
            } else {
                menu.classList.add('hidden');
            }
        }

        window.onclick = function (event) {
            var dropdown = document.getElementById('dropdown');
            if (!dropdown.contains(event.target) && !menu.classList.contains('hidden')) {
                menu.classList.add('hidden');
            }
        }
    </script>
`;

export default dropdownButton;
