import {stripIndent} from "react-codepen-prefill-embed";

const pricingCardWithButton = stripIndent`
<div class="bg-white dark:bg-slate-300 ">
  <div class="container px-6 py-8 mx-auto h-screen">
    <div class="flex flex-col items-center justify-center md:items-end   md:flex-row">
      <div class="w-full px-6 py-4 transition-colors duration-300 transform rounded-lg md:mx-5 md:w-96 bg-gray-50 dark:bg-white">
        <div class="text-center">
          <p class="text-4xl font-bold text-gray-800 dark:text-slate-700">
            Free
          </p>
          <p class="mt-4 text-slate-700 dark:text-slate-700 font-semibold">
            Organize across all apps by hands
          </p>
          <div class="flex flex-row gap-1 items justify-center">
            <h4 class="mt-2 text-5xl font-semibold text-blue-500 dark:text-blue-500">
              0
            </h4>
            <span class="text-blue-500 text-4xl"> $ </span>
            <p class="mt-8 text-slate-700 font-semibold dark:text-blue-300">
              per month
            </p>
          </div>
        </div>

        <ul role="list" class="my-10 space-y-5">
          <li class="flex space-x-3">
            <svg
              aria-hidden="true"
              class="flex-shrink-0 w-8 h-8 text-green-600 dark:text-green-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Check icon</title>
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class="text-xl font-normal  leading-tight text-gray-500 dark:text-gray-400">
              Unlimited Product Updates
            </span>
          </li>
          <li class="flex space-x-3">
            <svg
              aria-hidden="true"
              class="flex-shrink-0 w-8 h-8 text-green-600 dark:text-green-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Check icon</title>
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class="text-xl font-normal leading-tight text-gray-500 dark:text-gray-400">
              API Access
            </span>
          </li>
          <li class="flex space-x-3">
            <svg
              aria-hidden="true"
              class="flex-shrink-0 w-8 h-8 text-green-600 dark:text-green-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Check icon</title>
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class="text-xl font-normal leading-tight text-gray-500 dark:text-gray-400">
              Integration help
            </span>
          </li>
          <li class="flex space-x-3 ">
            <svg
              aria-hidden="true"
              class="flex-shrink-0 w-8 h-8 text-gray-400 dark:text-gray-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Check icon</title>
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class="text-xl font-normal leading-tight text-gray-500">
              1GB Cloud Storage
            </span>
          </li>
          <li class="flex space-x-3 ">
            <svg
              aria-hidden="true"
              class="flex-shrink-0 w-8 h-8 text-gray-400 dark:text-gray-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Check icon</title>
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class="text-xl font-normal leading-tight text-gray-500">
              Email and Community Support
            </span>
          </li>
          <li class="flex space-x-3 ">
            <svg
              aria-hidden="true"
              class="flex-shrink-0 w-8 h-8 text-gray-400 dark:text-gray-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Check icon</title>
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class="text-xl font-normal leading-tight text-gray-500">
              Complete documentation
            </span>
          </li>
        </ul>

        <button class="w-full px-4 py-2 mt-10 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-green-600">
          Try for free
        </button>
      </div>
    </div>
  </div>
</div>
`;

export default pricingCardWithButton;