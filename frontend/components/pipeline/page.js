"use client";
import { getImplicitOutputs } from "@/algo/outputs";
import InputBox from "@/components/pipeline/inputs/index";
import OutputBox from "@/components/pipeline/outputs/index";
import PluginBox from "@/components/pipeline/plugins/index";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { useEffect, useState } from "react";

export default function Pipeline({ allParams, allPlugins }) {
    const [inputs, changeInputs] = useState([]);
    const [plugins, changePlugins] = useState([]);
    const [implicitOutputs, changeImplicitOutputs] = useState([]);
    const [explicitOutputs, changeExplicitOutputs] = useState([]);
    const [errors, changeErrors] = useState([]);

    useEffect(() => {
        changeErrors([]);
        changeImplicitOutputs((impl) =>
            getImplicitOutputs(inputs, plugins, explicitOutputs)
        );
    }, [inputs, plugins, explicitOutputs]);

    return (
        <main className="">
            <Card className="w-[60%] mx-auto">
                <InputBox
                    inputs={inputs}
                    changeInputs={changeInputs}
                    allParams={allParams}
                />
                <PluginBox plugins={plugins} changePlugins={changePlugins} />
                <OutputBox
                    implicitOutputs={implicitOutputs}
                    explicitOutputs={explicitOutputs.filter((exp) => {
                        if (implicitOutputs.find((impl) => impl.id == exp.id)) {
                            return false;
                        }
                        return true;
                    })}
                    changeExplicitOutputs={changeExplicitOutputs}
                />
            </Card>
        </main>
    );
}
