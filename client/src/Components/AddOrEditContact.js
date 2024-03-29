import React, { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { updateContact, addContact } from "../Actions";

const AddOrEditContact = ({ match}) => {
  const contacts = useSelector(state => state.contacts)
  const dispatch = useDispatch()


  const { id } = match.params;
  const mycontact = contacts.find(el => el._id === id);
  const [contact, setContact] = useState({ ...mycontact });
  const handleChange = e =>
    setContact({ ...contact, [e.target.name]: e.target.value });
  return (
    <div className="text-center mt-5 text-secondary">
      <h1>{id ? "Edit Contact" : "Add Contact"}</h1>
      <input
        type="text"
        name="name"
        placeholder="name"
        value={contact.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="email"
        value={contact.email}
        placeholder="email"
        onChange={handleChange}
      />
      <input
        type="text"
        name="tel"
        placeholder="tel"
        onChange={handleChange}
        value={contact.tel}
      />
      <button
        onClick={() => {
          id ? dispatch(updateContact(id, contact)) : dispatch(addContact(contact));
        }}
      >
        {id ? "Edit Contact" : "Add Contact"}
      </button>
    </div>
  );
};

export default (AddOrEditContact)
