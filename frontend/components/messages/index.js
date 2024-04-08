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
