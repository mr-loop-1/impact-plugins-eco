"use client";
import Image from "next/image";
import Header from "./header";
import Search from "./search";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Home() {
    const [search, setSearch] = useState("");
    const [data, setData] = useState([
        {
            id: 1,
            name: "sci-o",
            domain: "standard",
            description: "this is my plugin",
            repo: "https://github.com/mr-loop-1/",
            owner: "mr-loop-1",
            scope: "@mrloop",
        },
        {
            id: 1,
            name: "sci-o",
            domain: "standard",
            description: "this is my plugin",
            repo: "https://github.com/mr-loop-1/",
            owner: "mr-loop-1",
            scope: "@mrloop",
        },
    ]);
    const [doSearch, setDoSearch] = useState(false);

    useEffect(() => {
        try {
            const paginatedData = [];
        } catch (err) {
            console.log(err);
        }
    }, [setDoSearch]);

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
                        <li key={plugin.id}>
                            <div className="">
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
                                            plugin.domain == "standard" &&
                                                "bg-lime-600",
                                            plugin.domain == "universe" &&
                                                "bg-orange-600",
                                            plugin.domain == "unofficial" &&
                                                "bg-blue-600"
                                        )}
                                    >
                                        {plugin.domain}
                                    </span>
                                </div>
                                <div className="mt-4 text-sm text-gray-800">
                                    {plugin.description}
                                </div>
                                <div className="mt-4 flex">
                                    <Avatar className="w-8 h-8">
                                        <AvatarImage
                                            className="w-8 h-8"
                                            src={`https://github.com/${plugin.owner}.png`}
                                        />
                                        {/* <AvatarFallback>CN</AvatarFallback> */}
                                    </Avatar>
                                    <span className="ml-2 my-auto">
                                        <span className="font-medium">
                                            {plugin.owner}
                                        </span>{" "}
                                        <span className="font-light">
                                            published on
                                        </span>
                                        {plugin.repo}
                                    </span>
                                </div>
                            </div>
                            <hr className="w-full mt-5 mb-5" />
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
