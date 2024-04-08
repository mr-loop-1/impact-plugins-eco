const { timestamps, onUpdateTrigger } = require("./../timestampHelper");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
    const migration = await knex.schema.createTable(
        "plugins",
        function (table) {
            table.bigIncrements("id").primary();
            table.string("name");
            table.string("description").nullable();
            table
                .enum("domain", ["standard", "unofficial", "universe"])
                .defaultTo("universe")
                .index();
            timestamps(knex, table);
        }
    );
    await knex.raw(onUpdateTrigger("plugins"));
    return migration;
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
    await knex.schema.dropTable("plugins");
};
