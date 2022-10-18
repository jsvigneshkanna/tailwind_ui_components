import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="nav_container">
      <nav>
        <Image src="/nav_logo.png" alt="logo" width={240} height={36} />
        <div className="right_contents">
          <div className="nav_links">
            <Link href="/components">Components</Link>
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
