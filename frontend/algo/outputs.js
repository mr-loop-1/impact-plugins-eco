import { getParams } from "@/api/params";

export const getImplicitOutputs = (
    availableInputParams,
    appliedPlugins,
    allParams
) => {
    const outputs = new Set();

    availableInputParams.forEach((availableInputParam) =>
        outputs.add(availableInputParam.id)
    );

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
                outputs.add(pluginOutputParam.id);
            });
        }
    }
    const exhaustiveParams = allParams;

    return [...outputs].map((id) =>
        exhaustiveParams.find((param) => param.id == id)
    );
};
