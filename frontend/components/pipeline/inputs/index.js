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

export default function InputBox({
    userInputs,
    changeUserInputs,
    allParams,
    errors,
}) {
    return (
        <Card className="px-10 py-10">
            <span className="text-bold">Input Parameters</span>
            <ul>
                {userInputs.map((userInput) => {
                    return (
                        <li>
                            <Popover>
                                <PopoverTrigger className="hover:bg-gray-400">
                                    {userInput.name}
                                </PopoverTrigger>
                                <PopoverContent>
                                    {userInput.description}
                                </PopoverContent>
                            </Popover>
                            <Cross2Icon
                                className="inline"
                                onClick={() => {
                                    changeUserInputs((curentInputs) =>
                                        curentInputs.filter(
                                            (inputItem) =>
                                                inputItem.id != userInput.id
                                        )
                                    );
                                }}
                            />
                        </li>
                    );
                })}
            </ul>
            <div>
                <InputParamError errors={errors} />
            </div>
            <div className="mt-10 mb-10">
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
        </Card>
    );
}
