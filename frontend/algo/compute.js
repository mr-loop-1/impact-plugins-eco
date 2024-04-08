export const compute = (
    availableInputParams,
    appliedPlugins,
    explicitOutputParams
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
    };

    const errorId = checkPluginInlet(
        availableInputParams,
        appliedPlugins,
        errors
    );
    checkPluginOutlet(
        appliedPlugins,
        explicitOutputParams,
        errorId + 1,
        errors
    );

    return errors;
};

const checkPluginInlet = (availableInputParams, appliedPlugins, errors) => {
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
    appliedPlugins,
    explicitOutputParams,
    errorId,
    errors
) => {
    // const errors = [];
    return errors;
};
