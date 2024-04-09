export const InputParamError = ({ errors }) => {
    return (
        <ul className=" w-fit font-sans text-sm   ">
            {errors.map((error) => {
                return error.type == 1 ? (
                    <li className="bg-yellow-200 px-2">
                        <span>
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
                        </span>
                    </li>
                ) : (
                    <li className="bg-red-600 px-2 text-white">
                        <span>
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

export const PluginInfo = ({ info }) => {
    return (
        <div className="bg-blue-600 text-white w-fit px-2 font-sans text-sm">
            <span>
                info: using param{" "}
                <span className="italic font-medium">
                    {info.sourceInput.name}
                </span>{" "}
                from previous plugin{" "}
                <span className="italic font-medium">
                    {info.sourcePlugin.name}
                </span>{" "}
                in the pipeline.
            </span>
        </div>
    );
};

export const PluginGenError = ({ errors }) => {
    return (
        <ul className="bg-orange-600 px-2 w-fit font-sans text-sm text-white">
            {errors.length ? <div>Plugin Dependencies -</div> : <></>}
            {errors.map((error) => {
                return (
                    <li className="">
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
                    error {error.errorId}: appropriate plugin{" "}
                    <span className="italic font-medium">
                        {error.requiredPlugin.name}
                    </span>{" "}
                    exists in pipeline - Input params not available
                </span>
            ) : error.type == 4 ? (
                <span>
                    error {error.errorId}: add the best matched plugin -{" "}
                    <span className="italic font-medium">
                        {error.requiredPlugin.name}
                    </span>{" "}
                    - some input params also missing
                </span>
            ) : error.type == 5 ? (
                <span>
                    error {error.errorId}: add the best matched plugin -{" "}
                    <span className="italic font-medium">
                        {error.requiredPlugin.name}
                    </span>{" "}
                    - required input params already added
                </span>
            ) : (
                <span className="bg-purple-600">
                    error {error.errorId}: this output doesn't have any matching
                    plugin from where it can be resolved
                </span>
            )}
        </div>
    );
};
