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
import { OutputError } from "@/components/messages";
import Link from "next/link";

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
            <ul className="bg-stone-100 py-1 px-1 mb-2">
                {implicitOutputParams.length ? (
                    implicitOutputParams.map((input) => {
                        return (
                            <li key={input.id} className="">
                                <Popover>
                                    <PopoverTrigger className="hover:bg-gray-50 text-left break-all font-mono">
                                        - {input.name}
                                    </PopoverTrigger>
                                    <PopoverContent className="ml-10 text-left break-all underline">
                                        <Link
                                            href={`${process.env.VERCEL_URL}/params#${input.id}`}
                                        >
                                            Click for Parameter Details
                                        </Link>
                                    </PopoverContent>
                                </Popover>
                                <span className="ml-2 text-xs font-semibold tracking-tight text-gray-500">
                                    {input.scope}
                                </span>
                            </li>
                        );
                    })
                ) : (
                    <span className="tracking-tight">nothign to show</span>
                )}
            </ul>
            {explicitOutputParams.length != 0 && (
                <div className="mt-3 mb-1 font-medium">Desired</div>
            )}
            <ul className="bg-stone-100 py-1 px-1">
                {explicitOutputParams.map((input, idx) => {
                    return (
                        <li>
                            <Popover>
                                <PopoverTrigger className="hover:bg-gray-50  font-mono">
                                    - {input.name}
                                </PopoverTrigger>
                                <PopoverContent className="ml-10">
                                    {input.description}
                                </PopoverContent>
                            </Popover>
                            <span className="ml-2 text-xs font-semibold tracking-tight text-gray-500">
                                {input.scope}
                            </span>
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
                            {errors.find(
                                (error) => error.targetOutputIndex == idx
                            ) && (
                                <div className="mt-1 mb-3">
                                    <OutputError
                                        error={errors.find(
                                            (error) =>
                                                error.targetOutputIndex == idx
                                        )}
                                    />
                                </div>
                            )}
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
