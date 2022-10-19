import { stripIndent } from "react-codepen-prefill-embed";

const socialButton = stripIndent`
<head>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" />
</head>

<div class="flex flex-row items-center justify-center w-screen h-screen">
         <div class="group m-3 inline-block h-16 w-16 py-0 hover:w-52 transition-all ease-out bg-white rounded-full shadow-xl shadow-gray-400 float-left overflow-hidden cursor-pointer">
            <div class="inline-block h-16 w-16 text-center bg-zinc-900 transition-all ease-out box-border rounded-full leading-[65px] group-hover:bg-[#4267B2]">
               <i class="fab fa-facebook-f text-2xl leading-[60px] transition-all ease-out text-white"></i>
            </div>
            <span class="text-xl font-medium ml-2 leading-[65px] transition-all ease-out group-hover:text-[#4267B2]">Facebook</span>
         </div>
         <div class="group m-3 inline-block h-16 w-16 py-0  hover:w-52 transition-all ease-out bg-white rounded-full shadow-xl shadow-gray-400 float-left overflow-hidden cursor-pointer">
            <div class="inline-block h-16 w-16 text-center bg-zinc-900 transition-all ease-out box-border rounded-full leading-[65px] group-hover:bg-[#1DA1F2]">
               <i class="fab fa-twitter text-2xl leading-[60px] transition-all ease-out text-white"></i>
            </div>
            <span class="text-xl font-medium ml-2 leading-[65px] transition-all ease-out group-hover:text-[#1DA1F2]">Twitter</span>
         </div>
         <div class="group m-3 inline-block h-16 w-16 py-0  hover:w-52 transition-all ease-out bg-white rounded-full shadow-xl shadow-gray-400 float-left overflow-hidden cursor-pointer">
            <div class="inline-block h-16 w-16 text-center bg-zinc-900 transition-all ease-out box-border rounded-full leading-[65px] group-hover:bg-[#E1306C]">
               <i class="fab fa-instagram text-2xl leading-[60px] transition-all ease-out text-white"></i>
            </div>
            <span class="text-xl font-medium ml-2 leading-[65px] transition-all ease-out group-hover:text-[#E1306C]">Instagram</span>
         </div>
         <div class="group m-3 inline-block h-16 w-16 py-0 hover:w-52 transition-all ease-out bg-white rounded-full shadow-xl shadow-gray-400 float-left overflow-hidden cursor-pointer">
            <div class="inline-block h-16 w-16 text-center bg-zinc-900 transition-all ease-out box-border rounded-full leading-[65px] group-hover:bg-[#333]">
               <i class="fab fa-github text-2xl leading-[60px] transition-all ease-out text-white"></i>
            </div>
            <span class="text-xl font-medium ml-2 leading-[65px] transition-all ease-out group-hover:text-[#333]">Github</span>
         </div>
         <div class="group m-3 inline-block h-16 w-16 py-0 hover:w-52 transition-all ease-out bg-white rounded-full shadow-xl shadow-gray-400 float-left overflow-hidden cursor-pointer">
            <div class="inline-block h-16 w-16 text-center bg-zinc-900 transition-all ease-out box-border rounded-full leading-[65px] group-hover:bg-[#ff0000]">
               <i class="fab fa-youtube text-2xl leading-[60px] transition-all ease-out text-white"></i>
            </div>
            <span class="text-xl font-medium ml-2 leading-[65px] transition-all ease-out group-hover:text-[#ff0000]">YouTube</span>
         </div>
         <div class="group m-3 inline-block h-16 w-16 py-0 hover:w-52 transition-all ease-out bg-white rounded-full shadow-xl shadow-gray-400 float-left overflow-hidden cursor-pointer">
            <div class="inline-block h-16 w-16 text-center bg-zinc-900 transition-all ease-out box-border rounded-full leading-[65px] group-hover:bg-[#0A66C2]">
               <i class="fab fa-linkedin text-2xl leading-[60px] transition-all ease-out text-white"></i>
            </div>
            <span class="text-xl font-medium ml-2 leading-[65px] transition-all ease-out group-hover:text-[#0A66C2]">Linkedin</span>
         </div>
      </div>
`;

export default socialButton;
