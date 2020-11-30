import * as actionTypes from "actions/actionTypes";

const initialState: MessageState = {
  message: "",
  status: "",
};

const reducer = (
  state: MessageState = initialState,
  action: MessageAction
): MessageState => {
  switch (action.type) {
    case actionTypes.UPDATE_MESSAGE:
      return {
        ...state,
        message: action.message,
        status: action.status,
      };
    case actionTypes.CLEAR_MESSAGE:
      return {
        message: "",
        status: "",
      };
  }
  return state;
};

export default reducer;
