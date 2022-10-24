import {stripIndent} from "react-codepen-prefill-embed";

const CardBadge = stripIndent`
<div class="h-full bg-rose-300 pt-10">
  <div
    class="relative mx-10 max-w-sm rounded-3xl bg-sky-200 shadow-lg shadow-blue-500"
  >
    <span
      class="absolute right-[-20px] top-[-20px] inline-block whitespace-nowrap rounded-full bg-red-600 py-4 px-4 text-center align-baseline text-xl font-bold leading-none text-white shadow-2xl shadow-teal-400"
      >New</span
    >

    <img
      class="w-full"
      src="https://media.istockphoto.com/photos/hot-air-balloons-picture-id184091124?s=612x612"
      alt="VK tailwind Bootstrap"
    />
    <div class="px-6 py-4">
      <div class="mb-2 text-xl font-bold">Welcome to VK tailwind Bootstrap</div>
      <p class="pb-6 text-lg font-medium text-blue-900">
        Best part of card badge is to have a badge above a card. Nothing else 😆
      </p>
    </div>
  </div>
</div>
`;
export default CardBadge;
