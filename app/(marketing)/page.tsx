import { Button } from "@/components/ui/button";
import { Medal } from "lucide-react";
import Link from "next/link";
import React from "react";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
type Props = {};
const headingFont = localFont({
  src: "../../public/fonts/font.woff2",
});
const textFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "600", "800", "900"],
});

const MarketingPage = (props: Props) => {
  return (
    <div className="flex items-center justify-center flex-col">
      <div
        className={cn(
          "flex items-center justify-center flex-col",
          headingFont.className
        )}
      >
        <div className="mb-4 flex items-center border shadow-sm p-4 bg-amber-100 text-amber-700 rounded-full uppercase ">
          <Medal className="size-6 mr-2" />
          No 1 task management
        </div>
        <h1 className="text-3xl ms:text-6xl text-center text-neutral-800 mb-6">
          Taskify helps team move
        </h1>
        <div className="text-3xl md:text-6xl bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white px-4 p-4 rounded-md pb-4 w-fit">
          work forward
        </div>
      </div>
      <div
        className={cn(
          "text-sm md:text-xl text-neutral-400 mt-4 max-w-xs md md:max-w-2xl text-center mx-auto ",
          textFont.className
        )}
      >
        Collaborate manage project , and reach new productivity Peaks,from high
        rises to home office, the way your team work is unique -accomplish it
        all with toskify.
      </div>
      <Button className="mt-6 " size="lg" asChild>
        <Link href="/sign-up">Get Taskify for free</Link>
      </Button>
    </div>
  );
};

export default MarketingPage;
