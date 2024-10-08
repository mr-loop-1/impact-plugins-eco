import { getParams } from "./params";
import { getPluginsTrimmed } from "./pluginsTrim";
import { replaceIdsWithObjects } from "./populatePlugin";

export const getPlugins = () => {
    return replaceIdsWithObjects(getPluginsTrimmed(), getParams());
    // return [
    //     {
    //         id: 1,
    //         name: "cloud-metadata",
    //         domain: "standard",
    //         owner: "Green-Software-Foundation",
    //         scope: "@grnsft",
    //         repo: "https://github.com/Green-Software-Foundation/if-plugins",
    //         description:
    //             "This plugin allows you to determine an instance's physical processor and thermal design power based on its instance name.",
    //         inputParams: [
    //             {
    //                 id: 21,
    //                 name: "cloud/vendor",
    //                 description:
    //                     "Name of the cloud service provider in the ccf model. Can be aws, gcp or azure",
    //                 unit: "None",
    //                 aggregation: "none",
    //             },
    //             {
    //                 id: 16,
    //                 name: "cloud/instance-type",
    //                 description:
    //                     "Type of Cloud Instance name used in the cloud provider APIs",
    //                 unit: "None",
    //                 aggregation: "none",
    //             },
    //         ],
    //         outputParams: [
    //             {
    //                 id: 31,
    //                 name: "vcpus-allocated",
    //                 description:
    //                     "number of vcpus allocated to particular resource",
    //                 unit: "count",
    //                 aggregation: "none",
    //             },
    //             {
    //                 id: 32,
    //                 name: "vcpus-total",
    //                 description:
    //                     "total number of vcpus available on a particular resource",
    //                 unit: "count",
    //                 aggregation: "none",
    //             },
    //             {
    //                 id: 33,
    //                 name: "memory-available",
    //                 description:
    //                     "total amount of memory available on a particular resource",
    //                 unit: "GB",
    //                 aggregation: "none",
    //             },
    //             {
    //                 id: 34,
    //                 name: "physical-processor",
    //                 description:
    //                     "name of the physical processor being used in a specific instance type",
    //                 unit: "None",
    //                 aggregation: "none",
    //             },
    //             {
    //                 id: 26,
    //                 name: "cpu/thermal-design-power",
    //                 description: "thermal design power for a processor",
    //                 unit: "kwh",
    //                 aggregation: "avg",
    //             },
    //         ],
    //     },
    //     {
    //         id: 2,
    //         name: "sci-m",
    //         owner: "Green-Software-Foundation",
    //         scope: "@grnsft",
    //         repo: "https://github.com/Green-Software-Foundation/if-plugins",
    //         description:
    //             "Software systems cause emissions through the hardware that they operate on, both through the energy that the physical hardware consumes and the emissions associated with manufacturing the hardware. Embodied carbon refers to the carbon emitted during the manufacture and eventual disposal of a component. It is added to the operational carbon (carbon emitted when a component is used) to give an overall SCI score.",
    //         domain: "standard",
    //         inputParams: [
    //             {
    //                 id: 27,
    //                 name: "device/emissions-embodied",
    //                 description: "total embodied emissions of some component",
    //                 unit: "gCO2e",
    //                 aggregation: "sum",
    //             },
    //             {
    //                 id: 8,
    //                 name: "device/expected-lifespan",
    //                 description:
    //                     "Total Expected Lifespan of the Component in Seconds",
    //                 unit: "seconds",
    //                 aggregation: "sum",
    //             },
    //             {
    //                 id: 25,
    //                 name: "resources-reserved",
    //                 description: "resources reserved for an application",
    //                 unit: "count",
    //                 aggregation: "none",
    //             },
    //             {
    //                 id: 20,
    //                 name: "resources-total",
    //                 description: "total resources available",
    //                 unit: "count",
    //                 aggregation: "none",
    //             },
    //         ],
    //         outputParams: [
    //             {
    //                 id: 10,
    //                 name: "carbon-embodied",
    //                 description: "Embodied Emissions of the component",
    //                 unit: "gCO2e",
    //                 aggregation: "sum",
    //             },
    //         ],
    //     },
    //     {
    //         id: 3,
    //         name: "sci-o",
    //         description:
    //             "Operational emissions refer to the carbon generated by a component while it is in use. It is the product of the energy used by the component in kWh and the grid intensity in gCO2e/kWh. The operational emissions are added to the embodied emissions (calculated using sci-m) to provide an overall SCI score for the component.",
    //         owner: "Green-Software-Foundation",
    //         scope: "@grnsft",
    //         repo: "https://github.com/Green-Software-Foundation/if-plugins",
    //         domain: "standard",
    //         inputParams: [
    //             {
    //                 id: 6,
    //                 name: "energy",
    //                 description: "amount of energy utilised by the component",
    //                 unit: "kWh",
    //                 aggregation: "sum",
    //             },
    //             {
    //                 id: 15,
    //                 name: "grid/carbon-intensity",
    //                 description: "Carbon intensity for the grid",
    //                 unit: "gCO2eq/kWh",
    //                 aggregation: "avg",
    //             },
    //         ],
    //         outputParams: [
    //             {
    //                 id: 18,
    //                 name: "carbon-operational",
    //                 description: "Operational Emissions of the component",
    //                 unit: "gCO2e",
    //                 aggregation: "sum",
    //             },
    //         ],
    //     },
    //     {
    //         id: 4,
    //         name: "tdx-finder",
    //         description:
    //             "The TDP Finder model finds the thermal design power (TDP) of a given processor by looking it up in the model datasets. There are scenarios where the lookup can return multiple possible TDP values. In these cases, we return the maximum of the possible values. There are also cases where no TDP can be found for a specific processor. In these cases, we throw an error. The TDP is then used by other plugins to calculate the cpu/energy value.",
    //         owner: "Green-Software-Foundation",
    //         scope: "@grnsft",
    //         repo: "https://github.com/Green-Software-Foundation/if-plugins",
    //         domain: "standard",
    //         inputParams: [
    //             {
    //                 id: 34,
    //                 name: "physical-processor",
    //                 description:
    //                     "name of the physical processor being used in a specific instance type",
    //                 unit: "None",
    //                 aggregation: "none",
    //             },
    //         ],
    //         outputParams: [
    //             {
    //                 id: 26,
    //                 name: "cpu/thermal-design-power",
    //                 description: "thermal design power for a processor",
    //                 unit: "kwh",
    //                 aggregation: "avg",
    //             },
    //         ],
    //     },
    //     {
    //         id: 5,
    //         name: "tdp-finder",
    //         description:
    //             "The TDP Finder model finds the thermal design power (TDP) of a given processor by looking it up in the model datasets. There are scenarios where the lookup can return multiple possible TDP values. In these cases, we return the maximum of the possible values. There are also cases where no TDP can be found for a specific processor. In these cases, we throw an error. The TDP is then used by other plugins to calculate the cpu/energy value.",
    //         owner: "Green-Software-Foundation",
    //         scope: "@grnsft",
    //         repo: "https://github.com/Green-Software-Foundation/if-plugins",
    //         domain: "standard",
    //         inputParams: [
    //             {
    //                 id: 34,
    //                 name: "physical-processor",
    //                 description:
    //                     "name of the physical processor being used in a specific instance type",
    //                 unit: "None",
    //                 aggregation: "none",
    //             },
    //         ],
    //         outputParams: [
    //             {
    //                 id: 26,
    //                 name: "cpu/thermal-design-power",
    //                 description: "thermal design power for a processor",
    //                 unit: "kwh",
    //                 aggregation: "avg",
    //             },
    //         ],
    //     },
    //     {
    //         id: 6,
    //         name: "azure-importer",
    //         description:
    //             "The Azure importer plugin allows you to provide some basic details about an Azure virtual machine and automatically populate your manifest with usage metrics that can then be passed along a plugin pipeline to calculate energy and carbon impacts.",
    //         owner: "Green-Software-Foundation",
    //         scope: "@grnsft",
    //         repo: "https://github.com/Green-Software-Foundation/if-unofficial-plugins",
    //         domain: "unofficial",
    //         inputParams: [],
    //         outputParams: [
    //             {
    //                 id: 3,
    //                 name: "cpu/utilization",
    //                 description: "refers to CPU utilization.",
    //                 unit: "percentage",
    //                 aggregation: "avg",
    //             },
    //             {
    //                 id: 16,
    //                 name: "cloud/instance-type",
    //                 description:
    //                     "Type of Cloud Instance name used in the cloud provider APIs",
    //                 unit: "None",
    //                 aggregation: "none",
    //             },
    //             {
    //                 id: 33,
    //                 name: "memory-available",
    //                 description:
    //                     "total amount of memory available on a particular resource",
    //                 unit: "GB",
    //                 aggregation: "none",
    //             },
    //         ],
    //     },
    //     {
    //         id: 7,
    //         name: "tda-finder",
    //         description:
    //             "The TDP Finder model finds the thermal design power (TDP) of a given processor by looking it up in the model datasets. There are scenarios where the lookup can return multiple possible TDP values. In these cases, we return the maximum of the possible values. There are also cases where no TDP can be found for a specific processor. In these cases, we throw an error. The TDP is then used by other plugins to calculate the cpu/energy value.",
    //         owner: "Green-Software-Foundation",
    //         scope: "@grnsft",
    //         repo: "https://github.com/Green-Software-Foundation/if-plugins",
    //         domain: "standard",
    //         inputParams: [
    //             {
    //                 id: 19,
    //                 name: "cpu/name",
    //                 description: "Name of the physical processor",
    //                 unit: "None",
    //                 aggregation: "none",
    //             },
    //             {
    //                 id: 2,
    //                 name: "cpu/number-cores",
    //                 description: "number of cores available",
    //                 unit: "cores",
    //                 aggregation: "none",
    //             },
    //             {
    //                 id: 8,
    //                 name: "device/expected-lifespan",
    //                 description:
    //                     "Total Expected Lifespan of the Component in Seconds",
    //                 unit: "seconds",
    //                 aggregation: "sum",
    //             },
    //         ],
    //         outputParams: [
    //             {
    //                 id: 26,
    //                 name: "cpu/thermal-design-power",
    //                 description: "thermal design power for a processor",
    //                 unit: "kwh",
    //                 aggregation: "avg",
    //             },
    //         ],
    //     },
    //     {
    //         id: 8,
    //         name: "asdewq-findeaaaaaaaaaaaaaaaaaaaaaaaaar",
    //         description:
    //             "The TDP Finder model finds the thermal design power (TDP) of a given processor by looking it up in the model datasets. There are scenarios where the lookup can return multiple possible TDP values. In these cases, we return the maximum of the possible values. There are also cases where no TDP can be found for a specific processor. In these cases, we throw an error. The TDP is then used by other plugins to calculate the cpu/energy value.",
    //         owner: "Green-Software-Foundation",
    //         scope: "@grnsft",
    //         repo: "https://github.com/Green-Software-Foundation/if-plugins",
    //         domain: "standard",
    //         inputParams: [
    //             {
    //                 id: 26,
    //                 name: "cpu/thermal-design-power",
    //                 description: "thermal design power for a processor",
    //                 unit: "kwh",
    //                 aggregation: "avg",
    //             },
    //         ],
    //         outputParams: [
    //             {
    //                 id: 26,
    //                 name: "cpu/thermal-design-power",
    //                 description: "thermal design power for a processor",
    //                 unit: "kwh",
    //                 aggregation: "avg",
    //             },
    //             {
    //                 id: 33,
    //                 name: "memory-available",
    //                 description:
    //                     "total amount of memory available on a particular resource",
    //                 unit: "GB",
    //                 aggregation: "none",
    //             },
    //         ],
    //     },
    // ];
};
