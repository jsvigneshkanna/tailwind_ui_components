import {stripIndent} from "react-codepen-prefill-embed";

const check_box = stripIndent`
<div className="flex justify-center mt-56 bg-slate-300 w-1/2 mx-auto p-4">
  <div class="flex flex-row bg-[#fff6ef] w-11/12 mr-auto mt-40 ml-auto h-11 text-[#d4975c] rounded-xl p-2 border-x-orange-500">
   
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 27 27" strokeWidth={1.5} stroke="currentColor" className="flex w-1 h-1 mt-20 mb-20">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
  </svg>

   <h3 class="mr-auto">This is a warning alert!</h3>

  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 27 27" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mt-auto mb-auto ml-auto text-right	">
  <path strokeLinecap="round" class="ml-10" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
  
  </div>
</div>`;

export default check_box;
