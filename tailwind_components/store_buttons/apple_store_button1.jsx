import {stripIndent} from "react-codepen-prefill-embed";

const appleStoreButton1 = stripIndent`
<head>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" />
</head>
<div class="h-screen bg-sky-300 px-6 pt-10">
  <h1 class="font-bold text-blue-800">
    These store buttons are clones and store images are taken from font-awesome
    (no copyright issue 🙌)
  </h1>
<div class="pt-5 px-10">
  <a href="https://tailwindcsscomponents.vercel.app/" target="_blank" rel="noreferrer" class="w-max bg-white rounded-md px-8 py-4 flex gap-5 hover:bg-slate-100">
    <i class="text-5xl text-black fa-brands fa-apple"></i>
    <span class="text-start font-bold">Download on the<br><span class="font-normal text-xl">App Store</span></p>
  </a>
</div>
<div class="pt-5 px-10">
  <a href="https://tailwindcsscomponents.vercel.app/" target="_blank" rel="noreferrer" class="w-max rounded-md bg-black px-8 py-4 flex gap-5 hover:bg-slate-800">
    <i class="text-5xl text-white fa-brands fa-apple"></i>
    <span class="text-start text-white font-bold">Download on the<br><span class="font-normal text-xl">App Store</span></p>
  </a>
</div>
</div>
`;

export default appleStoreButton1;
