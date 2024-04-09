export const getPlugins = () => {
    return [
        {
            id: 1,
            name: "cloud-metadata",
            domain: "standard",
            owner: "Green-Software-Foundation",
            scope: "@grnsft",
            repo: "https://github.com/Green-Software-Foundation/if-plugins",
            description:
                "This plugin allows you to determine an instance's physical processor and thermal design power based on its instance name.",
            inputParams: [21, 16],
            outputParams: [21, 16, 31, 32, 33, 34, 26],
        },
        {
            id: 2,
            name: "e-mem",
            domain: "standard",
            owner: "Green-Software-Foundation",
            scope: "@grnsft",
            repo: "https://github.com/Green-Software-Foundation/if-plugins",
            description:
                "This plugin allows you to determine an instance's physical processor and thermal design power based on its instance name.",
            inputParams: [21, 16],
            outputParams: [21, 16, 31, 32, 33, 34, 26],
        },
    ];
};
