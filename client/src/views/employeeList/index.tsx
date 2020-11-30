import React from "react";
import Table from "components/table";
import { useSelector } from "react-redux";
import { RootState } from "reducers";
import CreateEmployee from "./createEmployee";

// Material
import Typography from "@material-ui/core/Typography";

function EmployeeList() {
  const employees = useSelector(
    (state: RootState) => state.employees.employees
  );

  return (
    <div>
      <Typography variant="h4" className="user" gutterBottom={true}>
        Employees
      </Typography>
      <CreateEmployee />
      <Table
        columns={[
          {
            Header: "ID",
            accessor: "id",
          },
          {
            Header: "Name",
            accessor: "name",
          },
          {
            Header: "Branch",
            accessor: "branch",
          },
          {
            Header: "City",
            accessor: "city",
          },
          {
            Header: "Code",
            accessor: "code",
          },
          {
            Header: "Color",
            accessor: "color",
          },
          {
            Header: "Profession",
            accessor: "profession",
          },
          {
            Header: "Assigned",
            accessor: "assigned",
          },
        ]}
        data={employees}
      />
    </div>
  );
}

export default EmployeeList;
