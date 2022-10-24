import {stripIndent} from "react-codepen-prefill-embed";

const productCard = stripIndent`
<div class="h-screen bg-sky-300 px-8 pt-20">
  <div
    class="my-10 w-64 max-w-sm rounded-xl border border-gray-200 bg-white shadow-md"
  >
    <a
      href="https://tailwindcsscomponents.vercel.app/"
      target="_blank"
      rel="noreferrer"
    >
    </a>
    <div class="flex flex-col items-center justify-center p-6 text-center">
      <a
        href="https://tailwindcsscomponents.vercel.app/"
        target="_blank"
        rel="noreferrer"
      >
      </a>
      <div
        class="mt-4 mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-700"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="h-6 w-6 text-white"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
          />
        </svg>
      </div>
      <h5 class="mb-5 px-4 font-bold tracking-tight text-gray-700">
        At your fingertips
      </h5>
      <p class="mb-3 text-sm font-normal text-gray-700">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt in
        commodi ullam rem explicabo est quas quidem dolorum quae? Blanditiis
        similique nesciunt nobis cum dolorum sapiente, quia odit repellendus
        magnam?
      </p>
      <button
        class="my-4 rounded bg-blue-600 py-3 px-4 text-sm font-bold text-white hover:bg-blue-700"
      >
        Try for free
      </button>
      <img
        src="https://cdn.mos.cms.futurecdn.net/ypPU5BkLx6jYmawjkhpeNE.png"
        alt=""
      />
    </div>
  </div>
</div>
`;

export default productCard;
