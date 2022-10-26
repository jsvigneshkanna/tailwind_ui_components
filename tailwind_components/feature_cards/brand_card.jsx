import {stripIndent} from "react-codepen-prefill-embed";

const brandCard = stripIndent`
<div class="h-full bg-sky-300 py-10">
  <div class="w-screen px-6">
    <div
      class="max-w-sm rounded-lg border border-red-200 bg-blue-600 shadow-lg shadow-rose-300"
    >
      <a
        href="https://tailwindcsscomponents.vercel.app/"
        target="_blank"
        rel="noreferrer"
      >
        <img
          class="rounded-t-lg"
          src="https://www.apple.com/v/iphone/home/bk/images/meta/iphone__ky2k6x5u6vue_og.png"
          alt=""
        />
      </a>
      <div class="p-5 text-center">
        <a
          href="https://tailwindcsscomponents.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">
            At your fingertips
          </h5>
        </a>
        <p class="mb-3 font-normal text-gray-200">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          voluptate magni error fugiat beatae veritatis inventore natus, minima
          velit illum numquam, voluptatum, voluptas obcaecati similique libero.
          Aperiam natus delectus porro?
        </p>
        <a
          href="https://tailwindcsscomponents.vercel.app/"
          target="_blank"
          rel="noreferrer"
          class="inline-flex items-center rounded-lg bg-blue-700 py-2 px-3 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
          <svg
            aria-hidden="true"
            class="ml-2 -mr-1 h-4 w-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  </div>
</div>
`;

export default brandCard;
