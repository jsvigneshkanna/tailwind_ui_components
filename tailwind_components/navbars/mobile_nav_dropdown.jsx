import { stripIndent } from "react-codepen-prefill-embed";

const mobile_nav_dropdown = stripIndent`
<div class="w-[360px]">
  <img src="https://media.istockphoto.com/photos/sonoran-sunset-picture-id1296913338?k=20&m=1296913338&s=612x612&w=0&h=6U0r8rlHTVnOrY3WbJabcm-PWR6ekJif8WMU78giotE=" class="z-0 h-screen w-full" alt="" />
  <h3 class="absolute top-10 left-5 z-0 text-2xl font-bold text-white">Brand</h3>
  <nav class="absolute top-0 left-32 z-10 h-full w-[360px] bg-white py-5">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="absolute right-0 h-6 w-6 rotate-45">
      <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
    </svg>

    <ul class="my-10 mx-8 flex flex-col gap-7 text-xl font-light tracking-wide text-gray-600">
      <li class="font-bold hover:text-blue-700">Home </li>
      <li class="font-bold hover:text-blue-700">Product </li>
      <li class="font-bold hover:text-blue-700">Shop </li>
      <li class="font-bold hover:text-blue-700">Pricing </li>
      <li class="font-bold hover:text-blue-700">Contact </li>
      <li>
        <button id="dropdownDefault" data-dropdown-toggle="dropdown" class="inline-flex items-center text-center font-bold text-gray-600 hover:text-blue-700" type="button">
          Dropdown button <svg class="ml-2 h-4 w-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
        </button>
        <!-- Dropdown menu -->
        <div id="dropdown" class="z-10 hidden w-44 divide-y divide-gray-100 rounded bg-white shadow dark:bg-gray-700">
          <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
            <li>
              <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
            </li>
            <li>
              <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
            </li>
            <li>
              <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
            </li>
            <li>
              <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </nav>
</div>


`;

export default mobile_nav_dropdown;
