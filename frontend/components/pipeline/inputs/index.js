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
import AddInputParam from "./add";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { InputParamError } from "@/components/messages";
import clsx from "clsx";

export default function InputBox({
    userInputs,
    changeUserInputs,
    allParams,
    errors,
}) {
    return (
        <Card
            className={clsx(
                "p-4 w-full shadow-lime-300 shadow-sm",
                errors.length && "shadow-amber-300 shadow-sm"
            )}
        >
            <span className="font-bold tracking-tighter">Input Parameters</span>
            <ul className="mt-3">
                {userInputs.length ? (
                    userInputs.map((userInput) => {
                        return (
                            <li key={userInput.id}>
                                <Popover>
                                    <PopoverTrigger className="hover:bg-gray-50">
                                        - {userInput.name}
                                    </PopoverTrigger>
                                    <PopoverContent>
                                        {userInput.description}
                                    </PopoverContent>
                                </Popover>
                                <span
                                    className="ml-3 inline text-sm font-medium text-red-600 cursor-pointer underline"
                                    onClick={() => {
                                        changeUserInputs((curentInputs) =>
                                            curentInputs.filter(
                                                (inputItem) =>
                                                    inputItem.id != userInput.id
                                            )
                                        );
                                    }}
                                >
                                    delete
                                </span>
                            </li>
                        );
                    })
                ) : (
                    <span className="">no parameters selected</span>
                )}
            </ul>

            <div className="mt-5">
                <AddInputParam
                    changeUserInputs={changeUserInputs}
                    leftInputs={allParams.filter((inputParam) => {
                        if (
                            userInputs.find((userInput) => {
                                return userInput.id == inputParam.id;
                            })
                        )
                            return false;
                        return true;
                    })}
                />
            </div>
            <div className="mt-5">
                <InputParamError errors={errors} />
            </div>
        </Card>
    );
}
