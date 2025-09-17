import Image from "next/image";
import Link from "next/link";
import SearchBar from "./SearchBar";
import { Bell, Home } from "lucide-react";
import ShoppingCartICon from "./ShoppingCartICon";

const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-between border-b border-gray-200 pb-4 pt-2">
      {/*LEFT*/}
      <Link href="/" className="flex items-center">
        <Image
          src="/logo.png"
          alt="TrendFury"
          width={36}
          height={36}
          className="w-6 md:w-9 md:h-9"
        />
        <p className="hidden md:block text-md font-medium tracking-wider">
          TRENDFURY
        </p>
      </Link>
      {/*Right*/}
      <div className="flex items-center gap-6">
        <SearchBar />
        <Link href="/">
          <Home className="w-4 h-4 text-gray-600" />
        </Link>
        <Bell className="w-4 h-4 text-gray-600" />
        <ShoppingCartICon />
        <Link href="/login">Sign In</Link>
      </div>
    </nav>
  );
};

export default Navbar;
