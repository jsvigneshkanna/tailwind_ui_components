/* eslint-disable @next/next/no-html-link-for-pages */
import Image from "next/image";
import Link from "next/link";
import { MdMenu } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { useRouter } from "next/router";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const showMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
  
  const displayMenu = () => {
    return isMenuOpen ? "flex" : "hidden";
  };

  return (
    <div className="nav_container font-poppins">
      <nav className="flex items-center justify-between py-4">
        <Image
          src="/nav_logo.png"
          alt="logo"
          width={240}
          height={36}
          onClick={() => router.push("/")}
          className="cursor-pointer"
        />
        
        <div className="right_contents space-x-4 hidden md:flex">
          <Link href="/components">
            <a className="nav_links">Components</a>
          </Link>
          <Link href="/documentation">
            <a className="nav_links">Documentation</a>
          </Link>
          <Link href="/aboutUs">
            <a className="nav_links">About Us</a>
          </Link>
          <Link href="/faqs">
            <a className="nav_links">FAQs</a>
          </Link>
        </div>
        
        <div className="hamburger md:hidden" onClick={showMenu}>
          {isMenuOpen ? <AiOutlineClose /> : <MdMenu />}
        </div>
      </nav>

      <div className={`flex flex-col items-center justify-center gap-2 my-2 ${displayMenu()}`}>
        <Link href="/components">
          <a className="nav_links">Components</a>
        </Link>
        <Link href="/documentation">
          <a className="nav_links">Documentation</a>
        </Link>
        <Link href="/aboutUs">
          <a className="nav_links">About Us</a>
        </Link>
        <Link href="/faqs">
          <a className="nav_links">FAQs</a>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
