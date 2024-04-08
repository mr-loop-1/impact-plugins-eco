export const compute = (
    availableInputParams,
    appliedPlugins,
    explicitOutputParams,
    allParams,
    allPlugins
) => {
    /**
     * ? there are 2 types of errors
     * ? 1. that no plugin is giving the given output param
     * ? 2. that no available input is able to staisfy the plugin demands
     */
    const errors = {
        inputErrors: [],
        pluginErrors: [],
        outputErrors: [],
        pluginGenErrors: [],
    };

    const errorId = checkPluginInlet(
        availableInputParams,
        appliedPlugins,
        errors,
        allParams
    );
    checkPluginOutlet(
        availableInputParams,
        appliedPlugins,
        explicitOutputParams,
        errorId + 1,
        errors,
        allPlugins
    );

    return errors;
};

const checkPluginInlet = (
    availableInputParams,
    appliedPlugins,
    errors,
    allParams
) => {
    // const errors = [];
    let errorId = 1;
    appliedPlugins.forEach((appliedPlugin, pluginIdx) => {
        const requiredInputParams = [];
        let require = false;
        for (const pluginInputParam of appliedPlugin.inputParams) {
            if (
                !availableInputParams.find(
                    (availableInputParam) =>
                        availableInputParam.id == pluginInputParam.id
                )
            ) {
                require = true;
                requiredInputParams.push(pluginInputParam);
            }
        }
        if (!require) {
            const newInputParams = new Set();

            availableInputParams.forEach((availableInputParam) =>
                newInputParams.add(availableInputParam.id)
            );
            appliedPlugin.outputParams.forEach((pluginOutputParam) => {
                newInputParams.add(pluginOutputParam.id);
            });

            availableInputParams = [...newInputParams].map((id) =>
                allParams.find((param) => param.id == id)
            );
        }
        if (require) {
            errors.inputErrors.push({
                errorId,
                type: 1,
                requiredInputParams,
                targetPlugin: appliedPlugin,
            });
            errors.pluginErrors.push({
                errorId,
                type: 2,
                requiredInputParams,
                targetPlugin: appliedPlugin,
                targetPluginIndex: pluginIdx,
            });
            errorId++;
        }
    });
    return errorId;
};

const checkPluginOutlet = (
    availableInputParams,
    appliedPlugins,
    explicitOutputParams,
    errorId,
    errors,
    allPlugins
) => {
    // const errors = [];
    const requiredPlugins = [];
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
                targetPlugin: existsPlugin,
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
                errors.outputErrors.push({
                    errorId: errorId,
                    type: 6,
                    targetOutputIndex: idx,
                    targetOutputParam: explicitOutputParam,
                });
                return;
            }

            const freqCount = new Array(allMatchPlugins.length);

            allMatchPlugins.forEach((matchPlugin, index) => {
                freqCount[index] = {
                    missingInputs: matchPlugin.inputParams.filter(
                        (inputParam) => {
                            if (
                                availableInputParams.find(
                                    (availableInputParam) =>
                                        availableInputParam.id == inputParam.id
                                )
                            ) {
                                return false;
                            }
                            return true;
                        }
                    ),
                    index: index,
                };
            });

            freqCount.sort(
                (a, b) => a.missingInputs.length - b.missingInputs.length
            );
            const matchedPlugin = allMatchPlugins[freqCount[0].index];

            if (freqCount[0].missingInputs.length) {
                //? plugin missing, that means some inputs are also missing
                errors.outputErrors.push({
                    errorId: errorId,
                    type: 4,
                    targetOutputIndex: idx,
                    requiredPlugin: matchedPlugin,
                    requiredInputs: freqCount[0].missingInputs,
                });
                errors.pluginGenErrors.push({
                    errorId: errorId,
                    type: 4,
                    targetOutputParam: explicitOutputParam,
                    requiredPlugin: matchedPlugin,
                    requiredInputs: freqCount[0].missingInputs,
                });
                errors.inputErrors.push({
                    errorId: errorId,
                    type: 4,
                    targetOutputParam: explicitOutputParam,
                    requiredPlugin: matchedPlugin,
                    requiredInputParams: freqCount[0].missingInputs,
                });
                errorId++;
            } else {
                //? that means all inputs are present
                errors.outputErrors.push({
                    errorId: errorId,
                    type: 5,
                    targetOutputIndex: idx,
                    requiredPlugin: matchedPlugin,
                });
                errors.pluginGenErrors.push({
                    errorId: errorId,
                    type: 4,
                    targetOutputParam: explicitOutputParam,
                    requiredPlugin: matchedPlugin,
                });
                errorId++;
            }
        }
    });

    return errors;
};
