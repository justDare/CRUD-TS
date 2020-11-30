import * as Knex from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("employee").del();

  // Inserts seed entries
  await knex("employee").insert([
    {
      name: "Kyle Lowry",
      code: "F100",
      profession: "Drywall Installer",
      color: "#FF6600",
      city: "Brampton",
      branch: "Abacus",
      assigned: true,
    },
    {
      name: "DeMar DeRozan",
      code: "F101",
      profession: "Drywall Installer",
      color: "yellow",
      city: "Brampton",
      branch: "Pillsworth",
      assigned: false,
    },
    {
      name: "Fred Van Vleet",
      code: "F102",
      profession: "Drywall Installer",
      color: "green",
      city: "Bolton",
      branch: "Abacus",
      assigned: false,
    },
    {
      name: "Jonas Valanciunas",
      code: "F103",
      profession: "Drywall Installer",
      color: "#333333",
      city: "Bolton",
      branch: "Pillsworth",
      assigned: true,
    },
    {
      name: "Chris Bosh",
      code: "F104",
      profession: "Drywall Installer",
      color: "#FF6600",
      city: "Brampton",
      branch: "Abacus",
      assigned: true,
    },
    {
      name: "Marcus Camby",
      code: "F105",
      profession: "Runner",
      color: "red",
      city: "Brampton",
      branch: "Pillsworth",
      assigned: false,
    },
    {
      name: "Vince Carter",
      code: "F106",
      profession: "Runner",
      color: "red",
      city: "Toronto",
      branch: "Abacus",
      assigned: false,
    },
  ]);
}
