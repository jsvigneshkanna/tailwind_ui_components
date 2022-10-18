/* eslint-disable @next/next/no-html-link-for-pages */
import Image from "next/image";
import Link from "next/link";
import {useRouter} from "next/router";

const Navbar = () => {
  const router = useRouter();
  return (
    <div className="nav_container">
      <nav>
        <Image src="/nav_logo.png" alt="logo" width={240} height={36} />
        <div className="right_contents">
          <div className="nav_links">
            <a href="/components">Components</a>
          </div>
          <div className="nav_links">
            <Link href="/">Documentation</Link>
          </div>
          <div className="nav_links">
            <Link href="/">About Us</Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
