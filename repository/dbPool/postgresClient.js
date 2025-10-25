const _ = require('lodash');
const { Pool } = require('pg');

class PostgresClient {
    constructor(container) {
        this.config = container.resolve('config');
    }

    getConnectionPool() {
        if (!_.isNil(this.pool)) {
            return this.pool;
        }
        this.pool = new Pool({
            // host: this.config.postgres.host,
            // port: this.config.postgres.port,
            // user: this.config.postgres.user,
            // password: this.config.postgres.password,
            // database: this.config.postgres.database
            host: 'dpg-d3okcuqli9vc73c7t2m0-a.oregon-postgres.render.com',
    port: 5432,
    user: 'growable_user',
    password: 'iARz9pp3QwGaTZBZba38bsRufHmQwqN5',
    database: 'growable', // default DB
    ssl: {
      rejectUnauthorized: false, // disables strict SSL certificate validation (useful for self-signed certs)
    },
        });
        return this.pool;
    }

    async executeQuery(query, params) {
        let data = {};
        try {
            data = await this.getConnectionPool().query(query, params);
        } catch (error) {
            return Promise.reject(error);
        }
        return Promise.resolve(data);
    }
}

module.exports = PostgresClient;