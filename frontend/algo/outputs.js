import { getParams } from "@/api/params";

export const getImplicitOutputs = (
    availableInputParams,
    appliedPlugins,
    allParams
) => {
    const outputs = new Set();
    const addedOutputs = [];

    const addedInfo = [];

    availableInputParams.forEach((availableInputParam) =>
        outputs.add(availableInputParam.id)
    );

    appliedPlugins.forEach((plugin, idx) => {
        let fail = false;
        for (const pluginInputParam of plugin.inputParams) {
            if (
                availableInputParams.find((availableInputParam) => {
                    return availableInputParam.id == pluginInputParam.id;
                })
            ) {
            } else {
                console.log("here2", pluginInputParam.name);
                const foundInput = addedOutputs.find((addedOutput) => {
                    return addedOutput.id == pluginInputParam.id;
                });
                if (foundInput) {
                    console.log("here3", pluginInputParam.name);
                    addedInfo.push({
                        targetPluginIndex: idx,
                        sourceInput: pluginInputParam,
                        sourcePlugin: foundInput.sourcePlugin,
                    });
                } else {
                    fail = true;
                }
            }
        }
        if (!fail) {
            plugin.outputParams.forEach((pluginOutputParam) => {
                outputs.add(pluginOutputParam.id);
            });
            plugin.outputParams.forEach((pluginOutputParam) => {
                addedOutputs.push({
                    ...pluginOutputParam,
                    sourcePlugin: plugin,
                });
            });
        }
    });

    console.log(
        "aaaaaaaa",
        [...outputs].map((id) => allParams.find((param) => param.id == id))
    );
    return {
        output: [...outputs].map((id) =>
            allParams.find((param) => param.id == id)
        ),
        info: addedInfo,
    };
    console.log("🚀 ~ addedInfo:", addedInfo);
};
