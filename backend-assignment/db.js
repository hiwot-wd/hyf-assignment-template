/** @format */

import knex from "knex";
import path from "path";
const db = knex({
  client: "sqlite3",
  connection: {
    filename: path.resolve(
      "C:HYF2hyf-assignment-template\backend-assignment\tasks.sqlite3"
    ),
  },
  useNullAsDefault: true,
});
export default db;
