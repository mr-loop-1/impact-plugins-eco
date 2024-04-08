export default getImplicitOutputs = (availableInputParams, appliedPlugins) => {
    const outputs = new Set();

    for (const plugin of appliedPlugins) {
        let fail = false;
        for (const pluginInputParam of plugin.inputParams) {
            if (
                availableInputParams.find((availableInputParam) => {
                    availableInputParam.id == pluginInputParam.id;
                }) == -1
            ) {
                fail = true;
            }
        }
        if (!fail) {
            plugin.outputParams.forEach((pluginOutputParam) => {
                outputs.add(pluginOutputParam);
            });
        }
    }

    return outputs;
};
