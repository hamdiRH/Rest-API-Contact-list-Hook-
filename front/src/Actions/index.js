import axios from "axios";
import { GET_CONTACT, LOADING_CONTACT } from "./actionsTypes";
export const getcontact = () => async dispatch => {
  try {
    dispatch({
      type: LOADING_CONTACT
    });
    const res = await axios.get("/api/contact");
    dispatch({
      type: GET_CONTACT,
      payload: res.data
    });
  } catch (err) {
    console.error(err);
  }
};

export const deleteContact = id => async dispatch => {
  try {
    await axios.delete(`/api/contact/${id}`);
    dispatch(getcontact());
  } catch (err) {
    console.error(err);
  }
};

export const updateContact = (id, payload) => async dispatch => {
  try {
    await axios.put(`/api/contact/${id}`, payload);
    dispatch(getcontact());
  } catch (err) {
    console.error(err);
  }
};

export const addContact = payload => async dispatch => {
  try {
    await axios.post("/api/contact", payload);
    dispatch(getcontact());
  } catch (err) {
    console.error(err);
  }
};
