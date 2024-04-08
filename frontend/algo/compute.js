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
};

const checkPluginInlet = (availableInputParams, appliedPlugins) => {
    const errors = [];
    appliedPlugins.forEach((appliedPlugin, pluginIdx) => {
        for (const pluginInputParam of appliedPlugin.inputParams) {
            if (
                availableInputParams.find(
                    (availableInputParam) =>
                        availableInputParam.id == pluginInputParam.id
                ) == -1
            ) {
                errors.push({
                    type: 1,
                });
            }
        }
    });
};
