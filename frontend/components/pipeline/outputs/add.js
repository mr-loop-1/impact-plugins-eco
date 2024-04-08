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

let frameworks = getParams();

export default function AddOutput({ changeExplicitOutputs, currentOutputs }) {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("");

    frameworks = frameworks.filter((fr) => {
        if (currentOutputs.find((cr) => cr.id == fr.id) != 1) return true;
        return false;
    });

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-[200px] justify-between"
                >
                    Select framework...
                    <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
                <Command>
                    <CommandInput
                        placeholder="Search framework..."
                        className="h-9"
                    />
                    <CommandEmpty>No framework found.</CommandEmpty>
                    <CommandGroup>
                        <CommandList>
                            {frameworks.map((framework) => (
                                <CommandItem
                                    key={framework.id}
                                    value={framework.name}
                                    onSelect={(currentValue) => {
                                        setValue(
                                            currentValue === value
                                                ? ""
                                                : currentValue
                                        );
                                        changeExplicitOutputs((inp) => [
                                            ...inp,
                                            framework,
                                        ]);
                                        setOpen(false);
                                    }}
                                >
                                    {framework.name}
                                    <CheckIcon
                                        className={cn(
                                            "ml-auto h-4 w-4",
                                            value === framework.name
                                                ? "opacity-100"
                                                : "opacity-0"
                                        )}
                                    />
                                </CommandItem>
                            ))}
                        </CommandList>
                    </CommandGroup>
                </Command>
            </PopoverContent>
        </Popover>
    );
}
