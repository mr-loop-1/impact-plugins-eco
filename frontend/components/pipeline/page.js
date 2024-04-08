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
    const [isLoading, setIsLoading] = useState(true);
    const [userInputs, changeUserInputs] = useState([]);
    const [userPlugins, changeUserPlugins] = useState([]);
    const [implicitOutputs, changeImplicitOutputs] = useState([]);
    const [explicitOutputs, changeExplicitOutputs] = useState([]);
    const [errors, changeErrors] = useState([]);

    useEffect(() => {
        setIsLoading(() => true);
        changeErrors([]);
        changeImplicitOutputs((impl) =>
            getImplicitOutputs(userInputs, userPlugins, explicitOutputs)
        );
        /**
         * get errors again from the algo and set here
         */
        setIsLoading(() => false);
    }, [userInputs, userPlugins, explicitOutputs]);

    return (
        <main className="">
            <Card className="w-[60%] mx-auto">
                <InputBox
                    userInputs={userInputs}
                    changeUserInputs={changeUserInputs}
                    allParams={allParams}
                    allPlugins={allPlugins}
                    errors={errors}
                />
                <PluginBox
                    userPlugins={userPlugins}
                    changeUserPlugins={changeUserPlugins}
                    allParams={allParams}
                    allPlugins={allPlugins}
                    errors={errors}
                />
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
