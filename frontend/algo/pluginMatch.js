const checkPluginOutlet = (
    availableInputParams,
    appliedPlugins,
    explicitOutputParams,
    errorId,
    errors,
    allPlugins,
    allParams
) => {
    const unresolvedOutputs = [];

    explicitOutputParams.forEach((explicitOutputParam, idx) => {
        const existsPlugin = appliedPlugins.find((appliedPlugin) => {
            if (
                appliedPlugin.outputParams.find((outputParam) => {
                    return outputParam.id == explicitOutputParam.id;
                })
            ) {
                return true;
            }
            return false;
        });
        if (existsPlugin) {
            //? then there is some input error only
            errors.outputErrors.push({
                errorId: errorId,
                type: 3,
                targetOutputParam: explicitOutputParam,
                targetOutputIndex: idx,
                requiredPlugin: existsPlugin,
            });
            errorId++;
        } else {
            const allMatchPlugins = allPlugins.filter((plugin) => {
                if (
                    plugin.outputParams.find(
                        (param) => param.id == explicitOutputParam.id
                    )
                ) {
                    return true;
                }
                return false;
            });

            if (!allMatchPlugins.length) {
                //? No plugin can satisfy this
                errors.outputErrors.push({
                    errorId: errorId,
                    type: 6,
                    targetOutputIndex: idx,
                    targetOutputParam: explicitOutputParam,
                });
                return;
            }

            unresolvedPlugins.push({
                outputParamIndex: idx,
                matchedPlugins: allMatchPlugins,
            });

            // const freqCount = new Array(allMatchPlugins.length);

            // allMatchPlugins.forEach((matchPlugin, index) => {
            //     freqCount[index] = {
            //         missingInputs: matchPlugin.inputParams.filter(
            //             (inputParam) => {
            //                 if (
            //                     availableInputParams.find(
            //                         (availableInputParam) =>
            //                             availableInputParam.id == inputParam.id
            //                     )
            //                 ) {
            //                     return false;
            //                 }
            //                 return true;
            //             }
            //         ),
            //         index: index,
            //     };
            // });

            // freqCount.sort(
            //     (a, b) => a.missingInputs.length - b.missingInputs.length
            // );
            // const matchedPlugin = allMatchPlugins[freqCount[0].index];

            // if (freqCount[0].missingInputs.length) {
            //     //? plugin missing, that means some inputs are also missing
            //     errors.outputErrors.push({
            //         errorId: errorId,
            //         type: 4,
            //         targetOutputIndex: idx,
            //         targetOutputParam: explicitOutputParam,
            //         requiredPlugin: matchedPlugin,
            //         requiredInputs: freqCount[0].missingInputs,
            //     });
            //     errors.pluginGenErrors.push({
            //         errorId: errorId,
            //         type: 4,
            //         targetOutputParam: explicitOutputParam,
            //         requiredPlugin: matchedPlugin,
            //         requiredInputs: freqCount[0].missingInputs,
            //     });
            //     errors.inputErrors.push({
            //         errorId: errorId,
            //         type: 4,
            //         targetOutputParam: explicitOutputParam,
            //         requiredPlugin: matchedPlugin,
            //         requiredInputParams: freqCount[0].missingInputs,
            //     });
            //     errorId++;
            // } else {
            //     //? that means all inputs are present
            //     errors.outputErrors.push({
            //         errorId: errorId,
            //         type: 5,
            //         targetOutputIndex: idx,
            //         targetOutputParam: explicitOutputParam,
            //         requiredPlugin: matchedPlugin,
            //     });
            //     errors.pluginGenErrors.push({
            //         errorId: errorId,
            //         type: 4,
            //         targetOutputParam: explicitOutputParam,
            //         requiredPlugin: matchedPlugin,
            //     });
            //     errorId++;
            // }
        }
    });

    return errors;
};
