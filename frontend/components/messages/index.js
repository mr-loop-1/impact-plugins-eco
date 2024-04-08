export const InputParamError = ({ errors }) => {
    return (
        <ul className=" w-fit px-2 font-sans text-sm   ">
            {errors.map((error) => {
                return error.type == 1 ? (
                    <li className="bg-yellow-200">
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
                ) : (
                    <li className="bg-red-400">
                        error {error.errorId}: output{" "}
                        <span className="italic font-medium">
                            {error.targetOutputParam.name}
                        </span>{" "}
                        requires the plugin{" "}
                        <span className="italic font-medium">
                            {error.requiredPlugin.name}
                        </span>{" "}
                        which requires the following missing inputs -
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
        </div>
    );
};

export const PluginGenError = ({ errors }) => {
    return (
        <ul className=" w-fit px-2 font-sans text-sm   ">
            {errors.map((error) => {
                return (
                    <li className="bg-red-600">
                        error {error.errorId}: output param{" "}
                        <span className="italic font-medium">
                            {error.targetOutputParam.name}
                        </span>{" "}
                        requires the follwing plugin -{" "}
                        <span className="italic font-medium">
                            {error.requiredPlugin.name}
                        </span>{" "}
                        .
                    </li>
                );
            })}
        </ul>
    );
};

export const OutputError = ({ error }) => {
    return (
        <div className="bg-orange-600 text-white w-fit px-2 font-sans text-sm">
            {error.type == 3 ? (
                <span>
                    error {error.errorId}: this output{" "}
                    <span className="italic font-medium">
                        {error.targetOutputParam.name}
                    </span>{" "}
                    can be removed if input params of plugin{" "}
                    <span className="italic font-medium">
                        {error.requiredPlugin.name}
                    </span>{" "}
                    can't be resolved.
                </span>
            ) : error.type == 4 ? (
                <span>
                    error {error.errorId}: this output{" "}
                    <span className="italic font-medium">
                        {error.targetOutputParam.name}
                    </span>{" "}
                    can be removed if plugin{" "}
                    <span className="italic font-medium">
                        {error.requiredPlugin.name}
                    </span>{" "}
                    and its input params can't be added.
                </span>
            ) : error.type == 5 ? (
                <span>
                    error {error.errorId}: this output{" "}
                    <span className="italic font-medium">
                        {error.targetOutputParam.name}
                    </span>{" "}
                    can be removed if plugin{" "}
                    <span className="italic font-medium">
                        {error.requiredPlugin.name}
                    </span>{" "}
                    whose all dependencies are there in inputs can't be added.
                </span>
            ) : (
                <span>
                    error {error.errorId}: this output{" "}
                    <span className="italic font-medium">
                        {error.targetOutputParam.name}
                    </span>{" "}
                    doesn't have any matching plugin from where it can be
                    resolved
                </span>
            )}
        </div>
    );
};
