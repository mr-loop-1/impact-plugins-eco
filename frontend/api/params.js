export const getParams = () => {
    return [
        {
            id: 1,
            name: "carbon",
            description: "an amount of carbon emitted into the atmosphere",
            unit: "gCO2e",
            aggregation: "sum",
            domain: "standard",
            owner: "Green-Software-Foundation",
            scope: "@grnsft",
            repo: "https://github.com/Green-Software-Foundation/if/blob/main/src/config/params.ts",
        },
        {
            id: 2,
            name: "cpu/number-cores",
            description: "number of cores available",
            unit: "cores",
            aggregation: "none",
            domain: "standard",
            owner: "Green-Software-Foundation",
            scope: "@grnsft",
            repo: "https://github.com/Green-Software-Foundation/if/blob/main/src/config/params.ts",
        },
        {
            id: 3,
            name: "cpu/utilization",
            description: "refers to CPU utilization.",
            unit: "percentage",
            aggregation: "avg",
            domain: "standard",
            owner: "Green-Software-Foundation",
            scope: "@grnsft",
            repo: "https://github.com/Green-Software-Foundation/if/blob/main/src/config/params.ts",
        },
        {
            id: 4,
            name: "disk-io",
            description: "refers to GB of data written/read from disk",
            unit: "GB",
            aggregation: "sum",
            domain: "standard",
            owner: "Green-Software-Foundation",
            scope: "@grnsft",
            repo: "https://github.com/Green-Software-Foundation/if/blob/main/src/config/params.ts",
        },
        {
            id: 5,
            name: "duration",
            description: "refers to the duration of the input",
            unit: "seconds",
            aggregation: "sum",
            domain: "standard",
            owner: "Green-Software-Foundation",
            scope: "@grnsft",
            repo: "https://github.com/Green-Software-Foundation/if/blob/main/src/config/params.ts",
        },
        {
            id: 6,
            name: "energy",
            description: "amount of energy utilised by the component",
            unit: "kWh",
            aggregation: "sum",
            domain: "standard",
            owner: "Green-Software-Foundation",
            scope: "@grnsft",
            repo: "https://github.com/Green-Software-Foundation/if/blob/main/src/config/params.ts",
        },
        {
            id: 7,
            name: "cpu/energy",
            description: "Energy consumed by the CPU of the component",
            unit: "kWh",
            aggregation: "sum",
            domain: "standard",
            owner: "Green-Software-Foundation",
            scope: "@grnsft",
            repo: "https://github.com/Green-Software-Foundation/if/blob/main/src/config/params.ts",
        },
        {
            id: 8,
            name: "device/expected-lifespan",
            description: "Total Expected Lifespan of the Component in Seconds",
            unit: "seconds",
            aggregation: "sum",
            domain: "standard",
            owner: "Green-Software-Foundation",
            scope: "@grnsft",
            repo: "https://github.com/Green-Software-Foundation/if/blob/main/src/config/params.ts",
        },
        {
            id: 9,
            name: "memory/energy",
            description: "Energy consumed by the Memory of the component",
            unit: "kWh",
            aggregation: "sum",
            domain: "standard",
            owner: "Green-Software-Foundation",
            scope: "@grnsft",
            repo: "https://github.com/Green-Software-Foundation/if/blob/main/src/config/params.ts",
        },
        {
            id: 10,
            name: "carbon-embodied",
            description: "Embodied Emissions of the component",
            unit: "gCO2e",
            aggregation: "sum",
            domain: "standard",
            owner: "Green-Software-Foundation",
            scope: "@grnsft",
            repo: "https://github.com/Green-Software-Foundation/if/blob/main/src/config/params.ts",
        },
        {
            id: 11,
            name: "network/energy",
            description: "Energy consumed by the Network of the component",
            unit: "kWh",
            aggregation: "sum",
            domain: "standard",
            owner: "Green-Software-Foundation",
            scope: "@grnsft",
            repo: "https://github.com/Green-Software-Foundation/if/blob/main/src/config/params.ts",
        },
        {
            id: 12,
            name: "functional-unit",
            description:
                "the name of the functional unit in which the final SCI value should be expressed, e.g. requests, users",
            unit: "none",
            aggregation: "sum",
            domain: "standard",
            owner: "Green-Software-Foundation",
            scope: "@grnsft",
            repo: "https://github.com/Green-Software-Foundation/if/blob/main/src/config/params.ts",
        },
        {
            id: 13,
            name: "functional-unit-time",
            description:
                'string describing the unit of time in which the final SCI calculation should be expressed, e.g. "1-min"',
            unit: "none",
            aggregation: "none",
            domain: "standard",
            owner: "Green-Software-Foundation",
            scope: "@grnsft",
            repo: "https://github.com/Green-Software-Foundation/if/blob/main/src/config/params.ts",
        },
        {
            id: 14,
            name: "gpu-util",
            description: "refers to CPU utilization.",
            unit: "percentage",
            aggregation: "avg",
            domain: "standard",
            owner: "Green-Software-Foundation",
            scope: "@grnsft",
            repo: "https://github.com/Green-Software-Foundation/if/blob/main/src/config/params.ts",
        },
        {
            id: 15,
            name: "grid/carbon-intensity",
            description: "Carbon intensity for the grid",
            unit: "gCO2eq/kWh",
            aggregation: "avg",
            domain: "standard",
            owner: "Green-Software-Foundation",
            scope: "@grnsft",
            repo: "https://github.com/Green-Software-Foundation/if/blob/main/src/config/params.ts",
        },
        {
            id: 16,
            name: "cloud/instance-type",
            description:
                "Type of Cloud Instance name used in the cloud provider APIs",
            unit: "None",
            aggregation: "none",
            domain: "standard",
            owner: "Green-Software-Foundation",
            scope: "@grnsft",
            repo: "https://github.com/Green-Software-Foundation/if/blob/main/src/config/params.ts",
        },
        {
            id: 17,
            name: "geolocation",
            description:
                "Geographic location of provider as string (for watt-time model it is provided as latitude and longitude, comma separated, in decimal degrees)",
            unit: "None (decimal degrees for watt-time model)",
            aggregation: "none",
            domain: "standard",
            owner: "Green-Software-Foundation",
            scope: "@grnsft",
            repo: "https://github.com/Green-Software-Foundation/if/blob/main/src/config/params.ts",
        },
        {
            id: 18,
            name: "carbon-operational",
            description: "Operational Emissions of the component",
            unit: "gCO2e",
            aggregation: "sum",
            domain: "standard",
            owner: "Green-Software-Foundation",
            scope: "@grnsft",
            repo: "https://github.com/Green-Software-Foundation/if/blob/main/src/config/params.ts",
        },
        {
            id: 19,
            name: "cpu/name",
            description: "Name of the physical processor",
            unit: "None",
            aggregation: "none",
            domain: "standard",
            owner: "Green-Software-Foundation",
            scope: "@grnsft",
            repo: "https://github.com/Green-Software-Foundation/if/blob/main/src/config/params.ts",
        },
        {
            id: 20,
            name: "cloud/region",
            description: "region cloud instance runs in",
            unit: "None",
            aggregation: "none",
            domain: "standard",
            owner: "Green-Software-Foundation",
            scope: "@grnsft",
            repo: "https://github.com/Green-Software-Foundation/if/blob/main/src/config/params.ts",
        },
        {
            id: 21,
            name: "cloud/vendor",
            description:
                "Name of the cloud service provider in the ccf model. Can be aws, gcp or azure",
            unit: "None",
            aggregation: "none",
            domain: "standard",
            owner: "Green-Software-Foundation",
            scope: "@grnsft",
            repo: "https://github.com/Green-Software-Foundation/if/blob/main/src/config/params.ts",
        },

        {
            id: 23,
            name: "ram-alloc",
            description: "refers to GB of memory allocated.",
            unit: "GB",
            aggregation: "avg",
            domain: "standard",
            owner: "Green-Software-Foundation",
            scope: "@grnsft",
            repo: "https://github.com/Green-Software-Foundation/if/blob/main/src/config/params.ts",
        },
        {
            id: 24,
            name: "ram-util",
            description: "refers to percentage of memory utilized.",
            unit: "percentage",
            aggregation: "avg",
            domain: "standard",
            owner: "Green-Software-Foundation",
            scope: "@grnsft",
            repo: "https://github.com/Green-Software-Foundation/if/blob/main/src/config/params.ts",
        },
        {
            id: 25,
            name: "resources-reserved",
            description: "resources reserved for an application",
            unit: "count",
            aggregation: "none",
            domain: "standard",
            owner: "Green-Software-Foundation",
            scope: "@grnsft",
            repo: "https://github.com/Green-Software-Foundation/if/blob/main/src/config/params.ts",
        },
        {
            id: 26,
            name: "cpu/thermal-design-power",
            description: "thermal design power for a processor",
            unit: "kwh",
            aggregation: "avg",
            domain: "standard",
            owner: "Green-Software-Foundation",
            scope: "@grnsft",
            repo: "https://github.com/Green-Software-Foundation/if/blob/main/src/config/params.ts",
        },
        {
            id: 27,
            name: "device/emissions-embodied",
            description: "total embodied emissions of some component",
            unit: "gCO2e",
            aggregation: "sum",
            domain: "standard",
            owner: "Green-Software-Foundation",
            scope: "@grnsft",
            repo: "https://github.com/Green-Software-Foundation/if/blob/main/src/config/params.ts",
        },
        {
            id: 28,
            name: "timestamp",
            description: "refers to the time of occurrence of the input",
            unit: "RFC3339",
            aggregation: "none",
            domain: "standard",
            owner: "Green-Software-Foundation",
            scope: "@grnsft",
            repo: "https://github.com/Green-Software-Foundation/if/blob/main/src/config/params.ts",
        },
        {
            id: 29,
            name: "time-reserved",
            description: "time reserved for a component",
            unit: "seconds",
            aggregation: "avg",
            domain: "standard",
            owner: "Green-Software-Foundation",
            scope: "@grnsft",
            repo: "https://github.com/Green-Software-Foundation/if/blob/main/src/config/params.ts",
        },
        {
            id: 30,
            name: "resources-total",
            description: "total resources available",
            unit: "count",
            aggregation: "none",
            domain: "standard",
            owner: "Green-Software-Foundation",
            scope: "@grnsft",
            repo: "https://github.com/Green-Software-Foundation/if/blob/main/src/config/params.ts",
        },
        {
            id: 31,
            name: "vcpus-allocated",
            description: "number of vcpus allocated to particular resource",
            unit: "count",
            aggregation: "none",
            domain: "standard",
            owner: "Green-Software-Foundation",
            scope: "@grnsft",
            repo: "https://github.com/Green-Software-Foundation/if/blob/main/src/config/params.ts",
        },
        {
            id: 32,
            name: "vcpus-total",
            description:
                "total number of vcpus available on a particular resource",
            unit: "count",
            aggregation: "none",
            domain: "standard",
            owner: "Green-Software-Foundation",
            scope: "@grnsft",
            repo: "https://github.com/Green-Software-Foundation/if/blob/main/src/config/params.ts",
        },
        {
            id: 33,
            name: "memory-available",
            description:
                "total amount of memory available on a particular resource",
            unit: "GB",
            aggregation: "none",
            domain: "standard",
            owner: "Green-Software-Foundation",
            scope: "@grnsft",
            repo: "https://github.com/Green-Software-Foundation/if/blob/main/src/config/params.ts",
        },
        {
            id: 34,
            name: "physical-processor",
            description:
                "name of the physical processor being used in a specific instance type",
            unit: "None",
            aggregation: "none",
            domain: "standard",
            owner: "Green-Software-Foundation",
            scope: "@grnsft",
            repo: "https://github.com/Green-Software-Foundation/if/blob/main/src/config/params.ts",
        },
        {
            id: 35,
            name: "cloud/region-cfe",
            description: "cloud region name in cfe format",
            unit: "None",
            aggregation: "none",
            domain: "standard",
            owner: "Green-Software-Foundation",
            scope: "@grnsft",
            repo: "https://github.com/Green-Software-Foundation/if/blob/main/src/config/params.ts",
        },
        {
            id: 36,
            name: "cloud/region-em-zone-id",
            description: "cloud region name in electricity maps format",
            unit: "None",
            aggregation: "none",
            domain: "standard",
            owner: "Green-Software-Foundation",
            scope: "@grnsft",
            repo: "https://github.com/Green-Software-Foundation/if/blob/main/src/config/params.ts",
        },
        {
            id: 37,
            name: "cloud/region-wt-id",
            description: "cloud region name in watt-time format",
            unit: "None",
            aggregation: "none",
            domain: "standard",
            owner: "Green-Software-Foundation",
            scope: "@grnsft",
            repo: "https://github.com/Green-Software-Foundation/if/blob/main/src/config/params.ts",
        },
        {
            id: 38,
            name: "cloud/region-location",
            description: "cloud region name in our IF format",
            unit: "None",
            aggregation: "none",
            domain: "standard",
            owner: "Green-Software-Foundation",
            scope: "@grnsft",
            repo: "https://github.com/Green-Software-Foundation/if/blob/main/src/config/params.ts",
        },
        {
            id: 39,
            name: "cloud/region-geolocation",
            description: "location expressed as decimal coordinates (lat/lon)",
            unit: "decimal degrees",
            aggregation: "none",
            domain: "standard",
            owner: "Green-Software-Foundation",
            scope: "@grnsft",
            repo: "https://github.com/Green-Software-Foundation/if/blob/main/src/config/params.ts",
        },
        {
            id: 40,
            name: "memory/utilization",
            description:
                "percentage of the total available memory being used in the input period",
            unit: "percentage",
            domain: "unofficial",
            owner: "Green-Software-Foundation",
            scope: "@grnsft",
            repo: "https://github.com/Green-Software-Foundation/if/blob/main/src/config/params.ts",
        },
        {
            id: 41,
            name: "memory/capacity",
            description: "the total amount of memory available, in GB",
            unit: "GB",
            domain: "unofficial",
            owner: "Green-Software-Foundation",
            scope: "@grnsft",
            repo: "https://github.com/Green-Software-Foundation/if/blob/main/src/config/params.ts",
        },
        {
            id: 42,
            name: "network/data-in",
            description: "inbound data in GB",
            unit: "GB",
            domain: "unofficial",
            owner: "Green-Software-Foundation",
            scope: "@grnsft",
            repo: "https://github.com/Green-Software-Foundation/if/blob/main/src/config/params.ts",
        },
        {
            id: 43,
            name: "network/data-out",
            description: "outbound data in GB",
            unit: "GB",
            domain: "unofficial",
            owner: "Green-Software-Foundation",
            scope: "@grnsft",
            repo: "https://github.com/Green-Software-Foundation/if/blob/main/src/config/params.ts",
        },
        {
            id: 44,
            name: "sci",
            description:
                "carbon expressed in terms of the given functional unit",
            unit: "none",
            domain: "unofficial",
            owner: "Green-Software-Foundation",
            scope: "@grnsft",
            repo: "https://github.com/Green-Software-Foundation/if/blob/main/src/config/params.ts",
        },
        {
            id: 45,
            name: "memory/used",
            description:
                "Amount of memory being used by your application, in GB. Calculated as the difference between memory/capacity/GB and memory/available/GB",
            unit: "GB",
            domain: "unofficial",
            owner: "Green-Software-Foundation",
            scope: "@azure",
            repo: "https://github.com/Green-Software-Foundation/if/blob/main/src/config/params.ts",
        },
        {
            id: 46,
            name: "cpu/expected-lifespan",
            description: "the lifespan of the component, in seconds",
            unit: "seconds",
            domain: "unofficial",
            owner: "Boavizta",
            scope: "@boavizta",
            repo: "https://github.com/Green-Software-Foundation/if/blob/main/src/config/params.ts",
        },
        {
            id: 47,
            name: "instance-type",
            description:
                "the name of the specific instance, required for BoaviztaCloudOutput",
            unit: "None",
            aggregation: "none",
            domain: "unofficial",
            owner: "Boavizta",
            scope: "@boavizta",
            repo: "https://github.com/Green-Software-Foundation/if/blob/main/src/config/params.ts",
        },
        {
            id: 48,
            name: "provider",
            description:
                "the name of cloud provider (required for BoaviztaCloudOutput)",
            unit: "None",
            aggregation: "none",
            domain: "unofficial",
            owner: "Boavizta",
            scope: "@boavizta",
            repo: "https://github.com/Green-Software-Foundation/if/blob/main/src/config/params.ts",
        },
        {
            id: 49,
            name: "network/data",
            description:
                "the number of bytes transferred or network/data if the number is in GB",
            unit: "bytes",
            domain: "unofficial",
            owner: "thegreenwebfoundation",
            scope: "@thegreenwebfoundation",
            repo: "https://github.com/Green-Software-Foundation/if/blob/main/src/config/params.ts",
        },
    ];
};
