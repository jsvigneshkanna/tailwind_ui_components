import { stripIndent } from "react-codepen-prefill-embed";

const contactCard = stripIndent`
<div class="flex flex-col h-screen w-screen  items-center justify-center">
  <div class="max-w-sm rounded-lg border px-8 py-8 text-center border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800">
     <div class='space-y-2 flex flex-col items-center'>
     <svg class='text-blue-500 h-14 text-center' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
</svg>
<p class='font-bold text-md text-slate-400'>georgia.young@example.com</p>
<p class='font-bold text-md text-slate-400'>georgia.young@ple.com</p>
     </div>
     <div class='space-y-4'>
     <p class='font-bold text-xl text-black'>Get Support</p>
     <button class="my-4 text-blue-500 rounded-md bg-transparent border-2 border-blue-600 py-4 px-6 text-md font-bold hover:text-white hover:bg-blue-500">Submit Request</button>
     </div>
    </div>
  </div>
</div>
`;

export default contactCard;
