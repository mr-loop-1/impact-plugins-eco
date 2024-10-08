import * as React from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import AddInputParam from "./add";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { InputParamError } from "@/components/messages";
import clsx from "clsx";
import Link from "next/link";

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
            <span className="font-bold text-xl tracking-tighter">
                Input Parameters
            </span>
            <ul className="mt-3 bg-stone-100 py-1 px-1">
                {userInputs.length ? (
                    userInputs.map((userInput) => {
                        return (
                            <li key={userInput.id}>
                                <Popover>
                                    <PopoverTrigger className="hover:bg-gray-50 text-left break-all  font-mono">
                                        - {userInput.name}
                                    </PopoverTrigger>
                                    <PopoverContent className="ml-10 text-left break-all underline">
                                        <Link
                                            href={`${process.env.NEXT_PUBLIC_SITE_URL}/params#${userInput.id}`}
                                        >
                                            Click for Parameter Details
                                        </Link>
                                    </PopoverContent>
                                </Popover>
                                <span className="ml-2 text-xs font-semibold tracking-tight text-gray-500">
                                    {userInput.scope}
                                </span>
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
                    <span className="tracking-tight">
                        no parameters selected
                    </span>
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
