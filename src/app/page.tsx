import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import { MoonStar, Star, StarIcon, StarsIcon } from "lucide-react";

export default function Home() {
  return (
    <div className="overflow-hidden duration-300 transition-all ease-out pt-32">
      <div className="relative sm:px-32 ">
        <MaxWidthWrapper className="flex box-border mb-0 md:flex-wrap md:mb-24 !md:w-full !md:px-2">
          <div className="max-w-[700px] flex items-center flex-col text-center mx-auto gap-5">
            <div className="flex gap-1 items-center">
              {[0, 1, 2, 3, 4].map((_, i: number) => (
                <Star size={20} color="#facc15" fill="#facc15" />
              ))}
              <p className="text-muted-foreground text-xl">
                Loved by 1,000,000+ creators
              </p>
            </div>
            <h1 className="text-8xl font-bold">Fund your creative work</h1>
            <p className=" text-xl px-2 md:px-16">
              Accept donations. Start a membership. Sell anything you like. It’s
              easier than you think.
            </p>
            <Button
              className="bg-yellow-500 !rounded-full text-2xl font-semibold md:p-8 p-4"
              size="lg"
            >
              Start My Page
            </Button>
            <p className="text-md text-muted-foreground">
              It’s free and takes less than a minute!
            </p>
          </div>
        </MaxWidthWrapper>
      </div>
    </div>
    // donation
    // membership
    // shop
    // footer
  );
}
