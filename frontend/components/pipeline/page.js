"use client";
import { compute } from "@/algo/compute";
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
    const [implicitOutputParams, changeImplicitOutputParams] = useState([]);
    const [explicitOutputParams, changeExplicitOutputParams] = useState([]);
    const [errors, changeErrors] = useState({
        inputErrors: [],
        pluginErrors: [],
        pluginGenErrors: [],
        outputErrors: [],
    });
    useEffect(() => {
        setIsLoading(() => true);
        changeErrors(() => ({
            inputErrors: [],
            pluginErrors: [],
            outputErrors: [],
            pluginGenErrors: [],
        }));
        changeImplicitOutputParams((impl) => [
            ...getImplicitOutputs(userInputs, userPlugins, allParams),
        ]);
        changeErrors((err) => ({
            ...compute(
                userInputs,
                userPlugins,
                explicitOutputParams,
                allParams,
                allPlugins
            ),
        }));
        /**
         * get errors again from the algo and set here
         */
        setIsLoading(() => false);
    }, [userInputs, userPlugins, explicitOutputParams]);

    return (
        <main className=" mt-10">
            <div className="">
                <InputBox
                    userInputs={userInputs}
                    changeUserInputs={changeUserInputs}
                    allParams={allParams}
                    allPlugins={allPlugins}
                    errors={errors.inputErrors}
                />
                <PluginBox
                    userPlugins={userPlugins}
                    changeUserPlugins={changeUserPlugins}
                    allParams={allParams}
                    allPlugins={allPlugins}
                    errors={errors.pluginErrors}
                    pluginGenErrors={errors.pluginGenErrors}
                />
                <OutputBox
                    implicitOutputParams={implicitOutputParams}
                    explicitOutputParams={explicitOutputParams.filter(
                        (explicitOutput) => {
                            if (
                                implicitOutputParams.find(
                                    (implicitOutput) =>
                                        implicitOutput.id == explicitOutput.id
                                )
                            ) {
                                return false;
                            }
                            return true;
                        }
                    )}
                    changeExplicitOutputParams={changeExplicitOutputParams}
                    allParams={allParams}
                    errors={errors.outputErrors}
                />
            </div>
        </main>
    );
}
