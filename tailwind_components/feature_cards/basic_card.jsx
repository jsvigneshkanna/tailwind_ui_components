import {stripIndent} from "react-codepen-prefill-embed";

const basicCard = stripIndent`
<div class="h-full bg-sky-300 px-10 py-16">
  <div class="max-w-sm rounded-lg border px-8 py-8 border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800">
     <span class="flex gap-4 items-center py-4">
     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-16 h-16 text-white">
    <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
    </svg>

    <p class='font-bold text-md text-black'>People come here for cool tailwind CSS UI components</p>
    </span>
     <p class='font-bold text-lg text-slate-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore at ex aliquid ipsa praesentium magnam quia molestiae sint, eveniet soluta autem ipsam fuga maiores nostrum velit unde natus placeat ea.</p>
    </div>
  </div>
</div>
`;

export default basicCard;
