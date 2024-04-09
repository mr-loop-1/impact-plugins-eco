"use client";
import Image from "next/image";
import Header from "./header";
import Search from "./search";
import { useEffect, useState } from "react";

import { getParams } from "@/api/params";

export default function Home() {
    const [search, setSearch] = useState("");
    const masterData = getParams();
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
                            <div className="mt-3 mb-5">
                                <div className="flex">
                                    <span>
                                        <span className="text-2xl font-bold tracking-tight">
                                            {plugin.name}
                                        </span>
                                        <span className="ml-2 text-sm text-gray-600 tracking-tight">
                                            {plugin.scope}
                                        </span>
                                    </span>
                                </div>
                                <div className="mt-4 text-left text-sm text-gray-800">
                                    {plugin.description}
                                </div>
                                <br />
                                unit - {plugin.unit}
                                <br />
                                aggregation -{" "}
                                {plugin?.aggregation
                                    ? plugin?.aggregation
                                    : "unknown"}
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
