"use client";

import { useEffect, useState } from "react";
import PipelineHelper from "@/components/pipeline/page";
import { getPlugins } from "@/api/plugins";
import { getParams } from "@/api/params";
import PipelineHeader from "./header";

export default function Home() {
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
        <div className="m-5 font-sans">
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
