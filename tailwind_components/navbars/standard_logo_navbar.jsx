import {stripIndent} from "react-codepen-prefill-embed";

const standardLogoNav = stripIndent`
<head>
  <script src="https://cdn.tailwindcss.com"></script>
</head>

<body>
  <nav
    class="bg-gray-600 p-5 shadow md:flex md:items-center md:justify-between"
  >
    <div class="flex items-center justify-between">
      <span class="cursor-pointer font-[Poppins] text-2xl">
        <img
          class="inline h-10 w-20"
          src="https://source.unsplash.com/random"
          onclick="send()"
        />
      </span>

      <span class="mx-2 block cursor-pointer text-3xl md:hidden">
        <div name="menu" class="open text-white" onclick="Menu(this)">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="h-6 w-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
      </span>
    </div>

    <ul
      class="absolute left-0 top-[-400px] z-[-1] w-full bg-gray-600 py-4 pl-7 text-white opacity-0 transition-all duration-500 ease-in md:static md:z-auto md:flex md:w-auto md:items-center md:py-0 md:pl-0 md:opacity-100"
    >
      <li class="mx-4 my-6 md:my-0">
        <a
          href="https://tailwindcsscomponents.vercel.app/"
          target="_blank"
          rel="noreferrer"
          class="text-xl duration-500 hover:text-cyan-500"
          >Home</a
        >
      </li>
      <li class="mx-4 my-6 md:my-0">
        <a
          href="https://tailwindcsscomponents.vercel.app/"
          target="_blank"
          rel="noreferrer"
          class="text-xl duration-500 hover:text-cyan-500"
          >Component</a
        >
      </li>
      <li class="mx-4 my-6 md:my-0">
        <a
          href="https://tailwindcsscomponents.vercel.app/"
          target="_blank"
          rel="noreferrer"
          class="text-xl duration-500 hover:text-cyan-500"
          >About Us</a
        >
      </li>
      <li class="mx-4 my-6 md:my-0">
        <a
          href="https://tailwindcsscomponents.vercel.app/"
          target="_blank"
          rel="noreferrer"
          class="text-xl duration-500 hover:text-cyan-500"
          >FAQs</a
        >
      </li>

      <h2 class=""></h2>
    </ul>
  </nav>

  <script>
    function send() {
      window.location.href = "https://github.com/jsvigneshkanna";
    }

    function Menu(e) {
      let list = document.querySelector("ul");
      e.name === "menu"
        ? ((e.name = "close"),
          list.classList.add("top-[80px]"),
          list.classList.add("opacity-100"))
        : ((e.name = "menu"),
          list.classList.remove("top-[80px]"),
          list.classList.remove("opacity-100"));
    }
  </script>
</body>
`;
export default standardLogoNav;
