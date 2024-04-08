"use client";
import * as React from "react";
import { useState } from "react";
import { CaretSortIcon, CheckIcon, Cross2Icon } from "@radix-ui/react-icons";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { getParams } from "@/api/params";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import AddOutput from "./add";
import clsx from "clsx";

export default function OutputBox({
    implicitOutputParams,
    explicitOutputParams,
    changeExplicitOutputParams,
    allParams,
    errors,
}) {
    const currentOutputParams = [
        ...implicitOutputParams,
        ...explicitOutputParams,
    ];
    return (
        <Card
            className={clsx(
                "p-4 mt-5 w-full shadow-lime-300 shadow-sm mb-48",
                errors.length && "shadow-amber-300 shadow-sm"
            )}
        >
            <span className="font-bold text-xl tracking-tighter">
                Output Parameters
            </span>
            <div className="mt-3 mb-1 font-medium">Implicit</div>
            <ul className="bg-stone-100 py-1 px-1">
                {implicitOutputParams.length ? (
                    implicitOutputParams.map((input) => {
                        return (
                            <li key={input.id} className="">
                                <Popover>
                                    <PopoverTrigger className="hover:bg-gray-50">
                                        - {input.name}
                                    </PopoverTrigger>
                                    <PopoverContent className="ml-10">
                                        {input.description}
                                    </PopoverContent>
                                </Popover>
                            </li>
                        );
                    })
                ) : (
                    <span className="tracking-tight">nothign to show</span>
                )}
            </ul>
            {explicitOutputParams.length ? (
                <div className="mt-3 mb-1 font-medium">Desired</div>
            ) : (
                <></>
            )}
            <ul className="bg-stone-100 py-1 px-1">
                {explicitOutputParams.map((input) => {
                    return (
                        <li>
                            <Popover>
                                <PopoverTrigger className="hover:bg-gray-50">
                                    - {input.name}
                                </PopoverTrigger>
                                <PopoverContent className="ml-10">
                                    {input.description}
                                </PopoverContent>
                            </Popover>
                            <span
                                className="ml-3 inline text-sm font-medium text-red-600 cursor-pointer underline"
                                onClick={() => {
                                    changeExplicitOutputParams((curentInputs) =>
                                        curentInputs.filter(
                                            (inputItem) =>
                                                inputItem.id != input.id
                                        )
                                    );
                                }}
                            >
                                delete
                            </span>
                        </li>
                    );
                })}
            </ul>
            <div className="mt-5">
                <AddOutput
                    changeExplicitOutputParams={changeExplicitOutputParams}
                    leftParams={allParams.filter((outputParam) => {
                        if (
                            currentOutputParams.find((currentOutputParam) => {
                                return currentOutputParam.id == outputParam.id;
                            })
                        )
                            return false;
                        return true;
                    })}
                />
            </div>
        </Card>
    );
}
