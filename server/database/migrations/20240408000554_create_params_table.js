const { timestamps, onUpdateTrigger } = require("./../timestampHelper");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
    const migration = await knex.schema.createTable("params", function (table) {
        table.bigIncrements("id").primary();
        table.string("name");
        table.string("description").nullable();
        table.string("unit").nullable();
        table.string("aggregation").nullable();
        timestamps(knex, table);
    });
    await knex.raw(onUpdateTrigger("params"));
    return migration;
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
    await knex.schema.dropTable("params");
};
