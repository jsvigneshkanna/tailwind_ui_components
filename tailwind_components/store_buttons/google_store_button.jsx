import {stripIndent} from "react-codepen-prefill-embed";

const googlestorebutton = stripIndent`
<head>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
  />
</head>

<div class="h-screen bg-sky-300 px-6 pt-10">
  <h1 class="font-bold text-blue-800">
    These store buttons are clones and store images are taken from font-awesome
    (no copyright issue 🙌)
  </h1>
  <div
    class="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8"
  >
    <div class="mt-8">
      <div>
        <button
          class="flex flex-row items-center gap-4 rounded-md border-transparent bg-white px-6 py-3 text-base font-medium shadow"
        >
          <span>
            <i class="fa-brands fa-google-play text-4xl"></i>
          </span>
          <a href="https://tailwindcsscomponents.vercel.app/">
            <p class="text-xs font-bold">Download on the</p>
            <p class="text-md">Google Play</p>
          </a>
        </button>
      </div>
      <div class="py-4">
        <button
          class="flex flex-row items-center gap-4 rounded-md border-transparent bg-black px-6 py-3 text-base font-medium shadow"
        >
          <span>
            <i class="fa-brands fa-google-play text-4xl text-white"></i>
          </span>
          <a
            class="block text-white"
            href="https://tailwindcsscomponents.vercel.app/"
          >
            <p class="text-xs font-bold">Download on the</p>
            <p class="text-md">Google Play</p>
          </a>
        </button>
      </div>
    </div>
  </div>
</div>
`;

export default googlestorebutton;
