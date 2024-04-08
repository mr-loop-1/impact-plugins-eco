export const getParams = async () => {
    return [
        {
            id: 1,
            name: "carbon",
            description: "an amount of carbon emitted into the atmosphere",
            unit: "gCO2e",
            aggregation: "sum",
        },
        {
            id: 2,
            name: "cpu/number-cores",
            description: "number of cores available",
            unit: "cores",
            aggregation: "none",
        },
        {
            id: 3,
            name: "cpu/utilization",
            description: "refers to CPU utilization.",
            unit: "percentage",
            aggregation: "avg",
        },
        {
            id: 6,
            name: "disk-io",
            description: "refers to GB of data written/read from disk",
            unit: "GB",
            aggregation: "sum",
        },
        {
            id: 4,
            name: "duration",
            description: "refers to the duration of the input",
            unit: "seconds",
            aggregation: "sum",
        },
        {
            id: 5,
            name: "energy",
            description: "amount of energy utilised by the component",
            unit: "kWh",
            aggregation: "sum",
        },
    ];
};
