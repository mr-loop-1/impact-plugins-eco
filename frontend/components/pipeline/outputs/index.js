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
import AddInput from "../inputs";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import AddOutput from "./add";

const frameworks = getParams();

export default function OutputBox({
    implicitOutputs,
    explicitOutputs,
    changeExplicitOutputs,
}) {
    return (
        <div>
            <ul>
                {implicitOutputs.map((input) => {
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
                {explicitOutputs.map((input) => {
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
                                onClick={() => {
                                    changeExplicitOutputs((curentInputs) =>
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
                    changeExplicitOutputs={changeExplicitOutputs}
                    currentOutputs={[...implicitOutputs, ...explicitOutputs]}
                />
            </div>
        </div>
    );
}
