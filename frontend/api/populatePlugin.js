export function replaceIdsWithObjects(plugins, params) {
    // Loop through each plugin
    return plugins.map((plugin) => ({
        ...plugin,
        inputParams: plugin.inputParams.map((id) =>
            params.find((param) => param.id === id)
        ),
        outputParams: plugin.outputParams.map((id) =>
            params.find((param) => param.id === id)
        ),
    }));
}

// Replace IDs with objects

// const plugins = [
//     {
//         id: 1,
//         name: "cloud-metadata",
//         domain: "standard",
//         owner: "Green-Software-Foundation",
//         scope: "@grnsft",
//         repo: "https://github.com/Green-Software-Foundation/if-plugins",
//         description:
//             "This plugin allows you to determine an instance's physical processor and thermal design power based on its instance name.",
//         inputParams: [21, 16],
//         outputParams: [21, 16, 31, 32, 33, 34, 26],
//     },
//     {
//         id: 2,
//         name: "e-mem",
//         domain: "standard",
//         owner: "Green-Software-Foundation",
//         scope: "@grnsft",
//         repo: "https://github.com/Green-Software-Foundation/if-plugins",
//         description:
//             "e-mem simply multiples the amount of memory being used by a energy-per-gb (0.000392 kWh/GB) to yield memory/energy.",
//         inputParams: [40, 41],
//         outputParams: [40, 41, 9],
//     },
//     {
//         id: 3,
//         name: "e-net",
//         domain: "standard",
//         owner: "Green-Software-Foundation",
//         scope: "@grnsft",
//         repo: "https://github.com/Green-Software-Foundation/if-plugins",
//         description:
//             "e-net simply multiplies the amount of data transferred (GB) by a coefficient (kWh/GB) to yield network/energy.",
//         inputParams: [42, 43],
//         outputParams: [42, 43, 11],
//     },
//     {
//         id: 4,
//         name: "sci",
//         domain: "standard",
//         owner: "Green-Software-Foundation",
//         scope: "@grnsft",
//         repo: "https://github.com/Green-Software-Foundation/if-plugins",
//         description:
//             "SCI is the final value the framework ultimately aims to return for some component or application. It represents the amount of carbon emitted per functional unit.",
//         inputParams: [1],
//         outputParams: [1, 44],
//     },
//     {
//         id: 4,
//         name: "sci-e",
//         domain: "standard",
//         owner: "Green-Software-Foundation",
//         scope: "@grnsft",
//         repo: "https://github.com/Green-Software-Foundation/if-plugins",
//         description:
//             "sci-e is a plugin that simply sums up the contributions to a component's energy use. The plugin returns energy which is used as the input to the sci-o plugin that calculates operational emissions for the component.",
//         inputParams: [7, 9, 11],
//         outputParams: [7, 9, 11, 1],
//     },
//     {
//         id: 5,
//         name: "sci-m",
//         domain: "standard",
//         owner: "Green-Software-Foundation",
//         scope: "@grnsft",
//         repo: "https://github.com/Green-Software-Foundation/if-plugins",
//         description:
//             "Embodied carbon refers to the carbon emitted during the manufacture and eventual disposal of a component. It is added to the operational carbon (carbon emitted when a component is used) to give an overall SCI score.",
//         inputParams: [27, 8, 25, 30],
//         outputParams: [27, 8, 25, 30, 10],
//     },
//     {
//         id: 6,
//         name: "sci-o",
//         domain: "standard",
//         owner: "Green-Software-Foundation",
//         scope: "@grnsft",
//         repo: "https://github.com/Green-Software-Foundation/if-plugins",
//         description:
//             "Operational emissions refer to the carbon generated by a component while it is in use. It is the product of the energy used by the component in kWh and the grid intensity in gCO2e/kWh. The operational emissions are added to the embodied emissions (calculated using sci-m) to provide an overall SCI score for the component.",
//         inputParams: [6, 15],
//         outputParams: [6, 15, 18],
//     },
//     {
//         id: 6,
//         name: "tdp-finder",
//         domain: "standard",
//         owner: "Green-Software-Foundation",
//         scope: "@grnsft",
//         repo: "https://github.com/Green-Software-Foundation/if-plugins",
//         description:
//             "The TDP Finder model finds the thermal design power (TDP) of a given processor by looking it up in the model datasets. There are scenarios where the lookup can return multiple possible TDP values. In these cases, we return the maximum of the possible values.",
//         inputParams: [34],
//         outputParams: [34, 26],
//     },
//     {
//         id: 7,
//         name: "azure-importer",
//         domain: "unofficial",
//         owner: "Green-Software-Foundation",
//         scope: "@grnsft",
//         repo: "https://github.com/Green-Software-Foundation/if-plugins",
//         description:
//             "The Azure importer plugin allows you to provide some basic details about an Azure virtual machine and automatically populate your manifest with usage metrics that can then be passed along a plugin pipeline to calculate energy and carbon impacts.",
//         inputParams: [],
//         outputParams: [3, 16, 33, 40, 41, 45],
//     },
//     {
//         id: 8,
//         name: "boavizta-cpu",
//         domain: "unofficial",
//         owner: "Boavizta",
//         scope: "@boavizta",
//         repo: "https://github.com/Green-Software-Foundation/if-plugins",
//         description:
//             "Boavizta is an environmental impact calculator that exposes an API we use in IF to retrieve energy and embodied carbon estimates.",
//         inputParams: [19, 2, 46, 3, 14, 24],
//         outputParams: [19, 2, 46, 3, 14, 24, 10, 7],
//     },
//     {
//         id: 9,
//         name: "boavizta-cloudu",
//         domain: "unofficial",
//         owner: "Boavizta",
//         scope: "@boavizta",
//         repo: "https://github.com/Green-Software-Foundation/if-plugins",
//         description:
//             "Boavizta is an environmental impact calculator that exposes an API we use in IF to retrieve energy and embodied carbon estimates.",
//         inputParams: [19, 2, 46, 3, 14, 24, 47, 48],
//         outputParams: [19, 2, 46, 3, 14, 24, 47, 48, 10, 7],
//     },
//     {
//         id: 10,
//         name: "ccf",
//         domain: "unofficial",
//         owner: "cloud-carbon-footprint",
//         scope: "@ccf",
//         repo: "https://github.com/Green-Software-Foundation/if-plugins",
//         description:
//             "Cloud Carbon Footprint is an open source tool that provides visibility and tooling to measure, monitor and reduce your cloud carbon emissions. ",
//         inputParams: [3, 16, 21],
//         outputParams: [3, 16, 21, 6, 10],
//     },
//     {
//         id: 11,
//         name: "co2js",
//         domain: "unofficial",
//         owner: "thegreenwebfoundation",
//         scope: "@thegreenwebfoundation",
//         repo: "https://github.com/Green-Software-Foundation/if-plugins",
//         description:
//             "The CO2JS Framework is a collection of plugins that calculate the carbon emissions of a website based on different parameters.",
//         inputParams: [49],
//         outputParams: [49, 18],
//     },
//     {
//         id: 12,
//         name: "teads-aws",
//         domain: "unofficial",
//         owner: "teads",
//         scope: "@teads",
//         repo: "https://github.com/Green-Software-Foundation/if-plugins",
//         description:
//             "Teads Engineering Team built a plugin for estimating AWS instances energy usage. This plugin creates a power curve on a correlation to SPEC Power database.",
//         inputParams: [16, 3],
//         outputParams: [16, 3, 6, 10],
//     },
//     {
//         id: 13,
//         name: "teads-curve",
//         domain: "unofficial",
//         owner: "teads",
//         scope: "@teads",
//         repo: "https://github.com/Green-Software-Foundation/if-plugins",
//         description:
//             "Teads Engineering team has built a plugin that is capable of estimating CPU usages across varying type of CPUs using a curve commonly known as Teads Curve.",
//         inputParams: [3, 26],
//         outputParams: [3, 26, 7],
//     },
//     {
//         id: 13,
//         name: "watt-time",
//         domain: "unofficial",
//         owner: "WattTime",
//         scope: "@watttime",
//         repo: "https://github.com/Green-Software-Foundation/if-plugins",
//         description:
//             "WattTime technology—based on real-time grid data, cutting-edge algorithms, and machine learning—provides first-of-its-kind insight into your local electricity grid’s marginal emissions rate. ",
//         inputParams: [17, 39],
//         outputParams: [15],
//     },
// ];

// const params = [
//     {
//         id: 1,
//         name: "carbon",
//         description: "an amount of carbon emitted into the atmosphere",
//         unit: "gCO2e",
//         aggregation: "sum",
//         domain: "standard",
//         owner: "Green-Software-Foundation",
//         scope: "@grnsft",
//         repo: "https://github.com/Green-Software-Foundation/if/blob/main/src/config/params.ts",
//     },
//     {
//         id: 2,
//         name: "cpu/number-cores",
//         description: "number of cores available",
//         unit: "cores",
//         aggregation: "none",
//         domain: "standard",
//         owner: "Green-Software-Foundation",
//         scope: "@grnsft",
//         repo: "https://github.com/Green-Software-Foundation/if/blob/main/src/config/params.ts",
//     },
//     {
//         id: 3,
//         name: "cpu/utilization",
//         description: "refers to CPU utilization.",
//         unit: "percentage",
//         aggregation: "avg",
//         domain: "standard",
//         owner: "Green-Software-Foundation",
//         scope: "@grnsft",
//         repo: "https://github.com/Green-Software-Foundation/if/blob/main/src/config/params.ts",
//     },
//     {
//         id: 4,
//         name: "disk-io",
//         description: "refers to GB of data written/read from disk",
//         unit: "GB",
//         aggregation: "sum",
//         domain: "standard",
//         owner: "Green-Software-Foundation",
//         scope: "@grnsft",
//         repo: "https://github.com/Green-Software-Foundation/if/blob/main/src/config/params.ts",
//     },
//     {
//         id: 5,
//         name: "duration",
//         description: "refers to the duration of the input",
//         unit: "seconds",
//         aggregation: "sum",
//         domain: "standard",
//         owner: "Green-Software-Foundation",
//         scope: "@grnsft",
//         repo: "https://github.com/Green-Software-Foundation/if/blob/main/src/config/params.ts",
//     },
//     {
//         id: 6,
//         name: "energy",
//         description: "amount of energy utilised by the component",
//         unit: "kWh",
//         aggregation: "sum",
//         domain: "standard",
//         owner: "Green-Software-Foundation",
//         scope: "@grnsft",
//         repo: "https://github.com/Green-Software-Foundation/if/blob/main/src/config/params.ts",
//     },
//     {
//         id: 7,
//         name: "cpu/energy",
//         description: "Energy consumed by the CPU of the component",
//         unit: "kWh",
//         aggregation: "sum",
//         domain: "standard",
//         owner: "Green-Software-Foundation",
//         scope: "@grnsft",
//         repo: "https://github.com/Green-Software-Foundation/if/blob/main/src/config/params.ts",
//     },
//     {
//         id: 8,
//         name: "device/expected-lifespan",
//         description: "Total Expected Lifespan of the Component in Seconds",
//         unit: "seconds",
//         aggregation: "sum",
//         domain: "standard",
//         owner: "Green-Software-Foundation",
//         scope: "@grnsft",
//         repo: "https://github.com/Green-Software-Foundation/if/blob/main/src/config/params.ts",
//     },
//     {
//         id: 9,
//         name: "memory/energy",
//         description: "Energy consumed by the Memory of the component",
//         unit: "kWh",
//         aggregation: "sum",
//         domain: "standard",
//         owner: "Green-Software-Foundation",
//         scope: "@grnsft",
//         repo: "https://github.com/Green-Software-Foundation/if/blob/main/src/config/params.ts",
//     },
//     {
//         id: 10,
//         name: "carbon-embodied",
//         description: "Embodied Emissions of the component",
//         unit: "gCO2e",
//         aggregation: "sum",
//         domain: "standard",
//         owner: "Green-Software-Foundation",
//         scope: "@grnsft",
//         repo: "https://github.com/Green-Software-Foundation/if/blob/main/src/config/params.ts",
//     },
//     {
//         id: 11,
//         name: "network/energy",
//         description: "Energy consumed by the Network of the component",
//         unit: "kWh",
//         aggregation: "sum",
//         domain: "standard",
//         owner: "Green-Software-Foundation",
//         scope: "@grnsft",
//         repo: "https://github.com/Green-Software-Foundation/if/blob/main/src/config/params.ts",
//     },
//     {
//         id: 12,
//         name: "functional-unit",
//         description:
//             "the name of the functional unit in which the final SCI value should be expressed, e.g. requests, users",
//         unit: "none",
//         aggregation: "sum",
//         domain: "standard",
//         owner: "Green-Software-Foundation",
//         scope: "@grnsft",
//         repo: "https://github.com/Green-Software-Foundation/if/blob/main/src/config/params.ts",
//     },
//     {
//         id: 13,
//         name: "functional-unit-time",
//         description:
//             'string describing the unit of time in which the final SCI calculation should be expressed, e.g. "1-min"',
//         unit: "none",
//         aggregation: "none",
//         domain: "standard",
//         owner: "Green-Software-Foundation",
//         scope: "@grnsft",
//         repo: "https://github.com/Green-Software-Foundation/if/blob/main/src/config/params.ts",
//     },
//     {
//         id: 14,
//         name: "gpu-util",
//         description: "refers to CPU utilization.",
//         unit: "percentage",
//         aggregation: "avg",
//         domain: "standard",
//         owner: "Green-Software-Foundation",
//         scope: "@grnsft",
//         repo: "https://github.com/Green-Software-Foundation/if/blob/main/src/config/params.ts",
//     },
//     {
//         id: 15,
//         name: "grid/carbon-intensity",
//         description: "Carbon intensity for the grid",
//         unit: "gCO2eq/kWh",
//         aggregation: "avg",
//         domain: "standard",
//         owner: "Green-Software-Foundation",
//         scope: "@grnsft",
//         repo: "https://github.com/Green-Software-Foundation/if/blob/main/src/config/params.ts",
//     },
//     {
//         id: 16,
//         name: "cloud/instance-type",
//         description:
//             "Type of Cloud Instance name used in the cloud provider APIs",
//         unit: "None",
//         aggregation: "none",
//         domain: "standard",
//         owner: "Green-Software-Foundation",
//         scope: "@grnsft",
//         repo: "https://github.com/Green-Software-Foundation/if/blob/main/src/config/params.ts",
//     },
//     {
//         id: 17,
//         name: "geolocation",
//         description:
//             "Geographic location of provider as string (for watt-time model it is provided as latitude and longitude, comma separated, in decimal degrees)",
//         unit: "None (decimal degrees for watt-time model)",
//         aggregation: "none",
//         domain: "standard",
//         owner: "Green-Software-Foundation",
//         scope: "@grnsft",
//         repo: "https://github.com/Green-Software-Foundation/if/blob/main/src/config/params.ts",
//     },
//     {
//         id: 18,
//         name: "carbon-operational",
//         description: "Operational Emissions of the component",
//         unit: "gCO2e",
//         aggregation: "sum",
//         domain: "standard",
//         owner: "Green-Software-Foundation",
//         scope: "@grnsft",
//         repo: "https://github.com/Green-Software-Foundation/if/blob/main/src/config/params.ts",
//     },
//     {
//         id: 19,
//         name: "cpu/name",
//         description: "Name of the physical processor",
//         unit: "None",
//         aggregation: "none",
//         domain: "standard",
//         owner: "Green-Software-Foundation",
//         scope: "@grnsft",
//         repo: "https://github.com/Green-Software-Foundation/if/blob/main/src/config/params.ts",
//     },
//     {
//         id: 20,
//         name: "cloud/region",
//         description: "region cloud instance runs in",
//         unit: "None",
//         aggregation: "none",
//         domain: "standard",
//         owner: "Green-Software-Foundation",
//         scope: "@grnsft",
//         repo: "https://github.com/Green-Software-Foundation/if/blob/main/src/config/params.ts",
//     },
//     {
//         id: 21,
//         name: "cloud/vendor",
//         description:
//             "Name of the cloud service provider in the ccf model. Can be aws, gcp or azure",
//         unit: "None",
//         aggregation: "none",
//         domain: "standard",
//         owner: "Green-Software-Foundation",
//         scope: "@grnsft",
//         repo: "https://github.com/Green-Software-Foundation/if/blob/main/src/config/params.ts",
//     },

//     {
//         id: 23,
//         name: "ram-alloc",
//         description: "refers to GB of memory allocated.",
//         unit: "GB",
//         aggregation: "avg",
//         domain: "standard",
//         owner: "Green-Software-Foundation",
//         scope: "@grnsft",
//         repo: "https://github.com/Green-Software-Foundation/if/blob/main/src/config/params.ts",
//     },
//     {
//         id: 24,
//         name: "ram-util",
//         description: "refers to percentage of memory utilized.",
//         unit: "percentage",
//         aggregation: "avg",
//         domain: "standard",
//         owner: "Green-Software-Foundation",
//         scope: "@grnsft",
//         repo: "https://github.com/Green-Software-Foundation/if/blob/main/src/config/params.ts",
//     },
//     {
//         id: 25,
//         name: "resources-reserved",
//         description: "resources reserved for an application",
//         unit: "count",
//         aggregation: "none",
//         domain: "standard",
//         owner: "Green-Software-Foundation",
//         scope: "@grnsft",
//         repo: "https://github.com/Green-Software-Foundation/if/blob/main/src/config/params.ts",
//     },
//     {
//         id: 26,
//         name: "cpu/thermal-design-power",
//         description: "thermal design power for a processor",
//         unit: "kwh",
//         aggregation: "avg",
//         domain: "standard",
//         owner: "Green-Software-Foundation",
//         scope: "@grnsft",
//         repo: "https://github.com/Green-Software-Foundation/if/blob/main/src/config/params.ts",
//     },
//     {
//         id: 27,
//         name: "device/emissions-embodied",
//         description: "total embodied emissions of some component",
//         unit: "gCO2e",
//         aggregation: "sum",
//         domain: "standard",
//         owner: "Green-Software-Foundation",
//         scope: "@grnsft",
//         repo: "https://github.com/Green-Software-Foundation/if/blob/main/src/config/params.ts",
//     },
//     {
//         id: 28,
//         name: "timestamp",
//         description: "refers to the time of occurrence of the input",
//         unit: "RFC3339",
//         aggregation: "none",
//         domain: "standard",
//         owner: "Green-Software-Foundation",
//         scope: "@grnsft",
//         repo: "https://github.com/Green-Software-Foundation/if/blob/main/src/config/params.ts",
//     },
//     {
//         id: 29,
//         name: "time-reserved",
//         description: "time reserved for a component",
//         unit: "seconds",
//         aggregation: "avg",
//         domain: "standard",
//         owner: "Green-Software-Foundation",
//         scope: "@grnsft",
//         repo: "https://github.com/Green-Software-Foundation/if/blob/main/src/config/params.ts",
//     },
//     {
//         id: 30,
//         name: "resources-total",
//         description: "total resources available",
//         unit: "count",
//         aggregation: "none",
//         domain: "standard",
//         owner: "Green-Software-Foundation",
//         scope: "@grnsft",
//         repo: "https://github.com/Green-Software-Foundation/if/blob/main/src/config/params.ts",
//     },
//     {
//         id: 31,
//         name: "vcpus-allocated",
//         description: "number of vcpus allocated to particular resource",
//         unit: "count",
//         aggregation: "none",
//         domain: "standard",
//         owner: "Green-Software-Foundation",
//         scope: "@grnsft",
//         repo: "https://github.com/Green-Software-Foundation/if/blob/main/src/config/params.ts",
//     },
//     {
//         id: 32,
//         name: "vcpus-total",
//         description: "total number of vcpus available on a particular resource",
//         unit: "count",
//         aggregation: "none",
//         domain: "standard",
//         owner: "Green-Software-Foundation",
//         scope: "@grnsft",
//         repo: "https://github.com/Green-Software-Foundation/if/blob/main/src/config/params.ts",
//     },
//     {
//         id: 33,
//         name: "memory-available",
//         description:
//             "total amount of memory available on a particular resource",
//         unit: "GB",
//         aggregation: "none",
//         domain: "standard",
//         owner: "Green-Software-Foundation",
//         scope: "@grnsft",
//         repo: "https://github.com/Green-Software-Foundation/if/blob/main/src/config/params.ts",
//     },
//     {
//         id: 34,
//         name: "physical-processor",
//         description:
//             "name of the physical processor being used in a specific instance type",
//         unit: "None",
//         aggregation: "none",
//         domain: "standard",
//         owner: "Green-Software-Foundation",
//         scope: "@grnsft",
//         repo: "https://github.com/Green-Software-Foundation/if/blob/main/src/config/params.ts",
//     },
//     {
//         id: 35,
//         name: "cloud/region-cfe",
//         description: "cloud region name in cfe format",
//         unit: "None",
//         aggregation: "none",
//         domain: "standard",
//         owner: "Green-Software-Foundation",
//         scope: "@grnsft",
//         repo: "https://github.com/Green-Software-Foundation/if/blob/main/src/config/params.ts",
//     },
//     {
//         id: 36,
//         name: "cloud/region-em-zone-id",
//         description: "cloud region name in electricity maps format",
//         unit: "None",
//         aggregation: "none",
//         domain: "standard",
//         owner: "Green-Software-Foundation",
//         scope: "@grnsft",
//         repo: "https://github.com/Green-Software-Foundation/if/blob/main/src/config/params.ts",
//     },
//     {
//         id: 37,
//         name: "cloud/region-wt-id",
//         description: "cloud region name in watt-time format",
//         unit: "None",
//         aggregation: "none",
//         domain: "standard",
//         owner: "Green-Software-Foundation",
//         scope: "@grnsft",
//         repo: "https://github.com/Green-Software-Foundation/if/blob/main/src/config/params.ts",
//     },
//     {
//         id: 38,
//         name: "cloud/region-location",
//         description: "cloud region name in our IF format",
//         unit: "None",
//         aggregation: "none",
//         domain: "standard",
//         owner: "Green-Software-Foundation",
//         scope: "@grnsft",
//         repo: "https://github.com/Green-Software-Foundation/if/blob/main/src/config/params.ts",
//     },
//     {
//         id: 39,
//         name: "cloud/region-geolocation",
//         description: "location expressed as decimal coordinates (lat/lon)",
//         unit: "decimal degrees",
//         aggregation: "none",
//         domain: "standard",
//         owner: "Green-Software-Foundation",
//         scope: "@grnsft",
//         repo: "https://github.com/Green-Software-Foundation/if/blob/main/src/config/params.ts",
//     },
//     {
//         id: 40,
//         name: "memory/utilization",
//         description:
//             "percentage of the total available memory being used in the input period",
//         unit: "percentage",
//         domain: "unofficial",
//         owner: "Green-Software-Foundation",
//         scope: "@grnsft",
//         repo: "https://github.com/Green-Software-Foundation/if/blob/main/src/config/params.ts",
//     },
//     {
//         id: 41,
//         name: "memory/capacity",
//         description: "the total amount of memory available, in GB",
//         unit: "GB",
//         domain: "unofficial",
//         owner: "Green-Software-Foundation",
//         scope: "@grnsft",
//         repo: "https://github.com/Green-Software-Foundation/if/blob/main/src/config/params.ts",
//     },
//     {
//         id: 42,
//         name: "network/data-in",
//         description: "inbound data in GB",
//         unit: "GB",
//         domain: "unofficial",
//         owner: "Green-Software-Foundation",
//         scope: "@grnsft",
//         repo: "https://github.com/Green-Software-Foundation/if/blob/main/src/config/params.ts",
//     },
//     {
//         id: 43,
//         name: "network/data-out",
//         description: "outbound data in GB",
//         unit: "GB",
//         domain: "unofficial",
//         owner: "Green-Software-Foundation",
//         scope: "@grnsft",
//         repo: "https://github.com/Green-Software-Foundation/if/blob/main/src/config/params.ts",
//     },
//     {
//         id: 44,
//         name: "sci",
//         description: "carbon expressed in terms of the given functional unit",
//         unit: "none",
//         domain: "unofficial",
//         owner: "Green-Software-Foundation",
//         scope: "@grnsft",
//         repo: "https://github.com/Green-Software-Foundation/if/blob/main/src/config/params.ts",
//     },
//     {
//         id: 45,
//         name: "memory/used",
//         description:
//             "Amount of memory being used by your application, in GB. Calculated as the difference between memory/capacity/GB and memory/available/GB",
//         unit: "GB",
//         domain: "unofficial",
//         owner: "Green-Software-Foundation",
//         scope: "@azure",
//         repo: "https://github.com/Green-Software-Foundation/if/blob/main/src/config/params.ts",
//     },
//     {
//         id: 46,
//         name: "cpu/expected-lifespan",
//         description: "the lifespan of the component, in seconds",
//         unit: "seconds",
//         domain: "unofficial",
//         owner: "Boavizta",
//         scope: "@boavizta",
//         repo: "https://github.com/Green-Software-Foundation/if/blob/main/src/config/params.ts",
//     },
//     {
//         id: 47,
//         name: "instance-type",
//         description:
//             "the name of the specific instance, required for BoaviztaCloudOutput",
//         unit: "None",
//         aggregation: "none",
//         domain: "unofficial",
//         owner: "Boavizta",
//         scope: "@boavizta",
//         repo: "https://github.com/Green-Software-Foundation/if/blob/main/src/config/params.ts",
//     },
//     {
//         id: 48,
//         name: "provider",
//         description:
//             "the name of cloud provider (required for BoaviztaCloudOutput)",
//         unit: "None",
//         aggregation: "none",
//         domain: "unofficial",
//         owner: "Boavizta",
//         scope: "@boavizta",
//         repo: "https://github.com/Green-Software-Foundation/if/blob/main/src/config/params.ts",
//     },
//     {
//         id: 49,
//         name: "network/data",
//         description:
//             "the number of bytes transferred or network/data if the number is in GB",
//         unit: "bytes",
//         domain: "unofficial",
//         owner: "thegreenwebfoundation",
//         scope: "@thegreenwebfoundation",
//         repo: "https://github.com/Green-Software-Foundation/if/blob/main/src/config/params.ts",
//     },
// ];

// const updatedPlugins = replaceIdsWithObjects(plugins, params);
// console.log("🚀 ~ updatedPlugins:", updatedPlugins);