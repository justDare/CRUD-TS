import React, { useState } from "react";
import { updateEmployee } from "actions/employeeActions";
import { useDispatch } from "react-redux";

// Material
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";

interface Props {
  employee: EmployeeI;
}

const EditEmployee: React.FC<Props> = ({ employee }) => {
  const [formInfo, setFormInfo] = useState(employee);

  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFormInfo({ ...formInfo, [e.target.name]: e.target.value });
  };

  const handleCheckBoxChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setFormInfo({ ...formInfo, [e.target.name]: e.target.checked });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(updateEmployee(formInfo));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <TextField
          onChange={handleChange}
          value={formInfo?.name}
          autoFocus
          margin="dense"
          label="Name"
          name="name"
          required={true}
          fullWidth
        />
        <TextField
          onChange={handleChange}
          value={formInfo?.branch}
          margin="dense"
          label="Branch"
          name="branch"
          required={true}
          fullWidth
        />
        <TextField
          onChange={handleChange}
          value={formInfo?.city}
          margin="dense"
          label="City"
          name="city"
          required={true}
          fullWidth
        />
        <TextField
          onChange={handleChange}
          value={formInfo?.color}
          margin="dense"
          label="Color"
          name="color"
          required={true}
          fullWidth
        />
        <TextField
          onChange={handleChange}
          value={formInfo?.profession}
          margin="dense"
          label="Profession"
          name="profession"
          required={true}
          fullWidth
        />
        <FormControlLabel
          control={
            <Switch
              checked={formInfo?.assigned}
              onChange={handleCheckBoxChange}
              name="assigned"
              color="primary"
            />
          }
          label="Assigned"
        />
        <div
          className="actions"
          style={{ textAlign: "right", paddingTop: "25px" }}
        >
          <Button
            type="submit"
            color="primary"
            size="large"
            variant="contained"
            startIcon={<SaveIcon />}
          >
            Save Changes
          </Button>
        </div>
      </form>
    </>
  );
};

export default EditEmployee;
