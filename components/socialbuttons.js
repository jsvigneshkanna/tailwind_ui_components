import Link from "next/link";
import "font-awesome/css/font-awesome.min.css";

const SocialButtons = () => {
  return (
    <div className="flex flex-row w-100 items-center justify-center md:flex-row bg-gradient-to-tr from-[#000855] to-[#690101] py-3 md:py-6">
      <div className=" hidden md9:flex flex-row items-center justify-center">
        <div className=" group mx-1 inline-block h-14 w-14 hover:w-48 transition-all ease-out rounded-full float-left cursor-pointer duration-300 shadow-wrap overflow-hidden bg-white">
          <div className="inline-block h-14 w-14 text-center bg-[#292825fa] box-border rounded-full leading-[60px] group-hover:bg-[#4267B2] text-2xl transition-all ease-out duration-300">
            <i className="fa fa-facebook-f leading-[60px] text-white transition-all ease-out duration-300"></i>
          </div>
          <span className="text-xl bg-white font-medium ml-5 group-hover:text-[#4267B2] transition-all ease-out duration-300 rounded-full">
            <Link href="#">Facebook</Link>
          </span>
        </div>
        <div className="group mx-1 inline-block h-14 w-14 hover:w-48 transition-all ease-out rounded-full float-left cursor-pointer duration-300 shadow-wrap overflow-hidden bg-white">
          <div className="inline-block h-14 w-14 text-center bg-[#292825fa] box-border rounded-full leading-[60px] group-hover:bg-[#1da1f2] text-2xl transition-all ease-out duration-300">
            <i className="fa fa-twitter text-white transition-all ease-out duration-300"></i>
          </div>
          <span className="text-xl font-medium ml-5 group-hover:text-[#1da1f2] transition-all ease-out duration-300">
            <Link href="#">Twitter</Link>
          </span>
        </div>
      </div>
      <div className="hidden md9:flex flex-row items-center justify-center">
        <div className="group mx-1 inline-block h-14 w-14 hover:w-48 transition-all ease-out rounded-full float-left cursor-pointer duration-300 bg-white shadow-wrap overflow-hidden">
          <div className="inline-block h-14 w-14 text-center bg-[#292825fa] box-border rounded-full leading-[60px] group-hover:bg-[#e1306c] text-2xl transition-all ease-out duration-300">
            <i className="fa fa-instagram text-white transition-all ease-out duration-300"></i>
          </div>
          <span className="text-xl font-medium ml-5 group-hover:text-[#e1306c] transition-all ease-out duration-300">
            <Link href="#">Instagram</Link>
          </span>
        </div>

        <div className="group mx-1 inline-block h-14 w-14 hover:w-48 transition-all ease-out rounded-full float-left cursor-pointer duration-300 bg-white shadow-wrap overflow-hidden">
          <div className="inline-block h-14 w-14 text-center bg-[#292825fa] box-border rounded-full leading-[60px] group-hover:bg-[#ff0000] text-2xl transition-all ease-out duration-300">
            <i className="fa fa-youtube-play text-white transition-all ease-out duration-300"></i>
          </div>
          <span className="text-xl font-medium ml-5 group-hover:text-[#ff0000] transition-all ease-out duration-300">
            <Link href="#">YouTube</Link>
          </span>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center">
        <div className="group mx-1 inline-block h-14 w-14 hover:w-48 transition-all ease-out rounded-full float-left cursor-pointer duration-300 bg-white shadow-wrap overflow-hidden">
          <div className="inline-block h-14 w-14 text-center bg-[#292825fa] box-border rounded-full leading-[60px] group-hover:bg-[#171515] text-2xl transition-all ease-out duration-300">
            <i className="fa fa-github text-white transition-all ease-out duration-300"></i>
          </div>
          <span className="text-xl font-medium ml-5 group-hover:text-[#171515] transition-all ease-out duration-300">
            <a
              href="https://github.com/jsvigneshkanna"
              target="_blank"
              rel="noreferrer">
              Github
            </a>
          </span>
        </div>
        <div className="group mx-1 inline-block h-14 w-14 hover:w-48 transition-all ease-out rounded-full float-left cursor-pointer duration-300 bg-white shadow-wrap overflow-hidden">
          <div className="inline-block h-14 w-14 text-center bg-[#292825fa] box-border rounded-full leading-[60px] group-hover:bg-[#0A66C2] text-2xl transition-all ease-out duration-300">
            <i className="fa fa-linkedin-square text-white transition-all ease-out duration-300"></i>
          </div>
          <span className="text-xl font-medium ml-5 group-hover:text-[#0A66C2] transition-all ease-out duration-300">
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
