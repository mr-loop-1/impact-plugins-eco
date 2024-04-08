"use client";
import * as React from "react";
import { useState } from "react";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";

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

export default function AddOutput({ changeExplicitOutputParams, leftParams }) {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("");

    // frameworks = frameworks.filter((fr) => {
    //     if (currentOutputs.find((cr) => cr.id == fr.id) != 1) return true;
    //     return false;
    // });

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-full justify-between"
                >
                    Select Output Params...
                    <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[--radix-popover-trigger-width] max-h-[--radix-popover-content-available-height]  p-0">
                <Command>
                    <CommandInput
                        placeholder="Search parameters..."
                        className="h-9 font-medium"
                    />
                    <CommandEmpty>No params found.</CommandEmpty>
                    <CommandGroup>
                        <CommandList>
                            {leftParams.map((framework) => (
                                <CommandItem
                                    className="font-medium"
                                    key={framework.id}
                                    value={framework.name}
                                    onSelect={(currentValue) => {
                                        setValue(
                                            currentValue === value
                                                ? ""
                                                : currentValue
                                        );
                                        changeExplicitOutputParams((inp) => [
                                            ...inp,
                                            framework,
                                        ]);
                                        setOpen(false);
                                    }}
                                >
                                    {framework.name}
                                </CommandItem>
                            ))}
                        </CommandList>
                    </CommandGroup>
                </Command>
            </PopoverContent>
        </Popover>
    );
}
