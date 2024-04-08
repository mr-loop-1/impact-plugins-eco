/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
    await knex("params").del();
    await knex("params").insert([
        {
            name: "carbon",
            description: "an amount of carbon emitted into the atmosphere",
            unit: "gCO2e",
            aggregation: "sum",
        },
        {
            name: "cpu/number-cores",
            description: "number of cores available",
            unit: "cores",
            aggregation: "none",
        },
        {
            name: "cpu/utilization",
            description: "refers to CPU utilization.",
            unit: "percentage",
            aggregation: "avg",
        },
        {
            name: "disk-io",
            description: "refers to GB of data written/read from disk",
            unit: "GB",
            aggregation: "sum",
        },
        {
            name: "duration",
            description: "refers to the duration of the input",
            unit: "seconds",
            aggregation: "sum",
        },
        {
            name: "energy",
            description: "amount of energy utilised by the component",
            unit: "kWh",
            aggregation: "sum",
        },
    ]);
};
