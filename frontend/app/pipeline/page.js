"use client";
import InputBox from "@/components/pipeline/inputs/index";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { useState } from "react";

export default function Home() {
    const [inputs, changeInputs] = useState([]);
    const [plugins, changePlugins] = useState([]);
    const [outputs, changeOutputs] = useState([]);

    return (
        <main className="">
            <Card className="w-[60%] mx-auto">
                <InputBox inputs={inputs} changeInputs={changeInputs} />
            </Card>
        </main>
    );
}
