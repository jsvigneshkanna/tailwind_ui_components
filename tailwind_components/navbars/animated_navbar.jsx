import { stripIndent } from "react-codepen-prefill-embed";

const animated_navbar = stripIndent`<div class="bg-gray-50">
<nav class="relative my-3 mb-3 flex flex-wrap items-center justify-between bg-indigo-500 px-2 pt-1">
<div class="container mx-auto flex flex-wrap items-center justify-between">
  <div class="static block w-auto justify-start">
    <a class="mr-4 inline-block whitespace-nowrap text-sm font-bold uppercase leading-relaxed text-white" href="#pablo"> Navbar </a>
  </div>
  <div class="flex items-center" id="example-navbar-warning">
    <ul class="ml-auto flex list-none flex-row">
      <li class="nav-item rounded-t-xl hover:bg-white">
        <a class="flex items-center px-3 py-2 text-xs font-bold leading-snug text-white hover:text-indigo-500" href="#pablo">
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-layout-dashboard mr-1" width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 4h6v8h-6z" />
            <path d="M4 16h6v4h-6z" />
            <path d="M14 12h6v8h-6z" />
            <path d="M14 4h6v4h-6z" />
          </svg>
          Dashbord
        </a>
      </li>
      <li class="nav-item rounded-t-xl hover:bg-white">
        <a class="flex items-center px-3 py-2 text-xs font-bold leading-snug text-white hover:text-indigo-500" href="#pablo">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-rolodex mr-1" viewBox="0 0 16 16">
            <path d="M8 9.05a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
            <path d="M1 1a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h.5a.5.5 0 0 0 .5-.5.5.5 0 0 1 1 0 .5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5.5.5 0 0 1 1 0 .5.5 0 0 0 .5.5h.5a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H6.707L6 1.293A1 1 0 0 0 5.293 1H1Zm0 1h4.293L6 2.707A1 1 0 0 0 6.707 3H15v10h-.085a1.5 1.5 0 0 0-2.4-.63C11.885 11.223 10.554 10 8 10c-2.555 0-3.886 1.224-4.514 2.37a1.5 1.5 0 0 0-2.4.63H1V2Z" />
          </svg>
          Address
        </a>
      </li>
      <li class="nav-item rounded-t-xl hover:bg-white">
        <a class="flex items-center px-3 py-2 text-xs font-bold leading-snug text-white hover:text-indigo-500" href="#pablo">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark-break mr-1" viewBox="0 0 16 16">
            <path d="M14 4.5V9h-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v7H2V2a2 2 0 0 1 2-2h5.5L14 4.5zM13 12h1v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-2h1v2a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-2zM.5 10a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1H.5z" />
          </svg>
          Components
        </a>
      </li>
      <li class="nav-item rounded-t-xl hover:bg-white">
        <a class="flex items-center px-3 py-2 text-xs font-bold leading-snug text-white hover:text-indigo-500" href="#pablo">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar2-week mr-1" viewBox="0 0 16 16">
            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z" />
            <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4zM11 7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-5 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z" />
          </svg>
          Calender
        </a>
      </li>
      <li class="nav-item rounded-t-xl hover:bg-white">
        <a class="flex items-center px-3 py-2 text-xs font-bold leading-snug text-white hover:text-indigo-500" href="#pablo">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark-bar-graph-fill mr-1" viewBox="0 0 16 16">
            <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zm.5 10v-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm-2.5.5a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-1zm-3 0a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-1z" />
          </svg>
          Charts
        </a>
      </li>
    </ul>
  </div>
</div>
</nav>
`;

export default animated_navbar;
