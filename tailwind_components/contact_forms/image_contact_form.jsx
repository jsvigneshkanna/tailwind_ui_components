import {stripIndent} from "react-codepen-prefill-embed";

const ImageContactForm = stripIndent`
<div class="flex min-h-screen items-center bg-sky-300">
  <div class="mx-auto h-full max-w-4xl flex-1 rounded-lg bg-white shadow-xl">
    <div class="flex flex-col md:flex-row">
      <div class="h-32 md:h-auto md:w-1/2">
        <img
          class="h-full w-full object-cover"
          src="https://img.freepik.com/free-photo/woman-sitting-near-businessman-holding-coffee-cup-using-calculator_23-2147880593.jpg?w=1060&t=st=1666609553~exp=1666610153~hmac=e7daf3c9f9a151cdf19028374cd444e1aa36ca5291bfd35efe3a86a42f9c7864"
          alt="img"
        />
      </div>
      <div class="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
        <div class="w-full">
          <h1 class="mb-4 text-center text-2xl font-bold text-gray-700">
            Book Appointment
          </h1>
          <div>
            <label class="block text-lg"> Name </label>
            <input
              type="email"
              class="w-full rounded-md border px-4 py-2 text-sm focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
              placeholder="Enter your Full Name"
            />
          </div>
          <div>
            <label class="mt-4 block text-lg"> Email </label>
            <input
              class="w-full rounded-md border px-4 py-2 text-sm focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
              placeholder="example@gmail.com"
              type="email"
            />
          </div>
          <div>
            <label class="mt-4 block text-lg"> Department </label>
            <select
              class="w-full rounded-md border px-4 py-2 text-sm focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
              name="Selectt"
            >
              <option selected>Select a department</option>
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
              <option>Option 4</option>
            </select>
          </div>
          <div>
            <label class="mt-4 block text-lg"> Time </label>
            <select
              class="w-full rounded-md border px-4 py-2 text-sm focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
              name="Selectt"
            >
              <option selected>Select Time</option>
              <option>10:00 am</option>
              <option>12:00 pm</option>
              <option>3:00 pm</option>
              <option>5:00 pm</option>
            </select>
          </div>

          <button
            class="focus:shadow-outline-blue mt-4 block w-full rounded-lg border border-transparent bg-blue-600 px-4 py-2 text-center text-sm font-medium leading-5 text-white transition-colors duration-150 hover:bg-blue-700 focus:outline-none active:bg-blue-600"
            href="#"
          >
            Book Appointment
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
`;
export default ImageContactForm;
