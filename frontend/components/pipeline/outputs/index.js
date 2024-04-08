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
        <div>
            <ul>
                {implicitOutputParams.map((input) => {
                    return (
                        <li>
                            <Popover>
                                <PopoverTrigger className="hover:bg-gray-400">
                                    {input.name}
                                </PopoverTrigger>
                                <PopoverContent>
                                    {input.description}
                                </PopoverContent>
                            </Popover>
                        </li>
                    );
                })}
                <hr />
                <hr />
                {explicitOutputParams.map((input) => {
                    return (
                        <li>
                            <Popover>
                                <PopoverTrigger className="hover:bg-gray-400">
                                    {input.name}
                                </PopoverTrigger>
                                <PopoverContent>
                                    {input.description}
                                </PopoverContent>
                            </Popover>
                            <Cross2Icon
                                className="inline"
                                onClick={() => {
                                    changeExplicitOutputParams((curentInputs) =>
                                        curentInputs.filter(
                                            (inputItem) =>
                                                inputItem.id != input.id
                                        )
                                    );
                                }}
                            />
                        </li>
                    );
                })}
            </ul>
            <div className="mt-10">
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
        </div>
    );
}
