export const getParams = () => {
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
    ];
};
