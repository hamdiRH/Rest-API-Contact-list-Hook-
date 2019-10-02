import { GET_CONTACT, LOADING_CONTACT } from "../Actions/actionsTypes";
const initialState = {
  isloading: false,
  contacts: []
};
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CONTACT:
      return { isloading: false, contacts: action.payload };
    case LOADING_CONTACT:
      return { ...state, isloading: true };
    default:
      return state;
  }
};
