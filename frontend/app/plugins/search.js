"use client";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { useParams } from "next/navigation";
import * as React from "react";

export default function Search({ search, setSearch }) {
    console.log("🚀 ~ Search ~ search:", search);
    return (
        <div className="mt-5 w-full h-12 flex justify-between">
            <div className="grow bg-stone-200 flex">
                <MagnifyingGlassIcon className="h-6 w-6 my-auto ml-4" />
                <input
                    value={search}
                    onChange={(e) => setSearch(() => e.target.value)}
                    className="ml-4 w-full bg-stone-200 px-4"
                ></input>
            </div>
            <div className="w-32 bg-lime-700 text-white flex cursor-pointer">
                <span
                    className="m-auto font-bold"
                    onClick={() => {
                        // setDoSearch((prev) => (prev ? false : true));
                    }}
                >
                    Search
                </span>
            </div>
        </div>
    );
}
