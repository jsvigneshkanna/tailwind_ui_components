import {stripIndent} from "react-codepen-prefill-embed";

const sample_alert = stripIndent`
<div class="shadow-md bg-gray-100 border border-red-500 text-red-700 px-4 py-3 mx-10 my-10 rounded-lg relative" id="alert_red">
<div class="flex justify-between">
  <div>
    <strong class="font-bold">ALERT!</strong>
    <span class="block sm:inline mx-2">an error occoured</span>
  </div> 
 <div class="absolute sm:relative sm:top-auto sm:right-   auto ml-auto right-4 top-4 text-gray-400 hover:text-gray-800 cursor-pointer">
   <button onclick="closeRedAlert(event)">
     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
       <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
     </svg>
   </button>
      </div>
</div>
</div>

<div class="shadow-md bg-gray-100 border border-yellow-500 text-yellow-700 px-4 py-3 mx-10 my-2 rounded-lg relative" id="alert_yellow">
<div class="flex justify-between">
  <div>
    <strong class="font-bold">Warning!</strong>
  </div>
 <div class="absolute sm:relative sm:top-auto sm:right-   auto ml-auto right-4 top-4 text-gray-400 hover:text-gray-800 cursor-pointer">
   <button onclick="closeYellowAlert(event)">
     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
     </svg>
   </button>
      </div>
</div>
</div>

<script>
function closeRedAlert(event){
  element = document.getElementById('alert_red')
  element.remove()
}
function closeYellowAlert(event){
  element = document.getElementById('alert_yellow')
  element.remove()
}
</script>
`;

export default sample_alert;