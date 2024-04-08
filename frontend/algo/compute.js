export default compute = (
    availableInputParams,
    appliedPlugins,
    explicitOutputParams
) => {
    /**
     * ? there are 2 types of errors
     * ? 1. that no plugin is giving the given output param
     * ? 2. that no available input is able to staisfy the plugin demands
     */

    const upperErrors = checkPluginInlet(availableInputParams, appliedPlugins);
    const lowerErrors = checkPluginOutlet(
        appliedPlugins,
        explicitOutputParams,
        upperErrors[upperErrors.length - 1].errorId + 1
    );

    return [...upperErrors, ...lowerErrors];
};

const checkPluginInlet = (availableInputParams, appliedPlugins) => {
    const errors = [];
    let errorId = 1;
    appliedPlugins.forEach((appliedPlugin, pluginIdx) => {
        const requiredInputParams = [];
        let require = false;
        for (const pluginInputParam of appliedPlugin.inputParams) {
            if (
                availableInputParams.find(
                    (availableInputParam) =>
                        availableInputParam.id == pluginInputParam.id
                ) == -1
            ) {
                require = true;
                requiredInputParams.push(pluginInputParam);
            }
        }
        if (require) {
            errors.push({
                errorId,
                type: 1,
                requiredInputParams,
                targetPlugin: appliedPlugin,
            });
            errorId++;
            errors.push({
                errorId,
                type: 2,
                requiredInputParams,
                targetPlugin: appliedPlugin,
                targetPluginIndex: pluginIdx,
            });
            errorId++;
        }
    });
};

const checkPluginOutlet = (appliedPlugins, explicitOutputParams, errorId) => {
    const errors = [];
    return errors;
};
