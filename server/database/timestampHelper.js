exports.timestamps = (knex, table) => {
    table
        .timestamp("created_at")
        .notNullable()
        .defaultTo(knex.raw("CURRENT_TIMESTAMP"));

    table
        .timestamp("updated_at")
        .notNullable()
        .defaultTo(knex.raw("CURRENT_TIMESTAMP"));
};
exports.onUpdateTrigger = (table) => `
    CREATE TRIGGER ${table}_updated_at
    BEFORE UPDATE ON ${table}
    FOR EACH ROW
    SET NEW.updated_at = now();
`;
