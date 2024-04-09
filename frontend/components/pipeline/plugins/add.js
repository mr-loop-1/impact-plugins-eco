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
import { Button } from "@/components/ui/button";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { getParams } from "@/api/params";
import { getPlugins } from "@/api/plugins";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import clsx from "clsx";

export default function AddPlugin({ changeUserPlugins, leftPlugins }) {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("");

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-full justify-between"
                >
                    Add Plugins ...
                    <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[--radix-popover-trigger-width] max-h-[--radix-popover-content-available-height]  p-0">
                <Command>
                    <CommandInput
                        placeholder="Search plugins..."
                        className="h-9 font-semibold"
                    />
                    <CommandEmpty>No plugins found.</CommandEmpty>
                    <CommandGroup>
                        <CommandList>
                            {leftPlugins.map((framework) => (
                                <CommandItem
                                    className="font-medium"
                                    key={framework.id}
                                    value={
                                        framework.name + " " + framework.scope
                                    }
                                    onSelect={(currentValue) => {
                                        setValue(
                                            currentValue === value
                                                ? ""
                                                : currentValue
                                        );
                                        changeUserPlugins((inp) => [
                                            ...inp,
                                            framework,
                                        ]);
                                        setOpen(false);
                                    }}
                                >
                                    <Avatar className="w-4 h-4 mr-2">
                                        <AvatarImage
                                            className="w-4 h-4"
                                            src={`https://github.com/${framework.owner}.png`}
                                        />
                                        {/* <AvatarFallback>CN</AvatarFallback> */}
                                    </Avatar>
                                    {framework.name}
                                    <span className="ml-2 text-xs font-semibold tracking-tight text-gray-500">
                                        {framework.scope}
                                    </span>
                                    <div
                                        className={clsx(
                                            "ml-2 inline text-xs font-semibold tracking-tight rounded px-1 border-2",
                                            framework.domain == "standard" &&
                                                "text-lime-600 border-lime-600 border",
                                            framework.domain == "community" &&
                                                "text-orange-600 border-orange-600",
                                            framework.domain == "unofficial" &&
                                                "text-blue-600 border-blue-600"
                                        )}
                                    >
                                        {framework.domain}
                                    </div>
                                </CommandItem>
                            ))}
                        </CommandList>
                    </CommandGroup>
                </Command>
            </PopoverContent>
        </Popover>
    );
}
