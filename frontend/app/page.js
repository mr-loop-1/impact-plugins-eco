"use client";
import Image from "next/image";
import Header from "./header";
import Search from "./search";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getPlugins } from "@/api/plugins";

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
                        <li key={plugin.id}>
                            <div className="">
                                <div className="flex justify-between">
                                    <span>
                                        <span className="text-2xl font-bold tracking-tight">
                                            {plugin.name}
                                        </span>
                                        <span className="ml-2 text-sm text-gray-600 tracking-tight">
                                            @{plugin.scope}
                                        </span>
                                    </span>
                                    <span
                                        className={clsx(
                                            "ml-3 my-auto inline text-sm font-bold rounded text-white px-1 ",
                                            plugin.domain == "standard" &&
                                                "bg-lime-600",
                                            plugin.domain == "community" &&
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
