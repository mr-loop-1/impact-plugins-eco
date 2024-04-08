export const InputParamError = ({ errors }) => {
    return (
        <ul className="bg-yellow-200 w-fit px-2 font-sans text-sm   ">
            {errors.map((error) => {
                return (
                    <li>
                        error {error.errorId}: plugin{" "}
                        <span className="italic font-medium">
                            {error.targetPlugin.name}
                        </span>{" "}
                        requires the follwing input params -
                        <span className="italic font-medium">
                            {error.requiredInputParams.map(
                                (inputParams) => ` ${inputParams.name},`
                            )}
                        </span>
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
