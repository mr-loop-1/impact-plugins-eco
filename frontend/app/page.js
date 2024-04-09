"use client";
import Image from "next/image";
import Header from "./header";
import Search from "./search";
import { useEffect, useState } from "react";

export default function Home() {
    const [search, setSearch] = useState("");
    const [data, setData] = useState([]);
    const [doSearch, setDoSearch] = useState(false);

    useEffect(() => {
        try {
            const paginatedData = [];
        } catch (err) {
            console.log(err);
        }
    }, []);
    return (
        <div className="w-full lg:w-[60%] p-5 font-sans">
            <hr className="w-full" />
            <Search
                search={search}
                setSearch={setSearch}
                setDoSearch={setDoSearch}
            />

            <Header />
            {/* <PipelineHelper allParams={allParams} allPlugins={allPlugins} /> */}
            {/* {isLoading ? (
        <PipelineHelper allParams={allParams} allPlugins={allPlugins} />
    ) : (
        <LoadingBlocker />
    )} */}
        </div>
    );
}
