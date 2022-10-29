import Link from "next/link";

const SocialButtons = () => {
  return (
    <div className="flex flex-row w-100 items-center justify-center md:flex-row bg-gradient-to-tr from-[#000855] to-[#690101] py-3 md:py-6">
      <div className=" hidden md9:flex flex-row items-center justify-center">
        <div className="group my-3 mx-5 inline-block h-16 w-16 py-0 hover:w-52 transition-all ease-out bg-white rounded-full float-left overflow-hidden cursor-pointer">
          <div className="inline-block h-16 w-16 text-center bg-zinc-900 transition-all ease-out box-border rounded-full leading-[65px] group-hover:bg-[#4267B2]">
            <i className="fab fa-facebook-f text-2xl leading-[60px] transition-all ease-out text-white"></i>
          </div>
          <span className="text-xl font-medium ml-2 leading-[65px] transition-all ease-out group-hover:text-[#4267B2]">
            <Link href="#">Facebook</Link>
          </span>
        </div>
        <div className="group my-3 mx-5 inline-block h-16 w-16 py-0 hover:w-52 transition-all ease-out bg-white rounded-full float-left overflow-hidden cursor-pointer">
          <div className="inline-block h-16 w-16 text-center bg-zinc-900 transition-all ease-out box-border rounded-full leading-[65px] group-hover:bg-[#1DA1F2]">
            <i className="fab fa-twitter text-2xl leading-[60px] transition-all ease-out text-white"></i>
          </div>
          <span className="text-xl font-medium ml-2 leading-[65px] transition-all ease-out group-hover:text-[#1DA1F2]">
            <Link href="#">Twitter</Link>
          </span>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center">
        <div className=" hidden md9:block group my-3 mx-5 h-16 w-16 py-0  hover:w-52 transition-all ease-out bg-white rounded-full float-left overflow-hidden cursor-pointer">
          <div className="inline-block h-16 w-16 text-center bg-zinc-900 transition-all ease-out box-border rounded-full leading-[65px] group-hover:bg-[#E1306C]">
            <i className="fab fa-instagram text-2xl leading-[60px] transition-all ease-out text-white"></i>
          </div>
          <span className="text-xl font-medium ml-2 leading-[65px] transition-all ease-out group-hover:text-[#E1306C]">
            <Link href="#">Instagram</Link>
          </span>
        </div>

        <div className="group my-3 mx-5 inline-block h-16 w-16 py-0 hover:w-52 transition-all ease-out bg-white rounded-full float-left overflow-hidden cursor-pointer">
          <div className="inline-block h-16 w-16 text-center bg-zinc-900 transition-all ease-out box-border rounded-full leading-[65px] group-hover:bg-[#333]">
            <i className="fab fa-github text-2xl leading-[60px] transition-all ease-out text-white"></i>
          </div>
          <span className="text-xl font-medium ml-2 leading-[65px] transition-all ease-out group-hover:text-[#333]">
            <a
              href="https://github.com/jsvigneshkanna"
              target="_blank"
              rel="noreferrer">
              Github
            </a>
          </span>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center">
        <div className=" hidden md9:block group my-3 mx-5 h-16 w-16 py-0 hover:w-52 transition-all ease-out bg-white rounded-full float-left overflow-hidden cursor-pointer">
          <div className="inline-block h-16 w-16 text-center bg-zinc-900 transition-all ease-out box-border rounded-full leading-[65px] group-hover:bg-[#ff0000]">
            <i className="fab fa-youtube text-2xl leading-[60px] transition-all ease-out text-white"></i>
          </div>
          <span className="text-xl font-medium ml-2 leading-[65px] transition-all ease-out group-hover:text-[#ff0000]">
            <Link href="#">YouTube</Link>
          </span>
        </div>
        <div className="group my-3 mx-5 inline-block h-16 w-16 py-0 hover:w-52 transition-all ease-out bg-white rounded-full float-left overflow-hidden cursor-pointer">
          <div className="inline-block h-16 w-16 text-center bg-zinc-900 transition-all ease-out box-border rounded-full leading-[65px] group-hover:bg-[#0A66C2]">
            <i className="fab fa-linkedin text-2xl leading-[60px] transition-all ease-out text-white"></i>
          </div>
          <span className="text-xl font-medium ml-2 leading-[65px] transition-all ease-out group-hover:text-[#0A66C2]">
            <a
              href="https://www.linkedin.com/in/jsvigneshkanna/"
              target="_blank"
              rel="noreferrer">
              Linkedin
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SocialButtons;
