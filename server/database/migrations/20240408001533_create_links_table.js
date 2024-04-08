const { timestamps, onUpdateTrigger } = require("./../timestampHelper");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
    const migration = await knex.schema.createTable("links", function (table) {
        table.bigIncrements("id").primary();
        table
            .foreign("pluginId")
            .references("id")
            .inTable("plugins")
            .onDelete("CASCADE");
        table
            .foreign("paramId")
            .references("id")
            .inTable("params")
            .onDelete("CASCADE");
        table.enum("type", ["input", "output"]).defaultTo("input").index();
        timestamps(knex, table);
    });
    await knex.raw(onUpdateTrigger("links"));
    return migration;
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
    await knex.schema.dropTable("links");
};
