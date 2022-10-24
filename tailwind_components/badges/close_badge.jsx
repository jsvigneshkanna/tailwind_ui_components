import {stripIndent} from "react-codepen-prefill-embed";

const closeBadge = stripIndent`
<script src="https://cdn.tailwindcss.com"></script>
<style>
  .small,
  .big {
    transition: opacity 2s;
  }
  .remove {
    opacity: 0;
  }
</style>
<div class="h-full bg-rose-600 p-20">
  <span
    id="badge-dismiss-default"
    class="small mr-2 inline-flex items-center rounded-full bg-blue-100 py-1 px-2 text-xs font-medium text-blue-800 dark:bg-blue-200 dark:text-blue-800"
  >
    Small
    <button
      type="button"
      class="ml-2 inline-flex items-center rounded-sm bg-transparent p-0.5 text-sm text-blue-400 hover:bg-blue-200 hover:text-blue-900 dark:hover:bg-blue-300 dark:hover:text-blue-900"
      onclick="cl(1)"
    >
      <svg
        aria-hidden="true"
        class="h-3.5 w-3.5"
        aria-hidden="true"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
          clip-rule="evenodd"
        ></path>
      </svg>
    </button>
  </span>

  <span
    id="badge-dismiss-default"
    class="big mr-2 ml-3 inline-flex items-center rounded-full bg-blue-100 py-1 px-2 text-sm font-medium text-blue-800 dark:bg-blue-200 dark:text-blue-800"
  >
    Large
    <button
      type="button"
      class="ml-2 inline-flex items-center rounded-sm bg-transparent p-0.5 text-sm text-blue-400 hover:bg-blue-200 hover:text-blue-900 dark:hover:bg-blue-300 dark:hover:text-blue-900"
      onclick="cl(0)"
    >
      <svg
        aria-hidden="true"
        class="h-3.5 w-3.5"
        aria-hidden="true"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
          clip-rule="evenodd"
        ></path>
      </svg>
    </button>
  </span>
</div>
<script>
  let small = document.querySelector(".small");
  let big = document.querySelector(".big");
  function cl(sm) {
    if (sm == 1) small.classList.add("remove");
    else big.classList.add("remove");
  }
  small.addEventListener("transitionend", () => {
    small.remove();
  });
  big.addEventListener("transitionend", () => {
    big.remove();
  });
</script>
`;

export default closeBadge;
