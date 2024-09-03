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
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import clsx from "clsx";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();

    return (
        <>
            {/* <div className="px-5 w-full lg:w-[60%] h-2 overflow-hidden">
                <img src="bg.jpg" className="w-full h-auto object-cover" />
            </div> */}
            <nav className="mt-5 ml-5 w-full lg:w-[60%]">
                <div className="flex">
                    <div>
                        <Link href="/">
                            <Image
                                className="inline"
                                src={"logo.svg"}
                                height={50}
                                width={50}
                            />
                            <span className="ml-2 inline font-bold text-2xl align-middle font-sans flex-col">
                                if-ecosystem
                            </span>
                        </Link>
                        <small className="ml-14 block">(c) Abdul Samad</small>
                    </div>
                    <span className="ml-auto mr-10 mt-2">
                        <a
                            href="https://github.com/Green-Software-Foundation/hack/issues/148"
                            target="_blank"
                        >
                            <img
                                alt="github"
                                src={"/github.svg"}
                                className="!mr-2 hover:scale-110"
                                width="30"
                                height="30"
                            />
                        </a>
                    </span>
                </div>
                <div className="mt-5">
                    <Link
                        className={clsx(
                            "font-semibold ",
                            pathname == "/pipeline" ||
                                (pathname == "/" && "underline")
                        )}
                        href="/"
                    >
                        <span className="">pipeline</span>
                    </Link>
                    <Link
                        className={clsx(
                            "ml-4 font-semibold ",
                            pathname == "/plugins" && "underline"
                        )}
                        href="/plugins"
                    >
                        <span className="">plugins</span>
                    </Link>
                    <Link
                        className={clsx(
                            "ml-4 font-semibold ",
                            pathname == "/params" && "underline"
                        )}
                        href="/params"
                    >
                        <span className="">params</span>
                    </Link>
                </div>
            </nav>
        </>
    );
}
