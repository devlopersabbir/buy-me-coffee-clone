import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { menuItem } from "@/constants";
import { TMenu } from "@/utils";

import { MenuIcon } from "lucide-react";
import Link from "next/link";

const MobileSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <MenuIcon size={20} className="md:hidden cursor-pointer" />
      </SheetTrigger>
      <SheetContent side="left" className="flex flex-col justify-between">
        <div className="flex flex-col items-start gap-4 font-semibold md:my-3 my-10">
          {menuItem.map((item: TMenu, index: number) => (
            <Link key={index} href={item.link}>
              {item.text}
            </Link>
          ))}
        </div>

        <Button className="w-full !rounded-full">Start My Page</Button>
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
