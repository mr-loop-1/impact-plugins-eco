"use client";
import * as React from "react";
import { useState } from "react";
import {
    ArrowDownIcon,
    ArrowUpIcon,
    CaretSortIcon,
    CheckIcon,
    Cross2Icon,
} from "@radix-ui/react-icons";

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
import AddPlugin from "./add";

const frameworks = getParams();

function swapAdjacent(array, index, flow) {
    if (flow === "back" && index > 0) {
        const temp = array[index];
        array[index] = array[index - 1];
        array[index - 1] = temp;
    } else if (flow === "front" && index < array.length - 1) {
        const temp = array[index];
        array[index] = array[index + 1];
        array[index + 1] = temp;
    }
    console.log("🚀 ~ swapAdjacent ~ array:", array);
    return array;
}

export default function PluginBox({ plugins, changePlugins }) {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("");

    return (
        <div>
            <ul>
                {plugins.map((input, idx) => {
                    return (
                        <li>
                            <ArrowUpIcon
                                onClick={() => {
                                    changePlugins((currentPlugins) => [
                                        ...swapAdjacent(
                                            currentPlugins,
                                            idx,
                                            "back"
                                        ),
                                    ]);
                                }}
                            />
                            <ArrowDownIcon
                                onClick={() => {
                                    changePlugins((currentPlugins) => [
                                        ...swapAdjacent(
                                            currentPlugins,
                                            idx,
                                            "front"
                                        ),
                                    ]);
                                }}
                            />
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
                                    changePlugins((curentInputs) =>
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
                <AddPlugin changePlugins={changePlugins} />
            </div>
        </div>
    );
}