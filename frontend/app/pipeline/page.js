"use client";

import { useEffect, useState } from "react";
import PipelineHelper from "@/components/pipeline/page";
import { getPlugins } from "@/api/plugins";
import { getParams } from "@/api/params";
import PipelineHeader from "./header";
import { redirect } from "next/navigation";

export default function Home() {
    redirect("/");
    const [isLoading, setIsLoading] = useState(true);

    let allParams, allPlugins;

    useEffect(() => {
        allParams = getParams();
        allPlugins = getPlugins();

        setIsLoading(() => false);
    });

    allParams = getParams();
    allPlugins = getPlugins();

    return (
        <div className="w-full lg:w-[60%] p-5 font-sans">
            <hr className="w-full" />
            <PipelineHeader />
            <PipelineHelper allParams={allParams} allPlugins={allPlugins} />
            {/* {isLoading ? (
                <PipelineHelper allParams={allParams} allPlugins={allPlugins} />
            ) : (
                <LoadingBlocker />
            )} */}
        </div>
    );
}
