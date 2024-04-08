export const addInput = (inputsReq, targetPlugin, errorId) => {
    return `Error ${errorId}: plugin ${targetPlugin} requires the follwing input parameters : ${inputsReq.forEach(
        inp
    )}`;
};
