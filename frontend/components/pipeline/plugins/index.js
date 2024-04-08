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
        <div>
            <ul>
                {userPlugins.map((input, idx) => {
                    return (
                        <li>
                            <ArrowUpIcon
                                className="inline"
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
                                className="inline"
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
                                    changeUserPlugins((curentInputs) =>
                                        curentInputs.filter(
                                            (inputItem) =>
                                                inputItem.id != input.id
                                        )
                                    );
                                }}
                            />
                            {errors.find(
                                (error) => error.targetPluginIndex == idx
                            ) && (
                                <div>
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
            <div className="mt-10  mb-10">
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
        </div>
    );
}
