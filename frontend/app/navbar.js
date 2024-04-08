"use client";
import { Button } from "@/components/ui/button";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="mt-5 ml-5">
            <Link href="/">
                <Image
                    className="inline"
                    src={"logo.svg"}
                    height={50}
                    width={50}
                />
                <span className="ml-2 inline font-bold text-2xl align-middle font-sans">
                    if-ecosystem
                </span>
            </Link>
        </nav>
    );
}
