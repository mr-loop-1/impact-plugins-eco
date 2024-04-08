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
        <div className="bg-red-600 text-white w-fit px-2 font-sans text-sm">
            {error.type == 2 ? (
                <span>
                    error {error.errorId}: this plugin{" "}
                    <span className="italic font-medium">
                        {error.targetPlugin.name}
                    </span>{" "}
                    can be removed if following input params are not available -
                    <span className="italic font-medium">
                        {error.requiredInputParams.map(
                            (inputParams) => ` ${inputParams.name},`
                        )}
                    </span>
                </span>
            ) : (
                <span></span>
            )}
        </div>
    );
};
