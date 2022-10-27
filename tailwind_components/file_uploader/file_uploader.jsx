import {stripIndent} from "react-codepen-prefill-embed";

const fileUploader = stripIndent`
<div class="border-box h-screen text-gray-900 font-sans bg-gray-300">
    <div class="max-w-sm mx-auto  flex justify-center">
        
        <div class="bg-white w-3/4 h-auto my-20 flex flex-col justify-center items-center rounded-lg shadow-xl">
            <div class="mb-10 text-center mt-12">
                <h2 class="text-xl">Upload your files</h2>
                <p class="text-xs font-thin text-gray-500">File should be mp4, avi, mov</p>
            </div>
            <form action="#" class="relative bg-gray-100 w-4/5 h-32 mb-10 bg-white rounded-lg shadow-inner">
                <input type="file" id="file-upload" class="hidden">
                <label for="file-upload" class="w-full h-full z-20 cursor-pointer flex flex-col-reverse justify-center items-center ">
                    <p class="text-xs z-10 text-center text-gray-500 font-light">Drag & Drop your files here</p>
                    <svg class="w-8 h-8 z-10 text-indigo-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"></path></svg>
                </label>
            </form>
        </div>
    </div>
</div>
`

export default fileUploader;