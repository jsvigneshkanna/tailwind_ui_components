import { stripIndent } from "react-codepen-prefill-embed";

const alarmAlert = stripIndent`
 <div id='alert' class="rounded d-flex border border-primary h-6">
            <div class="mt-2 ms-2"><svg class="h-75 w-10 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                              d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                  </svg>
            </div>
            <div class="text-primary w-75 m-2 me-4 ms-4"> Williamsburg carles vegan helvetica</div>
            <div class="mt-2 ms-2" onclick="invisible()"> <svg class="h-75 w-10 text-primary"
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                              d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
            </div>
      </div>
      <script>
            function invisible() {
                  console.log(document.getElementById('alert').classList);
                  document.getElementById('alert').classList.add('d-none');
            }
      </script>
`;

export default alarmAlert;
