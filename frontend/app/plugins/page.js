"use client";
import Image from "next/image";
import Header from "./header";
import Search from "./search";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getPlugins } from "@/api/plugins";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

export default function Home() {
    const [search, setSearch] = useState("");
    const masterData = getPlugins();
    const [data, setData] = useState(masterData);
    const [doSearch, setDoSearch] = useState(false);

    useEffect(() => {
        try {
            console.log("ss", search);
            setData((d) =>
                masterData.filter((plugin) => {
                    return new RegExp(search, "i").test(
                        plugin.scope + " " + plugin.name
                    );
                })
            );
        } catch (err) {
            console.log(err);
        }
    }, [search]);

    return (
        <div className="w-full lg:w-[60%] p-5 font-sans">
            <hr className="w-full" />
            <Search
                search={search}
                setSearch={setSearch}
                setDoSearch={setDoSearch}
            />
            <Header />

            <ul className="mt-5">
                {data.map((plugin) => {
                    return (
                        <li key={plugin.id} id={plugin.id}>
                            <Accordion type="single" collapsible>
                                <AccordionItem value="item-1">
                                    <AccordionTrigger className="w-full mb-0">
                                        <div className="mt-3 mb-5">
                                            <div className="flex justify-between">
                                                <span>
                                                    <span className="text-2xl font-bold tracking-tight">
                                                        {plugin.name}
                                                    </span>
                                                    <span className="ml-2 text-sm text-gray-600 tracking-tight">
                                                        {plugin.scope}
                                                    </span>
                                                </span>
                                                <span
                                                    className={clsx(
                                                        "ml-3 my-auto inline text-sm font-bold rounded text-white px-1 ",
                                                        plugin.domain ==
                                                            "standard" &&
                                                            "bg-lime-600",
                                                        plugin.domain ==
                                                            "community" &&
                                                            "bg-orange-600",
                                                        plugin.domain ==
                                                            "unofficial" &&
                                                            "bg-blue-600"
                                                    )}
                                                >
                                                    {plugin.domain}
                                                </span>
                                            </div>
                                            <div className="mt-4 text-left text-sm text-gray-800">
                                                {plugin.description}
                                            </div>
                                            <div className="mt-5 flex">
                                                <Link
                                                    href={`https://github.com/${plugin.owner}`}
                                                    target="_blank"
                                                >
                                                    <Avatar className="w-8 h-8">
                                                        <AvatarImage
                                                            className="w-8 h-8"
                                                            src={`https://github.com/${plugin.owner}.png`}
                                                        />
                                                        {/* <AvatarFallback>CN</AvatarFallback> */}
                                                    </Avatar>
                                                </Link>

                                                <span className="ml-2 my-auto">
                                                    <Link
                                                        href={`https://github.com/${plugin.owner}`}
                                                        target="_blank"
                                                    >
                                                        <span className="font-medium">
                                                            {plugin.owner}
                                                        </span>{" "}
                                                    </Link>
                                                </span>
                                            </div>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent className="mt-0">
                                        <div className="">
                                            Input parameters:
                                            <br />
                                            {plugin.inputParams.map((inp) => {
                                                return (
                                                    <span className="hover:underline font-mono">
                                                        <Link
                                                            href={`http://localhost:3000/params#${inp.id}`}
                                                        >
                                                            {inp.name},&nbsp;
                                                        </Link>
                                                    </span>
                                                );
                                            })}
                                        </div>
                                        <div className="mt-3">
                                            Output parameters:
                                            <br />
                                            {plugin.outputParams.map((inp) => {
                                                return (
                                                    <span className=" font-mono">
                                                        <Link
                                                            className="hover:underline"
                                                            href={`http://localhost:3000/params#${inp.id}`}
                                                        >
                                                            {inp.name}
                                                        </Link>
                                                        ,&nbsp;
                                                    </span>
                                                );
                                            })}
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>

                            {/* <hr className="w-full mt-5 mb-5" /> */}
                        </li>
                    );
                })}
            </ul>

            {/* <PipelineHelper allParams={allParams} allPlugins={allPlugins} /> */}
            {/* {isLoading ? (
        <PipelineHelper allParams={allParams} allPlugins={allPlugins} />
    ) : (
        <LoadingBlocker />
    )} */}
        </div>
    );
}
