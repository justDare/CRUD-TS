import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "reducers";
import { useHistory } from "react-router-dom";
import { deleteEmployee } from "actions/employeeActions";
import EditEmployee from "./editEmployee";

// Material
import Button from "@material-ui/core/Button";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import DeleteIcon from "@material-ui/icons/Delete";

interface ParamTypes {
  id: string;
}

function EmployeePage() {
  const { id } = useParams<ParamTypes>();
  const employee: EmployeeI | undefined = useSelector((state: RootState) =>
    state.employees.employees.find((x) => x.id === parseInt(id))
  );

  const history = useHistory();
  const dispatch = useDispatch();

  const handleBackClick = (): void => {
    history.push("/");
  };

  const handleDelete = (): void => {
    dispatch(deleteEmployee(id));
    history.push("/");
  };

  return (
    <>
      <div style={{ marginBottom: "50px" }}>
        <Button
          variant="contained"
          color="primary"
          startIcon={<KeyboardBackspaceIcon />}
          onClick={handleBackClick}
          style={{ marginRight: "25px" }}
        >
          Back
        </Button>
        <Button
          variant="contained"
          color="secondary"
          startIcon={<DeleteIcon />}
          onClick={handleDelete}
        >
          Delete Employee
        </Button>
      </div>

      {employee ? <EditEmployee employee={employee} /> : null}
    </>
  );
}

export default EmployeePage;
