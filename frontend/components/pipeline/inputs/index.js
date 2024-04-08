"use client";
import * as React from "react";
import { useState } from "react";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";

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

const frameworks = getParams();

export default function InputBox({ inputs, changeInputs }) {
    console.log("🚀 ~ InputBox ~ inputs:", inputs);
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("");

    return (
        <div>
            <ul>
                {inputs.map((input) => {
                    return (
                        <li>
                            <Popover>
                                <PopoverTrigger className="hover:bg-gray-400">
                                    {input}
                                </PopoverTrigger>
                                <PopoverContent>
                                    Place content for the popover here.
                                </PopoverContent>
                            </Popover>
                        </li>
                    );
                })}
            </ul>
            <div className="mt-10">
                <AddInput changeInputs={changeInputs} />
            </div>
        </div>
    );
}
