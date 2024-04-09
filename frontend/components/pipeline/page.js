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
    const [pluginInfo, changepluginInfo] = useState([]);
    console.log("🚀 ~ Pipeline ~ pluginInfo:", pluginInfo);
    useEffect(() => {
        setIsLoading(() => true);
        changeErrors((impl) => {
            return {
                inputErrors: [],
                pluginErrors: [],
                outputErrors: [],
                pluginGenErrors: [],
            };
        });
        const res = getImplicitOutputs(userInputs, userPlugins, allParams);
        console.log("🚀 ~ useEffect ~ res:", res);
        changeImplicitOutputParams((impl) => [...res.output]);
        console.log("implll", implicitOutputParams);
        changepluginInfo((impl) => [...res.info]);
        // const err = ;
        changeErrors((impl) => ({
            ...compute(
                userInputs,
                userPlugins,
                explicitOutputParams.filter((explicitOutput) => {
                    if (
                        res.output.find(
                            (implicitOutput) =>
                                implicitOutput.id == explicitOutput.id
                        )
                    ) {
                        return false;
                    }
                    return true;
                }),
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
                    pluginInfo={pluginInfo}
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
