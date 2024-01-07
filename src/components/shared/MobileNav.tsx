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
                        src="/logo_white.svg"
                        width={35}
                        height={25}
                        alt="Corexalt logo" 
                    />
                <Separator />
                    <NavItems />
            </SheetContent>
        </Sheet>
    </nav>

  )
}

export default MobileNav