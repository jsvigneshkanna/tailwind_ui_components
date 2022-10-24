import {stripIndent} from "react-codepen-prefill-embed";

const presentationCards = stripIndent`
<div class="flex h-screen w-screen items-center justify-center bg-sky-300">
  <section
    class="grid gap-6 p-4 max-w-7x1 text-white grid-cols-1 md:grid-cols-2"
    style={{ margin: "0 auto" }}
  >
    <div
      class="h-80 relative flex items-end truncate p-4 w-full text-center bg-cover bg-center shadow-xl"
      style="
        background-image: url('https://th.bing.com/th/id/OIP.7Tue3HtDK6rJB9UIswxz9QHaEo?pid=ImgDet&rs=1');
      "
    >
      <div
        class="relative flex flex-col items-center w-full p-4 z-1 transition-transform duration-700 ease-in"
      >
        <h2
          class="text-xl font-bold leading-tight py-2 px-8 bg-black bg-opacity-60 rounded"
        >
          Mountain View
        </h2>
        <p
          class="italic leading-snug truncate whitespace-pre-wrap max-w-xs max-h-44 bg-black bg-opacity-30 rounded mt-6"
        >
          Check out all of these gorgeous mountain trips with beautiful views
          mountains
        </p>
        <button
          class="cursor-pointer mt-6 py-3 px-6 font-bold text-xs bg-black border-none uppercase tracking-wide hover:bg-red-600"
        >
          View trips
        </button>
      </div>
    </div>

    <div
      class="h-80 relative flex items-end truncate p-4 w-full text-center bg-cover bg-center shadow-xl"
      style="
        background-image: url('https://i.pinimg.com/originals/23/d4/ed/23d4edf6d6852b20538ab336879b8ec3.jpg');
      "
    >
      <div
        class="relative flex flex-col items-center w-full p-4 z-1 transition-transform duration-700 ease-in"
      >
        <h2
          class="text-xl font-bold leading-tight py-2 px-8 bg-black bg-opacity-60 rounded"
        >
          To the Beach
        </h2>
        <p
          class="italic leading-snug truncate whitespace-pre-wrap max-w-xs max-h-44 bg-black bg-opacity-30 rounded mt-6"
        >
          Plan your next beach trip with these fabulous destinations
        </p>
        <button
          class="cursor-pointer mt-6 py-3 px-6 font-bold text-xs bg-black border-none uppercase tracking-wide hover:bg-red-600"
        >
          View trips
        </button>
      </div>
    </div>
  </section>
</div>
`;

export default presentationCards;
