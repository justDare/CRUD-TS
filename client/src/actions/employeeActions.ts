import axios from "axios";
import * as actionTypes from "./actionTypes";

export const getEmployees = (): any => (dispatch: Function) => {
  axios
    .get("/api/employees", headerConfig())
    .then((res) =>
      dispatch({
        type: actionTypes.GET_EMPLOYEES,
        payload: res.data,
      })
    )
    .catch((err) => {
      console.log(err);
    });
};

export const createEmployee = (info: {
  name: string;
  branch: string;
  city: string;
  color: string;
  profession: string;
  assigned: boolean;
}): any => (dispatch: Function) => {
  const body = JSON.stringify(info);

  axios
    .post("/api/employees", body, headerConfig())
    .then((res) => {
      dispatch({
        type: actionTypes.CREATE_EMPLOYEE_SUCCESS,
        payload: res.data,
      });
      dispatch({
        type: actionTypes.UPDATE_MESSAGE,
        message: "Employee added!",
        status: "success",
      });
    })
    .catch((err) => {
      dispatch({
        type: actionTypes.UPDATE_MESSAGE,
        message: "Failed to add employee",
        status: "error",
      });
    });
};

export const updateEmployee = (info: {
  name: string;
  branch: string;
  city: string;
  color: string;
  profession: string;
  assigned: boolean;
  id: number;
}): any => (dispatch: Function) => {
  const body = JSON.stringify(info);

  axios
    .put(`/api/employees/${info.id}`, body, headerConfig())
    .then((res) => {
      dispatch({
        type: actionTypes.UPDATE_EMPLOYEE_SUCCESS,
        payload: res.data,
      });
      dispatch({
        type: actionTypes.UPDATE_MESSAGE,
        message: "Employee updated!",
        status: "success",
      });
    })
    .catch((err) => {
      dispatch({
        type: actionTypes.UPDATE_MESSAGE,
        message: "Failed to update employee",
        status: "error",
      });
    });
};

export const deleteEmployee = (id: string): any => (dispatch: Function) => {
  axios
    .delete(`/api/employees/${id}`, headerConfig())
    .then((res) => {
      dispatch({
        type: actionTypes.DELETE_EMPLOYEE,
        payload: res.data,
      });
      dispatch({
        type: actionTypes.UPDATE_MESSAGE,
        message: "Employee deleted!",
        status: "success",
      });
    })
    .catch((err) => {
      dispatch({
        type: actionTypes.UPDATE_MESSAGE,
        message: "Failed to delete employee",
        status: "error",
      });
    });
};

// Setup config/headers
export const headerConfig = () => {
  // Headers
  const config: config = {
    headers: {
      "Content-type": "application/json",
    },
  };

  return config;
};
