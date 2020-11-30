import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createEmployee } from "actions/employeeActions";

// Material
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

const CreateEmployee: React.FC = () => {
  const [createOpen, setCreateOpen] = useState(false);
  const [formInfo, setFormInfo] = useState({
    name: "",
    branch: "",
    city: "",
    color: "",
    profession: "",
    assigned: false,
  });

  const dispatch = useDispatch();

  const openCreate = (): void => {
    setCreateOpen(true);
  };

  const closeCreate = (): void => {
    setCreateOpen(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFormInfo({ ...formInfo, [e.target.name]: e.target.value });
  };

  const handleCheckBoxChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setFormInfo({ ...formInfo, [e.target.name]: e.target.checked });
  };

  const resetForm = (): void => {
    setFormInfo({
      name: "",
      branch: "",
      city: "",
      color: "",
      profession: "",
      assigned: false,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(createEmployee(formInfo));
    resetForm();
    setCreateOpen(false);
  };

  return (
    <>
      <Button
        onClick={openCreate}
        color="primary"
        variant="contained"
        startIcon={<AddIcon />}
      >
        Create Employee
      </Button>
      <Dialog
        open={createOpen}
        onClose={closeCreate}
        aria-labelledby="form-dialog-title"
        className="create-form"
      >
        <DialogTitle id="form-dialog-title">Create Employee</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Fill out the following form to create a new employee!
          </DialogContentText>
          <form onSubmit={handleSubmit}>
            <TextField
              onChange={handleChange}
              value={formInfo.name}
              autoFocus
              margin="dense"
              label="Name"
              name="name"
              required={true}
              fullWidth
            />
            <TextField
              onChange={handleChange}
              value={formInfo.branch}
              margin="dense"
              label="Branch"
              name="branch"
              required={true}
              fullWidth
            />
            <TextField
              onChange={handleChange}
              value={formInfo.city}
              margin="dense"
              label="City"
              name="city"
              required={true}
              fullWidth
            />
            <TextField
              onChange={handleChange}
              value={formInfo.color}
              margin="dense"
              label="Color"
              name="color"
              required={true}
              fullWidth
            />
            <TextField
              onChange={handleChange}
              value={formInfo.profession}
              margin="dense"
              label="Profession"
              name="profession"
              required={true}
              fullWidth
            />
            <FormControlLabel
              control={
                <Switch
                  checked={formInfo.assigned}
                  onChange={handleCheckBoxChange}
                  name="assigned"
                  color="primary"
                />
              }
              label="Primary"
            />
            <div
              className="actions"
              style={{ textAlign: "right", paddingTop: "25px" }}
            >
              <Button onClick={closeCreate} color="primary">
                Cancel
              </Button>
              <Button type="submit" color="primary">
                Confirm
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CreateEmployee;
