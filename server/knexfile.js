const path = require("path");
const { knexSnakeCaseMappers } = require("objection");

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
    development: {
        client: "mysql2",
        connection: {
            host: process.env.DB_HOST,
            port: Number(process.env.DB_PORT),
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
        },
        migrations: {
            directory: path.join(__dirname, "database/migrations"),
            tableName: "knex_migrations",
        },
        ...knexSnakeCaseMappers(),
    },
    production: {
        client: "mysql2",
        connection: {
            host: process.env.DB_HOST,
            port: Number(process.env.DB_PORT),
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
        },
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            directory: path.join(__dirname, "database/migrations"),
            tableName: "knex_migrations",
        },
        ...knexSnakeCaseMappers(),
    },
};
