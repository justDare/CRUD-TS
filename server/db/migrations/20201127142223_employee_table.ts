import { table } from "console";
import * as Knex from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("employee", (table) => {
    table.increments();
    table.text("name");
    table.text("code");
    table.text("profession");
    table.text("color");
    table.text("city");
    table.text("branch");
    table.boolean("assigned");
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("employee");
}
