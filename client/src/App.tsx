import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Appbar from "components/appbar";
import EmployeeList from "views/employeeList";
import EmployeePage from "views/employePage";
import { getEmployees } from "actions/employeeActions";
import { RootState } from "reducers";
import * as actionTypes from "actions/actionTypes";
import "./App.css";

// Material
import Container from "@material-ui/core/Container";
import Snackbar from "@material-ui/core/Snackbar";
import { Alert } from "@material-ui/lab";

const App = () => {
  const [snack, setSnack] = useState({
    message: "",
    open: false,
    status: "success",
  });

  const message = useSelector((state: RootState) => state.message);

  const dispatch = useDispatch();

  // Get employees on mount
  useEffect(() => {
    dispatch(getEmployees());
  }, [dispatch]);

  // On message update
  useEffect(() => {
    if (message.message !== "") {
      setSnack({
        message: message.message,
        status: message.status,
        open: true,
      });
      dispatch({
        type: actionTypes.CLEAR_MESSAGE,
      });
    }
  }, [message, dispatch]);

  const toggleSnack = () => {
    setSnack({
      ...snack,
      open: !snack.open,
    });
  };

  return (
    <>
      <Appbar />
      <Container style={{ marginTop: "100px" }}>
        <Router>
          <Switch>
            <Route exact path="/employee/:id" component={EmployeePage} />
            <Route component={EmployeeList} />
          </Switch>
        </Router>
      </Container>
      <Snackbar open={snack.open} onClose={toggleSnack} autoHideDuration={6000}>
        <Alert
          severity={
            snack.status === "success" || snack.status === "error"
              ? snack.status
              : undefined
          }
          variant="filled"
          onClose={toggleSnack}
        >
          {snack.message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default App;
