import {stripIndent} from "react-codepen-prefill-embed";

const socialLinkTestimonial = stripIndent`
<div class="flex h-screen w-screen items-center justify-center bg-sky-300">
  <div
    class="h-96 w-60 max-w-sm rounded-xl border border-black bg-gray-300 shadow-lg"
  >
    <div class="p-5 text-center">
      <div class="w-54 h-60 max-w-full rounded-lg">
        <img
        src=https://images.squarespace-cdn.com/content/v1/53b599ebe4b08a2784696956/1438211096322-NBOR72MPHBEED1BSD36Q/image-asset.jpeg"
        height="180" width="180" class = "object-cover h-60 w-60 rounded-lg" >
      </div>
      <ul class="flex-col space-y-2">
        <p><b> SUSAVI</b></p>
        <ul class="flex-col space-y-2">
          <p>Production</p>
        </ul>
        <ul class="flex space-x-8">
          <div class="h-10 w-10">
            <img
              src="https://img.icons8.com/fluency/48/000000/facebook-new.png"
              class="rounded-3xl"
            />
          </div>
          <div class="h-10 w-10">
            <img
              src="https://img.icons8.com/3d-fluency/100/000000/instagram-new.png"
              class="rounded-3xl"
            />
          </div>
          <div class="h-10 w-10">
            <img
              src="https://img.icons8.com/color/48/000000/twitter--v1.png"
              class="rounded-3xl"
            />
          </div>
        </ul>
      </ul>
    </div>
  </div>
</div>
`;

export default socialLinkTestimonial;
