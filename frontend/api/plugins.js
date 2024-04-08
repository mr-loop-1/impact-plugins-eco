export const getPlugins = () => {
    return [
        {
            id: 1,
            name: "sci-o",
            description: "an amount of carbon emitted into the atmosphere",
            inputParams: [{ id: 1, name: "carbon" }],
            outputParams: [
                {
                    id: 2,
                    name: "cpu/number-cores",
                },
            ],
        },
        {
            id: 2,
            name: "wattime",
            description: "an amount of carbon emitted into the atmosphere",
            inputParams: [{ id: 1, name: "carbon" }],
            outputParams: [
                {
                    id: 2,
                    name: "cpu/number-cores",
                },
            ],
        },
        {
            id: 3,
            name: "hello-o",
            description: "an amount of carbon emitted into the atmosphere",
            inputParams: [{ id: 1, name: "carbon" }],
            outputParams: [
                {
                    id: 6,
                    name: "disk-io",
                    description: "refers to GB of data written/read from disk",
                    unit: "GB",
                    aggregation: "sum",
                },
                {
                    id: 3,
                    name: "cpu/utilization",
                    description: "refers to CPU utilization.",
                    unit: "percentage",
                    aggregation: "avg",
                },
            ],
        },
    ];
};
