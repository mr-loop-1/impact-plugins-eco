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
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import AddPlugin from "./add";
import { PluginParamError } from "@/components/messages";
import clsx from "clsx";

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
    return array;
}

export default function PluginBox({
    userPlugins,
    changeUserPlugins,
    allParams,
    allPlugins,
    errors,
}) {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("");

    return (
        <Card
            className={clsx(
                "p-4 mt-5 w-full shadow-lime-300 shadow-sm",
                errors.length && "shadow-red-600 shadow-sm border-red-300"
            )}
        >
            <span className="font-bold text-xl tracking-tight">
                pipeline: ordered
            </span>
            <ul className="mt-4 bg-stone-100 py-1 px-1">
                {userPlugins.map((input, idx, arr) => {
                    return (
                        <li>
                            <ArrowUpIcon
                                className={clsx(
                                    "inline h-5 w-5 cursor-pointer hover:h-7 hover:w-7 mr-3",
                                    idx == 0 && "hidden"
                                )}
                                onClick={() => {
                                    changeUserPlugins((currentPlugins) => [
                                        ...swapAdjacent(
                                            currentPlugins,
                                            idx,
                                            "back"
                                        ),
                                    ]);
                                }}
                            />
                            <ArrowDownIcon
                                className={clsx(
                                    "inline h-5 w-5 cursor-pointer hover:h-7 hover:w-7 mr-3",
                                    idx == arr.length - 1 && "hidden"
                                )}
                                onClick={() => {
                                    changeUserPlugins((currentPlugins) => [
                                        ...swapAdjacent(
                                            currentPlugins,
                                            idx,
                                            "front"
                                        ),
                                    ]);
                                }}
                            />
                            <Popover>
                                <PopoverTrigger className="hover:bg-gray-50 ">
                                    {input.name}
                                </PopoverTrigger>
                                <PopoverContent className="ml-10">
                                    {input.description}
                                </PopoverContent>
                            </Popover>
                            <span
                                className="ml-3 inline text-sm font-medium text-red-600 cursor-pointer underline"
                                onClick={() => {
                                    changeUserPlugins((curentInputs) =>
                                        curentInputs.filter(
                                            (inputItem) =>
                                                inputItem.id != input.id
                                        )
                                    );
                                }}
                            >
                                remove
                            </span>
                            {errors.find(
                                (error) => error.targetPluginIndex == idx
                            ) && (
                                <div className="mt-1 mb-3">
                                    <PluginParamError
                                        error={errors.find(
                                            (error) =>
                                                error.targetPluginIndex == idx
                                        )}
                                    />
                                </div>
                            )}
                        </li>
                    );
                })}
            </ul>
            <div className="mt-5">
                <AddPlugin
                    changeUserPlugins={changeUserPlugins}
                    leftPlugins={allPlugins.filter((plugin) => {
                        if (
                            userPlugins.find((userPlugin) => {
                                return userPlugin.id == plugin.id;
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
