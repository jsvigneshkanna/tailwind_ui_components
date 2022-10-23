import {stripIndent} from "react-codepen-prefill-embed";

const standardLogoNav = stripIndent`
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script src="https://cdn.tailwindcss.com"></script>
  </head>

  <body>
    <nav
      class="p-5 bg-gray-600 shadow md:flex md:items-center md:justify-between"
    >
      <div class="flex justify-between items-center">
        <span class="text-2xl font-[Poppins] cursor-pointer">
          <img
            class="inline h-10 w-20"
            src="https://source.unsplash.com/random"
            onclick="send()"
          />
        </span>

        <span class="text-3xl cursor-pointer mx-2 md:hidden block">
          <div name="menu" class="open text-white" onclick="Menu(this)">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
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
        class="md:flex md:items-center z-[-1] md:z-auto md:static absolute text-white bg-gray-600 w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500"
      >
        <li class="mx-4 my-6 md:my-0">
          <a href="#" class="text-xl hover:text-cyan-500 duration-500">HOME</a>
        </li>
        <li class="mx-4 my-6 md:my-0">
          <a href="#" class="text-xl hover:text-cyan-500 duration-500">ABOUT</a>
        </li>
        <li class="mx-4 my-6 md:my-0">
          <a href="#" class="text-xl hover:text-cyan-500 duration-500"
            >SERVICES</a
          >
        </li>
        <li class="mx-4 my-6 md:my-0">
          <a href="#" class="text-xl hover:text-cyan-500 duration-500"
            >CONTACT</a
          >
        </li>

        <h2 class=""></h2>
      </ul>
    </nav>

    <script>
      function send() {
        window.location.href = "https://github.com/uttampandit";
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
</html>`;
export default standardLogoNav;
