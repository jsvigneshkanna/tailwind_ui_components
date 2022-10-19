import { stripIndent } from "react-codepen-prefill-embed";

const playButton = stripIndent`
<head>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" />
</head>
<body>
  <div class="h-screen bg-gray-200 flex flex-col">
    <div class="flex h-screen items-center justify-center">
      <button class="h-24 w-24 rounded-xl bg-blue-500 focus:outline-none" onclick="play();">
        <i class="fa fa-play fa-2x text-white" id="play-btn"></i>
      </button>
    </div>
    <div class="flex h-screen items-center justify-center">
      <button class="h-24 w-24 rounded-full bg-blue-500 focus:outline-none" onclick="play();">
        <i class="fa fa-play fa-2x text-white" id="play-btn"></i>
      </button>
    </div>
    <div class="flex h-screen items-center justify-center">
      <button class="h-24 w-24 rounded-xl border-2 border-blue-500 focus:outline-none" onclick="play();">
        <i class="fa fa-play fa-2x text-blue-500" id="play-btn"></i>
      </button>
    </div>
    <div class="flex h-screen items-center justify-center">
      <button class="h-24 w-24 rounded-full border-2 border-blue-500 focus:outline-none" onclick="play();">
        <i class="fa fa-play fa-2x text-blue-500" id="play-btn"></i>
      </button>
    </div>
  </div>
</body>

`;

export default playButton;
