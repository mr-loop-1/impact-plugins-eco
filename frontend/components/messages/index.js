export const InputParamError = ({ errors }) => {
    return (
        <ul>
            {errors.map((error) => {
                return (
                    <li>
                        {`Error ${error.errorId}: plugin ${
                            error.targetPlugin.name
                        } requires the follwing input params - 
            ${error.requiredInputParams.map(
                (inputParams) => ` ${inputParams.name} `
            )}`}
                    </li>
                );
            })}
        </ul>
    );
};

export const PluginParamError = ({ error }) => {
    return (
        <>
            {error.type == 2 ? (
                <span>
                    {`Error ${error.errorId}: this plugin ${
                        error.targetPlugin.name
                    } can be removed if following input params are not available - 
                    ${error.requiredInputParams.map(
                        (inputParams) => ` ${inputParams.name} `
                    )}`}
                </span>
            ) : (
                <span></span>
            )}
        </>
    );
};
