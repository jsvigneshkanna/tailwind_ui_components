import {stripIndent} from "react-codepen-prefill-embed";

const infoAlert = stripIndent`
<div class="h-screen bg-sky-300 px-4 pt-4">
  <div class="relative m-4 rounded border-0 bg-green-500 px-6 py-4 text-white">
    <span class="mr-5 inline-block align-middle text-xl">
      <i class="fas fa-bell"></i>
    </span>
    <span class="mr-4 inline-block align-middle">
      This is just a Information alert
    </span>
    <button
      class="absolute right-0 top-0 mt-4 mr-6 bg-transparent text-2xl font-semibold leading-none outline-none focus:outline-none"
      onclick="closeAlert(event)"
    >
      <span>×</span>
    </button>
  </div>
</div>
<script>
  function closeAlert(event) {
    let element = event.target;
    while (element.nodeName !== "BUTTON") {
      element = element.parentNode;
    }
    element.parentNode.parentNode.removeChild(element.parentNode);
  }
</script>
`;

export default infoAlert;
