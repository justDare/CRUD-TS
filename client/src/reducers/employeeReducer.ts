import * as actionTypes from "actions/actionTypes";

const initialState: EmployeeState = {
  employees: [],
};

const reducer = (
  state: EmployeeState = initialState,
  action: EmployeeAction
): EmployeeState => {
  switch (action.type) {
    case actionTypes.GET_EMPLOYEES:
      return {
        ...state,
        employees: action.payload,
      };
    case actionTypes.CREATE_EMPLOYEE_SUCCESS:
      return {
        ...state,
        employees: [...state.employees, action.payload],
      };
    case actionTypes.UPDATE_EMPLOYEE_SUCCESS:
      return {
        ...state,
        employees: state.employees.map((employee) => {
          if (employee.id === action.payload.id) return action.payload;
          else return employee;
        }),
      };
    case actionTypes.DELETE_EMPLOYEE:
      return {
        ...state,
        employees: state.employees.filter(
          (x) => x.id !== parseInt(action.payload.id)
        ),
      };
  }
  return state;
};

export default reducer;
