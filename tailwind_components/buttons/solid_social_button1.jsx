import {stripIndent} from "react-codepen-prefill-embed";

const socialButton = stripIndent`
<head>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
  />
</head>

<div
  class="w-100 flex flex-row items-center justify-center bg-gradient-to-tr from-[#000855] to-[#690101] py-3 md:flex-row md:py-6"
>
  <div class="flex h-screen w-screen flex-row items-center justify-center">
    <div
      class="group float-left m-3 inline-block h-16 w-16 cursor-pointer overflow-hidden rounded-full bg-white py-0 shadow-xl transition-all ease-out hover:w-52"
    >
      <div
        class="box-border inline-block h-16 w-16 rounded-full bg-zinc-900 text-center leading-[65px] transition-all ease-out group-hover:bg-[#333]"
      >
        <i
          class="fab fa-github text-2xl leading-[60px] text-white transition-all ease-out"
        ></i>
      </div>
      <span
        class="ml-2 text-xl font-medium leading-[65px] transition-all ease-out group-hover:text-[#333]"
        ><a
          href="https://github.com/jsvigneshkanna"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a></span
      >
    </div>

    <div
      class="group float-left m-3 inline-block h-16 w-16 cursor-pointer overflow-hidden rounded-full bg-white py-0 shadow-xl transition-all ease-out hover:w-52"
    >
      <div
        class="box-border inline-block h-16 w-16 rounded-full bg-zinc-900 text-center leading-[65px] transition-all ease-out group-hover:bg-[#0A66C2]"
      >
        <i
          class="fab fa-linkedin text-2xl leading-[60px] text-white transition-all ease-out"
        ></i>
      </div>
      <span
        class="ml-2 text-xl font-medium leading-[65px] transition-all ease-out group-hover:text-[#0A66C2]"
        ><a
          href="https://www.linkedin.com/in/jsvigneshkanna/"
          target="_blank"
          rel="noreferrer"
        >
          Linkedin
        </a></span
      >
    </div>
  </div>
</div>
`;

export default socialButton;
