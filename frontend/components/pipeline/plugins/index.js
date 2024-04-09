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
import { PluginGenError, PluginParamError } from "@/components/messages";
import clsx from "clsx";
import Image from "next/image";

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
    pluginGenErrors,
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
            <ul className="mt-4 ">
                {userPlugins.length ? (
                    userPlugins.map((input, idx, arr) => {
                        return (
                            <li>
                                <div className={clsx(idx == 0 && "hidden")}>
                                    <Image
                                        src="pip.svg"
                                        className="mx-auto"
                                        height={20}
                                        width={20}
                                    />
                                </div>
                                <div className="bg-stone-100 py-1 px-1">
                                    <ArrowUpIcon
                                        className={clsx(
                                            "inline h-5 w-5 cursor-pointer hover:h-7 hover:w-7 mr-3",
                                            idx == 0 && "hidden"
                                        )}
                                        onClick={() => {
                                            changeUserPlugins(
                                                (currentPlugins) => [
                                                    ...swapAdjacent(
                                                        currentPlugins,
                                                        idx,
                                                        "back"
                                                    ),
                                                ]
                                            );
                                        }}
                                    />
                                    <ArrowDownIcon
                                        className={clsx(
                                            "inline h-5 w-5 cursor-pointer hover:h-7 hover:w-7 mr-3",
                                            idx == arr.length - 1 && "hidden"
                                        )}
                                        onClick={() => {
                                            changeUserPlugins(
                                                (currentPlugins) => [
                                                    ...swapAdjacent(
                                                        currentPlugins,
                                                        idx,
                                                        "front"
                                                    ),
                                                ]
                                            );
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
                                        className={clsx(
                                            "ml-3 inline text-sm font-bold rounded text-white px-1 ",
                                            input.domain == "standard" &&
                                                "bg-lime-600",
                                            input.domain == "universe" &&
                                                "bg-orange-600",
                                            input.domain == "unofficial" &&
                                                "bg-blue-600"
                                        )}
                                    >
                                        {input.domain}
                                    </span>
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
                                        (error) =>
                                            error.targetPluginIndex == idx
                                    ) && (
                                        <div className="mt-1 mb-3">
                                            <PluginParamError
                                                error={errors.find(
                                                    (error) =>
                                                        error.targetPluginIndex ==
                                                        idx
                                                )}
                                            />
                                        </div>
                                    )}
                                </div>
                            </li>
                        );
                    })
                ) : (
                    <span className="tracking-tight">no plugins added</span>
                )}
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
            <div className="mt-5">
                <PluginGenError errors={pluginGenErrors} />
            </div>
        </Card>
    );
}
