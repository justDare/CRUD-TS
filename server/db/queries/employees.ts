const Knex = require("../index");
import employeeI from "db/interfaces/Employee";

interface employee {
  id: number;
  name: string;
  code: string;
  profession: string;
  color: string;
  city: string;
  branch: string;
  assigned: boolean;
}

export function getAll() {
  return Knex("employee");
}

export function create(employee: employeeI) {
  return Knex("employee")
    .insert(employee)
    .returning("*")
    .then((employees: Array<employeeI>) => {
      const toUpdate = employees[0];
      return Knex("employee")
        .where("id", toUpdate.id)
        .update({ code: `F${100 + toUpdate.id}` })
        .returning("*");
    });
}

export function deleteOne(id: string) {
  return Knex("employee").where("id", id).del();
}

export function update(id: string, employee: employeeI) {
  return Knex("employee")
    .where("id", id)
    .first()
    .then((found: employeeI) => {
      employee.code = found.code;
      return Knex("employee").where("id", found.id).update(employee, "*");
    });
}
