import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { UserSearchIcon } from "lucide-react";
import MobileSidebar from "./MobileSidebar";
import { Logo, menuItem } from "@/constants";
import { TMenu } from "@/utils";

const Navbar = () => {
  return (
    <div className="w-full">
      <div className="mx-auto w-full max-w-screen-xl p-2.5 md:p-4 flex justify-between items-center">
        {/* left side */}
        <div className="hidden md:block transition-all">
          <div className="grid grid-cols-3 -space-x-4 font-semibold">
            {menuItem.map((item: TMenu, index: number) => (
              <Link key={index} href={item.link}>
                {item.text}
              </Link>
            ))}
          </div>
        </div>
        {/* middle logo */}
        <div className="flex gap-2 items-center">
          <MobileSidebar />
          <Logo />
        </div>
        {/* right side auth & search */}
        <div className="flex gap-2 items-center">
          <div className="hidden lg:block">
            <Button className="bg-gray-100 text-gray-600 rounded-full px-2.5 md:px-6 flex gap-2 hover:bg-gray-200">
              <UserSearchIcon size={20} className="text-gray-900" />
              Search creators
            </Button>
          </div>
          <Button variant="ghost" className="!rounded-full ">
            <Link href="/">Log in</Link>
          </Button>
          <Button variant="secondary" className="!rounded-full !bg-yellow-400">
            <Link href="/">Sign up</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
