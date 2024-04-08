export const getPlugins = () => {
    return [
        {
            id: 1,
            name: "sci-o",
            description: "an amount of carbon emitted into the atmosphere",
            inputs: [{ id: 1, name: "carbon" }],
            outputs: [
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
            inputs: [{ id: 1, name: "carbon" }],
            outputs: [
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
            inputs: [{ id: 1, name: "carbon" }],
            outputs: [
                {
                    id: 2,
                    name: "cpu/number-cores",
                },
            ],
        },
    ];
};
