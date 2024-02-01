import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { Separator } from "../ui/separator";
import Image from "next/image"
import NavItems from "./NavItems";

const MobileNav = () => {
  return (
    <nav className="md:hidden">
        <Sheet>
            <SheetTrigger>
                <Menu color="#ffffff" className="cursor-pointer"/>
            </SheetTrigger>
            <SheetContent className="md:hidden flex flex-col gap-6 bg-blend-overlay bg-[#0D215C]">
                    <Image 
                        alt="Corexalt logo"
                        className="w-36 h-36" 
                        src="/corexalt_typo.svg"
                        width="50"
                        height="50"
                        style={{
                          aspectRatio: "16/9",
                          objectFit: "contain",
                        }}
                    />
                <Separator />
                    <NavItems />
            </SheetContent>
        </Sheet>
    </nav>

  )
}

export default MobileNav