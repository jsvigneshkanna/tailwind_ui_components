import {stripIndent} from "react-codepen-prefill-embed";

const contactForm = stripIndent`
<div class="flex h-full w-full items-center justify-center bg-rose-300">
  <div class="my-10 mx-5 rounded-xl border border-gray-200 bg-white shadow-md">
    <div class="flex flex-col items-center justify-center p-6 text-center">
      <h5 class="mb-1 px-4 font-bold tracking-tight text-gray-700">
        Contact Us
      </h5>
      <h1 class="mb-5 text-3xl font-bold">Make an Appointment</h1>
      <div class="mx-10 grid grid-cols-2 justify-start gap-3">
        <input
          class="focus:shadow-outline my-3 w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
          id="username"
          type="text"
          placeholder="Full Name *"
        />
        <input
          class="focus:shadow-outline my-3 w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
          id="username"
          type="text"
          placeholder="Email *"
        />
        <select
          class="form-select my-3 block w-full appearance-none rounded border border-solid border-gray-300 bg-white bg-clip-padding bg-no-repeat px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
          aria-label="Default select example"
        >
          <option selected>Please Select</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        <select
          class="form-select my-3 block w-full appearance-none rounded border border-solid border-gray-300 bg-white bg-clip-padding bg-no-repeat px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
          aria-label="Default select example"
        >
          <option selected>4:00 Available</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
      <label
        for="message"
        class="mb-2 mt-2 block text-sm font-medium text-gray-900 dark:text-gray-400"
        >Your message</label
      >
      <textarea
        id="message"
        rows="4"
        class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
        placeholder="Your message..."
      ></textarea>
      <button
        type="button"
        class="mr-2 mb-2 mt-4 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Book Appointment
      </button>
    </div>
  </div>
</div>
`;

export default contactForm;
