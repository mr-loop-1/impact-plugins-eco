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

export default function InputBox({ userInputs, changeUserInputs, allParams }) {
    return (
        <div>
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
        </div>
    );
}
