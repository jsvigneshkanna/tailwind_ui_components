import Link from "next/link";

const SocialButtons = () => {
  return (
    <div className="flex flex-col items-center justify-center md:flex-row bg-gradient-to-tl from-[#110047] to-[#440040] py-12">
      <div className="flex flex-row items-center justify-center">
        <div className="group m-3 inline-block h-16 w-16 py-0 hover:w-52 transition-all ease-out bg-white rounded-full float-left overflow-hidden cursor-pointer">
          <div className="inline-block h-16 w-16 text-center bg-zinc-900 transition-all ease-out box-border rounded-full leading-[65px] group-hover:bg-[#4267B2]">
            <i className="fab fa-facebook-f text-2xl leading-[60px] transition-all ease-out text-white"></i>
          </div>
          <span className="text-xl font-medium ml-2 leading-[65px] transition-all ease-out group-hover:text-[#4267B2]">
            <Link href="#">Facebook</Link>
          </span>
        </div>
        <div className="group m-3 inline-block h-16 w-16 py-0  hover:w-52 transition-all ease-out bg-white rounded-full float-left overflow-hidden cursor-pointer">
          <div className="inline-block h-16 w-16 text-center bg-zinc-900 transition-all ease-out box-border rounded-full leading-[65px] group-hover:bg-[#1DA1F2]">
            <i className="fab fa-twitter text-2xl leading-[60px] transition-all ease-out text-white"></i>
          </div>
          <span className="text-xl font-medium ml-2 leading-[65px] transition-all ease-out group-hover:text-[#1DA1F2]">
            <Link href="#">Twitter</Link>
          </span>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center">
        <div className="group m-3 inline-block h-16 w-16 py-0  hover:w-52 transition-all ease-out bg-white rounded-full float-left overflow-hidden cursor-pointer">
          <div className="inline-block h-16 w-16 text-center bg-zinc-900 transition-all ease-out box-border rounded-full leading-[65px] group-hover:bg-[#E1306C]">
            <i className="fab fa-instagram text-2xl leading-[60px] transition-all ease-out text-white"></i>
          </div>
          <span className="text-xl font-medium ml-2 leading-[65px] transition-all ease-out group-hover:text-[#E1306C]">
            <Link href="#">Instagram</Link>
          </span>
        </div>

        <div className="group m-3 inline-block h-16 w-16 py-0 hover:w-52 transition-all ease-out bg-white rounded-full float-left overflow-hidden cursor-pointer">
          <div className="inline-block h-16 w-16 text-center bg-zinc-900 transition-all ease-out box-border rounded-full leading-[65px] group-hover:bg-[#333]">
            <i className="fab fa-github text-2xl leading-[60px] transition-all ease-out text-white"></i>
          </div>
          <span className="text-xl font-medium ml-2 leading-[65px] transition-all ease-out group-hover:text-[#333]">
            <Link href="https://github.com/jsvigneshkanna/tailwind_ui_components">
              Github
            </Link>
          </span>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center">
        <div className="group m-3 inline-block h-16 w-16 py-0 hover:w-52 transition-all ease-out bg-white rounded-full float-left overflow-hidden cursor-pointer">
          <div className="inline-block h-16 w-16 text-center bg-zinc-900 transition-all ease-out box-border rounded-full leading-[65px] group-hover:bg-[#ff0000]">
            <i className="fab fa-youtube text-2xl leading-[60px] transition-all ease-out text-white"></i>
          </div>
          <span className="text-xl font-medium ml-2 leading-[65px] transition-all ease-out group-hover:text-[#ff0000]">
            <Link href="#">YouTube</Link>
          </span>
        </div>
        <div className="group m-3 inline-block h-16 w-16 py-0 hover:w-52 transition-all ease-out bg-white rounded-full float-left overflow-hidden cursor-pointer">
          <div className="inline-block h-16 w-16 text-center bg-zinc-900 transition-all ease-out box-border rounded-full leading-[65px] group-hover:bg-[#0A66C2]">
            <i className="fab fa-linkedin text-2xl leading-[60px] transition-all ease-out text-white"></i>
          </div>
          <span className="text-xl font-medium ml-2 leading-[65px] transition-all ease-out group-hover:text-[#0A66C2]">
            <Link href="#">Linkedin</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SocialButtons;
