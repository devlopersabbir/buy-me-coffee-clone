import { MaxWrapper } from "@/components";
import { Button, buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SearchCodeIcon, UserSearchIcon } from "lucide-react";

const Navbar = () => {
  return (
    <div className="w-full">
      <div className="mx-auto w-full max-w-screen-xl p-2.5 md:p-4 flex justify-between items-center">
        {/* left side */}
        <div className="flex gap-2">
          <Link href="/">FAQ</Link>
          <Link href="/">About</Link>
          <Link href="/">Resources</Link>
        </div>
        {/* middle logo */}
        <Image
          src="/logo.png"
          alt="buy me coffee"
          height={40}
          width={150}
          objectFit="cover"
        />
        {/* right side auth & search */}
        <div className="flex gap-2 items-center">
          <Button className="bg-gray-100 text-gray-600 rounded-full px-2.5 md:px-6 flex gap-2">
            <UserSearchIcon size={20} className="text-gray-900" />
            Search creators
          </Button>
          <Link
            href="/"
            className={`${buttonVariants()} rounded-full bg-gray-100 text-gray-900`}
          >
            Sign up
          </Link>
          <Link
            className={`${buttonVariants()} rounded-full bg-yellow-500`}
            href="/"
          >
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
